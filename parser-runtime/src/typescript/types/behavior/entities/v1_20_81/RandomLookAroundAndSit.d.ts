/**
 * behavior/entities/format/behaviors/random_look_around_and_sit.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.487Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to randomly sit and look around for a duration. Note: Must have a sitting animation set up to use this.
 */
export interface RandomLookAroundAndSit {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If the goal should continue to be used as long as the mob is leashed.
   */
  continue_if_leashed?: boolean;
  /**
   * The mob will stay sitting on reload.
   */
  continue_sitting_on_reload?: boolean;
  /**
   * The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   */
  max_angle_of_view_horizontal?: number;
  /**
   * The max amount of unique looks a mob will have while looking around.
   */
  max_look_count?: number;
  /**
   * The max amount of time (in ticks) a mob will stay looking at a direction while looking around.
   */
  max_look_time?: number;
  /**
   * The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   */
  min_angle_of_view_horizontal?: number;
  /**
   * The min amount of unique looks a mob will have while looking around.
   */
  min_look_count?: number;
  /**
   * The min amount of time (in ticks) a mob will stay looking at a direction while looking around.
   */
  min_look_time?: number;
  /**
   * The probability of randomly looking around/sitting.
   */
  probability?: number;
  /**
   * The cooldown in seconds before the goal can be used again.
   */
  random_look_around_cooldown?: number;
}
