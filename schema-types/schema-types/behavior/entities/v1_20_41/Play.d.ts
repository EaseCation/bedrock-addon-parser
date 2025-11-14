/**
 * behavior/entities/format/behaviors/play.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.631Z
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
 * The dimensions of the AABB used to search for a potential friend to play with.
 */
export type FriendSearchArea = [] | [number] | [number, number] | [number, number, number];
/**
 * The entity type(s) to consider when searching for a potential friend to play with.
 */
export type FriendTypes = {
  [k: string]: unknown;
}[];

/**
 * Allows the mob to play with other baby villagers. This can only be used by Villagers.
 */
export interface Play {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Percent chance that the mob will start this goal, from 0 to 1.
   */
  chance_to_start?: number;
  /**
   * The distance (in blocks) that the mob tries to be in range of the friend it's following.
   */
  follow_distance?: number;
  friend_search_area?: FriendSearchArea;
  friend_types?: FriendTypes;
  /**
   * The max amount of seconds that the mob will play for before exiting the Goal.
   */
  max_play_duration_seconds?: number;
  /**
   * The height (in blocks) that the mob will search within to find a random position position to move to. Must be at least 1.
   */
  random_pos_search_height?: number;
  /**
   * The distance (in blocks) on ground that the mob will search within to find a random position to move to. Must be at least 1.
   */
  random_pos_search_range?: number;
}
