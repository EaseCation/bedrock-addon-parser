/**
 * behavior/entities/format/behaviors/panic.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.873Z
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
 * The types of damage an entity can receive.
 */
export type EntityDamageSource =
  | 'all'
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire_tick'
  | 'fire'
  | 'fireworks'
  | 'fly_into_wall'
  | 'freezing'
  | 'lava'
  | 'lightning'
  | 'magic'
  | 'magma'
  | 'none'
  | 'override'
  | 'piston'
  | 'projectile'
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * The list of Entity Damage Sources that will cause this mob to panic.
 */
export type DamageSources = EntityDamageSource[];

/**
 * Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.
 */
export interface Panic {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  damage_sources?: DamageSources;
  /**
   * If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it.
   */
  force?: boolean;
  /**
   * If true, the mob will not panic in response to damage from other mobs. This overrides the damage types in `damage_sources`
   */
  ignore_mob_damage?: boolean;
  /**
   * If true, the mob will prefer water over land.
   */
  prefer_water?: boolean;
  /**
   * The sound event to play when this mob is in panic.
   */
  panic_sound?: string;
  sound_interval?: SoundInterval;
}
/**
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export interface SoundInterval {
  /**
   * The minimum time in seconds before the `panic_sound` plays.
   */
  range_min?: number;
  /**
   * The maximum time in seconds before the `panic_sound` plays.
   */
  range_max?: number;
}
