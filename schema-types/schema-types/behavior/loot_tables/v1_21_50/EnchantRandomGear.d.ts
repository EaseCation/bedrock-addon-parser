/**
 * behavior/loot_tables/functions/enchant_random_gear.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:51.139Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'enchant_random_gear';

/**
 * The function enchant_random_gear.
 */
export interface EnchantRandomGear {
  function?: Function;
  /**
   * Takes a chance modifier to manipulate the algorithm. Note that a chance modifier of 1.0 doesn't mean a 100% chance that gear will become enchanted.
   */
  chance?: number;
}
