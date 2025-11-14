/**
 * behavior/entities/format/behaviors/hide.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.240Z
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
 * Allows a mob with the hide component to attempt to move to - and hide at - an owned or nearby POI.
 */
export interface Hide {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Amount of time in seconds that the mob reacts.
   */
  duration?: number;
  /**
   * Defines what POI type to hide at.
   */
  poi_type?: string;
  /**
   * The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition.
   */
  timeout_cooldown?: number;
}
