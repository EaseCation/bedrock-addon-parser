/**
 * behavior/spawn_rules/components/weight.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.290Z
 */

/**
 * This component allows players to set a priority for how often that mob should spawn. Mobs with lower weight values will have a lower chance to spawn than mobs with higher weight values.
 */
export interface Weight {
  /**
   * This is the priority of the mob spawning out of 100.
   */
  default?: number;
  /**
   * UNDOCUMENTED.
   */
  rarity?: number;
}
