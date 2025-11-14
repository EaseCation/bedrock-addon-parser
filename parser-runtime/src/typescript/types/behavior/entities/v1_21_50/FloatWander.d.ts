/**
 * behavior/entities/format/behaviors/float_wander.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.159Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Range of time in seconds the mob will float around before landing and choosing to do something else.
 */
export type FloatDuration =
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
 * Allows the mob to float around like the Ghast.
 */
export interface FloatWander {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
  /**
   * Height in blocks to add to the selected target position.
   */
  y_offset?: number;
  /**
   * If true, the point has to be reachable to be a valid target.
   */
  must_reach?: boolean;
  /**
   * If true, the mob will randomly pick a new point while moving to the previously selected one.
   */
  random_reselect?: boolean;
  float_duration?: FloatDuration;
}
