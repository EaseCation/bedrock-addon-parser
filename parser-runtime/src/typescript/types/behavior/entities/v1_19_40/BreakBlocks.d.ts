/**
 * behavior/entities/format/components/break_blocks.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.890Z
 */

/**
 * UNDOCUMENTED.
 */
export type BlockceptionMinecraftGeneral180BlocksItem = string;
/**
 * A list of the blocks that can be broken as this entity moves around.
 */
export type BreakableBlocks = BlockceptionMinecraftGeneral180BlocksItem[];

/**
 * Specifies the blocks that this entity can break as it moves around.
 */
export interface BreakBlocks {
  breakable_blocks?: BreakableBlocks;
}
