/**
 * behavior/items/format/components/durability_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.848Z
 */

/**
 * Sound effect to emit when the threshold is met.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;

/**
 * Defines both the durability threshold, and the effects emitted when that threshold is met.
 */
export interface DurabilitySensor {
  /**
   * The effects are emitted when the item durability value is less than or equal to this value.
   */
  durability?: number;
  /**
   * Particle effect to emit when the threshold is met.
   */
  particle_type?: string;
  sound_event?: BlockceptionMinecraftGeneralSoundEvent;
  [k: string]: unknown;
}
