/**
 * behavior/entities/filters/filters/is_temperature_type.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.858Z
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
 * The Biome temperature catagory to test.
 */
export type Value = 'cold' | 'mild' | 'ocean' | 'warm';

/**
 * Tests whether the current temperature is a given type.
 */
export interface IsTarget {
  /**
   * The test property.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
