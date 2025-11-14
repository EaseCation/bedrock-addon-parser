/**
 * behavior/entities/format/behaviors/roll.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.532Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * This allows the mob to roll forward.
 */
export interface Roll {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The probability that the mob will use the goal.
   */
  probability?: number;
}
