/**
 * behavior/items/format/components/wearable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.818Z
 */

/**
 * Which equipment slot the item can fit in
 */
export type Slot =
  | 'none'
  | 'slot.weapon.mainhand'
  | 'slot.weapon.offhand'
  | 'slot.armor.head'
  | 'slot.armor.chest'
  | 'slot.armor.legs'
  | 'slot.armor.feet'
  | 'slot.hotbar'
  | 'slot.inventory'
  | 'slot.enderchest'
  | 'slot.saddle'
  | 'slot.armor'
  | 'slot.chest'
  | 'slot.equippable';

/**
 * Wearable item component.
 */
export interface Wearable {
  /**
   * How much protection does the armor item have.
   */
  protection?: number;
  /**
   * Sets if the item can be dropped by a dispenser block
   */
  dispensable?: boolean;
  slot?: Slot;
}
