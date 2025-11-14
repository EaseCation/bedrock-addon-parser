/**
 * behavior/entities/format/behaviors/trade_interest.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.379Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to look at a player that is holding a tradable item.
 */
export interface TradeInterest {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The Maximum time in seconds that the trader will hold an item before attempting to switch for a different item that takes the same trade.
   */
  carried_item_switch_time?: number;
  /**
   * The time in seconds before the trader can use this goal again.
   */
  cooldown?: number;
  /**
   * The Maximum time in seconds that the trader will be interested with showing it's trade items.
   */
  interest_time?: number;
  /**
   * The Maximum time in seconds that the trader will wait when you no longer have items to trade.
   */
  remove_item_time?: number;
  /**
   * Distance in blocks this mob can be interested by a player holding an item they like.
   */
  within_radius?: number;
}
