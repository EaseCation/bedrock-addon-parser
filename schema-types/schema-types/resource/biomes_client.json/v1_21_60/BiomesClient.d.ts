/**
 * resource/biomes_client.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.365Z
 */

/**
 * The fog to be associated to this biome.
 */
export type BlockceptionMinecraftFogIdentifier = string;
/**
 * The fog to be associated to this biome.
 */
export type FogID = string;
/**
 * UNDOCUMENTED.
 */
export type FogIdsToMerge = FogID[];

/**
 * The minecraft biomes definition file.
 */
export interface BiomesClient {
  biomes?: Biomes;
}
/**
 * A collection of predefined biomes.
 */
export interface Biomes {
  bamboo_jungle_hills?: Biome;
  bamboo_jungle?: Biome;
  basalt_deltas?: Biome;
  beach?: Biome;
  birch_forest_hills?: Biome;
  birch_forest?: Biome;
  cherry_grove?: Biome;
  cold_beach?: Biome;
  cold_ocean?: Biome;
  cold_taiga_hills?: Biome;
  cold_taiga_mutated?: Biome;
  cold_taiga?: Biome;
  crimson_forest?: Biome;
  deep_cold_ocean?: Biome;
  deep_frozen_ocean?: Biome;
  deep_lukewarm_ocean?: Biome;
  deep_ocean?: Biome;
  deep_warm_ocean?: Biome;
  default?: Biome;
  desert_hills?: Biome;
  desert?: Biome;
  extreme_hills_edge?: Biome;
  extreme_hills_mutated?: Biome;
  extreme_hills_plus_trees_mutated?: Biome;
  extreme_hills_plus_trees?: Biome;
  extreme_hills?: Biome;
  flower_forest?: Biome;
  forest_hills?: Biome;
  forest?: Biome;
  frozen_ocean?: Biome;
  frozen_river?: Biome;
  hell?: Biome;
  ice_mountains?: Biome;
  ice_plains_spikes?: Biome;
  ice_plains?: Biome;
  jungle_edge?: Biome;
  jungle_hills?: Biome;
  jungle_mutated?: Biome;
  jungle?: Biome;
  lukewarm_ocean?: Biome;
  mangrove_swamp?: Biome;
  mega_spruce_taiga_mutated?: Biome;
  mega_spruce_taiga?: Biome;
  mega_taiga_hills?: Biome;
  mega_taiga_mutated?: Biome;
  mega_taiga?: Biome;
  mesa_bryce?: Biome;
  mesa_mutated?: Biome;
  mesa_plateau_stone?: Biome;
  mesa_plateau?: Biome;
  mesa?: Biome;
  mushroom_island_shore?: Biome;
  mushroom_island?: Biome;
  ocean?: Biome;
  plains?: Biome;
  river?: Biome;
  roofed_forest?: Biome;
  savanna_mutated?: Biome;
  savanna_plateau?: Biome;
  savanna?: Biome;
  soulsand_valley?: Biome;
  stone_beach?: Biome;
  sunflower_plains?: Biome;
  swampland_mutated?: Biome;
  swampland?: Biome;
  taiga_hills?: Biome;
  taiga_mutated?: Biome;
  taiga?: Biome;
  the_end?: Biome;
  warm_ocean?: Biome;
  warped_forest?: Biome;
}
/**
 * The specification of colors in a given biome.
 */
export interface Biome {
  fog_color?: FogColor;
  fog_identifier?: BlockceptionMinecraftFogIdentifier;
  fog_ids_to_merge?: FogIdsToMerge;
  /**
   * UNDOCUMENTED.
   */
  inherit_from_prior_fog?: boolean;
  /**
   * UNDOCUMENTED.
   */
  remove_all_prior_fog?: boolean;
  water_fog_color?: WaterFogColor;
  /**
   * The distance the water fog start at.
   */
  water_fog_distance?: number;
  water_surface_color?: WaterSurfaceColor;
  /**
   * The amount of transpareny the surface of the water has.
   */
  water_surface_transparency?: number;
}
/**
 * The color of the fog.
 */
export interface FogColor {
  [k: string]: unknown;
}
/**
 * The color of the water fog.
 */
export interface WaterFogColor {
  [k: string]: unknown;
}
/**
 * The color of the water surface.
 */
export interface WaterSurfaceColor {
  [k: string]: unknown;
}
