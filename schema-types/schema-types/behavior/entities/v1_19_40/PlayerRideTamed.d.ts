/**
 * behavior/entities/format/behaviors/player_ride_tamed.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.849Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to be ridden by the player after being tamed.
 */
export interface PlayerRideTamed {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
