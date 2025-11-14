/**
 * behavior/entities/filters/filters/hourly_clock_time.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:00.940Z
 */

/**
 * Compares the current 24 hour time with an int value in the range[0, 24000].
 */
export type TestProperty = 'hourly_clock_time';
/**
 * The comparison to apply with `value`.
 */
export type Operator = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';
/**
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';

/**
 * Compares the current 24 hour time with an int value in the range[0, 24000].
 */
export interface HourlyClockTime {
  test?: TestProperty;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) An integer value set between 0 and 24000.
   */
  value: number;
  [k: string]: unknown;
}
