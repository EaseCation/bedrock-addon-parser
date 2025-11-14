/**
 * behavior/entities/format/behaviors/move_to_land.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.503Z
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
 * Allows the mob to move back onto land when in water.
 */
export interface MoveToLand {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
   */
  search_count?: number;
  /**
   * Height in blocks the mob will look for land to move towards.
   */
  search_height?: number;
  /**
   * The distance in blocks it will look for land to move towards.
   */
  search_range?: number;
}
