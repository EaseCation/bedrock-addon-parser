/**
 * behavior/entities/format/behaviors/dragonchargeplayer.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.272Z
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
 * Allows this entity to attack a player by charging at them. The player is chosen by the "minecraft:behavior.dragonscanning". Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonchargeplayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The speed this entity moves when this behavior has started or while it's active.
   */
  active_speed?: number;
  /**
   * If the dragon is outside the "target_zone" for longer than "continue_charge_threshold_time" seconds, the charge is canceled.
   */
  continue_charge_threshold_time?: number;
  /**
   * The speed this entity moves while this behavior is not active.
   */
  flight_speed?: number;
  target_zone?: TargetZone;
  /**
   * The speed at which this entity turns while using this behavior.
   */
  turn_speed?: number;
}
