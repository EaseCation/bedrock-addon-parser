/**
 * behavior/spawn_rules/components/delay_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.344Z
 */

/**
 * This component allows players to set mobs spawn with certain time delays before they will spawn.
 */
export interface DelayFilter {
  /**
   * This is the minimum delay that a mob spawns.
   */
  min?: number;
  /**
   * This is the maximum delay that a mob spawns.
   */
  max?: number;
  /**
   * The identifier of the mob that will spawn.
   */
  identifier: string;
  /**
   * The percent chance that this entity will spawn.
   */
  spawn_chance?: number;
}
