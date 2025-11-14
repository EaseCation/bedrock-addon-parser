/**
 * behavior/entities/filters/filters/has_mob_effect.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:00.949Z
 */

/**
 * The comparison to apply with `value`.
 */
export type Operator = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';
/**
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * The specified mob effect.
 */
export type Value =
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
 * Tests whether the Subject has the specified mob effect.
 */
export interface HasMobEffect {
  /**
   * Tests whether the Subject has the specified mob effect.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
