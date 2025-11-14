/**
 * behavior/blocks/format/events/play_effect.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.157Z
 */

/**
 * The target context to execute against.
 */
export type Target = string;

/**
 * Spawns a particle effect relative to target position.
 */
export interface PlayEffect {
  /**
   * Particle data value.
   */
  data?: number;
  /**
   * The name of the particle effect to create.
   */
  effect?: string;
  target?: Target;
}
