/**
 * behavior/entities/format/behaviors/sonic_boom.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.400Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;

/**
 * [EXPERIMENTAL BEHAVIOR] Plays the provided sounds and activates the `SONIC BOOM` actor flag during the specified duration
 */
export interface SonicBoom {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Cooldown in seconds required after using this attack until the entity can use sonic boom again.
   */
  attack_cooldown?: number;
  /**
   * Attack damage of the sonic boom.
   */
  attack_damage?: number;
  /**
   * Horizontal range (in blocks) at which the sonic boom can damage the target.
   */
  attack_range_horizontal?: number;
  /**
   * Vertical range (in blocks) at which the sonic boom can damage the target.
   */
  attack_range_vertical?: number;
  /**
   * Sound event for the attack.
   */
  attack_sound?: string;
  /**
   * Sound event for the charge up.
   */
  charge_sound?: string;
  /**
   * Goal duration in seconds.
   */
  duration?: number;
  /**
   * Duration in seconds until the attack sound is played.
   */
  duration_until_attack_sound?: number;
  /**
   * Height cap of the attack knockback's vertical delta.
   */
  knockback_height_cap?: number;
  /**
   * Horizontal strength of the attack's knockback applied to the attack target.
   */
  knockback_horizontal_strength?: number;
  /**
   * Vertical strength of the attack's knockback applied to the attack target.
   */
  knockback_vertical_strength?: number;
}
