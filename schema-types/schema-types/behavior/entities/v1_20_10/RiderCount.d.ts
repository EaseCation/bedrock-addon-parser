/**
 * behavior/entities/filters/filters/rider_count.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.514Z
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
 * Returns the number of riders on this entity.
 */
export interface RiderCount {
  /**
   * The test property.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * An integer value.
   */
  value: number;
  [k: string]: unknown;
}
