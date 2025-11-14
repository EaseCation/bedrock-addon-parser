/**
 * behavior/entities/format/components/explode.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.704Z
 */

/**
 * The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate.
 */
export type FuseLength = [] | [number] | [number, number] | number;
/**
 * The name of the particle effect to use.
 */
export type ParticleEffect = 'explosion' | 'wind_burst' | 'breeze_wind_burst';

/**
 * Defines how the entity explodes.
 */
export interface Explode {
  /**
   * If true, the explosion will affect blocks and entities under water.
   */
  allow_underwater?: boolean;
  /**
   * If true, the explosion will destroy blocks in the explosion radius.
   */
  breaks_blocks?: boolean;
  /**
   * If true, blocks in the explosion radius will be set on fire.
   */
  causes_fire?: boolean;
  /**
   * A scale factor applied to the explosion's damage to entities. A value of 0 prevents the explosion from dealing any damage. Negative values cause the explosion to heal entities instead.
   */
  damage_scaling?: number;
  /**
   * If true, whether the explosion breaks blocks is affected by the mob griefing game rule.
   */
  destroy_affected_by_griefing?: boolean;
  /**
   * If true, whether the explosion causes fire is affected by the mob griefing game rule.
   */
  fire_affected_by_griefing?: boolean;
  fuse_length?: FuseLength;
  /**
   * If true, the fuse is already lit when this component is added to the entity.
   */
  fuse_lit?: boolean;
  /**
   * A scale factor applied to the knockback force caused by the explosion.
   */
  knockback_scaling?: number;
  /**
   * A blocks explosion resistance will be capped at this value when an explosion occurs.
   */
  max_resistance?: number;
  /**
   * Defines whether the explosion should apply fall damage negation to Players above the point of collision.
   */
  negates_fall_damage?: boolean;
  particle_effect?: ParticleEffect;
  /**
   * The radius of the explosion in blocks and the amount of damage the explosion deals.
   */
  power?: number;
  /**
   * The name of the sound effect played when the explosion triggers.
   */
  sound_effect?: string;
  /**
   * If true, the explosion will toggle blocks in the explosion radius.
   */
  toggles_blocks?: boolean;
}
