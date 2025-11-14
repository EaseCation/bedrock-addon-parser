/**
 * behavior/features/features/minecraft.snap_to_surface_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.513Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * Named reference of feature to be snapped.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Defines the surface that the y-value of the placement position will be snapped to. Valid values: `ceiling` and `floor'
 */
export type Surface = 'ceiling' | 'floor' | 'random_horizontal';

/**
 * `minecraft:snap_to_surface_feature` snaps the y-value of a feature placement pos to the floor or the ceiling within the provided `vertical_search_range`. The placement biome is preserved.
 * If the snap position goes outside of the placement biome, placement will fail.
 */
export interface SnapToSurfaceFeature {
  description: Description;
  feature_to_snap: BlockceptionMinecraftFeatureIdentifier;
  /**
   * Range to search for a floor or ceiling for snaping the feature.
   */
  vertical_search_range: number;
  surface?: Surface;
  /**
   * Determines whether the feature can snap through air blocks
   */
  allow_air_placement?: boolean;
  /**
   * Determines whether the feature can snap through water blocks
   */
  allow_underwater_placement?: boolean;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
