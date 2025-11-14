/**
 * behavior/entities/format/behaviors/equip_item.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.932Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * The entity puts on the desired equipment.
 */
export interface EquipItem {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
