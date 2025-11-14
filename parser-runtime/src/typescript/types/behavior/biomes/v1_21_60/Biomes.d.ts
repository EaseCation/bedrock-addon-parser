/**
 * behavior/biomes/biomes.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.586Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * Materials used for the surface ceiling.
 *
 * @minItems 1
 */
export type CeilingMaterials = [string, ...string[]];
/**
 * Materials used for the surface floor.
 *
 * @minItems 1
 */
export type FloorMaterials = [string, ...string[]];
/**
 * UNDOCUMENTED.
 */
export type SnowAccumulation = [] | [number] | [number, number];
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
 * UNDOCUMENTED.
 */
export type NoiseParams = [] | [number] | [number, number];
/**
 * UNDOCUMENTED.
 */
export type NoiseType =
  | 'stone_beach'
  | 'deep_ocean'
  | 'default'
  | 'default_mutated'
  | 'lowlands'
  | 'river'
  | 'ocean'
  | 'taiga'
  | 'mountains'
  | 'highlands'
  | 'mushroom'
  | 'less_extreme'
  | 'extreme'
  | 'beach'
  | 'swamp';
/**
 * Defines a range of noise values [min, max] for which this adjustment should be applied.
 */
export type HeightRange = [] | [Min] | [Min, Max];
/**
 * The minecraft molang definition that results in a float.
 */
export type Min = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type Max = string | number;
/**
 * Defines a range of noise values [min, max] for which this adjustment should be applied.
 */
export type NoiseRange = [] | [Min1] | [Min1, Max1];
/**
 * All adjustments that match the column's noise values will be applied in the order listed.
 */
export type Adjustments = Adjustment[];

export interface Biomes {
  [k: string]: Biomes1;
}
/**
 * The definition of a biome.
 */
export interface Biomes1 {
  format_version?: FormatVersion;
  'minecraft:capped_surface'?: CappedSurface;
  'minecraft:climate'?: Climate;
  'minecraft:consolidated_features'?: ConsolidatedFeatures;
  'minecraft:frozen_ocean_surface'?: FrozenOceanSurface;
  'minecraft:legacy_world_generation_rules'?: LegacyWorldGenerationRules;
  'minecraft:mesa_surface'?: MesaSurface;
  'minecraft:mountain_parameters'?: MountainParameters;
  'minecraft:nether_generation_rules'?: NetherGenerationRules;
  'minecraft:nether_surface'?: NetherSurface;
  'minecraft:overworld_generation_rules'?: OverworldGenerationRules;
  'minecraft:overworld_height'?: OverworldHeight;
  'minecraft:surface_material_adjustments'?: SurfaceMaterialAdjustments;
  'minecraft:surface_parameters'?: SurfaceParameters;
  'minecraft:swamp_surface'?: SwampSurface;
  'minecraft:the_end_surface'?: EndSurface;
  [k: string]: Tag;
}
/**
 * Generates surface on blocks with non-solid blocks above or below.
 */
export interface CappedSurface {
  ceiling_materials: CeilingMaterials;
  floor_materials: FloorMaterials;
  /**
   * Material used to replace air blocks below sea level.
   */
  sea_material: string;
  /**
   * Material used to repalce solid blocks that are not surface blocks.
   */
  foundation_material: string;
  /**
   * Material used to decorate surface near sea level.
   */
  beach_material?: string;
}
/**
 * Describes temperature, humidity, precipitation, etc.  Biomes without this component will have default values.
 */
export interface Climate {
  /**
   * UNDOCUMENTED.
   */
  temperature?: number;
  /**
   * UNDOCUMENTED.
   */
  downfall?: number;
  /**
   * UNDOCUMENTED.
   */
  red_spores?: number;
  /**
   * UNDOCUMENTED.
   */
  blue_spores?: number;
  /**
   * UNDOCUMENTED.
   */
  ash?: number;
  /**
   * UNDOCUMENTED.
   */
  white_ash?: number;
  snow_accumulation?: SnowAccumulation;
}
/**
 * UNDOCUMENTED
 */
