/**
 * behavior/spawn_rules/components/height_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.716Z
 */

/**
 * This component allows players to set mobs spawn within certain heights of their map.
 */
export interface HeightFilter {
  /**
   * This is the minimum height level that a mob spawns.
   */
  min?: number;
  /**
   * This is the maximum height level that a mob spawns.
   */
  max?: number;
}
