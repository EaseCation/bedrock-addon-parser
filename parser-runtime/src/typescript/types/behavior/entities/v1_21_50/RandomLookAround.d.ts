/**
 * behavior/entities/format/behaviors/random_look_around.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.761Z
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
  /**
   * The angle in degrees that an entity can see in the Y-axis (up-down).
   */
  angle_of_view_horizontal?: number;
  /**
   * The angle in degrees that an entity can see in the X-axis (left-right).
   */
  angle_of_view_vertical?: number;
  /**
   * The distance in blocks from which the entity will look at.
   */
  look_distance?: number;
  look_time?: LookTime;
  /**
   * The probability of looking at the target. A value of 1.00 is 100%.
   */
  probability?: number;
}
