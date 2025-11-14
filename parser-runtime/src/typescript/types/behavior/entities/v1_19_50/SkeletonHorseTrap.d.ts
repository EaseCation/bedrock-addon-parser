/**
 * behavior/entities/format/behaviors/skeleton_horse_trap.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.496Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows Equine mobs to be Horse Traps and be triggered like them, spawning a lightning bolt and a bunch of horses when a player is nearby. Can only be used by Horses, Mules, Donkeys and Skeleton Horses.
 */
export interface SkeletonHorseTrap {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Amount of time in seconds the trap exists. After this amount of time is elapsed, the trap is removed from the world if it hasn't been activated
   */
  duration?: number;
  /**
   * Distance in blocks that the player has to be within to trigger the horse trap.
   */
  within_radius?: number;
}
