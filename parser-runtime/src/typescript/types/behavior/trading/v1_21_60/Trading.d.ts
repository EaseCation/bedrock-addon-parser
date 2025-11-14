/**
 * behavior/trading/trading.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.102Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
export type Give =
  | string
  | {
      item?: string;
      quantity?: Quantity;
      functions?: Functions;
      choice?: Choice;
    };
export type Quantity =
  | number
  | {
      min: number;
      max: number;
    };
/**
 * A minecraft loot table condition.
 */
export type Functions1 = Functions2 & Functions3;
export type Functions2 = {
  [k: string]: unknown;
};
export type Functions = Functions1[];
export type Item =
  | string
  | {
      item?: string;
      price_multiplier?: number;
      functions?: Functions;
      biomes?: Biomes;
      quantity?: Quantity1;
    };
/**
 * An in game biome
 */
export type Biome =
  | 'bamboo_jungle'
  | 'bamboo_jungle_hills'
  | 'basalt_deltas'
  | 'beach'
  | 'birch_forest'
  | 'birch_forest_hills'
  | 'birch_forest_hills_mutated'
  | 'birch_forest_mutated'
  | 'cherry_grove'
  | 'cold_beach'
  | 'cold_ocean'
  | 'cold_taiga'
  | 'cold_taiga_hills'
  | 'cold_taiga_mutated'
  | 'crimson_forest'
  | 'deep_cold_ocean'
  | 'deep_frozen_ocean'
  | 'deep_lukewarm_ocean'
  | 'deep_ocean'
  | 'deep_warm_ocean'
  | 'deep_dark'
  | 'desert'
  | 'desert_hills'
  | 'desert_mutated'
  | 'dripstone_caves'
  | 'extreme_hills'
  | 'extreme_hills_edge'
  | 'extreme_hills_mutated'
  | 'extreme_hills_plus_trees'
  | 'extreme_hills_plus_trees_mutated'
  | 'flower_forest'
  | 'forest'
  | 'forest_hills'
  | 'frozen_ocean'
  | 'frozen_peaks'
  | 'frozen_river'
  | 'grove'
  | 'hell'
  | 'ice_mountains'
  | 'ice_plains'
  | 'ice_plains_spikes'
  | 'jagged_peaks'
  | 'jungle'
  | 'jungle_edge'
  | 'jungle_edge_mutated'
  | 'jungle_hills'
  | 'jungle_mutated'
  | 'legacy_frozen_ocean'
  | 'lukewarm_ocean'
  | 'lush_caves'
  | 'mangrove_swamp'
  | 'meadow'
  | 'mega_taiga'
  | 'mega_taiga_hills'
  | 'mesa'
  | 'mesa_bryce'
  | 'mesa_plateau'
  | 'mesa_plateau_mutated'
  | 'mesa_plateau_stone'
  | 'mesa_plateau_stone_mutated'
  | 'mushroom_island'
  | 'mushroom_island_shore'
  | 'ocean'
  | 'plains'
  | 'redwood_taiga_hills_mutated'
  | 'redwood_taiga_mutated'
  | 'river'
  | 'roofed_forest'
  | 'roofed_forest_mutated'
  | 'savanna'
  | 'savanna_mutated'
  | 'savanna_plateau'
  | 'savanna_plateau_mutated'
  | 'snowy_slopes'
  | 'soulsand_valley'
  | 'stone_beach'
  | 'stony_peaks'
  | 'sunflower_plains'
  | 'swampland'
  | 'swampland_mutated'
  | 'taiga'
  | 'taiga_hills'
  | 'taiga_mutated'
  | 'the_end'
  | 'warm_ocean'
  | 'warped_forest';
/**
 * UNDOCUMENTED.
 */
export type Biomes = Biome[];
export type Quantity1 =
  | number
  | {
      min: number;
      max: number;
    };
/**
 * UNDOCUMENTED.
 */
export type Choice = Item[];
export type Gives = Give[];
export type Want =
  | string
  | {
      item?: string;
      quantity?: Quantity2;
      /**
       * UNDOCUMENTED.
       */
      price_multiplier?: number;
      functions?: Functions;
      choice?: Choice1;
    };
export type Quantity2 =
  | number
  | {
      min: number;
      max: number;
    };
/**
 * UNDOCUMENTED.
 */
export type Choice1 = Item[];
export type Wants = Want[];
export type Trades = Trade[];
/**
 * A collection of groups.
 */
export type Groups = Group[];
/**
 * A collection of tiers.
 */
export type Tiers = Tier[];

/**
 * UNDOCUMENTED.
 */
export interface Trading {
  format_version?: FormatVersion;
  tiers?: Tiers;
}
export interface Tier {
  trades?: Trades;
  total_exp_required: number;
  groups: Groups;
}
export interface Trade {
  gives: Gives;
  wants: Wants;
  trader_exp?: number;
  max_uses?: number;
  weight?: number;
  reward_exp?: boolean;
}
export interface Functions3 {
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
export interface Group {
  num_to_select?: number;
  trades?: Trades;
}
