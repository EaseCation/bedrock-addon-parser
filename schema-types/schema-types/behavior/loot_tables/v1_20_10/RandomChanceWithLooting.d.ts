/**
 * behavior/loot_tables/conditions/random_chance_with_looting.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.391Z
 */

/**
 * Sets a random chance of the specified value. Looting enchantment increase the random chance multiplier.
 */
export interface RandomChanceWithLooting {
  /**
   * UNDOCUMENTED.
   */
  condition?: string;
  /**
   * The random chance of the value.
   */
  chance?: number;
  /**
   * The multiplier for the chance if the target entity has the looting enchant that affects the actor.
   */
  looting_multiplier?: number;
}
