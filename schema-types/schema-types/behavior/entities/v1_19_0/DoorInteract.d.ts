/**
 * behavior/entities/format/behaviors/door_interact.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.018Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to drink potions based on specified environment conditions.
 */
export interface DoorInteract {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
