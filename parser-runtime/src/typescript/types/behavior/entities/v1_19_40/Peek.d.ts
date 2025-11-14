/**
 * behavior/entities/format/components/peek.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.480Z
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
 * Defines the entity's `peek` behavior, defining the events that should be called during it.
 */
export interface Peek {
  on_close?: OnClose;
  on_open?: OnOpen;
  on_target_open?: OnTargetOpen;
}
/**
 * Event to call when the entity is done peeking.
 */
export interface OnClose {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when the entity starts peeking.
 */
export interface OnOpen {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when the entity's target entity starts peeking.
 */
export interface OnTargetOpen {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
