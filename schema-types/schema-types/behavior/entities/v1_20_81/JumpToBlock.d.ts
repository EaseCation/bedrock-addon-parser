/**
 * behavior/entities/format/behaviors/jump_to_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.763Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Minimum and maximum cooldown time-range (positive, in seconds) between each attempted jump.
 */
export type CooldownRange = [] | [number] | [number, number];
export type BlockceptionMinecraftItemDescriptor =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier2 | ItemDescriptor2;
      [k: string]: unknown;
    };
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier1 = string;
/**
 * [UNDOCUMENTED] A Molang expression ran against item or block to match.
 */
export type MolangString180 = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier2 = string;
/**
 * Blocks that the mob can't jump to.
 */
export type ForbiddenBlocks = BlockceptionMinecraftItemDescriptor[];
/**
 * Blocks that the mob prefers jumping to.
 */
export type PreferredBlocks = BlockceptionMinecraftItemDescriptor[];

/**
 * Allows an entity to jump to another random block.
 */
export interface JumpToBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  cooldown_range?: CooldownRange;
  forbidden_blocks?: ForbiddenBlocks;
  /**
   * The maximum velocity with which the mob can jump.
   */
  max_velocity?: number;
  /**
   * The minimum distance (in blocks) from the mob to a block, in order to consider jumping to it.
   */
  minimum_distance?: number;
  /**
   * The minimum length (in blocks) of the mobs path to a block, in order to consider jumping to it.
   */
  minimum_path_length?: number;
  preferred_blocks?: PreferredBlocks;
  /**
   * Chance (between 0.0 and 1.0) that the mob will jump to a preferred block, if in range. Only matters if preferred blocks are defined.
   */
  preferred_blocks_chance?: number;
  /**
   * The scalefactor of the bounding box of the mob while it is jumping.
   */
  scale_factor?: number;
  /**
   * The height (in blocks, in range [2, 15]) of the search box, centered around the mob.
   */
  search_height?: number;
  /**
   * The width (in blocks, in range [2, 15]) of the search box, centered around the mob.
   */
  search_width?: number;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor1 {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor2 {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
