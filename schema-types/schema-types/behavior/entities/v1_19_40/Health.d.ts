/**
 * behavior/entities/format/components/health.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.733Z
 */

/**
 * Current health of the entity.
 */
export type Value =
  | number
  | {
      /**
       * The minimum amount of health this mob could have.
       */
      range_min: number;
      /**
       * The maximum amount of health this mob could have.
       */
      range_max: number;
    };

/**
 * Sets the amount of health this mob has.
 */
export interface Health {
  /**
   * The maximum health the entity can heal.
   */
  max?: number;
  value?: Value;
}
