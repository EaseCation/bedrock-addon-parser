import * as fs from 'fs-extra';
import * as path from 'path';
import { glob } from 'glob';
import $RefParser from '@apidevtools/json-schema-ref-parser';
import chalk from 'chalk';
import JSON5 from 'json5';

export interface SchemaInfo {
  filePath: string;
  relativePath: string;
  category: 'behavior' | 'resource';
  module: string;
  schema: any;
  dereferencedSchema?: any;
}

export class SchemaLoader {
  private schemaBaseDir: string;

  constructor(schemaBaseDir: string) {
    this.schemaBaseDir = schemaBaseDir;
  }

  /**
   * 加载所有 JSON Schema 文件
   * @param category 'behavior' 或 'resource' 或 undefined（加载全部）
   */
  async loadAllSchemas(category?: 'behavior' | 'resource'): Promise<SchemaInfo[]> {
    const schemas: SchemaInfo[] = [];

    // 确定搜索路径
    const searchPaths: string[] = [];
    if (!category || category === 'behavior') {
      searchPaths.push(path.join(this.schemaBaseDir, 'behavior/**/*.json'));
    }
    if (!category || category === 'resource') {
      searchPaths.push(path.join(this.schemaBaseDir, 'resource/**/*.json'));
    }

    console.log(chalk.blue('📂 正在扫描 Schema 文件...'));

    for (const searchPath of searchPaths) {
      const files = await glob(searchPath, {
        ignore: ['**/node_modules/**'],
        absolute: true
      });

      for (const filePath of files) {
        const schemaInfo = await this.loadSchema(filePath);
        if (schemaInfo) {
          schemas.push(schemaInfo);
        }
      }
    }

    console.log(chalk.green(`✓ 找到 ${schemas.length} 个 Schema 文件`));
    return schemas;
  }

  /**
   * 加载单个 Schema 文件
   */
  private async loadSchema(filePath: string): Promise<SchemaInfo | null> {
    try {
      const relativePath = path.relative(this.schemaBaseDir, filePath);
      const category = relativePath.startsWith('behavior') ? 'behavior' : 'resource';

      // 提取模块名（如 items, blocks, entities）
      const pathParts = relativePath.split(path.sep);
      const module = pathParts[1] || 'unknown';

      // 读取原始 Schema（使用 JSON5 支持注释）
      const content = await fs.readFile(filePath, 'utf-8');
      const schema = JSON5.parse(content);

      // 自动修补循环引用
      const patchedSchema = this.patchCircularSchema(schema, filePath);

      return {
        filePath,
        relativePath,
        category,
        module,
        schema: patchedSchema
      };
    } catch (error) {
      console.warn(chalk.yellow(`⚠ 无法加载 Schema: ${filePath}`), error);
      return null;
    }
  }

  /**
   * 解析 Schema 的 $ref 引用
   */
  async dereferenceSchema(schemaInfo: SchemaInfo): Promise<any> {
    try {
      if (schemaInfo.dereferencedSchema) {
        return schemaInfo.dereferencedSchema;
      }

      // 创建自定义读取器，使用 JSON5 解析所有 JSON 文件，并自动应用 patch
      const customReader = {
        order: 1,
        canRead: /\.json$/i,
        read: async (file: any) => {
          let filePath = typeof file === 'string' ? file : file.url;

          // 处理 URL 编码的路径（如 %20 代表空格）
          if (filePath.includes('%20')) {
            filePath = decodeURIComponent(filePath);
          }

          // 【修复】仅允许读取 source 目录下的文件，避免读取编译产物 (behavior/ 和 resource/ 根目录)
          // 规范化路径以确保比较准确
          const normalizedPath = path.normalize(filePath);
          const normalizedBase = path.normalize(this.schemaBaseDir);

          // 检查文件是否在 schemaBaseDir（source/）下
          if (!normalizedPath.startsWith(normalizedBase)) {
            throw new Error(
              `拒绝读取 source 目录外的文件: ${filePath}\n` +
              `仅允许读取: ${this.schemaBaseDir} 及其子目录\n` +
              `这可能是 $RefParser 错误地解析了编译产物文件 (behavior/*.json 或 resource/*.json)`
            );
          }

          const content = await fs.readFile(filePath, 'utf-8');
          const parsed = JSON5.parse(content);

          // 对所有读取的文件应用 patch（只有 filters.json 会被实际修改）
          return this.patchCircularSchema(parsed, filePath);
        }
      };

      // 使用 bundle() 保持引用结构（支持 URL 解码）
      const result = await $RefParser.bundle(schemaInfo.filePath, {
        resolve: {
          file: customReader,
          http: false
        }
      });

      schemaInfo.dereferencedSchema = result;
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.warn(
        chalk.yellow(`⚠ 无法解析引用: ${schemaInfo.relativePath}`),
        chalk.gray(errorMessage)
      );
      // 返回未解析的 schema，继续处理其他文件
      return schemaInfo.schema;
    }
  }

  /**
   * 自动修补循环引用的 Schema
   * 只修改导致无限递归的关键点，其他部分保持不变
   */
  private patchCircularSchema(schema: any, filePath: string): any {
    // 只处理已知的循环引用文件
    if (!filePath.includes('filters/filters.json')) {
      return schema;
    }

    // 深拷贝避免修改原始对象
    const patched = JSON.parse(JSON.stringify(schema));

    // 修补 groups_spec 的自引用：array.items 从引用自己改为引用 filters_spec
    if (patched.definitions?.groups_spec?.oneOf?.[0]?.items?.$ref === '#/definitions/groups_spec') {
      console.log(chalk.yellow(`🔧 自动修补循环引用: ${path.relative(this.schemaBaseDir, filePath)}`));
      patched.definitions.groups_spec.oneOf[0].items.$ref = '#/definitions/filters_spec';
    }

    return patched;
  }

}
