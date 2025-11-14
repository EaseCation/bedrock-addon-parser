/**
 * behavior/entities/format/behaviors/swim_wander.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.160Z
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
 * Has the fish swim around when they can't pathfind.
 */
export interface SwimWander {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Percent chance to start wandering, when not path-finding. 1 = 100%
   */
  interval?: number;
  /**
   * Distance to look ahead for obstacle avoidance, while wandering.
   */
  look_ahead?: number;
  /**
   * Amount of time (in seconds) to wander after wandering behavior was successfully started.
   */
  wander_time?: number;
}
