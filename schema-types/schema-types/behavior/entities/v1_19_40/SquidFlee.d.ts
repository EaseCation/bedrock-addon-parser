/**
 * behavior/entities/format/behaviors/squid_flee.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.652Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the squid to swim away. Can only be used by the Squid.
 */
export interface SquidFlee {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
