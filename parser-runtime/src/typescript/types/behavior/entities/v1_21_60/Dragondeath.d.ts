/**
 * behavior/entities/format/behaviors/dragondeath.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.874Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Controls the entity's death state and animation. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragondeath {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
