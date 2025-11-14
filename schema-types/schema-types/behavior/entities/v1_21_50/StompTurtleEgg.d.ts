/**
 * behavior/entities/format/behaviors/stomp_turtle_egg.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.626Z
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
 * Allows this mob to stomp turtle eggs.
 */
export interface StompTurtleEgg {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
   */
  search_count?: number;
  /**
   * Height in blocks the mob will look for turtle eggs to move towards.
   */
  search_height?: number;
  /**
   * The distance in blocks it will look for turtle eggs to move towards.
   */
  search_range?: number;
}
