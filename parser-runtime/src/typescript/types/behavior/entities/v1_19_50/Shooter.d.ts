/**
 * behavior/entities/format/components/shooter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:23.736Z
 */

/**
 * Defines the entity's ranged attack behavior.
 */
export interface Shooter {
  /**
   * ID of the Potion effect to be applied on hit.
   */
  aux_val?: number;
  /**
   * Actor definition to use as projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile
   */
  def?: string;
  /**
   * UNDOCUMENTED.
   */
  type?: string;
}
