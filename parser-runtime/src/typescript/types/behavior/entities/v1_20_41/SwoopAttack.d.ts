/**
 * behavior/entities/format/behaviors/swoop_attack.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.413Z
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
 * Minimum and maximum cooldown time-range (in seconds) between each attempted swoop attack.
 */
export type DelayRange =
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
 * Allows the mob to move to attack a target. The goal ends if it has a horizontal collision or gets hit. Built to be used with flying mobs.
 */
export interface SwoopAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Added to the base size of the entity, to determine the target's maximum allowable distance, when trying to deal attack damage.
   */
  damage_reach?: number;
  delay_range?: DelayRange;
}
