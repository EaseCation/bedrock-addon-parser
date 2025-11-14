/**
 * behavior/entities/format/behaviors/silverfish_merge_with_stone.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.258Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to go into stone blocks like Silverfish do. Currently it can only be used by Silverfish.
 */
export interface SilverfishMergeWithStone {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
