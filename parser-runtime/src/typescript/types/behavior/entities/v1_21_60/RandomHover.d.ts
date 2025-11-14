/**
 * behavior/entities/format/behaviors/random_hover.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.330Z
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
 * The height above the surface which the mob will try to maintain.
 */
export type HoverHeight = [] | [number] | [number, number];

/**
 * Allows the mob to hover around randomly, close to the surface.
 */
export interface RandomHover {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  hover_height?: HoverHeight;
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
  /**
   * Height in blocks to add to the selected target position.
   */
  y_offset?: number;
}
