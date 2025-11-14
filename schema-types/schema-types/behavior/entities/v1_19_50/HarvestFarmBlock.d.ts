/**
 * behavior/entities/format/behaviors/harvest_farm_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.787Z
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
 * Allows the entity to search within an area for farmland with air above it. If found, the entity will replace the air block by planting a seed item from its inventory on the farmland block. This goal requires "minecraft:inventory" and "minecraft:navigation" to execute. This goal will not execute if the entity does not have an item in its inventory.
 */
export interface HarvestFarmBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The maximum amount of time in seconds that the goal can take before searching for the first harvest block. The time is chosen between 0 and this number.
   */
  max_seconds_before_search?: number;
  /**
   * The maximum amount of time in seconds that the goal can take before searching again, after failing to find a a harvest block already. The time is chosen between 0 and this number.
   */
  search_cooldown_max_seconds?: number;
  /**
   * The number of randomly selected blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * The height in blocks the entity will search within to find a valid target position.
   */
  search_height?: number;
  /**
   * The distance in blocks the entity will search within to find a valid target position.
   */
  search_range?: number;
  /**
   * The amount of time in seconds that the goal will cooldown after a successful reap/sow, before it can start again.
   */
  seconds_until_new_task?: number;
}
