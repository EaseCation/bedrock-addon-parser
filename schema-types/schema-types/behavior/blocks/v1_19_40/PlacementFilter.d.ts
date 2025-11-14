/**
 * behavior/blocks/format/components/placement_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.193Z
 */

/**
 * List of any of the following strings: up, down, north, south, east, west, side, all.
 */
export type AllowedFaces = ('up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all')[];
/**
 * List of blocks (can use tags to specify them) that this block can be placed against in the allowed_faces direction.
 */
export type BlockFilter = string[];
/**
 * List of conditions where the block can be placed/survive.
 */
export type Conditions = Condition[];

/**
 * Sets rules for under what conditions the block can be placed/survive.
 */
export interface PlacementFilter {
  conditions?: Conditions;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface Condition {
  allowed_faces?: AllowedFaces;
  block_filter?: BlockFilter;
  [k: string]: unknown;
}
