/**
 * behavior/spawn_rules/components/brightness_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.345Z
 */

/**
 * This component allows players to set the light level range that causes the mob to spawn.
 */
export interface BrightnessFilter {
  /**
   * This is the minimum light level value that allows the mob to spawn.
   */
  min?: number;
  /**
   * This is the maximum light level value that allows the mob to spawn.
   */
  max?: number;
  /**
   * This determines if weather can affect the light level conditions that cause the mob to spawn (e.g. Allowing hostile mobs to spawn during the day when it rains.)
   */
  adjust_for_weather?: boolean;
}
