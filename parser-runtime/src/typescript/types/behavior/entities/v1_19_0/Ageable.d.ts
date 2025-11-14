/**
 * behavior/entities/format/components/ageable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.824Z
 */

/**
 * List of items that the entity drops when it grows up.
 */
export type DropItems =
  | BlockceptionMinecraftItemIdentifier[]
  | BlockceptionMinecraftItemIdentifier1;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier1 = string;
/**
 * List of items that can be fed to the entity. Includes `item` for the item name and `growth` to define how much time it grows up by
 */
export type FeedItems =
  | BlockceptionMinecraftItemIdentifier[]
  | {
      growth?: number;
      item?: BlockceptionMinecraftItemIdentifier;
      [k: string]: unknown;
    }[]
  | BlockceptionMinecraftItemIdentifier2;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier2 = string;
/**
 * Event to run when this entity grows up.
 */
export type GrowUp =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target;
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
  /**
   * The feed item used will transform to this item upon successful interaction. Format: itemName:auxValue
   */
  transform_to_item?: string;
}
