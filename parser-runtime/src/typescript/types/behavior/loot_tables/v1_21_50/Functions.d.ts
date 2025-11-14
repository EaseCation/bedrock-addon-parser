/**
 * behavior/loot_tables/functions.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:51.096Z
 */

/**
 * A minecraft loot table condition.
 */
export type Functions = Functions1 & Functions2;
export type Functions1 = {
  [k: string]: unknown;
};

export interface Functions2 {
  function?:
    | 'enchant_book_for_trading'
    | 'enchant_random_gear'
    | 'enchant_randomly'
    | 'enchant_with_levels'
    | 'exploration_map'
    | 'fill_container'
    | 'furnace_smelt'
    | 'looting_enchant'
    | 'random_aux_value'
    | 'random_block_state'
    | 'random_dye'
    | 'set_actor_id'
    | 'set_banner_details'
    | 'set_book_contents'
    | 'set_count'
    | 'set_damage'
    | 'set_data_from_color_index'
    | 'set_data'
    | 'set_lore'
    | 'set_name'
    | 'set_potion'
    | 'specific_enchants'
    | 'trader_material_type'
    | 'minecraft:enchant_book_for_trading'
    | 'minecraft:enchant_random_gear'
    | 'minecraft:enchant_randomly'
    | 'minecraft:enchant_with_levels'
    | 'minecraft:exploration_map'
    | 'minecraft:fill_container'
    | 'minecraft:furnace_smelt'
    | 'minecraft:looting_enchant'
    | 'minecraft:random_aux_value'
    | 'minecraft:random_block_state'
    | 'minecraft:random_dye'
    | 'minecraft:set_actor_id'
    | 'minecraft:set_banner_details'
    | 'minecraft:set_book_contents'
    | 'minecraft:set_count'
    | 'minecraft:set_damage'
    | 'minecraft:set_data_from_color_index'
    | 'minecraft:set_data'
    | 'minecraft:set_lore'
    | 'minecraft:set_name'
    | 'minecraft:set_potion'
    | 'minecraft:specific_enchants'
    | 'minecraft:trader_material_type';
  /**
   * UNDOCUMENTED.
   */
  add?: boolean;
  [k: string]: unknown;
}
