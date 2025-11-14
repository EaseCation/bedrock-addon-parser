/**
 * behavior/entities/format/behaviors/hold_ground.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.785Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Event to run when target is within the radius. This event is broadcasted if broadcast is true.
 */
export type WithinRadiusEvent =
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
 * The mob freezes and looks at the mob they are targeting.
 */
export interface HoldGround {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Whether to broadcast out the mob's target to other mobs of the same type.
   */
  broadcast?: boolean;
  /**
   * Range in blocks for how far to broadcast.
   */
  broadcast_range?: number;
  /**
   * Minimum distance the target must be for the mob to run this goal.
   */
  min_radius?: number;
  within_radius_event?: WithinRadiusEvent;
}
