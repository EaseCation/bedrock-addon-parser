/**
 * behavior/entities/format/behaviors/trade_with_player.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.301Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the player to trade with this mob.
 */
export interface TradeWithPlayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
