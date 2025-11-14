/**
 * behavior/entities/format/behaviors/make_love.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.709Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the villager to look for a mate to spawn other villagers with. Can only be used by Villagers.
 */
export interface MakeLove {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
