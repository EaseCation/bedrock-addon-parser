/**
 * behavior/entities/format/behaviors/dragontakeoff.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.007Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the dragon to leave perch mode and go back to flying around. Can only be used by the Ender Dragon.
 */
export interface Dragontakeoff {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
