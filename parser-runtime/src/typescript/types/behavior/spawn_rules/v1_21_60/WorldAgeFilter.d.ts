/**
 * behavior/spawn_rules/components/world_age_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.139Z
 */

/**
 * This component allows players to set mobs spawn after a certain amount of time has passed within a world.
 */
export interface WorldAgeFilter {
  /**
   * This is the minimum world_age_filter level that a mob spawns measured in seconds.
   */
  min?: number;
}
