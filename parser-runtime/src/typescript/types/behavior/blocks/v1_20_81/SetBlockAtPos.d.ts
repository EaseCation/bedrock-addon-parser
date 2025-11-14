/**
 * behavior/blocks/format/events/set_block_at_pos.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.142Z
 */

/**
 * The offset from the block's center.
 */
export type BlockOffset = [] | [number] | [number, number] | [number, number, number];
/**
 * The type of block to set.
 */
export type BlockType = BlockceptionMinecraftBlockIdentifier | BlockReference;
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
 * Sets a block relative to this block to another block type.
 */
export interface SetBlockAtPos {
  block_offset?: BlockOffset;
  block_type?: BlockType;
}
export interface BlockReference {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString180;
}
export interface States {
  [k: string]: StateValue;
}
