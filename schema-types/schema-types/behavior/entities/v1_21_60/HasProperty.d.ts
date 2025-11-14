/**
 * behavior/entities/filters/filters/has_property.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:00.946Z
 */

/**
 * (Optionall) The comparison to apply with `value`.
 */
export type Operator = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';
/**
 * (Optional) The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';

/**
 * Tests for the presence of a property of the subject entity.
 */
export interface HasProperty {
  /**
   * Tests for the presence of a property of the subject entity.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) The property name to look for.
   */
  value: string;
  [k: string]: unknown;
}
