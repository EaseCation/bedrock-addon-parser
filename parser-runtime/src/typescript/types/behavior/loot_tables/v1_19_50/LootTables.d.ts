/**
 * behavior/loot_tables/loot_tables.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:21.930Z
 */

/**
 * Determines how many items, will be selected.
 */
export type Rolls =
  | number
  | {
      /**
       * The minimum amount.
       */
      min: number;
      /**
       * The maximum amount.
       */
      max: number;
      [k: string]: unknown;
    };
/**
 * Whenever this pool item is an item or another table.
 */
export type Type = 'loot_table' | 'item' | 'empty';
/**
 * A minecraft loot table condition.
 */
export type Condition = {
  [k: string]: unknown;
};
/**
 * Possible conditions that need to have been met before selecting this item.
 */
export type Conditions = Condition[];
/**
 * UNDOCUMENTED.
 */
export type Type1 = 'item' | 'empty' | 'loot_table';
/**
 * UNDOCUMENTED.
 */
export type Function = Function1 & Function2;
export type Function1 = {
  [k: string]: unknown;
};
/**
 * UNDOCUMENTED.
 */
export type Functions = Function[];
/**
 * A collection of items where the system will choice one or more from.
 */
export type Pools1 = ASinglePool[];
/**
 * The items specifiation of this pool.
 */
export type Entries = Entry[];
/**
 * UNDOCUMENTED.
 */
export type Pools = ASinglePool[];
/**
 * UNDOCUMENTED.
 */
export type Type2 = 'minecraft:chest';

/**
 * A minecraft loot table.
 */
export interface LootTable {
  pools?: Pools;
  type?: Type2;
}
export interface ASinglePool {
  rolls?: Rolls;
  type?: Type;
  conditions?: Conditions;
  entries?: Entries;
  tiers?: Tiers;
  /**
   * UNDOCUMENTED.
   */
  bonus_rolls?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Entry {
  type: Type1;
  /**
   * The amount of the item.
   */
  count?: number;
  /**
   * An item or loottable.
   */
  name?: string;
  /**
   * UNDOCUMENTED.
   */
  weight?: number;
  functions?: Functions;
  pools?: Pools1;
  /**
   * UNDOCUMENTED.
   */
  quality?: number;
}
export interface Function2 {
  function:
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
    | 'minecraft:specific_enchants'
    | 'minecraft:trader_material_type';
  /**
   * UNDOCUMENTED.
   */
  add?: boolean;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface Tiers {
  /**
   * UNDOCUMENTED.
   */
  bonus_chance?: number;
  /**
   * UNDOCUMENTED.
   */
  bonus_rolls?: number;
  /**
   * UNDOCUMENTED.
   */
  initial_range?: number;
}
