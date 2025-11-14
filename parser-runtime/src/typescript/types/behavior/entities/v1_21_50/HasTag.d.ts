/**
 * behavior/entities/filters/filters/has_tag.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.399Z
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
 * Returns true if the subject entity has the tag provided.
 */
export interface HasTag {
  /**
   * Returns true if the subject entity has the tag provided.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * The tag as a string.
   */
  value: string;
  [k: string]: unknown;
}
