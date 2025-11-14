/**
 * behavior/loot_tables/functions/specific_enchants.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.830Z
 */

/**
 * Specific enchants.
 */
export type SpecificEnchants1 = 'specific_enchants';
/**
 * A enchanting specification.
 */
export type Enchants = IDEnchantment | Enchantment | Enchantment1[];
export type IDEnchantment =
  | 'aqua_affinity'
  | 'bane_of_arthropods'
  | 'blast_protection'
  | 'channeling'
  | 'binding'
  | 'curse_of_vanishing'
  | 'depth_strider'
  | 'efficiency'
  | 'feather_falling'
  | 'fire_aspect'
  | 'fire_protection'
  | 'flame'
  | 'fortune'
  | 'frost_walker'
  | 'impaling'
  | 'infinity'
  | 'knockback'
  | 'looting'
  | 'loyalty'
  | 'luck_of_the_sea'
  | 'lure'
  | 'mending'
  | 'multishot'
  | 'piercing'
  | 'projectile_protection'
  | 'protection'
  | 'power'
  | 'punch'
  | 'quick_charge'
  | 'respiration'
  | 'riptide'
  | 'sharpness'
  | 'silk_touch'
  | 'smite'
  | 'soul_speed'
  | 'thorns'
  | 'unbreaking';
export type IDEnchantment1 =
  | 'aqua_affinity'
  | 'bane_of_arthropods'
  | 'blast_protection'
  | 'channeling'
  | 'binding'
  | 'curse_of_vanishing'
  | 'depth_strider'
  | 'efficiency'
  | 'feather_falling'
  | 'fire_aspect'
  | 'fire_protection'
  | 'flame'
  | 'fortune'
  | 'frost_walker'
  | 'impaling'
  | 'infinity'
  | 'knockback'
  | 'looting'
  | 'loyalty'
  | 'luck_of_the_sea'
  | 'lure'
  | 'mending'
  | 'multishot'
  | 'piercing'
  | 'projectile_protection'
  | 'protection'
  | 'power'
  | 'punch'
  | 'quick_charge'
  | 'respiration'
  | 'riptide'
  | 'sharpness'
  | 'silk_touch'
  | 'smite'
  | 'soul_speed'
  | 'thorns'
  | 'unbreaking';
export type Level = number | [] | [number] | [number, number];

/**
 * The function specific_enchants.
 */
export interface SpecificEnchants {
  function?: SpecificEnchants1;
  enchants?: Enchants;
}
export interface Enchantment {
  id?: IDEnchantment1;
  level?: Level;
}
export interface Enchantment1 {
  id?: IDEnchantment1;
  level?: Level;
}
