/**
 * behavior/entities/filters/filters/int_property.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.125Z
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
 * Returns true when the integer actor property matches the value provided.
 */
export interface IntProperty {
  /**
   * Returns true when the integer actor property matches the value provided.
   */
  test?: string;
  /**
   * (Required) The property name to look for
   */
  domain: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) A integer value.
   */
  value: number;
  [k: string]: unknown;
}
