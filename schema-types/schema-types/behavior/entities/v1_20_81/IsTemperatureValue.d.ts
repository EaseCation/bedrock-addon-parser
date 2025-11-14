/**
 * behavior/entities/filters/filters/is_temperature_value.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.079Z
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
 * Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0f is the coldest temp and 1.0f is the hottest.
 */
export interface IsTemperatureValue {
  /**
   * The test property.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * The Biome temperature value to compare with.
   */
  value: number;
  [k: string]: unknown;
}
