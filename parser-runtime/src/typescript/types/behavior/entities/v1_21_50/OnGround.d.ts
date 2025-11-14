/**
 * behavior/entities/filters/filters/on_ground.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.323Z
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
 * Returns true when the subject entity is on ground.
 */
export interface OnGround {
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
