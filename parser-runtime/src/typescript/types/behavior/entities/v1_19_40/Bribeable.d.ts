/**
 * behavior/entities/format/components/bribeable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.873Z
 */

/**
 * An item that can be used to bribe the entity.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * The list of items that can be used to bribe the entity.
 */
export type BribeItems = BlockceptionMinecraftItemIdentifier[];

/**
 * Defines the way an entity can get into the 'bribed' state.
 */
export interface Bribeable {
  /**
   * Time in seconds before the Entity can be bribed again.
   */
  bribe_cooldown?: number;
  bribe_items?: BribeItems;
}
