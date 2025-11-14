/**
 * behavior/features/1.13.0/features/minecraft.beards_and_shavers.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:35.205Z
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
 * Dimensions of the Bounding Box.
 */
export type BoundingBoxMin = [] | [number] | [number, number] | [number, number, number];
/**
 * Dimensions of the Bounding Box.
 */
export type BoundingBoxMax = [] | [number] | [number, number] | [number, number, number];
/**
 * Reference to the block to be placed.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * Reference to the block to be placed.
 */
export type SubsurfaceBlockType = string;

/**
 * `minecraft:beards_and_shavers` will build a `beard` or `shave` out space so as to provide a clear space for a feature to place.
 * Succeeds if: a beard/shave is made (this should always happen).
 * Fails if: will always return placement pos, but interior feature placement not guaranteed.
 */
export interface BeardsAndShavers {
  description: Description;
  places_feature: BlockceptionMinecraftFeatureIdentifier;
  bounding_box_min: BoundingBoxMin;
  bounding_box_max: BoundingBoxMax;
  /**
   * Y Delta for BAS.
   */
  y_delta: number;
  surface_block_type: BlockceptionMinecraftBlockIdentifier;
  subsurface_block_type: SubsurfaceBlockType;
  /**
   * Y Delta for BAS.
   */
  beard_raggedness_min?: number;
  /**
   * Y Delta for BAS.
   */
  beard_raggedness_max?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
