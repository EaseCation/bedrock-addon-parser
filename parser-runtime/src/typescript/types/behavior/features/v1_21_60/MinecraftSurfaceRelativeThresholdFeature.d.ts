/**
 * behavior/features/features/minecraft.surface_relative_threshold_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.509Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * Named reference of feature to be placed.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;

/**
 * 'minecraft:surface_relative_threshold_feature' determines whether the provided position is below the estimated surface level of the world, and places a feature if so.If the provided position is above configured surface or the surface is not available, placement will fail.
 */
export interface SurfaceRelativeThresholdFeature {
  description: Description;
  feature_to_place: BlockceptionMinecraftFeatureIdentifier;
  /**
   * The minimum number of blocks required to be between the estimated surface level and a valid place for this feature.
   */
  minimum_distance_below_surface?: number;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