export interface ConsolidatedFeatures {}
/**
 * Similar to overworld_surface. Adds icebergs.
 */
export interface FrozenOceanSurface {
  top_material?: TopMaterial;
  mid_material?: MidMaterial;
  sea_floor_material?: SeaFloorMaterial;
  foundation_material?: FoundationMaterial;
  sea_material?: SeaMaterial;
  /**
   * Controls how deep below the world water level the floor should occur.
   */
  sea_floor_depth?: number;
}
/**
 * Controls the block type used for the surface of this biome.
 */
export interface TopMaterial {
  [k: string]: unknown;
}
/**
 * Controls the block type used in a layer below the surface of this biome.
 */
export interface MidMaterial {
  [k: string]: unknown;
}
/**
 * Controls the block type used as a floor for bodies of water in this biome.
 */
export interface SeaFloorMaterial {
  [k: string]: unknown;
}
/**
 * Controls the block type used deep underground in this biome.
 */
export interface FoundationMaterial {
  [k: string]: unknown;
}
/**
 * Controls the block type used for the bodies of water in this biome.
 */
export interface SeaMaterial {
  [k: string]: unknown;
}
/**
 * Additional world generation control applicable only to legacy limited worlds.
 */
export interface LegacyWorldGenerationRules {}
/**
 * Similar to overworld_surface.  Adds colored strata and optional pillars.
 */
export interface MesaSurface {
  top_material?: TopMaterial1;
  mid_material?: MidMaterial1;
  sea_floor_material?: SeaFloorMaterial1;
  foundation_material?: FoundationMaterial1;
  sea_material?: SeaMaterial1;
  /**
   * Controls how deep below the world water level the floor should occur.
   */
  sea_floor_depth?: number;
  /**
   * UNDOCUMENTED.
   */
  clay_material?: string;
  /**
   * UNDOCUMENTED.
   */
  hard_clay_material?: string;
  /**
   * UNDOCUMENTED.
   */
  bryce_pillars?: boolean;
  /**
   * UNDOCUMENTED.
   */
  has_forest?: boolean;
}
/**
 * Controls the block type used for the surface of this biome.
 */
export interface TopMaterial1 {
  [k: string]: unknown;
}
/**
 * Controls the block type used in a layer below the surface of this biome.
 */
export interface MidMaterial1 {
  [k: string]: unknown;
}
/**
 * Controls the block type used as a floor for bodies of water in this biome.
 */
export interface SeaFloorMaterial1 {
  [k: string]: unknown;
}
/**
 * Controls the block type used deep underground in this biome.
 */
export interface FoundationMaterial1 {
  [k: string]: unknown;
}
/**
 * Controls the block type used for the bodies of water in this biome.
 */
export interface SeaMaterial1 {
  [k: string]: unknown;
}
/**
 * Noise parameters used to drive mountain terrain generation in Overworld.
 */
export interface MountainParameters {
  /**
   * UNDOCUMENTED.
   */
  peaks_factor?: number;
  steep_material_adjustment?: SteepMaterialAdjustment;
  top_slide?: TopSlide;
}
/**
 * Defines surface material for steep slopes.
 */
export interface SteepMaterialAdjustment {
  /**
   * Block type use as steep material.
   */
  material?: string;
  /**
   * Enable for north facing slopes.
   */
  north_slopes?: boolean;
  /**
   * Enable for south facing slopes.
   */
  south_slopes?: boolean;
  /**
   * Enable for west facing slopes.
   */
  west_slopes?: boolean;
  /**
   * Enable for east facing slopes.
   */
  east_slopes?: boolean;
}
/**
 * Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high.
 */
export interface TopSlide {
  enabled?: Enabled;
}
/**
 * If false, top slide will be disabled. If true, other parameters will be taken into account
 */
export interface Enabled {
  [k: string]: unknown;
}
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
/**
 * Use default Minecraft Nether terrain generation.
 */
