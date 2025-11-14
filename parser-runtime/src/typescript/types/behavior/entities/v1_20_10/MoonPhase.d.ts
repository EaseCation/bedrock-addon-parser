/**
 * behavior/entities/filters/filters/moon_phase.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.519Z
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
 * Compares the current moon phase with an integer value in the range (0, 7).
 */
export interface MoonPhase {
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
