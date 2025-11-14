/**
 * behavior/entities/format/components/attribute.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.070Z
 */

/**
 * The amount of health an entity to start with by default.
 */
export type Value =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };

/**
 * Specifies the initial value of a specific attribute for an entity when spawned.
 */
export interface Attribute {
  /**
   * The minimum starting health an entity has.
   */
  min?: number;
  /**
   * The maximum starting health an entity has.
   */
  max?: number;
  value?: Value;
}
