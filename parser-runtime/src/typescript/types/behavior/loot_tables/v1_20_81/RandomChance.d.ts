/**
 * behavior/loot_tables/conditions/random_chance.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.860Z
 */

/**
 * Sets a random chance of the specified value.
 */
export interface RandomChance {
  /**
   * UNDOCUMENTED.
   */
  condition?: string;
  /**
   * UNDOCUMENTED.
   */
  chance?: number;
  /**
   * The maximum random chance value allowed.
   */
  max_chance?: number;
}
