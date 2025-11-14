/**
 * behavior/entities/filters/filters/clock_time.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.166Z
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
 * Compares the current time with a float value in the range (0.0, 1.0).
 * 0.0= Noon
 * 0.25= Sunset
 * 0.5= Midnight
 * 0.75= Sunrise
 */
export interface ClockTime {
  /**
   * Compares the current time with a float value in the range (0.0, 1.0).
   * 0.0= Noon
   * 0.25= Sunset
   * 0.5= Midnight
   * 0.75= Sunrise
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) A floating point value.
   */
  value: number;
  [k: string]: unknown;
}
