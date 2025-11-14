/**
 * behavior/entities/format/components/tamemount.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.404Z
 */

/**
 * The list of items that, if carried while interacting with the entity, will anger it.
 */
export type AutoRejectItems = AutoRejectItems1 | AutoRejectItems2[];
/**
 * Name of the item this entity dislikes and will cause it to get angry if used while untamed.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export type FeedItems = FeedItems1 | FeedItems2[];
/**
 * Name of the item this entity likes and can be used to increase this entity's temper.
 */
export type BlockceptionMinecraftItemIdentifier1 = string;
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
 * Allows the Entity to be tamed by mounting it.
 */
export interface Tamemount {
  /**
   * The amount the entity's temper will increase when mounted.
   */
  attempt_temper_mod?: number;
  auto_reject_items?: AutoRejectItems;
  /**
   * The text that shows in the feeding interact button.
   */
  feed_text?: string;
  feed_items?: FeedItems;
  /**
   * The maximum value for the entity's random starting temper.
   */
  max_temper?: number;
  /**
   * The minimum value for the entity's random starting temper.
   */
  min_temper?: number;
  /**
   * The text that shows in the riding interact button.
   */
  ride_text?: string;
  tame_event?: TameEvent;
}
/**
 * The list of items that this entity dislikes and will cause it to get angry if used while untamed.
 */
export interface AutoRejectItems1 {
  item?: BlockceptionMinecraftItemIdentifier;
  [k: string]: unknown;
}
/**
 * The list of items that this entity dislikes and will cause it to get angry if used while untamed.
 */
export interface AutoRejectItems2 {
  item?: BlockceptionMinecraftItemIdentifier;
  [k: string]: unknown;
}
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export interface FeedItems1 {
  item?: BlockceptionMinecraftItemIdentifier1;
  /**
   * The amount of temper this entity gains when fed this item.
   */
  temper_mod?: number;
  [k: string]: unknown;
}
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export interface FeedItems2 {
  item?: BlockceptionMinecraftItemIdentifier1;
  /**
   * The amount of temper this entity gains when fed this item.
   */
  temper_mod?: number;
  [k: string]: unknown;
}
/**
 * Event that triggers when the entity becomes tamed.
 */
export interface TameEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
