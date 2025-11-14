/**
 * behavior/entities/format/components/giveable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.068Z
 */

/**
 * An items that can be given to the entity to place in their inventory.
 */
export type Properties1 =
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
/**
 * The list of items that can be given to the entity to place in their inventory.
 */
export type Properties = Properties1[];
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
 * Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.
 */
export interface Giveable {
  triggers?: Triggers;
}
/**
 * Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.
 */
export interface Triggers {
  /**
   * An optional cool down in seconds to prevent spamming interactions.
   */
  cooldown?: number;
  items?: Properties;
  on_give?: OnGive;
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
 * Event to fire when the correct item is given.
 */
export interface OnGive {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
