/**
 * behavior/entities/format/behaviors/random_sitting.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.469Z
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
 * Allows the mob to randomly sit for a duration.
 */
export interface RandomSitting {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * The minimum amount of time in seconds before the mob can stand back up.
   */
  min_sit_time?: number;
  /**
   * This is the chance that the mob will start this goal, from 0 to 1.
   */
  start_chance?: number;
  /**
   * This is the chance that the mob will stop this goal, from 0 to 1.
   */
  stop_chance?: number;
}
