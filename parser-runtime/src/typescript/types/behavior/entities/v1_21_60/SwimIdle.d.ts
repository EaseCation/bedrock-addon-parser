/**
 * behavior/entities/format/behaviors/swim_idle.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.163Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the entity go idle, if swimming. Entity must be in water.
 */
export interface SwimIdle {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Amount of time (in seconds) to stay idle.
   */
  idle_time?: number;
  /**
   * Percent chance this entity will go idle, 1.0 = 100%.
   */
  success_rate?: number;
}
