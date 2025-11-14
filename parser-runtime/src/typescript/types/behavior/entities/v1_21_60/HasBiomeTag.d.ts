/**
 * behavior/entities/filters/filters/has_biome_tag.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:00.962Z
 */

/**
 * The comparison to apply with `value`.
 */
export type Operator = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';
/**
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * The tag to look for.
 */
export type Value = BiomeTag | Biome;
/**
 * An in game biome's tags
 */
export type BiomeTag =
  | 'animal'
  | 'bamboo'
  | 'bee_habitat'
  | 'birch'
  | 'caves'
  | 'cold'
  | 'deep'
  | 'edge'
  | 'frozen'
  | 'hills'
  | 'ice'
  | 'lukewarm'
  | 'mega'
  | 'monster'
  | 'mountain'
  | 'mountains'
  | 'mutated'
  | 'nether'
  | 'netherwart_forest'
  | 'no_legacy_worldgen'
  | 'ocean'
  | 'overworld'
  | 'overworld_generation'
  | 'plateau'
  | 'rare'
  | 'roofed'
  | 'shore'
  | 'spawn_endermen'
  | 'spawn_few_piglins'
  | 'spawn_few_zombified_piglins'
  | 'spawn_ghast'
  | 'spawn_magma_cubes'
  | 'spawn_many_magma_cubes'
  | 'spawn_piglin'
  | 'spawn_zombified_piglin'
  | 'stone'
  | 'swamp'
  | 'warm';
/**
 * An in game biome
 */
export type Biome =
  | 'bamboo_jungle'
  | 'bamboo_jungle_hills'
  | 'basalt_deltas'
  | 'beach'
  | 'birch_forest'
  | 'birch_forest_hills'
  | 'birch_forest_hills_mutated'
  | 'birch_forest_mutated'
  | 'cherry_grove'
  | 'cold_beach'
  | 'cold_ocean'
  | 'cold_taiga'
  | 'cold_taiga_hills'
  | 'cold_taiga_mutated'
  | 'crimson_forest'
  | 'deep_cold_ocean'
  | 'deep_frozen_ocean'
  | 'deep_lukewarm_ocean'
  | 'deep_ocean'
  | 'deep_warm_ocean'
  | 'deep_dark'
  | 'desert'
  | 'desert_hills'
  | 'desert_mutated'
  | 'dripstone_caves'
  | 'extreme_hills'
  | 'extreme_hills_edge'
  | 'extreme_hills_mutated'
  | 'extreme_hills_plus_trees'
  | 'extreme_hills_plus_trees_mutated'
  | 'flower_forest'
  | 'forest'
  | 'forest_hills'
  | 'frozen_ocean'
  | 'frozen_peaks'
  | 'frozen_river'
  | 'grove'
  | 'hell'
  | 'ice_mountains'
  | 'ice_plains'
  | 'ice_plains_spikes'
  | 'jagged_peaks'
  | 'jungle'
  | 'jungle_edge'
  | 'jungle_edge_mutated'
  | 'jungle_hills'
  | 'jungle_mutated'
  | 'legacy_frozen_ocean'
  | 'lukewarm_ocean'
  | 'lush_caves'
  | 'mangrove_swamp'
  | 'meadow'
  | 'mega_taiga'
  | 'mega_taiga_hills'
  | 'mesa'
  | 'mesa_bryce'
  | 'mesa_plateau'
  | 'mesa_plateau_mutated'
  | 'mesa_plateau_stone'
  | 'mesa_plateau_stone_mutated'
  | 'mushroom_island'
  | 'mushroom_island_shore'
  | 'ocean'
  | 'plains'
  | 'redwood_taiga_hills_mutated'
  | 'redwood_taiga_mutated'
  | 'river'
  | 'roofed_forest'
  | 'roofed_forest_mutated'
  | 'savanna'
  | 'savanna_mutated'
  | 'savanna_plateau'
  | 'savanna_plateau_mutated'
  | 'snowy_slopes'
  | 'soulsand_valley'
  | 'stone_beach'
  | 'stony_peaks'
  | 'sunflower_plains'
  | 'swampland'
  | 'swampland_mutated'
  | 'taiga'
  | 'taiga_hills'
  | 'taiga_mutated'
  | 'the_end'
  | 'warm_ocean'
  | 'warped_forest';

/**
 * Tests whether the biome the subject is in has the specified tag.
 */
export interface HasBiomeTag {
  /**
   * Tests whether the biome the subject is in has the specified tag.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
