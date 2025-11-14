/**
 * behavior/biomes/components/overworld_generation_rules.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.620Z
 */

/**
 * UNDOCUMENTED.
 */
export type HillsTransformation = string | BlockReference;
/**
 * UNDOCUMENTED.
 *
 * @minItems 1
 */
export type BlockReference = [
  string | [] | [string] | [string, number],
  ...(string | [] | [string] | [string, number])[],
];
/**
 * UNDOCUMENTED.
 */
export type MutateTransformation = string | BlockReference;
/**
 * UNDOCUMENTED.
 */
export type RiverTransformation = string | BlockReference;
/**
 * UNDOCUMENTED.
 */
export type ShoreTransformation = string | BlockReference;
/**
 * UNDOCUMENTED.
 */
export type _ = [] | [ClimateCategory] | [ClimateCategory, number];
/**
 * Name of a climate category.
 */
export type ClimateCategory = 'medium' | 'warm' | 'lukewarm' | 'cold' | 'frozen';
/**
 * Controls the world generation climate categories that this biome can spawn for.  A single biome can be associated with multiple categories with different weightings.
 */
export type GenerateForClimates = _[];

/**
 * Control how this biome is instantiated (and then potentially modified) during world generation of the overworld.
 */
export interface OverworldGenerationRules {
  hills_transformation?: HillsTransformation;
  mutate_transformation?: MutateTransformation;
  river_transformation?: RiverTransformation;
  shore_transformation?: ShoreTransformation;
  generate_for_climates?: GenerateForClimates;
}
