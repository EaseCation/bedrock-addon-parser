/**
 * behavior/spawn_rules/components/permute_type.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:34.869Z
 */

/**
 * This component allows the players to specify the permutations of a mob that will spawn.
 */
export type PermuteType = PermuteType1 | PermuteType2[];

/**
 * UNDOCUMENTED.
 */
export interface PermuteType1 {
  /**
   * The percentage of 100 of a type of mob that should spawn. If there are multiple weights, they must add up to 100.
   */
  weight?: number;
  /**
   * The type of mob to spawn.
   */
  entity_type?: string;
  /**
   * Causes mobs to spawn with a guaranteed_count before mobs that do not have this spawn condition.
   */
  guaranteed_count?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface PermuteType2 {
  /**
   * The percentage of 100 of a type of mob that should spawn. If there are multiple weights, they must add up to 100.
   */
  weight?: number;
  /**
   * The type of mob to spawn.
   */
  entity_type?: string;
  /**
   * Causes mobs to spawn with a guaranteed_count before mobs that do not have this spawn condition.
   */
  guaranteed_count?: number;
}
