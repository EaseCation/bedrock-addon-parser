/**
 * behavior/features/features/minecraft.partially_exposed_blob_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:51.066Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Reference to the block to be placed.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * Defines a block face that is allowed to be exposed to air and/or water. Other faces need to be embedded for blocks to be placed by this feature. Defaults to upwards face
 */
export type ExposedFace = 'up' | 'down' | 'side' | 'north' | 'east' | 'west' | 'south';

/**
 * 'minecraft:partially_exposed_blob_feature' generates a blob of the specified block with the specified dimensions For the most part the blob is embedded in the specified surface, however a single side is allowed to be exposed.
 */
export interface PartiallyExposedBlobFeature {
  description: Description;
  places_block: BlockceptionMinecraftBlockIdentifier;
  /**
   * Defines the cubic radius of the blob.
   */
  placement_radius_around_floor: number;
  /**
   * The probability of trying to place a block at each position within the placement bounds.
   */
  placement_probability_per_valid_position: number;
  exposed_face?: ExposedFace;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
