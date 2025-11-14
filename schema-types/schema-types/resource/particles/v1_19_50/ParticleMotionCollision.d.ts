/**
 * resource/particles/components/particle_motion_collision.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.311Z
 */

/**
 * UNDOCUMENTED: enabled.
 */
export type Enabled = string | number;
/**
 * UNDOCUMENTED: events.
 */
export type Events = Events1[];

/**
 * UNDOCUMENTED.
 */
export interface ParticleMotionCollisionComponentFor1100 {
  /**
   * UNDOCUMENTED: collision drag.
   */
  collision_drag?: number;
  /**
   * UNDOCUMENTED: coefficient of restitution.
   */
  coefficient_of_restitution?: number;
  /**
   * UNDOCUMENTED: collision radius.
   */
  collision_radius?: number;
  enabled?: Enabled;
  /**
   * UNDOCUMENTED: expire on contact.
   */
  expire_on_contact?: boolean;
  events?: Events;
}
/**
 * UNDOCUMENTED: events.
 */
export interface Events1 {
  additionalProperties?: never;
  /**
   * UNDOCUMENTED: event.
   */
  event?: string;
  /**
   * UNDOCUMENTED: Minimum speed.
   */
  min_speed?: number;
  [k: string]: unknown;
}
