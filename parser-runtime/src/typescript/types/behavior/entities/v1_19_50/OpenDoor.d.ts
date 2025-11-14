/**
 * behavior/entities/format/behaviors/open_door.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.623Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them.
 */
export interface OpenDoor {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, the mob will close the door after opening it and going through it.
   */
  close_door_after?: boolean;
}
