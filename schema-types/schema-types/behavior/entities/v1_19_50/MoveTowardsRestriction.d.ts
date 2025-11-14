/**
 * behavior/entities/format/behaviors/move_towards_restriction.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.668Z
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
 * UNDOCUMENTED: control flags.
 */
export type ControlFlags1 = 'move' | 'look';
/**
 * UNDOCUMENTED: control flags.
 */
export type ControlFlags = ControlFlags1[];

/**
 * Allows Guardians, Iron Golems and Villagers to move within their pre-defined area that the mob should be restricted to. Other mobs don't have a restriction defined.
 */
export interface MoveTowardsRestriction {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  control_flags?: ControlFlags;
}
