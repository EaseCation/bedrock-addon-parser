/**
 * behavior/entities/format/behaviors/stay_near_noteblock.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.628Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * [EXPERIMENTAL BEHAVIOR] The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.
 */
export interface StayNearNoteblock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Sets the time an entity should stay near a noteblock after hearing it.
   */
  listen_time?: number;
  /**
   * Sets the entity's speed when moving toward the block.
   */
  speed?: number;
  /**
   * Sets the distance the entity needs to be away from the block to attempt to start the goal.
   */
  start_distance?: number;
  /**
   * Sets the distance from the block the entity will attempt to reach.
   */
  stop_distance?: number;
}
