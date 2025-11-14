/**
 * behavior/entities/format/components/attack.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.254Z
 */

/**
 * Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it.
 */
export type Damage =
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
 * Defines an entity's melee attack and any additional effects on it.
 */
export interface Attack {
  damage: Damage;
  /**
   * Identifier of the status ailment to apply to an entity attacked by this entity's melee attack.
   */
  effect_name?: string;
  /**
   * Duration in seconds of the status ailment applied to the damaged entity.
   */
  effect_duration?: number;
}
