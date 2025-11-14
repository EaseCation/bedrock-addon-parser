/**
 * behavior/entities/format/components/economy_trade_table.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.484Z
 */

/**
 * How much should the discount be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount)
 */
export type CuredDiscount = [] | [number] | [number, number];
/**
 * The Maximum the discount can be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount)
 */
export type MaximumCuredDiscount = [] | [number] | [number, number];

/**
 * Defines this entity's ability to trade with players.
 */
export interface EconomyTradeTable {
  /**
   * Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1.
   */
  convert_trades_economy?: boolean;
  cured_discount?: CuredDiscount;
  /**
   * Name to be displayed while trading with this entity.
   */
  display_name?: string;
  /**
   * Used in legacy prices to determine how much should Demand be modified by when the player has the Hero of the Village mob effect.
   */
  hero_demand_discount?: number;
  max_cured_discount?: MaximumCuredDiscount;
  /**
   * The Maximum the discount can be modified by when the player has cured a nearby Zombie Villager.
   */
  max_nearby_cured_discount?: number;
  /**
   * How much should the discount be modified by when the player has cured a nearby Zombie Villager.
   */
  nearby_cured_discount?: number;
  /**
   * Used to determine if trading with entity opens the new trade screen.
   */
  new_screen?: boolean;
  /**
   * Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades.
   */
  persist_trades?: boolean;
  /**
   * Show an in game trade screen when interacting with the mob.
   */
  show_trade_screen?: boolean;
  /**
   * File path relative to the resource pack root for this entity's trades.
   */
  table?: string;
  /**
   * Determines whether the legacy formula is used to determines the trade prices.
   */
  use_legacy_price_formula?: boolean;
}
