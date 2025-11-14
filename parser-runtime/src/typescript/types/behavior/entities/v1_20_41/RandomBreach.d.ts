/**
 * behavior/entities/format/behaviors/random_breach.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.588Z
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
 * Allows the mob to randomly break surface of the water.
 */
export interface RandomBreach {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
}
