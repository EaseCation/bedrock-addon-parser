/**
 * behavior/entities/filters/filters/has_mob_effect.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.618Z
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
 * Tests whether the Subject has the specified mob effect.
 */
export interface HasMobEffect {
  /**
   * Tests whether the Subject has the specified mob effect.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * The specified mob effect.
   */
  value: string;
  [k: string]: unknown;
}
