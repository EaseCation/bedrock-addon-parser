/**
 * behavior/entities/filters/filters/enum_property.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:00.967Z
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
 * Returns true when the enum actor property matches the value provided.
 */
export interface EnumProperty {
  /**
   * Returns true when the enum actor property matches the value provided.
   */
  test?: string;
  /**
   * (Required) The property name to look for
   */
  domain: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) A string value.
   */
  value: string;
  [k: string]: unknown;
}
