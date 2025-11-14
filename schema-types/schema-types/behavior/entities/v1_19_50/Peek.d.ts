/**
 * behavior/entities/format/behaviors/peek.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.595Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to peek out. This is what the shulker uses to look out of its shell.
 */
export interface Peek {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
