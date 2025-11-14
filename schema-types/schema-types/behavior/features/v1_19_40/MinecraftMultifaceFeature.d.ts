/**
 * behavior/features/1.13.0/features/minecraft.multiface_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:14.308Z
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
 *  How far, in blocks, this feature can search for a valid position to place.
 *
 * @minItems 1
 */
export type CanPlaceOn = [Block, ...Block[]];
/**
 *  A list of blocks that the block in this feature can be placed on. Omit this field to allow any block to be placed on.
 */
export type Block = string;

/**
 * `minecraft:multiface_feature` places one or a few multiface blocks on floors/walls/ceilings. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if this feature can be placed on them based on the list provided in the `can_place_on` field. If no `can_replace_on` field is specified, the `place_block` block can be placed on any existing block.
 * This feature will also try to spread the `place_block` block around the location in world the feature is placed.
 * Succeeds if: At least one block is successfully placed.
 * Fails if: All block placements fail.
 */
export interface MultifaceFeature {
  description: Description;
  places_block: BlockceptionMinecraftBlockIdentifier;
  /**
   * How far, in blocks, this feature can search for a valid position to place.
   */
  search_range: number;
  /**
   * Can this feature be placed on the ground (top face of a block)?.
   */
  can_place_on_floor: boolean;
  /**
   * Can this feature be placed on the ceiling (bottom face of a block)?.
   */
  can_place_on_ceiling: boolean;
  /**
   * Can this feature be placed on the wall (side faces of a block)?.
   */
  can_place_on_wall: boolean;
  /**
   * For each block placed by this feature, how likely will that block spread to another?.
   */
  chance_of_spreading: number;
  can_place_on?: CanPlaceOn;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
