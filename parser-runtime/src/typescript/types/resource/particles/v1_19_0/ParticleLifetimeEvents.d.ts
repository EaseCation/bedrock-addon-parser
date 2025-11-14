/**
 * resource/particles/components/particle_lifetime_events.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.241Z
 */

/**
 * Fires when the particle is created.
 */
export type CreationEvent = string[] | string;
/**
 * Fires when the particle expires (does not wait for particles to expire too).
 */
export type ExpirationEvent = string[] | string;

/**
 * UNDOCUMENTED.
 */
export interface ParticleLifetimeEventsComponentFor1100 {
  creation_event?: CreationEvent;
  custom_events?: CustomEvents;
  expiration_event?: ExpirationEvent;
  timeline?: Timeline;
}
/**
 * UNDOCUMENTED, unclear structure :(.
 */
export interface CustomEvents {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED: timeline.
 */
export interface Timeline {
  [k: string]: unknown;
}
