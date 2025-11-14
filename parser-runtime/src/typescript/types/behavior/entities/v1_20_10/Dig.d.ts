/**
 * behavior/entities/format/behaviors/dig.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.387Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * [EXPERIMENTAL BEHAVIOR] Activates the `DIGGING` actor flag during the specified duration. Currently only Warden can use the Dig goal
 */
export interface Dig {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, this behavior can run when this entity is named. Otherwise not.
   */
  allow_dig_when_named?: boolean;
  /**
   * Indicates that the actor should start digging when it sees daylight.
   */
  digs_in_daylight?: boolean;
  /**
   * Goal duration in seconds.
   */
  duration?: number;
  /**
   * The minimum idle time in seconds between the last detected disturbance to the start of digging.
   */
  idle_time?: number;
  /**
   * If true, finding new suspicious locations count as disturbances that may delay the start of this goal.
   */
  suspicion_is_disturbance?: boolean;
  /**
   * If true, vibrations count as disturbances that may delay the start of this goal.
   */
  vibration_is_disturbance?: boolean;
}
