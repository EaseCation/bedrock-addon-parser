/**
 * behavior/entities/format/behaviors/dragonholdingpattern.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.381Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the Dragon to fly around in a circle around the center podium. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonholdingpattern {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
