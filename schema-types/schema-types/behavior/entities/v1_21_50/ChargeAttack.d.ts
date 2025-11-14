/**
 * behavior/entities/format/behaviors/charge_attack.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.358Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;

/**
 * Allows this entity to damage a target by using a running attack.
 */
export interface ChargeAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * A charge attack cannot start if the entity is farther than this distance to the target.
   */
  max_distance?: number;
  /**
   * A charge attack cannot start if the entity is closer than this distance to the target.
   */
  min_distance?: number;
  /**
   * Percent chance this entity will start a charge attack, if not already attacking (1.0 = 100%)
   */
  success_rate?: number;
}
