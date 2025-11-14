/**
 * behavior/entities/format/behaviors/float.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.161Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to stay afloat while swimming.
 */
export interface Float {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, the mob will keep sinking as long as it has passengers.
   */
  sink_with_passengers?: boolean;
}
