/**
 * behavior/entities/format/behaviors/receive_love.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.300Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the villager to stop so another villager can breed with it. Can only be used by a Villager.
 */
export interface ReceiveLove {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
