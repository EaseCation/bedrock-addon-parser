/**
 * behavior/entities/format/behaviors/raid_garden.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.612Z
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
 * A block identifier.
 */
export type BlockId = BlockId1 & BlockId2;
export type BlockId1 = BlockceptionMinecraftBlockIdentifier | BlockReference;
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier1 = string;
/**
 * The key of property is the name of the block state/property, the value must be the same as the block properties accepted values.
 */
export type StateValue = boolean | number | string;
/**
 * A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags.
 */
export type MolangString180 = string;
export type BlockId2 = string;
/**
 * Blocks that the mob is looking for to eat.
 */
export type Blocks = BlockId[];

/**
 * Allows the mob to eat/raid crops out of farms until they are full.
 */
export interface RaidGarden {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  blocks?: Blocks;
  /**
   * Time in seconds between each time it eats.
   */
  eat_delay?: number;
  /**
   * Amount of time in seconds before this mob wants to eat again.
   */
  full_delay?: number;
  /**
   * Time in seconds before starting to eat/raid once it arrives at it.
   */
  initial_eat_delay?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * Maximum number of things this entity wants to eat.
   */
  max_to_eat?: number;
  /**
   * Distance in blocks the mob will look for crops to eat.
   */
  search_range?: number;
  /**
   * Height in blocks the mob will look for crops to eat.
   */
  search_height?: number;
}
export interface BlockReference {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString180;
}
export interface States {
  [k: string]: StateValue;
}
