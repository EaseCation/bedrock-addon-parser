/**
 * behavior/entities/format/components/leashable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.498Z
 */

/**
 * Event to call when this entity is leashed.
 */
export type OnLeash =
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
 * Event to call when this entity is unleashed.
 */
export type OnUnleash =
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
 * Defines interactions with this entity.
 */
export interface Leashable {
  /**
   * If true, players can leash this entity even if it is already leashed to another mob.
   */
  can_be_stolen?: boolean;
  /**
   * Distance in blocks at which the leash stiffens, restricting movement.
   */
  hard_distance?: number;
  /**
   * Distance in blocks at which the leash breaks.
   */
  max_distance?: number;
  on_leash?: OnLeash;
  on_unleash?: OnUnleash;
  /**
   * Distance in blocks at which the `spring` effect starts acting to keep this entity close to the entity that leashed it.
   */
  soft_distance?: number;
}
