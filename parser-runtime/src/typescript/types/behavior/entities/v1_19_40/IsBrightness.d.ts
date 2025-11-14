/**
 * behavior/entities/filters/filters/is_brightness.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:16.956Z
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
 * Tests the current brightness against a provided value in the range (0.0f, 1.0f).
 */
export interface IsBrightness {
  /**
   * Tests the current brightness against a provided value in the range (0.0f, 1.0f).
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * The brightness value to compare with.
   */
  value: number;
  [k: string]: unknown;
}
