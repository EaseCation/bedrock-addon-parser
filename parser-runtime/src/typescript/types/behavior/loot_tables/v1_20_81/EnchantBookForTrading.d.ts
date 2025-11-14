/**
 * behavior/loot_tables/functions/enchant_book_for_trading.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.856Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'enchant_book_for_trading';

/**
 * The function enchant_book_for_trading.
 */
export interface EnchantBookForTrading {
  function: Function;
  /**
   * UNDOCUMENTED.
   */
  base_cost: number;
  /**
   * UNDOCUMENTED.
   */
  base_random_cost: number;
  /**
   * UNDOCUMENTED.
   */
  per_level_random_cost: number;
  /**
   * UNDOCUMENTED.
   */
  per_level_cost: number;
}
