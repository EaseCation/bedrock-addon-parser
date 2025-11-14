/**
 * behavior/entities/format/components/drying_out_timer.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.812Z
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
 * Adds a timer for drying out that will count down and fire `dried_out_event` or will stop as soon as the entity will get under rain or water and fire `stopped_drying_out_event`.
 */
export interface DryingOutTimer {
  dried_out_event?: DriedOutEvent;
  recover_after_dried_out_event?: RecoverAfterDriedOutEvent;
  stopped_drying_out_event?: StoppedDryingOutEvent;
  /**
   * Amount of time in seconds to dry out fully.
   */
  total_time?: number;
  /**
   * Optional amount of additional time in seconds given by using splash water bottle on entity.
   */
  water_bottle_refill_time?: number;
}
/**
 * Event to fire when the drying out time runs out.
 */
export interface DriedOutEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to fire when entity was already dried out but received increase in water supply.
 */
export interface RecoverAfterDriedOutEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to fire when entity stopped drying out, for example got into water or under rain.
 */
export interface StoppedDryingOutEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
