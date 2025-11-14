/**
 * behavior/entities/filters/filters/taking_fire_damage.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.056Z
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
 * Tests if the subject is taking fire damage. Requires the damage_sensor component
 */
export interface TakingFireDamage {
  /**
   * Tests if the subject is taking fire damage. Requires the damage_sensor component
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * True or false.
   */
  value?: boolean;
  [k: string]: unknown;
}
