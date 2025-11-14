/**
 * behavior/entities/format/behaviors/random_look_around_and_sit.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.584Z
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
   * The Maximum amount of unique looks a mob will have while looking around.
   */
  max_look_count?: number;
  /**
   * The Maximum amount of time (in ticks) a mob will stay looking at a direction while looking around.
   */
  max_look_time?: number;
  /**
   * The Minimum amount of unique looks a mob will have while looking around.
   */
  min_look_count?: number;
  /**
   * The Minimum amount of time (in ticks) a mob will stay looking at a direction while looking around.
   */
  min_look_time?: number;
  /**
   * The probability of randomly looking around/sitting.
   */
  probability?: number;
}
