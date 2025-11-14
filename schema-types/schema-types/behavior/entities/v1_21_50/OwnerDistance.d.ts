/**
 * behavior/entities/filters/filters/owner_distance.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.320Z
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
 * Tests the distance between the subject and its owner. Returns false if there is no owner.
 */
export interface OwnerDistance {
  /**
   * The test property.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) A floating point value.
   */
  value: boolean & number;
  [k: string]: unknown;
}
