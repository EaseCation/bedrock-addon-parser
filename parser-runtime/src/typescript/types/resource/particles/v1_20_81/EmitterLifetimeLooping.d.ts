/**
 * resource/particles/components/emitter_lifetime_looping.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.623Z
 */

/**
 * Emitter will emit particles for this time per loop evaluated once per particle emitter loop.
 */
export type ActiveTime = string | number;
/**
 * Emitter will pause emitting particles for this time per loop evaluated once per particle emitter loop.
 */
export type SleepTime = string | number;

/**
 * UNDOCUMENTED.
 */
export interface EmitterLifetimeLoopingComponentFor1100 {
  active_time?: ActiveTime;
  sleep_time?: SleepTime;
}
