#!/usr/bin/env node

import { Command } from 'commander';
import * as path from 'path';
import * as fs from 'fs-extra';
import chalk from 'chalk';
import { TypeGenerator } from './generator';
import {
  loadVersionMapping,
  getVersionsForModule,
  getAllModuleNames,
  printVersionMappingStats,
  validateVersionMapping,
  VersionEntry
} from './utils/version-mapping';
import { withGitCheckout, getSchemaDirectory, validateSchemaDirectory } from './utils/git-utils';

// 默认路径
const DEFAULT_SCHEMA_DIR = getSchemaDirectory();
const DEFAULT_OUTPUT_DIR = path.resolve(__dirname, '../types');

interface GenerateAllOptions {
  schemaDir: string;
  outputDir: string;
  module?: string;
  category?: 'behavior' | 'resource';
  force?: boolean;
  dryRun?: boolean;
  clean?: boolean;
}

/**
 * 检查版本是否已存在
 */
function checkIfVersionExists(
  outputDir: string,
  category: string,
  moduleName: string,
  version: string
): boolean {
  const versionDir = path.join(
    outputDir,
    category,
    moduleName,
    `v${version.replace(/\./g, '_')}`
  );

  if (!fs.existsSync(versionDir)) {
    return false;
  }

  // 检查是否有 .d.ts 文件
  const files = fs.readdirSync(versionDir);
  return files.some(f => f.endsWith('.d.ts'));
}

/**
 * 为单个版本生成类型
 */
async function generateForVersion(
  entry: VersionEntry,
  moduleName: string,
  options: GenerateAllOptions
): Promise<boolean> {
  const { format_version, commit, notes } = entry;
  const versionKey = `v${format_version.replace(/\./g, '_')}`;

  console.log(chalk.bold.cyan(`\n▶ ${format_version} (${commit.substring(0, 8)})`));
  if (notes) {
    console.log(chalk.gray(`  ${notes}`));
  }

  // 检查是否已存在
  if (!options.force) {
    // 检查 behavior 和 resource 两个分类
    const behaviorExists = checkIfVersionExists(
      options.outputDir,
      'behavior',
      moduleName,
      format_version
    );
    const resourceExists = checkIfVersionExists(
      options.outputDir,
      'resource',
      moduleName,
      format_version
    );

    if ((behaviorExists || resourceExists) && !options.category) {
      console.log(chalk.gray(`  ⏭️  已存在，跳过`));
      return false;
    }

    if (options.category === 'behavior' && behaviorExists) {
      console.log(chalk.gray(`  ⏭️  Behavior 已存在，跳过`));
      return false;
    }

    if (options.category === 'resource' && resourceExists) {
      console.log(chalk.gray(`  ⏭️  Resource 已存在，跳过`));
      return false;
    }
  }

  if (options.dryRun) {
    console.log(chalk.gray(`  [预览] 将生成到: ${options.category || 'behavior+resource'}/${moduleName}/${versionKey}/`));
    return false;
  }

  try {
    // 使用 withGitCheckout 确保安全的 Git 操作
    await withGitCheckout(commit, options.schemaDir, async () => {
      const sourceDir = path.join(options.schemaDir, 'source');

      const generator = new TypeGenerator({
        schemaBaseDir: sourceDir,
        outputDir: options.outputDir,
        category: options.category,
        clean: false, // 不清理，增量生成
        version: format_version,
        module: moduleName
      });

      // 生成类型
      // 始终使用 generateModule 确保只生成指定模块
      await generator.generateModule(moduleName);
    });

    console.log(chalk.green(`  ✅ 完成`));
    return true;
  } catch (error) {
    console.error(chalk.red(`  ❌ 失败: ${error}`));
    return false;
  }
}

/**
 * 主函数
 */
