/**
 * behavior/biomes/components/nether_generation_rules.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.623Z
 */

/**
 * Controls how this biome is instantiated (and then potentially modified) during world generation of the nether.
 */
export interface NetherGenerationRules {
  /**
   * Temperature with which this biome should selected, relative to other biomes.
   */
  target_temperature?: number;
  /**
   * Humidity with which this biome should selected, relative to other biomes.
   */
  target_humidity?: number;
  /**
   * Altitude with which this biome should selected, relative to other biomes.
   */
  target_altitude?: number;
  /**
   * Weirdness with which this biome should selected, relative to other biomes.
   */
  target_weirdness?: number;
  /**
   * Weight with which this biome should selected, relative to other biomes.
   */
  weight?: number;
}
