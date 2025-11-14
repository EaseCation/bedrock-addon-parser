/**
 * behavior/entities/filters/filters/in_contact_with_water.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.030Z
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
 * Returns true when the subject entity in contact with any water: water, rain, splash water bottle.
 */
export interface InContactWithWater {
  /**
   * Returns true when the subject entity in contact with any water: water, rain, splash water bottle.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Optional) true or false.
   */
  value?: boolean;
  [k: string]: unknown;
}
