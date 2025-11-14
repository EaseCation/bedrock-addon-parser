/**
 * behavior/entities/format/behaviors/guardian_attack.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.867Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows this entity to use a laser beam attack. Can only be used by Guardians and Elder Guardians.
 */
export interface GuardianAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Amount of additional damage dealt from an elder guardian's magic attack.
   */
  elder_extra_magic_damage?: number;
  /**
   * In hard difficulty, amount of additional damage dealt from a guardian's magic attack.
   */
  hard_mode_extra_magic_damage?: number;
  /**
   * Amount of damage dealt from a guardian's magic attack. Magic attack damage is added to the guardian's base attack damage.
   */
  magic_damage?: number;
  /**
   * Guardian attack behavior stops if the target is closer than this distance (doesn't apply to elders).
   */
  min_distance?: number;
  /**
   * Time (in seconds) to wait after starting an attack before playing the guardian attack sound.
   */
  sound_delay_time?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
}
