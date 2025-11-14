/**
 * behavior/entities/format/behaviors/explore_outskirts.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.182Z
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
 * The distance from the boundary the villager must be within in to explore the outskirts.
 */
export type DistFromBoundary = [] | [number] | [number, number] | [number, number, number];

/**
 * Allows the entity to first travel to a random point on the outskirts of the village, and then explore random points within a small distance. This goal requires "minecraft:dweller" and "minecraft:navigation" to execute.
 */
export interface ExploreOutskirts {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  dist_from_boundary?: DistFromBoundary;
  /**
   * Total distance in blocks the the entity will explore beyond the village bounds when choosing its travel point.
   */
  explore_dist?: number;
  /**
   * This is the maximum amount of time an entity will attempt to reach it's travel point on the outskirts of the village before the goal exits.
   */
  max_travel_time?: number;
  /**
   * The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the minimum wait time. This value is also the total amount of time the entity will explore random points before the goal stops.
   */
  max_wait_time?: number;
  /**
   * The entity must be within this distance for it to consider it has successfully reached its target.
   */
  min_dist_from_target?: number;
  /**
   * The minimum perimeter of the village required to run this goal.
   */
  min_perimeter?: number;
  /**
   * The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the maximum wait time.
   */
  min_wait_time?: number;
  /**
   * A new explore point will randomly be chosen within this XZ distance of the current target position when navigation has finished and the wait timer has elapsed.
   */
  next_xz?: number;
  /**
   * A new explore point will randomly be chosen within this Y distance of the current target position when navigation has finished and the wait timer has elapsed.
   */
  next_y?: number;
  /**
   * Each new explore point will be chosen on a random interval between the minimum and the maximum wait time, divided by this value. This does not apply to the first explore point chosen when the goal runs.
   */
  timer_ratio?: number;
}
