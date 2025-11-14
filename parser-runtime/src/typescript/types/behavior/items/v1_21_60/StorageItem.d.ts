/**
 * behavior/items/format/components/storage_item.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.234Z
 */

/**
 * List of items that are exclusively allowed in this Storage Item. If empty all items are allowed.
 */
export type AllowedItems = string[];
/**
 * List of items that are not allowed in this Storage Item.
 */
export type BannedItems = string[];

/**
 * Storage Items can be used by other components to store other items within this item.
 */
export interface StorageItem {
  /**
   * Determines whether another Storage Item is allowed inside of this item. Default is true.
   */
  allow_nested_storage_items?: boolean;
  allowed_items?: AllowedItems;
  banned_items?: BannedItems;
  /**
   * The maximum number of different item stacks. Maximum is 64. Default is 64.
   */
  max_slots?: number;
  /**
   * The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64.
   */
  max_weight_limit?: number;
  /**
   * The weight of this item when inside another Storage Item. Default is 4. 0 means item is not allowed in another Storage Item.
   */
  weight_in_storage_item?: number;
  [k: string]: unknown;
}
