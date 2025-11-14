/**
 * behavior/entities/format/behaviors/snacking.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.485Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Items that we are interested in snacking on.
 */
export type Items = Item[] | BlockceptionMinecraftItemDescriptor;
export type Item =
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
export type BlockceptionMinecraftItemDescriptor =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };

/**
 * Allows the mob to take a load off and snack on food that it found nearby.
 */
export interface Snacking {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  items?: Items;
  /**
   * The cooldown time in seconds before the mob is able to snack again.
   */
  snacking_cooldown?: number;
  /**
   * The minimum time in seconds before the mob is able to snack again.
   */
  snacking_cooldown_min?: number;
  /**
   * This is the chance that the mob will stop snacking, from 0 to 1.
   */
  snacking_stop_chance?: number;
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
