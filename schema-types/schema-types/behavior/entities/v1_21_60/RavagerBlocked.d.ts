/**
 * behavior/entities/format/components/ravager_blocked.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.216Z
 */

/**
 * An event that runs when this reaction is picked.
 */
export type Value =
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
 * A list of weighted responses to the melee attack being blocked.
 */
export type ReactionChoices = {
  /**
   * The chance of this reaction being picked.
   */
  weight?: number;
  value?: Value;
}[];

/**
 * Defines the ravager's response to their melee attack being blocked.
 */
export interface RavagerBlocked {
  /**
   * The strength with which blocking entities should be knocked back.
   */
  knockback_strength?: number;
  reaction_choices?: ReactionChoices;
}
