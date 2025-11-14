/**
 * behavior/entities/filters/filters/moon_intensity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.845Z
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
 * Compares the current moon intensity with a float value in the range (0.0, 1.0)
 */
export interface MoonIntensity {
  /**
   * The test property.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * A floating point value.
   */
  value: number;
  [k: string]: unknown;
}
