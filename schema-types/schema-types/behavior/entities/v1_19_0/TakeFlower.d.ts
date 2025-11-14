/**
 * behavior/entities/format/behaviors/take_flower.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.323Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Can only be used by Villagers. Allows the mob to accept flowers from Iron Golems.
 */
export interface TakeFlower {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
