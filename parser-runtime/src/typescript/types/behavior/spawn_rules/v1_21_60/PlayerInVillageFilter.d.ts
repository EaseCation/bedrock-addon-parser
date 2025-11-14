/**
 * behavior/spawn_rules/components/player_in_village_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.148Z
 */

/**
 * This component lets players be filtered by whether they are in a village or not, using distance and the village border definitions.
 */
export interface PlayerInVillageFilter {
  /**
   * This is the maximum mob_event level that an entity spawns.
   */
  distance?: number;
  /**
   * This is the minimum mob_event level that an entity spawns.
   */
  village_border_tolerance?: number;
}
