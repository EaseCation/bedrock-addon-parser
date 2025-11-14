/**
 * behavior/entities/format/components/damage_over_time.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.520Z
 */

/**
 * Applies defined amount of damage to the entity at specified intervals.
 */
export interface DamageOverTime {
  /**
   * Amount of damage caused each hurt.
   */
  damage_per_hurt?: number;
  /**
   * Time in seconds between damage.
   */
  time_between_hurt?: number;
}
