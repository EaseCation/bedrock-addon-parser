/**
 * behavior/entities/format/behaviors/follow_target_captain.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.139Z
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
 * Allows mob to move towards its current target captain.
 */
export interface FollowTargetCaptain {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Defines the distance in blocks the mob will stay from its target while following.
   */
  follow_distance?: number;
  /**
   * Defines the maximum distance in blocks a mob can get from its target captain before giving up trying to follow it.
   */
  within_radius?: number;
}
