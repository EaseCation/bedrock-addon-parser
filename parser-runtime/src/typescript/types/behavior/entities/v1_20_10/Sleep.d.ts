/**
 * behavior/entities/format/behaviors/sleep.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.918Z
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
 * Allows mobs that own a bed to in a village to move to and sleep in it.
 */
export interface Sleep {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob will be able to use the sleep goal if riding something.
   */
  can_sleep_while_riding?: boolean;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * The height of the mob's collider while sleeping.
   */
  sleep_collider_height?: number;
  /**
   * The width of the mob's collider while sleeping.
   */
  sleep_collider_width?: number;
  /**
   * The y offset of the mob's collider while sleeping.
   */
  sleep_y_offset?: number;
  /**
   * The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition.
   */
  timeout_cooldown?: number;
}
