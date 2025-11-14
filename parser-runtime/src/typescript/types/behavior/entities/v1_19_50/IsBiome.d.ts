/**
 * behavior/entities/filters/filters/is_biome.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:23.624Z
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
 * The Biome type to test.
 */
export type Value =
  | 'beach'
  | 'desert'
  | 'extreme_hills'
  | 'flat'
  | 'forest'
  | 'ice'
  | 'jungle'
  | 'mesa'
  | 'mushroom_island'
  | 'ocean'
  | 'plain'
  | 'river'
  | 'savanna'
  | 'stone_beach'
  | 'swamp'
  | 'taiga'
  | 'the_end'
  | 'the_nether';

/**
 * Tests whether the Subject is currently in the named biome.
 */
export interface IsBiome {
  /**
   * Tests whether the Subject is currently in the named biome.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
