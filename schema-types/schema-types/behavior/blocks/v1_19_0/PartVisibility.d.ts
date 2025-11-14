/**
 * behavior/blocks/format/components/part_visibility.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.041Z
 */

/**
 * Maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/falseSupported queries include 'has_block_property', 'block_property', and other queries that can evaluate without knowledge of the block's in-game positional or player affected data.
 */
export interface PartVisibility {
  [k: string]: string;
}
