/**
 * behavior/entities/format/behaviors/dragonstrafeplayer.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.009Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Minimum and maximum distance, from the target, this entity can use this behavior.
 */
export type TargetZone =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };

/**
 * Allows this entity to fly around looking for a player to shoot fireballs at. Can only be used by the Ender Dragon.
 */
export interface Dragonstrafeplayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The speed this entity moves when this behavior has started or while it's active.
   */
  active_speed?: number;
  /**
   * Maximum distance of this entity's fireball attack while strafing.
   */
  fireball_range?: number;
  /**
   * The speed this entity moves while this behavior is not active.
   */
  flight_speed?: number;
  /**
   * Percent chance to to switch this entity's strafe direction between clockwise and counterclockwise. Switch direction chance occurs each time a new target is chosen (1.0 = 100%).
   */
  switch_direction_probability?: number;
  /**
   * Time (in seconds) the target must be in fireball range, and in view [ie, no solid terrain in-between the target and this entity], before a fireball can be shot.
   */
  target_in_range_and_in_view_time?: number;
  target_zone?: TargetZone;
  /**
   * The speed at which this entity turns while using this behavior.
   */
  turn_speed?: number;
  /**
   * The target must be within "view_angle" degrees of the dragon's current rotation before a fireball can be shot.
   */
  view_angle?: number;
}
