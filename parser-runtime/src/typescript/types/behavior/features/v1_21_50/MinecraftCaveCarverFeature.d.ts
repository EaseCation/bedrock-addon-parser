/**
 * behavior/features/features/minecraft.cave_carver_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:51.083Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Reference to the block to fill the cave with.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * How many blocks to increase the cave radius by, from the center point of the cave.
 */
export type WidthModifier = string | number;
/**
 * The scaling in y
 *
 * @minItems 2
 * @maxItems 2
 */
export type YScale = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type HorizontalRadiusMultiplier = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type VerticalRadiusMultiplier = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type FloorLevel = [number, number];

/**
 * `minecraft:cave_carver_feature` carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature will also only work when placed specifically in the pass `pregeneration_pass`.
 */
export interface CaveCarverFeature {
  description: Description;
  fill_with?: BlockceptionMinecraftBlockIdentifier;
  width_modifier?: WidthModifier;
  /**
   * The chance to skip doing the carve (1 / value).
   */
  skip_carve_chance?: number;
  /**
   * The height limit where we attempt to carve
   */
  height_limit?: number;
  y_scale?: YScale;
  horizontal_radius_multiplier?: HorizontalRadiusMultiplier;
  vertical_radius_multiplier?: VerticalRadiusMultiplier;
  floor_level?: FloorLevel;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