export interface NetherSurface {}
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
/**
 * Noise parameters used to drive terrain height in the Overworld.
 */
export interface OverworldHeight {
  noise_params?: NoiseParams;
  noise_type?: NoiseType;
}
/**
 * Specify fine-detail changes to blocks used in terrain generation (based on a noise function).
 */
export interface SurfaceMaterialAdjustments {
  adjustments?: Adjustments;
}
/**
 * UNDOCUMENTED.
 */
export interface Adjustment {
  height_range?: HeightRange;
  materials?: Materials;
  noise_range?: NoiseRange;
}
/**
 * UNDOCUMENTED.
 */
export interface Materials {
  /**
   * Controls the block type used for the surface of this biome when this adjustment is active.
   */
  top_material?: string;
  /**
   * Controls the block type used in a layer below the surface of this biome when this adjustment is active.
   */
  mid_material?: string;
  /**
   * Controls the block type used as a floor for bodies of water in this biome when this adjustment is active.
   */
  sea_floor_material?: string;
  /**
   * Controls the block type used deep underground in this biome when this adjustment is active.
   */
  foundation_material?: string;
  /**
   * Controls the block type used in the bodies of water in this biome when this adjustment is active.
   */
  sea_material?: string;
}
export interface Min1 {
  [k: string]: unknown;
}
export interface Max1 {
  [k: string]: unknown;
}
/**
 * Control the blocks used for the default Minecraft Overworld terrain generation.
 */
export interface SurfaceParameters {
  top_material?: TopMaterial2;
  mid_material?: MidMaterial2;
  sea_floor_material?: SeaFloorMaterial2;
  foundation_material?: FoundationMaterial2;
  sea_material?: SeaMaterial2;
  /**
   * Controls how deep below the world water level the floor should occur.
   */
  sea_floor_depth?: number;
}
/**
 * Controls the block type used for the surface of this biome.
 */
export interface TopMaterial2 {
  [k: string]: unknown;
}
/**
 * Controls the block type used in a layer below the surface of this biome.
 */
export interface MidMaterial2 {
  [k: string]: unknown;
}
/**
 * Controls the block type used as a floor for bodies of water in this biome.
 */
export interface SeaFloorMaterial2 {
  [k: string]: unknown;
}
/**
 * Controls the block type used deep underground in this biome.
 */
export interface FoundationMaterial2 {
  [k: string]: unknown;
}
/**
 * Controls the block type used for the bodies of water in this biome.
 */
export interface SeaMaterial2 {
  [k: string]: unknown;
}
/**
 * Similar to overworld_surface. Adds swamp surface details.
 */
export interface SwampSurface {
  top_material?: TopMaterial3;
  mid_material?: MidMaterial3;
  sea_floor_material?: SeaFloorMaterial3;
  foundation_material?: FoundationMaterial3;
  sea_material?: SeaMaterial3;
  /**
   * Controls how deep below the world water level the floor should occur.
   */
  sea_floor_depth?: number;
}
/**
 * Controls the block type used for the surface of this biome.
 */
export interface TopMaterial3 {
  [k: string]: unknown;
}
/**
 * Controls the block type used in a layer below the surface of this biome.
 */
export interface MidMaterial3 {
  [k: string]: unknown;
}
/**
 * Controls the block type used as a floor for bodies of water in this biome.
 */
export interface SeaFloorMaterial3 {
  [k: string]: unknown;
}
/**
 * Controls the block type used deep underground in this biome.
 */
export interface FoundationMaterial3 {
  [k: string]: unknown;
}
/**
 * Controls the block type used for the bodies of water in this biome.
 */
export interface SeaMaterial3 {
  [k: string]: unknown;
}
/**
 * Use default Minecraft End terrain generation.
 */
export interface EndSurface {}
/**
 * Components with no namespace are treated as `tags': any name consisting of alphanumeric characters, `.` and `_` is permitted; the tag is attached to the biome so that either code or data may check for its existence; tag components may not have member fields.
 */
export interface Tag {}
