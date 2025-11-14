/**
 * behavior/entities/format/behaviors/scared.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.530Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the a mob to become scared when the weather outside is thundering.
 */
export interface Scared {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The interval in which a sound will play when active in a 1/delay chance to kick off.
   */
  sound_interval?: number;
}
