/**
 * behavior/entities/format/behaviors/stroll_towards_village.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.581Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to move into a random location within a village within the search range.
 */
export interface StrollTowardsVillage {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * The distance in blocks to search for points inside villages. If <= 0, find the closest village regardless of distance.
   */
  search_range?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   */
  speed_multiplier?: number;
  /**
   * This is the chance that the mob will start this goal, from 0 to 1.
   */
  start_chance?: number;
}
