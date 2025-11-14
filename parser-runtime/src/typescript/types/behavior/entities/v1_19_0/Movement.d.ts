/**
 * behavior/entities/format/components/movement.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.439Z
 */

/**
 * UNDOCUMENTED.
 */
export type Value = [] | [number] | [number, number] | number | Range;

/**
 * UNDOCUMENTED.
 */
export interface Movement {
  value?: Value;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
export interface Range {
  range_min?: number;
  range_max?: number;
}
