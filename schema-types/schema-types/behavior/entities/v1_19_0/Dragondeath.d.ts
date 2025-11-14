/**
 * behavior/entities/format/behaviors/dragondeath.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.015Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the dragon to go out with glory. This controls the Ender Dragon's death animation and can't be used by other mobs.
 */
export interface Dragondeath {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
