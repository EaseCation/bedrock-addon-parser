/**
 * behavior/spawn_rules/components/density_limit.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.126Z
 */

/**
 * This component allows the players to specify the amount of mobs to spawn in certain locations.
 */
export interface DensityLimit {
  /**
   * This is the maximum number of mobs of this type spawnable on the surface.
   */
  surface?: number;
  /**
   * This is the maximum number of mobs of this type spawnable underground.
   */
  underground?: number;
}
