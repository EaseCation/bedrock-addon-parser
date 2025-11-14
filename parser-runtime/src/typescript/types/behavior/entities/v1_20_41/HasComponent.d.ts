/**
 * behavior/entities/filters/filters/has_component.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.624Z
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
 * Returns true when the subject entity contains the named component.
 */
export interface HasComponent {
  /**
   * Returns true when the subject entity contains the named component.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) The component name to look for.
   */
  value: string;
  [k: string]: unknown;
}
