/**
 * Item 解析器
 *
 * 负责解析各个版本的 Item JSON 文件
 */

import { createLogger } from '../utils/logger';

const logger = createLogger('ItemParser');

/**
 * 解析后的 Item 数据结构
 */
export interface ParsedItem {
  /** 原始 JSON 对象 */
  data: any;
  /** format_version */
  version: string;
  /** 源文件路径 */
  filePath: string;
  /** Item 标识符 */
  identifier: string;
}

export class ItemParser {
  /**
   * 解析 Item JSON
   *
   * @param json - Item JSON 字符串
   * @param filePath - 源文件路径
   * @returns 解析后的 Item 对象
   */
  public parseItem(json: string, filePath: string): ParsedItem {
    try {
      // 1. 解析 JSON
      const parsed = JSON.parse(json);

      // 2. 提取 format_version
      const version = this.extractVersion(json);

      // 3. 验证基本结构
      if (!parsed['minecraft:item']) {
        throw new Error('Missing required field: minecraft:item');
      }

      const minecraftItem = parsed['minecraft:item'];

      // 4. 提取 identifier
      const description = minecraftItem.description;
      if (!description || !description.identifier) {
        throw new Error('Missing required field: minecraft:item.description.identifier');
      }

      const identifier = description.identifier;

      // 5. 验证 components（可选）
      const components = minecraftItem.components || {};

      logger.debug(`[ItemParser] Parsed item: ${identifier} (v${version})`);
      logger.debug(`[ItemParser]   Components: ${Object.keys(components).length} found`);

      // 记录 events（旧版本支持，v1.21.50+ 已废弃）
      if (minecraftItem.events) {
        logger.debug(`[ItemParser]   Events: ${Object.keys(minecraftItem.events).length} found (deprecated in v1.21.50+)`);
      }

      return {
        data: parsed,
        version,
        filePath,
        identifier
      };

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger.error(`[ItemParser] Failed to parse item from ${filePath}: ${errorMessage}`);
      throw new Error(`Failed to parse item from ${filePath}: ${errorMessage}`);
    }
  }

  /**
   * 提取 format_version
   *
   * @param json - Item JSON 字符串
   * @returns format_version，默认 '1.10.0'（Item 最早版本）
   */
  public extractVersion(json: string): string {
    try {
      const parsed = JSON.parse(json);
      if (!parsed.format_version) {
        logger.warn('[ItemParser] Missing format_version, assuming 1.10.0');
        return '1.10.0';
      }
      return parsed.format_version;
    } catch (error) {
      logger.error('[ItemParser] Failed to extract version, assuming 1.10.0');
      return '1.10.0';
    }
  }

  /**
   * 批量解析多个 Item JSON 文件
   *
   * @param files - 文件列表 { path: string, content: string }[]
   * @returns 解析后的 Item 对象数组
   */
  public parseItems(files: Array<{ path: string; content: string }>): ParsedItem[] {
    const results: ParsedItem[] = [];

    for (const file of files) {
      try {
        const parsed = this.parseItem(file.content, file.path);
        results.push(parsed);
      } catch (error) {
        // 记录错误但继续处理其他文件
        const errorMessage = error instanceof Error ? error.message : String(error);
        logger.error(`[ItemParser] Skipping file ${file.path}: ${errorMessage}`);
      }
    }

    logger.info(`[ItemParser] Parsed ${results.length}/${files.length} items successfully`);
    return results;
  }
}
