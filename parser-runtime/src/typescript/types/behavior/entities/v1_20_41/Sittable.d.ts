/**
 * behavior/entities/format/components/sittable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.707Z
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
 * Defines the entity's `sit` state.
 */
export interface Sittable {
  sit_event?: SitEvent;
  stand_event?: StandEvent;
}
/**
 * Event to run when the entity enters the `sit` state.
 */
export interface SitEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to run when the entity exits the `sit` state.
 */
export interface StandEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
