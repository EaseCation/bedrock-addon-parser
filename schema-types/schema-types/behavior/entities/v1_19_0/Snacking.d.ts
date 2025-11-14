/**
 * behavior/entities/format/behaviors/snacking.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.416Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Items that we are interested in snacking on.
 */
export type Items = Item[] | BlockceptionMinecraftItemIdentifier;
/**
 * A minecraft item identifier.
 */
export type Item = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;

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
