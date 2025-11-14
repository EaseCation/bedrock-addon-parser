/**
 * behavior/entities/filters/filters/in_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.603Z
 */

/**
 * (Optional) The comparison to apply with `value`.
 */
export type Operator = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';
/**
 * (Optional) The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';

/**
 * Returns true when the subject entity is inside a specified Block type.
 */
export interface InBlock {
  /**
   * Returns true when the subject entity is inside a specified Block type.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Optional) A string value.
   */
  value?: string;
  [k: string]: unknown;
}
