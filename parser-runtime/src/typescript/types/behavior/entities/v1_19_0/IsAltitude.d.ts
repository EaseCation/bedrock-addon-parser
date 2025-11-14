/**
 * behavior/entities/filters/filters/is_altitude.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.909Z
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
 * Tests the current altitude against a provided value. 0= bedrock elevation.
 */
export interface IsAltitude {
  /**
   * Tests the current altitude against a provided value. 0= bedrock elevation.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * The altitude value to compare with.
   */
  value: number;
  [k: string]: unknown;
}
