/**
 * behavior/blocks/format/events/set_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.268Z
 */

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
 * Sets this block to another block type.
 */
export interface SetBlock {
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
