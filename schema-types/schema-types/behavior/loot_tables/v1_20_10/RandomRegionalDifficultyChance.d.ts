/**
 * behavior/loot_tables/conditions/random_regional_difficulty_chance.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.387Z
 */

/**
 * Sets a Maximum regional difficulty random chance of the specified value.
 */
export interface RandomRegionalDifficultyChance {
  /**
   * UNDOCUMENTED.
   */
  condition?: string;
  /**
   * The default random chance if the level difficulty is not assigned.
   */
  default_chance?: number;
  /**
   * UNDOCUMENTED.
   */
  max_chance?: number;
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
