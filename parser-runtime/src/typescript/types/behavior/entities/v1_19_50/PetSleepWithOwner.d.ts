/**
 * behavior/entities/format/behaviors/pet_sleep_with_owner.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.593Z
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
 * Allows the mob to be tempted by food they like.
 */
export interface PetSleepWithOwner {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * Height in blocks from the owner the pet can be to sleep with owner.
   */
  search_height?: number;
  /**
   * The radius that the mob will search for an owner to curl up with.
   */
  search_radius?: number;
  /**
   * The range that the mob will search for an owner to curl up with.
   */
  search_range?: number;
}
