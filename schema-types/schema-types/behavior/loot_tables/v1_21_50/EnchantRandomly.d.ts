/**
 * behavior/loot_tables/functions/enchant_randomly.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:51.138Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'enchant_randomly';

/**
 * The function enchant_randomly.
 */
export interface EnchantRandomly {
  function?: Function;
  /**
   * Supports the optional treasure boolean (true/false) to allow treasure enchantments to be toggled on and off.
   */
  treasure?: boolean;
}
