/**
 * Addon 解析器
 *
 * 负责识别文件类型、调用对应的解析器、汇总结果
 */

import type { JsonFile, StandardAddon, StandardBlock, StandardItem, StandardEntity } from '../index';
import { BlockParser } from './BlockParser';
import { BlockUpgrader } from '../upgrader/BlockUpgrader';
import { BlockConverter } from '../converter/BlockConverter';
import { ItemParser } from './ItemParser';
import { ItemUpgrader } from '../upgrader/ItemUpgrader';
import { ItemConverter } from '../converter/ItemConverter';
import { EntityParser } from './EntityParser';
import { EntityUpgrader } from '../upgrader/EntityUpgrader';
import { EntityConverter } from '../converter/EntityConverter';
import { createLogger } from '../utils/logger';

const logger = createLogger('AddonParser');

export class AddonParser {
  /**
   * 解析 Addon 文件列表
   */
  public parse(files: JsonFile[]): StandardAddon {
    const blocks: StandardBlock[] = [];
    const items: StandardItem[] = [];
    const entities: StandardEntity[] = [];
    const warnings: string[] = [];

    // 遍历所有文件
    for (const file of files) {
      try {
        const fileType = this.detectFileType(file.path);

        if (!fileType) {
          warnings.push(`[${file.path}] Unknown file type, skipping`);
          continue;
        }

        // 根据文件类型调用对应的解析器
        switch (fileType) {
          case 'block': {
            // 1. 解析 Block
            const blockParser = new BlockParser();
            const parsed = blockParser.parseBlock(file.content, file.path);

            // 2. 升级到最新版本
            const upgraded = BlockUpgrader.upgradeToLatest(parsed.data, parsed.version);

            // 3. 转换为标准化格式
            const standardBlocks = BlockConverter.convertToStandard(upgraded.data, {
              sourceVersion: parsed.version,
              upgradePath: upgraded.upgradePath,
              warnings: upgraded.warnings,
              sourceFile: file.path
            });

            blocks.push(...standardBlocks);
            warnings.push(...upgraded.warnings);
            logger.debug(`[AddonParser] Successfully parsed block: ${file.path}`);
            break;
          }

          case 'item': {
            // 1. 解析 Item
            const itemParser = new ItemParser();
            const parsed = itemParser.parseItem(file.content, file.path);

            // 2. 升级到最新版本
            const upgraded = ItemUpgrader.upgradeToLatest(parsed.data, parsed.version);

            // 3. 转换为标准化格式
            const standardItems = ItemConverter.convertToStandard(upgraded.data, {
              sourceVersion: parsed.version,
              upgradePath: upgraded.upgradePath,
              warnings: upgraded.warnings,
              sourceFile: file.path
            });

            items.push(...standardItems);
            warnings.push(...upgraded.warnings);
            logger.debug(`[AddonParser] Successfully parsed item: ${file.path}`);
            break;
          }

          case 'entity': {
            // 1. 解析 Entity
            const entityParser = new EntityParser();
            const parsed = entityParser.parseEntity(file.content, file.path);

            // 2. 升级到最新版本
            const upgraded = EntityUpgrader.upgradeToLatest(parsed.data, parsed.version);

            // 3. 转换为标准化格式
            const standardEntities = EntityConverter.convertToStandard(upgraded.data, {
              sourceVersion: parsed.version,
              upgradePath: upgraded.upgradePath,
              warnings: upgraded.warnings,
              sourceFile: file.path
            });

            entities.push(...standardEntities);
            warnings.push(...upgraded.warnings);
            logger.debug(`[AddonParser] Successfully parsed entity: ${file.path}`);
            break;
          }
        }

      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        warnings.push(`[${file.path}] Parse error: ${errorMessage}`);
      }
    }

    return {
      blocks,
      items,
      entities,
      metadata: {
        totalFiles: files.length,
        warnings
      }
    };
  }

  /**
   * 检测文件类型
   */
  private detectFileType(filePath: string): 'block' | 'item' | 'entity' | null {
    const normalized = filePath.toLowerCase().replace(/\\/g, '/');

    // 支持 "blocks/" 和 "/blocks/" 两种形式
    if (normalized.includes('/blocks/') || normalized.startsWith('blocks/')) return 'block';
    if (normalized.includes('/items/') || normalized.startsWith('items/')) return 'item';
    if (normalized.includes('/entities/') || normalized.startsWith('entities/')) return 'entity';

    return null;
  }

  /**
   * 提取 format_version
   */
  private _extractVersion(content: string): string {
    try {
      const parsed = JSON.parse(content);
      return parsed.format_version || '1.16.100';  // 默认版本
    } catch {
      return '1.16.100';
    }
  }
}
