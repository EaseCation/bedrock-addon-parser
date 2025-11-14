/**
 * behavior/entities/format/behaviors/find_underwater_treasure.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.925Z
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
 * Allows the mob to move towards the nearest underwater ruin or shipwreck.
 */
export interface FindUnderwaterTreasure {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards.
   */
  search_range?: number;
  /**
   * The distance the mob will move before stopping.
   */
  stop_distance?: number;
}
