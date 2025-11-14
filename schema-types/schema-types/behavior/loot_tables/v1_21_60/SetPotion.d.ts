/**
 * behavior/loot_tables/functions/set_potion.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.295Z
 */

/**
 * This function sets the potion type of compatible items with a potion id..
 */
export type Function = 'set_lore';
/**
 * ID of the potion to set.
 */
export type Id =
  | 'water'
  | 'mundane'
  | 'long_mundane'
  | 'thick'
  | 'awkward'
  | 'nightvision'
  | 'long_nightvision'
  | 'invisibility'
  | 'long_invisibility'
  | 'leaping'
  | 'long_leaping'
  | 'strong_leaping'
  | 'fire_resistance'
  | 'long_fire_resistance'
  | 'swiftness'
  | 'long_swiftness'
  | 'strong_swiftness'
  | 'slowness'
  | 'long_slowness'
  | 'strong_slowness'
  | 'water_breathing'
  | 'long_water_breathing'
  | 'healing'
  | 'strong_healing'
  | 'harming'
  | 'strong_harming'
  | 'poison'
  | 'long_poison'
  | 'strong_poison'
  | 'regeneration'
  | 'long_regeneration'
  | 'strong_regeneration'
  | 'strength'
  | 'long_strength'
  | 'strong_strength'
  | 'weakness'
  | 'long_weakness'
  | 'wither'
  | 'turtle_master'
  | 'long_turtle_master'
  | 'strong_turtle_master'
  | 'slow_falling'
  | 'long_slow_falling'
  | 'wind_charged'
  | 'weaving'
  | 'oozing'
  | 'infested';

/**
 * The function set_potion.
 */
export interface SetLore {
  function?: Function;
  id?: Id;
}
