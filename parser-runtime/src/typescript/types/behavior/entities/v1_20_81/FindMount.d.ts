/**
 * behavior/entities/format/behaviors/find_mount.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.863Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to look around for another mob to ride atop it.
 */
export interface FindMount {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, the mob will not go into water blocks when going towards a mount.
   */
  avoid_water?: boolean;
  /**
   * This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance
   */
  mount_distance?: number;
  /**
   * Time the mob will wait before starting to move towards the mount.
   */
  start_delay?: number;
  /**
   * If true, the mob will only look for a mount if it has a target.
   */
  target_needed?: boolean;
  /**
   * Distance in blocks within which the mob will look for a mount.
   */
  within_radius?: number;
  /**
   * The number of failed attempts to make before this goal is no longer used.
   */
  max_failed_attempts?: number;
}
