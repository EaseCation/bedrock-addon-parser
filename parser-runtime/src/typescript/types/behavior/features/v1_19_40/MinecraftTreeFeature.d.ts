/**
 * behavior/features/1.13.0/features/minecraft.tree_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:14.229Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
export type BaseBlock = BlockceptionMinecraftBlockIdentifier | Block[];
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * A minecraft block identifier.
 */
export type Block = string;
/**
 * UNDOCUMENTED.
 */
export type MayReplace = BlockceptionMinecraftBlockIdentifier[];
/**
 * UNDOCUMENTED.
 */
export type MayGrowOn = BlockceptionMinecraftBlockIdentifier[];
/**
 * UNDOCUMENTED.
 */
export type MayGrowOn1 = BlockceptionMinecraftBlockIdentifier[];
/**
 * UNDOCUMENTED.
 */
export type MayGrowOn2 = BlockceptionMinecraftBlockIdentifier[];
/**
 * UNDOCUMENTED.
 *
 * @minItems 1
 */
export type Intervals = [number, ...number[]];
/**
 * A minecraft block identifier.
 */
export type TrunkBlock = string;
/**
 * UNDOCUMENTED.
 */
export type LeafBlock = string;
/**
 * UNDOCUMENTED.
 */
export type VariationChance = ChanceInformation1 | number;
/**
 * UNDOCUMENTED.
 */
export type LeafBlock1 = string;
/**
 * UNDOCUMENTED.
 */
export type DecorationBlock = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection = 'down' | 'up' | 'out' | 'away';
/**
 * UNDOCUMENTED.
 */
export type LeafBlock2 = string;
/**
 * UNDOCUMENTED.
 */
export type LeafBlock3 = string;
/**
 * UNDOCUMENTED.
 */
export type LeafBlock4 = string;
/**
 * UNDOCUMENTED.
 */
export type LeafBlock5 = string;
/**
 * UNDOCUMENTED.
 */
export type LeafBlock6 = string;
/**
 * UNDOCUMENTED.
 */
export type LeafBlock7 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock1 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection1 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type TrunkBlock1 = string;
/**
 * UNDOCUMENTED.
 */
export type LogDecorationFeature = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock2 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection2 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type TrunkBlock2 = string;
/**
 * UNDOCUMENTED.
 */
export type Intervals1 = number[];
/**
 * A minecraft block identifier.
 */
export type TrunkBlock3 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock3 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection3 = 'down' | 'up' | 'out' | 'away';
/**
 * UNDOCUMENTED.
 */
export type CanBeSubmerged =
  | {
      /**
       * UNDOCUMENTED.
       */
      max_depth?: number;
    }
  | boolean;
/**
 * A minecraft block identifier.
 */
export type TrunkBlock4 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock4 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection4 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type LeafBlock8 = string;
/**
 * UNDOCUMENTED.
 */
export type VariationChance1 = ChanceInformation1 | number;
/**
 * A minecraft block identifier.
 */
export type LeafBlock9 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock5 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection5 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type LeafBlock10 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock11 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock12 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock13 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock14 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock15 = string;
/**
 * UNDOCUMENTED.
 */
export type Items = [] | [number] | [number, number];
/**
 * UNDOCUMENTED.
 */
export type LeafBlocks = Items[];

/**
 * Feature type 'minecraft:tree_feature' has not yet been documented.
 */
