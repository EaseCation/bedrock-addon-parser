/**
 * behavior/entities/format/components/knockback_resistance.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.983Z
 */

/**
 * Allows an entity to resist being knocked backwards by a melee attack.
 */
export interface KnockbackResistance {
  /**
   * Percentage of knockback to reduce with 1.0 being 100% reduction.
   */
  value?: number;
  /**
   * The maximum amount of knockback resistance that can be applied to the entity.
   */
  maximum?: number;
}
