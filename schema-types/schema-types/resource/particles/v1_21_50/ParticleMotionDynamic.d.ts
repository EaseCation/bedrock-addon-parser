/**
 * resource/particles/components/particle_motion_dynamic.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.923Z
 */

/**
 * The linear acceleration applied to the particle. Units are blocks/sec/sec
 *
 * @minItems 3
 * @maxItems 3
 */
export type LinearAcceleration = [MolangNumber, MolangNumber, MolangNumber];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber = string | number;
/**
 * Using the equation: `acceleration = -linear_drag_coefficient*velocity` where velocity is the current direction times speed. Think of this as air-drag. The higher the value, the more drag evaluated every frame
 */
export type LinearDragCoefficient = string | number;
/**
 * Acceleration applies to the rotation speed of the particle.
 */
export type RotationAcceleration = string | number;
/**
 * Drag applied to rotation.
 */
export type RotationDragCoefficient = string | number;

/**
 * This component specifies the dynamic properties of the particle, from a simulation standpoint what forces act upon the particle? These dynamics alter the velocity of the particle, which is a combination of the direction of the particle and the speed. Particle direction will always be in the direction of the velocity of the particle.
 */
export interface ParticleMotionDynamicComponentFor1100 {
  linear_acceleration?: LinearAcceleration;
  linear_drag_coefficient?: LinearDragCoefficient;
  rotation_acceleration?: RotationAcceleration;
  rotation_drag_coefficient?: RotationDragCoefficient;
}
