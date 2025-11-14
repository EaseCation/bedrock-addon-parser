/**
 * behavior/entities/format/components/equip_item.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.729Z
 */

/**
 * Item that the entity should not equip.
 */
export type ExcludedItems1 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier2 | ItemDescriptor2;
      [k: string]: unknown;
    };
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier1 = string;
/**
 * [UNDOCUMENTED] A Molang expression ran against item or block to match.
 */
export type MolangString180 = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier2 = string;
/**
 * List of items that the entity should not equip.
 */
export type ExcludedItems = ExcludedItems1[];

/**
 * The entity puts on the desired equipment.
 */
export interface EquipItem {
  excluded_items?: ExcludedItems;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor1 {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor2 {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
