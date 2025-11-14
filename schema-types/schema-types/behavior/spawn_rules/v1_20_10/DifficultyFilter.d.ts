/**
 * behavior/spawn_rules/components/difficulty_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.341Z
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
 * This component allows players to set mobs spawn at certain difficulty levels. The min is for Peaceful difficulty and the max is for Hard difficulty.
 */
export interface DifficultyFilter {
  min?: Min;
  max?: Max;
}
