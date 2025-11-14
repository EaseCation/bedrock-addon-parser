/**
 * behavior/items/format/components/block_placer.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:06.327Z
 */

/**
 * Tags.
 */
export type MolangString180 = string;
/**
 * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
 */
export type UseOn = AllowedBlock[];

/**
 * Planter item component. planter items are items that can be planted.
 */
export interface BlockPlacer {
  /**
   * Set the placement block name for the planter item.
   */
  block: string;
  use_on?: UseOn;
}
/**
 * A block descriptor that allows to be placed.
 */
export interface AllowedBlock {
  tags?: MolangString180;
  [k: string]: unknown;
}
