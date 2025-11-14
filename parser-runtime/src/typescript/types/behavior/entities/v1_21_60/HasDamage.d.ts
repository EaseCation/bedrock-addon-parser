/**
 * behavior/entities/filters/filters/has_damage.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:00.954Z
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
 * The Damage type to test.
 */
export type Value =
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'contact'
  | 'drowning'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire'
  | 'fire_tick'
  | 'fly_into_wall'
  | 'lava'
  | 'magic'
  | 'none'
  | 'override'
  | 'piston'
  | 'projectile'
  | 'self_destruct'
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'thorns'
  | 'void'
  | 'wither';

/**
 * Returns true when the subject entity receives the named damage type. has_damage can also use subject and operator parameters but they are optional.
 */
export interface HasDamage {
  /**
   * Returns true when the subject entity receives the named damage type.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
