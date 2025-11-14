/**
 * behavior/loot_tables/functions/looting_enchant.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:51.132Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'looting_enchant';

/**
 * The function looting_enchant.
 */
export interface LootingEnchant {
  function?: Function;
  count?: Count;
}
/**
 * UNDOCUMENTED.
 */
export interface Count {
  min?: number;
  max?: number;
}
