/**
 * behavior/entities/format/components/giveable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.758Z
 */

/**
 * An items that can be given to the entity to place in their inventory.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * The list of items that can be given to the entity to place in their inventory.
 */
export type Properties = BlockceptionMinecraftItemIdentifier[];
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
 * Event to fire when the correct item is given.
 */
export interface OnGive {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
