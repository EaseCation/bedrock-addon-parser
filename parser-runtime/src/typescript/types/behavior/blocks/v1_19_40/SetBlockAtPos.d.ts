/**
 * behavior/blocks/format/events/set_block_at_pos.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.174Z
 */

/**
 * The offset from the block's center.
 */
export type BlockOffset = [] | [number] | [number, number] | [number, number, number];

/**
 * Sets a block relative to this block to another block type.
 */
export interface SetBlockAtPos {
  block_offset?: BlockOffset;
  /**
   * The type of block to set.
   */
  block_type?: string;
}
