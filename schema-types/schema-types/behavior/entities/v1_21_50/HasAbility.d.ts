/**
 * behavior/entities/filters/filters/has_ability.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.419Z
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
 * (Required) The Ability type to test.
 */
export type Value =
  | 'flySpeed'
  | 'flying'
  | 'instabuild'
  | 'invulnerable'
  | 'lightning'
  | 'mayfly'
  | 'mute'
  | 'noclip'
  | 'walkSpeed'
  | 'worldbuilder';

/**
 * Returns true when the subject entity has the named ability.
 */
export interface HasAbility {
  /**
   * Returns true when the subject entity has the named ability.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
