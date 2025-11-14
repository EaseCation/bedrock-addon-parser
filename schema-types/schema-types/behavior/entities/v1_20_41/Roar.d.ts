/**
 * behavior/entities/format/behaviors/roar.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.571Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * [EXPERIMENTAL BEHAVIOR] Plays the provided sound and activates the `ROARING` actor flag during the specified duration
 */
export interface Roar {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Goal duration in seconds.
   */
  duration?: number;
}
