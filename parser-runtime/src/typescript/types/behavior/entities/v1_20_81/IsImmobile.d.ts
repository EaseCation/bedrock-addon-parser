/**
 * behavior/entities/filters/filters/is_immobile.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.106Z
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
 * Returns true if the subject entity is immobile. An entity is immobile if it lacks AI goals, has just changed dimensions or if it is a mob and has no health.
 */
export interface IsImmobile {
  /**
   * The test property.
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
