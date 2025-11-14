/**
 * behavior/entities/format/components/trusting.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.123Z
 */

/**
 * Event to run when this entity becomes trusting.
 */
export type TrustEvent =
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
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * The list of items that can be used to get the entity to trust players.
 */
export type TrustItems = BlockceptionMinecraftItemIdentifier[];

/**
 * Defines the rules for a mob to trust players.
 */
export interface Trusting {
  /**
   * The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%
   */
  probability?: number;
  trust_event?: TrustEvent;
  trust_items?: TrustItems;
}