async function main() {
  const program = new Command();

  program
    .name('generate-all')
    .description('批量生成 Minecraft Bedrock JSON Schema 的 TypeScript 类型定义（多版本）')
    .version('1.0.0');

  program
    .option('-s, --schema-dir <path>', 'Schema 源目录', DEFAULT_SCHEMA_DIR)
    .option('-o, --output-dir <path>', '输出目录', DEFAULT_OUTPUT_DIR)
    .option('-m, --module <module>', '指定模块（如 items, blocks, entities）')
    .option('-c, --category <category>', '类别 (behavior/resource)')
    .option('--force', '强制重新生成已存在的版本')
    .option('--dry-run', '预览模式，不实际生成')
    .option('--no-clean', '不清理输出目录')
    .action(async (opts) => {
      try {
        const options: GenerateAllOptions = {
          schemaDir: opts.schemaDir,
          outputDir: opts.outputDir,
          module: opts.module,
          category: opts.category,
          force: opts.force,
          dryRun: opts.dryRun,
          clean: opts.clean
        };

        console.log(chalk.bold.blue('\n' + '='.repeat(60)));
        console.log(chalk.bold.blue('📦 批量生成 TypeScript 类型定义（多版本）'));
        console.log(chalk.bold.blue('='.repeat(60)));

        // 验证 Schema 目录
        if (!validateSchemaDirectory(options.schemaDir)) {
          console.error(chalk.red(`\n❌ Schema 目录不是有效的 Git 仓库: ${options.schemaDir}`));
          console.log(chalk.yellow('请确保已初始化 git submodule:'));
          console.log(chalk.gray('  git submodule update --init --recursive'));
          process.exit(1);
        }

        // 加载版本映射
        const mapping = loadVersionMapping();

        // 验证配置
        if (!validateVersionMapping(mapping)) {
          process.exit(1);
        }

        // 打印配置统计
        printVersionMappingStats(mapping);

        // 确定要处理的模块
        const modulesToProcess = options.module
          ? [options.module]
          : getAllModuleNames(mapping);

        console.log(chalk.blue(`📋 将处理以下模块: ${modulesToProcess.join(', ')}\n`));

        if (options.dryRun) {
          console.log(chalk.yellow('🔍 预览模式（不实际生成）\n'));
        }

        let totalSuccess = 0;
        let totalSkipped = 0;
        let totalFailed = 0;

        // 遍历每个模块
        for (const moduleName of modulesToProcess) {
          console.log(chalk.bold.magenta(`\n${'='.repeat(60)}`));
          console.log(chalk.bold.magenta(`模块: ${moduleName.toUpperCase()}`));
          console.log(chalk.bold.magenta('='.repeat(60)));

          const versions = getVersionsForModule(mapping, moduleName);

          if (versions.length === 0) {
            console.log(chalk.yellow(`⚠ 模块 "${moduleName}" 未配置版本`));
            continue;
          }

          // 遍历每个版本
          for (const entry of versions) {
            const success = await generateForVersion(entry, moduleName, options);
            if (success) {
              totalSuccess++;
            } else if (options.dryRun || !options.force) {
              totalSkipped++;
            } else {
              totalFailed++;
            }
          }
        }

        // 打印汇总
        console.log(chalk.bold.blue('\n' + '='.repeat(60)));
        console.log(chalk.bold.blue('🎉 批量生成完成！'));
        console.log(chalk.bold.blue('='.repeat(60)));
        console.log(chalk.green(`  成功: ${totalSuccess}`));
        console.log(chalk.gray(`  跳过: ${totalSkipped}`));
        if (totalFailed > 0) {
          console.log(chalk.red(`  失败: ${totalFailed}`));
        }
        console.log(chalk.blue(`  输出目录: ${path.relative(process.cwd(), options.outputDir)}`));
        console.log();

        process.exit(totalFailed > 0 ? 1 : 0);
      } catch (error) {
        console.error(chalk.red('\n❌ 生成失败:'), error);
        process.exit(1);
      }
    });

  program.parse();
}

// 处理未捕获的异常
process.on('unhandledRejection', (error) => {
  console.error(chalk.red('\n❌ 未处理的错误:'), error);
  process.exit(1);
});

main();
