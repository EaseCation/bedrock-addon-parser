/**
 * behavior/entities/format/components/shareables.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.252Z
 */

/**
 * The name of the item.
 */
export type BlockceptionMinecraftItemIdentifier = string;

/**
 * Defines a list of items the mob wants to share or pick up. Each item must have the following parameters:
 */
export interface Shareables {
  /**
   * A bucket for all other items in the game. Note this category is always least priority items.
   */
  all_items?: boolean;
  /**
   * Maximum number of this item the mob will hold.
   */
  all_items_max_amount?: number;
  /**
   * Number of this item considered extra that the entity wants to share.
   */
  all_items_surplus_amount?: number;
  /**
   * Number of this item this entity wants to share.
   */
  all_items_want_amount?: number;
  /**
   * List of items that the entity wants to share.
   */
  items?: Item[];
  /**
   * Determines whether the mob can only pickup one item at a time.
   */
  singular_pickup?: boolean;
}
/**
 * An Item that the entity wants to share.
 */
export interface Item {
  /**
   * Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an Admire component and an Admire goal.
   */
  admire?: boolean;
  /**
   * Mob will barter for the item after picking it up. For this to work the mob needs to have a Barter component and a Barter goal.
   */
  barter?: boolean;
  /**
   * Determines whether the mob will consume the item or not.
   */
  consume_item?: boolean;
  /**
   * Defines the item this entity wants to craft with the item defined above. Should be an item name.
   */
  craft_into?: string;
  item?: BlockceptionMinecraftItemIdentifier;
  /**
   * Aux value for the item.
   */
  item_aux?: number;
  /**
   * Maximum number of this item the mob will hold.
   */
  max_amount?: number;
  /**
   * Maximum number of this item the mob will pick up during a single goal tick.
   */
  pickup_limit?: number;
  /**
   * Prioritizes which items the entity prefers. 0 is the highest priority.
   */
  priority?: number;
  /**
   * Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped.
   */
  stored_in_inventory?: boolean;
  /**
   * Number of this item considered extra that the entity wants to share.
   */
  surplus_amount?: number;
  /**
   * Number of this item this entity wants to have.
   */
  want_amount?: number;
  /**
   * Determines whether the mob can only pickup the item and not drop it.
   */
  pickup_only?: boolean;
}
