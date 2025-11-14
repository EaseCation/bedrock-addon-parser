/**
 * behavior/entities/filters/filters/is_game_rule.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.887Z
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
 * Tests whether a named game rule is active.
 */
export interface IsGameRule {
  domain: Domain;
  operator?: Operator;
  subject?: Subject;
  /**
   * Tests whether a named game rule is active.
   */
  value: boolean;
  [k: string]: unknown;
}
/**
 * The Game Rule to test.
 */
export interface Domain {
  [k: string]: unknown;
}
