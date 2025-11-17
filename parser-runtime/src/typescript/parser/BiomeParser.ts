/**
 * Biome 解析器
 *
 * 负责解析各个版本的 Biome JSON 文件
 */

import { createLogger } from '../utils/logger';

const logger = createLogger('BiomeParser');

/**
 * 解析后的 Biome 数据结构
 */
export interface ParsedBiome {
  /** 原始 JSON 对象 */
  data: any;
  /** format_version */
  version: string;
  /** 源文件路径 */
  filePath: string;
  /** Biome 标识符 */
  identifier: string;
}

export class BiomeParser {
  /**
   * 解析 Biome JSON
   *
   * @param json - Biome JSON 字符串
   * @param filePath - 源文件路径
   * @returns 解析后的 Biome 对象
   */
  public parseBiome(json: string, filePath: string): ParsedBiome {
    try {
      // 1. 解析 JSON
      const parsed = JSON.parse(json);

      // 2. 提取 format_version
      const version = this.extractVersion(json);

      // 3. 验证基本结构
      if (!parsed['minecraft:biome']) {
        throw new Error('Missing required field: minecraft:biome');
      }

      const minecraftBiome = parsed['minecraft:biome'];

      // 4. 提取 identifier
      const description = minecraftBiome.description;
      if (!description || !description.identifier) {
        throw new Error('Missing required field: minecraft:biome.description.identifier');
      }

      const identifier = description.identifier;

      // 5. 验证 components（可选）
      const components = minecraftBiome.components || {};

      logger.debug(`[BiomeParser] Parsed biome: ${identifier} (v${version})`);
      logger.debug(`[BiomeParser]   Components: ${Object.keys(components).length} found`);

      return {
        data: parsed,
        version,
        filePath,
        identifier
      };

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger.error(`[BiomeParser] Failed to parse biome from ${filePath}: ${errorMessage}`);
      throw new Error(`Failed to parse biome from ${filePath}: ${errorMessage}`);
    }
  }

  /**
   * 提取 format_version
   *
   * @param json - Biome JSON 字符串
   * @returns format_version，默认 '1.19.0'
   */
  public extractVersion(json: string): string {
    try {
      const parsed = JSON.parse(json);
      if (!parsed.format_version) {
        logger.warn('[BiomeParser] Missing format_version, assuming 1.19.0');
        return '1.19.0';
      }
      return parsed.format_version;
    } catch (error) {
      logger.error('[BiomeParser] Failed to extract version, assuming 1.19.0');
      return '1.19.0';
    }
  }

  /**
   * 批量解析多个 Biome JSON 文件
   *
   * @param files - 文件列表 { path: string, content: string }[]
   * @returns 解析后的 Biome 对象数组
   */
  public parseBiomes(files: Array<{ path: string; content: string }>): ParsedBiome[] {
    const results: ParsedBiome[] = [];

    for (const file of files) {
      try {
        const parsed = this.parseBiome(file.content, file.path);
        results.push(parsed);
      } catch (error) {
        // 记录错误但继续处理其他文件
        const errorMessage = error instanceof Error ? error.message : String(error);
        logger.error(`[BiomeParser] Skipping file ${file.path}: ${errorMessage}`);
      }
    }

    logger.info(`[BiomeParser] Parsed ${results.length}/${files.length} biomes successfully`);
    return results;
  }
}
