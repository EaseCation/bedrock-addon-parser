/**
 * behavior/entities/format/behaviors/beg.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.091Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * List of items that this mob likes.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * List of items that this mob likes.
 */
export type Properties = BlockceptionMinecraftItemIdentifier[];
/**
 * The range of time in seconds this mob will stare at the player holding a food they like, begging for it.
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
 * Allows this mob to look at and follow the player that holds food they like.
 */
export interface Beg {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  items?: Properties;
  /**
   * Distance in blocks the mob will beg from.
   */
  look_distance?: number;
  look_time?: LookTime;
}
