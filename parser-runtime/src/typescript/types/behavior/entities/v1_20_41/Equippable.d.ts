/**
 * behavior/entities/format/components/equippable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.085Z
 */

/**
 * A item name.
 */
export type AcceptedItems1 = AcceptedItems2 & AcceptedItems3;
export type AcceptedItems2 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * [UNDOCUMENTED] A Molang expression ran against item or block to match.
 */
export type MolangString180 = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier1 = string;
export type AcceptedItems3 = string;
/**
 * The list of items that can go in this slot.
 */
export type AcceptedItems = AcceptedItems1[];
/**
 * Identifier of the item that can be equipped for this slot.
 */
export type Item =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * The target of the event.
 */
export type Target =
  | 'baby'
  | 'block'
  | 'damager'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';
/**
 * List of slots and the item that can be equipped.
 */
export type Slots = Slots1[];

/**
 * Defines an entity's behavior for having items equipped to it.
 */
export interface Equippable {
  slots?: Slots;
}
/**
 * A slot and the item that can be equipped.
 */
export interface Slots1 {
  /**
   * The slot number of this slot.
   */
  slot?: number;
  accepted_items?: AcceptedItems;
  item?: Item;
  /**
   * Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls.
   */
  interact_text?: string;
  on_equip?: OnEquip;
  on_unequip?: OnUnequip;
  [k: string]: unknown;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor {
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
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * Event to trigger when this entity is equipped with this item.
 */
export interface OnEquip {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to trigger when this item is removed from this entity.
 */
export interface OnUnequip {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
