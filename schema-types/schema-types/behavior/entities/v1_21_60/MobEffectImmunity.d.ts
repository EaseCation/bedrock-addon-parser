/**
 * behavior/entities/format/components/mob_effect_immunity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.489Z
 */

/**
 * List of names of effects the entity is immune to.
 *
 * @minItems 1
 */
export type MobEffects = [Effect, ...Effect[]];
/**
 * A mob effect
 */
export type Effect =
  | 'absorption'
  | 'bad_omen'
  | 'blindness'
  | 'conduit_power'
  | 'darkness'
  | 'fatal_poison'
  | 'fire_resistance'
  | 'haste'
  | 'health_boost'
  | 'hunger'
  | 'infested'
  | 'instant_damage'
  | 'instant_health'
  | 'invisibility'
  | 'jump_boost'
  | 'levitation'
  | 'mining_fatigue'
  | 'nausea'
  | 'night_vision'
  | 'oozing'
  | 'poison'
  | 'raid_omen'
  | 'regeneration'
  | 'resistance'
  | 'saturation'
  | 'slow_falling'
  | 'slowness'
  | 'speed'
  | 'strength'
  | 'trial_omen'
  | 'village_hero'
  | 'water_breathing'
  | 'weakness'
  | 'weaving'
  | 'wind_charged'
  | 'wither';

/**
 * Entities with this component will have an immunity to the provided mob effects.
 */
export interface MobEffectImmunity {
  mob_effects?: MobEffects;
}
