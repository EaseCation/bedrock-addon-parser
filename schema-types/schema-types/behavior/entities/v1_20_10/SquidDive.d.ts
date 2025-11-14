/**
 * behavior/entities/format/behaviors/squid_dive.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.880Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows an entity to dive underwater.
 */
export interface SquidDive {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
