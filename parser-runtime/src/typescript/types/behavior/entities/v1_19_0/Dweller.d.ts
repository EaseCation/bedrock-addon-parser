/**
 * behavior/entities/format/components/dweller.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.658Z
 */

/**
 * The type of dwelling the mob wishes to join. Current Types: village
 */
export type DwellingType = 'village';
/**
 * The role of which the mob plays in the dwelling. Current Roles: inhabitant, defender, hostile, passive.
 */
export type DwellingRole = 'inhabitant' | 'defender' | 'hostile' | 'passive';

/**
 * Allows a mob to join and migrate between villages and other dwellings.
 */
export interface Dweller {
  dwelling_type?: DwellingType;
  dweller_role?: DwellingRole;
  /**
   * How often the mob checks on their dwelling status in ticks. Positive values only.
   */
  update_interval_base?: number;
  /**
   * The variant value in ticks that will be added to the update_interval_base.
   */
  update_interval_variant?: number;
  /**
   * Whether or not the mob can find and add POI's to the dwelling.
   */
  can_find_poi?: boolean;
  /**
   * How much reputation should the players be rewarded on first founding?.
   */
  first_founding_reward?: number;
  /**
   * Can this mob migrate between dwellings? Or does it only have its initial dwelling?.
   */
  can_migrate?: boolean;
  /**
   * A padding distance for checking if the mob is within the dwelling.
   */
  dwelling_bounds_tolerance?: number;
  /**
   * Allows the user to define a starting profession for this particular Dweller, instead of letting them choose organically. (They still need to gain experience from trading before this takes effect.)
   */
  preferred_profession?: string;
}
