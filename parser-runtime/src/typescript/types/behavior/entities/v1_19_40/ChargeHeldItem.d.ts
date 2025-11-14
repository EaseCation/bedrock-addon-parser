/**
 * behavior/entities/format/behaviors/charge_held_item.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.320Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The list of items that can be used to charge the held item. This list is required and must have at least one item in it.
 */
export type Items = string[];

/**
 * Allows an entity to charge and use their held item.
 */
export interface ChargeHeldItem {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  items?: Items;
}
