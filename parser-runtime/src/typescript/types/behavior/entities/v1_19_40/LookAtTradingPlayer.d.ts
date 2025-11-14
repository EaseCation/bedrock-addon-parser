/**
 * behavior/entities/format/behaviors/look_at_trading_player.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.003Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Time range to look at the entity.
 */
export type LookTime =
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
 * Allows the mob to look at the player they are trading with.
 */
export interface LookAtTradingPlayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The distance in blocks from which the entity will look at.
   */
  look_distance?: number;
  /**
   * The probability of looking at the target. A value of 1.00 is 100%
   */
  probability?: number;
  look_time?: LookTime;
  /**
   * The angle in degrees that the mob can see in the X-axis (left-right).
   */
  angle_of_view_vertical?: number;
  /**
   * The angle in degrees that the mob can see in the Y-axis (up-down).
   */
  angle_of_view_horizontal?: number;
}
