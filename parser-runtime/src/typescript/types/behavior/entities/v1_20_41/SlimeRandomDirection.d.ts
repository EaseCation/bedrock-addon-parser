/**
 * behavior/entities/format/behaviors/slime_random_direction.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.522Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Can only be used by Slimes and Magma Cubes. Allows the mob to move in random directions like a slime.
 */
export interface SlimeRandomDirection {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Additional time (in whole seconds), chosen randomly in the range of [0, "add_random_time_range"], to add to "min_change_direction_time".
   */
  add_random_time_range?: number;
  /**
   * Constant minimum time (in seconds) to wait before choosing a new direction.
   */
  min_change_direction_time?: number;
  /**
   * Maximum rotation angle range (in degrees) when randomly choosing a new direction.
   */
  turn_range?: number;
}
