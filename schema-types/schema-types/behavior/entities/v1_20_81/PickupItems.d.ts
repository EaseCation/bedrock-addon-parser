/**
 * behavior/entities/format/behaviors/pickup_items.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.540Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;
export type ExcludedItem =
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
 * List of items this mob will not pick up.
 */
export type ExcludedItems = ExcludedItem[];

/**
 * Allows the mob to pick up items on the ground.
 */
export interface PickupItems {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob can pickup any item.
   */
  can_pickup_any_item?: boolean;
  /**
   * If true, the mob can pickup items to its hand or armor slots.
   */
  can_pickup_to_hand_or_equipment?: boolean;
  /**
   * Amount of time an offended entity needs before being willing to pick up items.
   */
  cooldown_after_being_attacked?: number;
  excluded_items?: ExcludedItems;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot.
   */
  goal_radius?: number;
  /**
   * Maximum distance this mob will look for items to pick up.
   */
  max_dist?: number;
  /**
   * Height in blocks the mob will look for items to pick up.
   */
  search_height?: number;
  /**
   * If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items.
   */
  pickup_based_on_chance?: boolean;
  /**
   * If true, the mob will pickup the same item as the item in its hand.
   */
  pickup_same_items_as_in_hand?: boolean;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
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
