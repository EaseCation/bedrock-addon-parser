/**
 * behavior/entities/format/behaviors/fertilize_farm_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.866Z
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
 * Allows the mob to search within an area for a growable crop block. If found, the mob will use any available fertilizer in their inventory on the crop. This goal will not execute if the mob does not have a fertilizer item in its inventory.
 */
export interface FertilizeFarmBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached it's target position.
   */
  goal_radius?: number;
  /**
   * The maximum number of times the mob will use fertilzer on the target block.
   */
  max_fertilizer_usage?: number;
  /**
   * The maximum amount of time in seconds that the goal can take before searching again. The time is chosen between 0 and this number.
   */
  search_cooldown_max_seconds?: number;
  /**
   * The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * The Height in blocks the mob will search within to find a valid target position.
   */
  search_height?: number;
  /**
   * The distance in blocks the mob will search within to find a valid target position.
   */
  search_range?: number;
}
