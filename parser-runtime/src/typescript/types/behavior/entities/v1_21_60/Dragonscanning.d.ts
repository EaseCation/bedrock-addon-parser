/**
 * behavior/entities/format/behaviors/dragonscanning.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.871Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows an entity to look around for a player to attack while in perch mode. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonscanning {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
