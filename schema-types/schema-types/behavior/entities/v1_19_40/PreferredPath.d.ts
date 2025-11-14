/**
 * behavior/entities/format/components/preferred_path.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.472Z
 */

/**
 * UNDOCUMENTED.
 */
export type BlockceptionMinecraftGeneral180BlocksItem = string;
/**
 * A list of blocks with their associated cost.
 */
export type PreferredPathBlocks = {
  cost?: number;
  blocks?: BlockceptionMinecraftGeneral180BlocksItem[];
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
  preferred_path_blocks: PreferredPathBlocks;
}
