/**
 * behavior/entities/filters/filters/is_difficulty.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:16.931Z
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
 * The game's difficulty level to test.
 */
export type Value = 'easy' | 'hard' | 'normal' | 'peaceful';

/**
 * Tests the current difficulty level of the game.
 */
export interface IsDifficulty {
  /**
   * Tests the current difficulty level of the game.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
