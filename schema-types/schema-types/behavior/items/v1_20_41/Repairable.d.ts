/**
 * behavior/items/format/components/repairable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:35.017Z
 */

/**
 * UNDOCUMENTED.
 */
export type Items = string[];
/**
 * UNDOCUMENTED.
 */
export type RepairAmount = string | number;
/**
 * Repair item entries.
 */
export type RepairItems = ReparItem[];

/**
 * Repairable item component: how much damage can this item repair, what items can repair it.
 */
export interface Repairable {
  on_repaired?: OnRepaired;
  repair_items?: RepairItems;
}
/**
 * Event that is called when this item has been repaired.
 */
export interface OnRepaired {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface ReparItem {
  items?: Items;
  repair_amount?: RepairAmount;
}
