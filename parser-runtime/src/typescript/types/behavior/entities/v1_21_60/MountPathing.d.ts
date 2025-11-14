/**
 * behavior/entities/format/behaviors/mount_pathing.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.540Z
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
 * Allows the mob to move around on its own while mounted seeking a target to attack.
 */
export interface MountPathing {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The distance at which this mob wants to be away from its target.
   */
  target_dist?: number;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
}
