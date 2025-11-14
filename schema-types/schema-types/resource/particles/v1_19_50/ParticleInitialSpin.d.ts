/**
 * resource/particles/components/particle_initial_spin.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.319Z
 */

/**
 * Specifies the initial rotation in degrees.
 */
export type Rotation = string | number;
/**
 * Specifies the spin rate in degrees/second.
 */
export type RotationRate = string | number;

/**
 * Starts the particle with a specified orientation and rotation rate.
 */
export interface ParticleInitialSpinComponentFor1100 {
  rotation?: Rotation;
  rotation_rate?: RotationRate;
}
