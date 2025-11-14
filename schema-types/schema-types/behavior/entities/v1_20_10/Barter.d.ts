/**
 * behavior/entities/format/behaviors/barter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.477Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Enables the mob to barter for items that have been configured as barter currency. Must be used in combination with the barter component
 */
export interface Barter {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
