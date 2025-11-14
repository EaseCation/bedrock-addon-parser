/**
 * behavior/entities/format/components/health.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.038Z
 */

/**
 * The amount of health an entity to start with by default.
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
 * Specifies how much life an entity has when spawned.
 */
export interface Health {
  /**
   * The maximum starting health an entity has.
   */
  max?: number;
  value?: Value;
}
