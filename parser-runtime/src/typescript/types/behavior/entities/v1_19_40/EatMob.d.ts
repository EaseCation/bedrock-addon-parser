/**
 * behavior/entities/format/behaviors/eat_mob.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.215Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * [EXPERIMENTAL BEHAVIOR] Allows the entity to eat a specified Mob.
 */
export interface EatMob {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Sets the time in seconds the eat animation should play for.
   */
  eat_animation_time?: number;
  /**
   * Sets the sound that should play when eating a mob.
   */
  eat_mob_sound?: string;
  /**
   * The loot table for loot to be dropped when eating a mob.
   */
  loot_table?: string;
  /**
   * Sets the force which the mob-to-be-eaten is pulled towards the eating mob.
   */
  pull_in_force?: number;
  /**
   * Sets the desired distance to be reached before eating the mob.
   */
  reach_mob_distance?: number;
  /**
   * Sets the entity's speed when running toward the target.
   */
  run_speed?: number;
}
