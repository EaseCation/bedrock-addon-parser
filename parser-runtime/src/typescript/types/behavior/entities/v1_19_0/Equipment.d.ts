/**
 * behavior/entities/format/components/equipment.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.623Z
 */

/**
 * A list of slots with the chance to drop an equipped item from that slot.
 */
export type SlotDropChance = SlotDropChance1[];
/**
 * The file path to the equipment table, relative to the behavior pack's root.
 */
export type BlockceptionMinecraftLootTableIdentifier = string;

/**
 * Sets the equipment table to use for the entity.
 */
export interface Equipment {
  slot_drop_chance?: SlotDropChance;
  table?: BlockceptionMinecraftLootTableIdentifier;
}
/**
 * A slots with the chance to drop an equipped item from that slot.
 */
export interface SlotDropChance1 {
  /**
   * The chance that the item in this slot will drop.
   */
  drop_chance?: number;
  /**
   * The slot in which the item will drop from.
   */
  slot?: string;
}
