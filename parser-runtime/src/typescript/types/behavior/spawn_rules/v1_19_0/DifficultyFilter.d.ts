/**
 * behavior/spawn_rules/components/difficulty_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:05.669Z
 */

/**
 * This is the minimum difficulty level that a mob spawns.
 */
export type Min = 'easy' | 'normal' | 'hard' | 'peaceful';
/**
 * This is the maximum difficulty level that a mob spawns.
 */
export type Max = 'easy' | 'normal' | 'hard' | 'peaceful';

/**
 * UNDOCUMENTED.
 */
export interface DifficultyFilter {
  min?: Min;
  max?: Max;
}
