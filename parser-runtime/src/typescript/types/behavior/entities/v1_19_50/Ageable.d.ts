/**
 * behavior/entities/format/components/ageable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.295Z
 */

/**
 * List of items that the entity drops when it grows up.
 */
export type DropItems =
  | BlockceptionMinecraftItemDescriptor[]
  | BlockceptionMinecraftItemDescriptor1;
export type BlockceptionMinecraftItemDescriptor =
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
export type BlockceptionMinecraftItemDescriptor1 = (
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    }
) &
  string;
/**
 * List of items that can be fed to the entity. Includes `item` for the item name and `growth` to define how much time it grows up by
 */
export type FeedItems =
  | (
      | BlockceptionMinecraftItemIdentifier
      | {
          growth?: number;
          item?: BlockceptionMinecraftItemDescriptor;
          [k: string]: unknown;
        }
    )[]
  | BlockceptionMinecraftItemIdentifier2;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier2 = string;
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
 * The feed item used will transform to this item upon successful interaction. Format: itemName:auxValue
 */
export type TransformToItem =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };

/**
 * Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.
 */
export interface Ageable {
  drop_items?: DropItems;
  /**
   * Amount of time before the entity grows up, -1 for always a baby.
   */
  duration?: number;
  feed_items?: FeedItems;
  grow_up?: GrowUp;
  transform_to_item?: TransformToItem;
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
 * Event to run when this entity grows up.
 */
export interface GrowUp {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
