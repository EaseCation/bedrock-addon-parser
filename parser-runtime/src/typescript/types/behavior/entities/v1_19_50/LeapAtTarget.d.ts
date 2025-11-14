/**
 * behavior/entities/format/behaviors/leap_at_target.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.735Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows monsters to jump at and attack their target. Can only be used by hostile mobs.
 */
export interface LeapAtTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air
   */
  must_be_on_ground?: boolean;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * The height in blocks the mob jumps when leaping at its target.
   */
  yd?: number;
  /**
   * Distance in blocks the mob jumps when leaping at its target.
   */
  target_dist?: number;
}
