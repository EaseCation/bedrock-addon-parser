/**
 * behavior/entities/format/behaviors/slime_keep_on_jumping.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.914Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;

/**
 * Can only be used by Slimes and Magma Cubes. Allows the mob to continuously jump around like a slime.
 */
export interface SlimeKeepOnJumping {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
