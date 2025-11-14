/**
 * behavior/blocks/format/states/integer_range.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.125Z
 */

export interface IntegerRange {
  values: StateIntegerValueRange;
}
export interface StateIntegerValueRange {
  /**
   * The lowest integer this state supports. This is also used as the default state value.
   */
  min: number;
  /**
   * The highest integer this state supports. This cannot be more than 15 above the minimum.
   */
  max: number;
}