export interface StructureTemplateFeature {
  description: Description;
  base_block?: BaseBlock;
  base_cluster?: BaseCluster;
  may_grow_on?: MayGrowOn;
  may_replace?: MayGrowOn1;
  may_grow_through?: MayGrowOn2;
  acacia_trunk?: AcaciaTrunk;
  fallen_trunk?: FallenTrunk;
  fancy_trunk?: FancyTrunk;
  mega_trunk?: MegaTrunk;
  trunk?: Trunk;
  acacia_canopy?: AcaciaCanopy1;
  canopy?: Canopy1;
  fancy_canopy?: FancyCanopy1;
  mega_canopy?: MegaCanopy1;
  mega_pine_canopy?: MegaPineCanopy1;
  pine_canopy?: PineCanopy1;
  roofed_canopy?: RoofedCanopy1;
  spruce_canopy?: SpruceCanopy1;
  random_spread_canopy?: RandomSpreadCanopy;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface BaseCluster {
  may_replace: MayReplace;
  /**
   * UNDOCUMENTED.
   */
  num_clusters: number;
  /**
   * UNDOCUMENTED.
   */
  cluster_radius: number;
}
/**
 * UNDOCUMENTED.
 */
export interface AcaciaTrunk {
  /**
   * UNDOCUMENTED.
   */
  trunk_width?: number;
  trunk_height?: TrunkHeight;
  trunk_lean?: {
    [k: string]: unknown;
  };
  trunk_block?: TrunkBlock;
  branches?: Branches;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkHeight {
  /**
   * UNDOCUMENTED.
   */
  base?: number;
  intervals?: Intervals;
  /**
   * UNDOCUMENTED.
   */
  min_height_for_canopy?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Branches {
  /**
   * UNDOCUMENTED.
   */
  branch_length?: number;
  /**
   * UNDOCUMENTED.
   */
  branch_position?: number;
  branch_chance?: ChanceInformation;
  branch_canopy?: BranchCanopy;
  trunk_decoration?: TrunkDecoration;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface BranchCanopy {
  acacia_canopy?: AcaciaCanopy;
  canopy?: Canopy;
  fancy_canopy?: FancyCanopy;
  mega_canopy?: MegaCanopy;
  mega_pine_canopy?: MegaPineCanopy;
  pine_canopy?: PineCanopy;
  roofed_canopy?: RoofedCanopy;
  spruce_canopy?: SpruceCanopy;
}
/**
 * UNDOCUMENTED.
 */
export interface AcaciaCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_size?: number;
  leaf_block?: LeafBlock;
  /**
   * UNDOCUMENTED.
   */
  simplify_canopy?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface Canopy {
  canopy_offset?: CanopyOffset;
  /**
   * UNDOCUMENTED.
   */
  min_width?: number;
  canopy_slope?: CanopySlope;
  variation_chance?: VariationChance;
  leaf_block?: LeafBlock1;
  canopy_decoration?: CanopyDecoration;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopyOffset {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopySlope {
  /**
   * UNDOCUMENTED.
   */
  rise?: number;
  /**
   * UNDOCUMENTED.
   */
  run?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation1 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopyDecoration {
  decoration_chance?: ChanceInformation2;
  decoration_block?: DecorationBlock;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation2 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FancyCanopy {
  /**
   * UNDOCUMENTED.
   */
  height?: number;
  /**
   * UNDOCUMENTED.
   */
  radius?: number;
  leaf_block?: LeafBlock2;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  /**
   * UNDOCUMENTED.
   */
  simplify_canopy?: boolean;
  leaf_block?: LeafBlock3;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaPineCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  radius_step_modifier?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  leaf_block?: LeafBlock4;
}
/**
 * UNDOCUMENTED.
 */
export interface PineCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  leaf_block?: LeafBlock5;
}
/**
 * UNDOCUMENTED.
 */
export interface RoofedCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  /**
   * UNDOCUMENTED.
   */
  outer_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  inner_radius?: number;
  leaf_block?: LeafBlock6;
}
/**
 * UNDOCUMENTED.
 */
export interface SpruceCanopy {
  /**
   * UNDOCUMENTED.
   */
  lower_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  upper_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  max_radius?: number;
  leaf_block?: LeafBlock7;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkDecoration {
  decoration_chance?: ChanceInformation3;
  decoration_block?: DecorationBlock1;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection1;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation3 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FallenTrunk {
  /**
   * UNDOCUMENTED.
   */
  log_length?: number;
  /**
   * UNDOCUMENTED.
   */
  stump_height?: number;
  /**
   * UNDOCUMENTED.
   */
  height_modifier?: number;
  trunk_block?: TrunkBlock1;
  log_decoration_feature?: LogDecorationFeature;
  trunk_decoration?: TrunkDecoration1;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkDecoration1 {
  decoration_chance?: ChanceInformation4;
  decoration_block?: DecorationBlock2;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection2;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation4 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FancyTrunk {
  trunk_height?: TrunkHeight1;
  /**
   * UNDOCUMENTED.
   */
  trunk_width?: number;
  branches?: Branches1;
  trunk_block?: TrunkBlock2;
  /**
   * UNDOCUMENTED.
   */
  width_scale?: number;
  /**
   * UNDOCUMENTED.
   */
  foliage_altitude_factor?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkHeight1 {
  /**
   * UNDOCUMENTED.
   */
  base?: number;
  /**
   * UNDOCUMENTED.
   */
  variance?: number;
  /**
   * UNDOCUMENTED.
   */
  scale?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Branches1 {
  /**
   * UNDOCUMENTED.
   */
  slope?: number;
  /**
   * UNDOCUMENTED.
   */
  density?: number;
  /**
   * UNDOCUMENTED.
   */
  min_altitude_factor?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaTrunk {
  /**
   * UNDOCUMENTED.
   */
  trunk_width?: number;
  trunk_height?: TrunkHeight2;
  trunk_block?: TrunkBlock3;
  trunk_decoration?: TrunkDecoration2;
  branches?: Branches2;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkHeight2 {
  /**
   * UNDOCUMENTED.
   */
  base?: number;
  intervals?: Intervals1;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkDecoration2 {
  decoration_chance?: ChanceInformation5;
  decoration_block?: DecorationBlock3;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection3;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation5 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Branches2 {
  /**
   * UNDOCUMENTED.
   */
  branch_length?: number;
  /**
   * UNDOCUMENTED.
   */
  branch_slope?: number;
  /**
   * UNDOCUMENTED.
   */
  branch_interval?: number;
  branch_altitude_factor?: BranchAltitudeFactor;
  branch_canopy?: BranchCanopy1;
}
/**
 * UNDOCUMENTED.
 */
export interface BranchAltitudeFactor {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface BranchCanopy1 {
  acacia_canopy?: AcaciaCanopy;
  canopy?: Canopy;
  fancy_canopy?: FancyCanopy;
  mega_canopy?: MegaCanopy;
  mega_pine_canopy?: MegaPineCanopy;
  pine_canopy?: PineCanopy;
  roofed_canopy?: RoofedCanopy;
  spruce_canopy?: SpruceCanopy;
}
/**
 * UNDOCUMENTED.
 */
export interface Trunk {
  /**
   * UNDOCUMENTED.
   */
  trunk_height?: number;
  /**
   * UNDOCUMENTED.
   */
  height_modifier?: number;
  can_be_submerged?: CanBeSubmerged;
  trunk_block?: TrunkBlock4;
  trunk_decoration?: TrunkDecoration3;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkDecoration3 {
  decoration_chance?: ChanceInformation6;
  decoration_block?: DecorationBlock4;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection4;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation6 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface AcaciaCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_size?: number;
  leaf_block?: LeafBlock8;
  /**
   * UNDOCUMENTED.
   */
  simplify_canopy?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface Canopy1 {
  canopy_offset?: CanopyOffset1;
  /**
   * UNDOCUMENTED.
   */
  min_width?: number;
  canopy_slope?: CanopySlope1;
  variation_chance?: VariationChance1;
  leaf_block?: LeafBlock9;
  canopy_decoration?: CanopyDecoration1;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopyOffset1 {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopySlope1 {
  /**
   * UNDOCUMENTED.
   */
  rise?: number;
  /**
   * UNDOCUMENTED.
   */
  run?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopyDecoration1 {
  decoration_chance?: ChanceInformation7;
  decoration_block?: DecorationBlock5;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection5;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation7 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FancyCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  height?: number;
  /**
   * UNDOCUMENTED.
   */
  radius?: number;
  leaf_block?: LeafBlock10;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  /**
   * UNDOCUMENTED.
   */
  simplify_canopy?: boolean;
  leaf_block?: LeafBlock11;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaPineCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  radius_step_modifier?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  leaf_block?: LeafBlock12;
}
/**
 * UNDOCUMENTED.
 */
export interface PineCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  leaf_block?: LeafBlock13;
}
/**
 * UNDOCUMENTED.
 */
export interface RoofedCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  /**
   * UNDOCUMENTED.
   */
  outer_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  inner_radius?: number;
  leaf_block?: LeafBlock14;
}
/**
 * UNDOCUMENTED.
 */
export interface SpruceCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  lower_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  upper_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  max_radius?: number;
  leaf_block?: LeafBlock15;
}
/**
 * UNDOCUMENTED.
 */
export interface RandomSpreadCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  canopy_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  leaf_placement_attempts?: number;
  leaf_blocks?: LeafBlocks;
}
