/**
 * Entity 解析器
 *
 * 负责解析各个版本的 Entity JSON 文件（行为包）
 * 职责：只负责解析和验证，不进行版本升级或标准化转换
 */

import { createLogger } from '../utils/logger';

const logger = createLogger('EntityParser');

/**
 * 解析后的 Entity 数据结构
 */
export interface ParsedEntity {
  /** 原始 JSON 对象 */
  data: any;
  /** format_version */
  version: string;
  /** 源文件路径 */
  filePath: string;
  /** Entity 标识符 */
  identifier: string;
}

export class EntityParser {
  /**
   * 解析 Entity JSON
   *
   * @param json - Entity JSON 字符串
   * @param filePath - 源文件路径
   * @returns 解析后的 Entity 对象
   */
  public parseEntity(json: string, filePath: string): ParsedEntity {
    try {
      // 1. 解析 JSON
      const parsed = JSON.parse(json);

      // 2. 提取 format_version
      const version = this.extractVersion(json);

      // 3. 验证基本结构
      if (!parsed['minecraft:entity']) {
        throw new Error('Missing required field: minecraft:entity');
      }

      const minecraftEntity = parsed['minecraft:entity'];

      // 4. 提取 identifier
      const description = minecraftEntity.description;
      if (!description || !description.identifier) {
        throw new Error('Missing required field: minecraft:entity.description.identifier');
      }

      const identifier = description.identifier;

      // 5. 统计可选结构（用于日志）
      const components = minecraftEntity.components || {};
      const componentGroups = minecraftEntity.component_groups || {};
      const events = minecraftEntity.events || {};

      logger.debug(`[EntityParser] Parsed entity: ${identifier} (v${version})`);
      logger.debug(`[EntityParser]   Components: ${Object.keys(components).length} found`);
      logger.debug(`[EntityParser]   Component Groups: ${Object.keys(componentGroups).length} found`);
      logger.debug(`[EntityParser]   Events: ${Object.keys(events).length} found`);

      return {
        data: parsed,
        version,
        filePath,
        identifier
      };

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger.error(`[EntityParser] Failed to parse entity from ${filePath}: ${errorMessage}`);
      throw new Error(`Failed to parse entity from ${filePath}: ${errorMessage}`);
    }
  }

  /**
   * 提取 format_version
   *
   * @param json - Entity JSON 字符串
   * @returns format_version，默认 '1.16.100'
   */
  public extractVersion(json: string): string {
    try {
      const parsed = JSON.parse(json);
      if (!parsed.format_version) {
        logger.warn('[EntityParser] Missing format_version, assuming 1.16.100');
        return '1.16.100';
      }
      return parsed.format_version;
    } catch (error) {
      logger.error('[EntityParser] Failed to extract version, assuming 1.16.100');
      return '1.16.100';
    }
  }

  /**
   * 批量解析多个 Entity JSON 文件
   *
   * @param files - 文件列表 { path: string, content: string }[]
   * @returns 解析后的 Entity 对象数组
   */
  public parseEntities(files: Array<{ path: string; content: string }>): ParsedEntity[] {
    const results: ParsedEntity[] = [];

    for (const file of files) {
      try {
        const parsed = this.parseEntity(file.content, file.path);
        results.push(parsed);
      } catch (error) {
        // 记录错误但继续处理其他文件
        const errorMessage = error instanceof Error ? error.message : String(error);
        logger.error(`[EntityParser] Skipping file ${file.path}: ${errorMessage}`);
      }
    }

    logger.info(`[EntityParser] Parsed ${results.length}/${files.length} entities successfully`);
    return results;
  }
}
