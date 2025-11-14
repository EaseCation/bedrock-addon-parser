/**
 * behavior/entities/format/behaviors/move_outdoors.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.786Z
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
 * Forces the entity to move `outside`, whatever that means.
 */
export interface MoveOutdoors {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The radius away from the target block to count as reaching the goal.
   */
  goal_radius?: number;
  /**
   * The amount of times to try finding a random outdoors position before failing.
   */
  search_count?: number;
  /**
   * The y range to search for an outdoors position for.
   */
  search_height?: number;
  /**
   * The x and z range to search for an outdoors position for.
   */
  search_range?: number;
  /**
   * The cooldown time in seconds before the goal can be reused after pathfinding fails.
   */
  timeout_cooldown?: number;
}
