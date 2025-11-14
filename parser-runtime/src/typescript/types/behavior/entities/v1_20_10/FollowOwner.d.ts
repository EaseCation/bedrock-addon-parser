/**
 * behavior/entities/format/behaviors/follow_owner.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.276Z
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
 * Allows the mob to follow the player that owns them.
 */
export interface FollowOwner {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Specify if the mob can teleport to the player if it is too far away.
   */
  can_teleport?: boolean;
  /**
   * Specify if the mob will follow the owner if it has heard a vibration lately.
   */
  ignore_vibration?: boolean;
  /**
   * The maximum distance in blocks this mob can be from its owner to start following, only used when canTeleport is false.
   */
  max_distance?: number;
  /**
   * The distance in blocks that the owner can be away from this mob before it starts following it.
   */
  start_distance?: number;
  /**
   * The distance in blocks this mob will stop from its owner while following it.
   */
  stop_distance?: number;
}
