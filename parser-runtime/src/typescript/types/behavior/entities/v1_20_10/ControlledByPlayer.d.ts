/**
 * behavior/entities/format/behaviors/controlled_by_player.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.443Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the entity to be controlled by the player using an item in the item_controllable property (required). Also requires the minecraft:movement property, and the minecraft:rideable property. On every tick, the entity will attempt to rotate towards where the player is facing with the control item whilst simultaneously moving forward.
 */
export interface ControlledByPlayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The entity will attempt to rotate to face where the player is facing each tick. The entity will target this percentage of their difference in their current facing angles each tick (from 0.0 to 1.0 where 1.0 = 100%). This is limited by FractionalRotationLimit. A value of 0.0 will result in the entity no longer turning to where the player is facing.
   */
  fractional_rotation?: number;
  /**
   * Limits the total degrees the entity can rotate to face where the player is facing on each tick.
   */
  fractional_rotation_limit?: number;
  /**
   * Speed multiplier of mount when controlled by player.
   */
  mount_speed_multiplier?: number;
}
