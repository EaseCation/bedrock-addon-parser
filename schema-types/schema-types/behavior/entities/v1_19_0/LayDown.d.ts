/**
 * behavior/entities/format/behaviors/lay_down.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.840Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows mobs to lay down at times.
 */
export interface LayDown {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * A random value in which the goal can use to pull out of the behavior. This is a 1/interval chance to play the sound
   */
  random_stop_interval?: number;
}
