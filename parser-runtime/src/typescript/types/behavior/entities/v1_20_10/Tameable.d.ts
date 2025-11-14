/**
 * behavior/entities/format/components/tameable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.054Z
 */

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
 * The list of items that can be used to tame this entity.
 */
export type TameItems = BlockceptionMinecraftItemIdentifier[] | BlockceptionMinecraftItemIdentifier;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;

/**
 * Defines the rules for a mob to be tamed by the player.
 */
export interface Tameable {
  /**
   * The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%
   */
  probability?: number;
  tame_event?: TameEvent;
  tame_items?: TameItems;
}
/**
 * Event to run when this entity becomes tamed.
 */
export interface TameEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
