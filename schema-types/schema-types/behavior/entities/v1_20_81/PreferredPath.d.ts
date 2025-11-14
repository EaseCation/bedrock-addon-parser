/**
 * behavior/entities/format/components/preferred_path.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.305Z
 */

/**
 * A minecraft block reference.
 */
export type BlockReference = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier1 = string;
/**
 * The key of property is the name of the block state/property, the value must be the same as the block properties accepted values.
 */
export type StateValue = boolean | number | string;
/**
 * A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags.
 */
export type MolangString180 = string;
/**
 * A list of blocks with their associated cost.
 */
export type PreferredPathBlocks = {
  cost?: number;
  blocks?: BlockReference[];
}[];

/**
 * Specifies costing information for mobs that prefer to walk on preferred paths.
 */
export interface PreferredPath {
  /**
   * Cost for non-preferred blocks.
   */
  default_block_cost?: number;
  /**
   * Added cost for jumping up a node.
   */
  jump_cost?: number;
  /**
   * Distance mob can fall without taking damage.
   */
  max_fall_blocks?: number;
  preferred_path_blocks?: PreferredPathBlocks;
}
export interface BlockReference1 {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString180;
}
export interface States {
  [k: string]: StateValue;
}
