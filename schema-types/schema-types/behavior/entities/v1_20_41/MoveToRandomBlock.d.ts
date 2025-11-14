/**
 * behavior/entities/format/behaviors/move_to_random_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.741Z
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
 * Allows mob to move towards a random block.
 */
export interface MoveToRandomBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Defines the distance from the mob, in blocks, that the block to move to will be chosen.
   */
  block_distance?: number;
  /**
   * Defines the distance in blocks the mob has to be from the block for the movement to be finished.
   */
  within_radius?: number;
}
