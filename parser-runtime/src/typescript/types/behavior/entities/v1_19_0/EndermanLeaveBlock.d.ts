/**
 * behavior/entities/format/behaviors/enderman_leave_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.939Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the enderman to drop a block they are carrying. Can only be used by Endermen.
 */
export interface EndermanLeaveBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
