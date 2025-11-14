/**
 * behavior/loot_tables/conditions/random_difficulty_chance.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:34.955Z
 */

/**
 * Sets a random chance of the specified value based on the level difficulty.
 */
export interface RandomDifficultyChance {
  /**
   * UNDOCUMENTED.
   */
  condition?: string;
  /**
   * The default random chance if the level difficulty is not assigned.
   */
  default_chance?: number;
  /**
   * The default random chance if the level difficulty is in easy. Omitting this field will set the value to `default_chance` field.
   */
  easy?: number;
  /**
   * The default random chance if the level difficulty is in hard. Omitting this field will set the value to `default_chance` field.
   */
  hard?: number;
  /**
   * The default random chance if the level difficulty is in normal. Omitting this field will set the value to `default_chance` field.
   */
  normal?: number;
  /**
   * The default random chance if the level difficulty is in peaceful. Omitting this field will set the value to `default_chance` field.
   */
  peaceful?: number;
}
