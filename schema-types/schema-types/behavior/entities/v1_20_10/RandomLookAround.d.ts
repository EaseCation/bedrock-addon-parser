/**
 * behavior/entities/format/behaviors/random_look_around.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.972Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The range of time in seconds the mob will stay looking in a random direction before looking elsewhere
 */
export type LookTime = [] | [number] | [number, number];

/**
 * Allows the mob to randomly look around.
 */
export interface RandomLookAround {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  look_time?: LookTime;
  /**
   * The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   */
  max_angle_of_view_horizontal?: number;
  /**
   * The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   */
  min_angle_of_view_horizontal?: number;
}
