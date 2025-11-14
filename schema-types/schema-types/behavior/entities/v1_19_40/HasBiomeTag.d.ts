/**
 * behavior/entities/filters/filters/has_biome_tag.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.124Z
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
 * Tests whether the biome the subject is in has the specified tag.
 */
export interface HasBiomeTag {
  /**
   * Tests whether the biome the subject is in has the specified tag.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) The tag to look for.
   */
  value: string;
  [k: string]: unknown;
}
