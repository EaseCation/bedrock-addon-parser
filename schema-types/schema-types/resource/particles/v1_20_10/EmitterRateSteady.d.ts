/**
 * resource/particles/components/emitter_rate_steady.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.946Z
 */

/**
 * Maximum number of particles that can be active at once for this emitter, evaluated once per particle emitter loop.
 */
export type MaximumParticles = string | number;
/**
 * How often a particle is emitted, in particles/sec evaluated once per particle emitted.
 */
export type SpawnRate = string | number;

/**
 * UNDOCUMENTED.
 */
export interface EmitterRateSteadyComponentFor1100 {
  max_particles?: MaximumParticles;
  spawn_rate?: SpawnRate;
}
