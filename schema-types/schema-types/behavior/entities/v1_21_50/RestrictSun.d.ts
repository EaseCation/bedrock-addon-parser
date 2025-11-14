/**
 * behavior/entities/format/behaviors/restrict_sun.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.731Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to automatically start avoiding the sun when its a clear day out.
 */
export interface RestrictSun {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
