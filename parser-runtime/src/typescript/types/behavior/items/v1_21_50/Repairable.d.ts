/**
 * behavior/items/format/components/repairable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.830Z
 */

/**
 * Items that can be used to repeair it
 */
export type Items = string[];
/**
 * Amount that can be repaired
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
  repair_items?: RepairItems;
}
/**
 * List of repair item entries.
 */
export interface ReparItem {
  items?: Items;
  repair_amount?: RepairAmount;
}
