/**
 * Block 解析器
 *
 * 负责解析各个版本的 Block JSON 文件
 */

import { createLogger } from '../utils/logger';

const logger = createLogger('BlockParser');

/**
 * 解析后的 Block 数据结构
 */
export interface ParsedBlock {
  /** 原始 JSON 对象 */
  data: any;
  /** format_version */
  version: string;
  /** 源文件路径 */
  filePath: string;
  /** Block 标识符 */
  identifier: string;
}

export class BlockParser {
  /**
   * 解析 Block JSON
   *
   * @param json - Block JSON 字符串
   * @param filePath - 源文件路径
   * @returns 解析后的 Block 对象
   */
  public parseBlock(json: string, filePath: string): ParsedBlock {
    try {
      // 1. 解析 JSON
      const parsed = JSON.parse(json);

      // 2. 提取 format_version
      const version = this.extractVersion(json);

      // 3. 验证基本结构
      if (!parsed['minecraft:block']) {
        throw new Error('Missing required field: minecraft:block');
      }

      const minecraftBlock = parsed['minecraft:block'];

      // 4. 提取 identifier
      const description = minecraftBlock.description;
      if (!description || !description.identifier) {
        throw new Error('Missing required field: minecraft:block.description.identifier');
      }

      const identifier = description.identifier;

      // 5. 验证 components（可选）
      const components = minecraftBlock.components || {};

      logger.debug(`[BlockParser] Parsed block: ${identifier} (v${version})`);
      logger.debug(`[BlockParser]   Components: ${Object.keys(components).length} found`);

      if (minecraftBlock.permutations) {
        logger.debug(`[BlockParser]   Permutations: ${minecraftBlock.permutations.length} found`);
      }

      return {
        data: parsed,
        version,
        filePath,
        identifier
      };

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger.error(`[BlockParser] Failed to parse block from ${filePath}: ${errorMessage}`);
      throw new Error(`Failed to parse block from ${filePath}: ${errorMessage}`);
    }
  }

  /**
   * 提取 format_version
   *
   * @param json - Block JSON 字符串
   * @returns format_version，默认 '1.16.100'
   */
  public extractVersion(json: string): string {
    try {
      const parsed = JSON.parse(json);
      if (!parsed.format_version) {
        logger.warn('[BlockParser] Missing format_version, assuming 1.16.100');
        return '1.16.100';
      }
      return parsed.format_version;
    } catch (error) {
      logger.error('[BlockParser] Failed to extract version, assuming 1.16.100');
      return '1.16.100';
    }
  }

  /**
   * 批量解析多个 Block JSON 文件
   *
   * @param files - 文件列表 { path: string, content: string }[]
   * @returns 解析后的 Block 对象数组
   */
  public parseBlocks(files: Array<{ path: string; content: string }>): ParsedBlock[] {
    const results: ParsedBlock[] = [];

    for (const file of files) {
      try {
        const parsed = this.parseBlock(file.content, file.path);
        results.push(parsed);
      } catch (error) {
        // 记录错误但继续处理其他文件
        const errorMessage = error instanceof Error ? error.message : String(error);
        logger.error(`[BlockParser] Skipping file ${file.path}: ${errorMessage}`);
      }
    }

    logger.info(`[BlockParser] Parsed ${results.length}/${files.length} blocks successfully`);
    return results;
  }
}
