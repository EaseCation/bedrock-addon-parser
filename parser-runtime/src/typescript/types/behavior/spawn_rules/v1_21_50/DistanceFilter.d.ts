/**
 * behavior/spawn_rules/components/distance_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.717Z
 */

/**
 * This component allows players to set mobs spawn with certain distance levels.
 */
export interface DistanceFilter {
  /**
   * This is the minimum distance level that a mob spawns.
   */
  min?: number;
  /**
   * This is the maximum distance level that a mob spawns.
   */
  max?: number;
}
