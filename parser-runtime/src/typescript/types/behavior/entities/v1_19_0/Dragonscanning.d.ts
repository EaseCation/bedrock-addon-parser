/**
 * behavior/entities/format/behaviors/dragonscanning.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.010Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the dragon to look around for a player to attack while in perch mode. Can only be used by the Ender Dragon.
 */
export interface Dragonscanning {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
