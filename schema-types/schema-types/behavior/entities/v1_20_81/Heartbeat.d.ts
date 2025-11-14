/**
 * behavior/entities/format/components/heartbeat.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.636Z
 */

/**
 * A Molang expression defining the inter-beat interval in seconds. A value of zero or less means no heartbeat..
 */
export type Interval = string | number;

/**
 * defines the entity's heartbeat..
 */
export interface Heartbeat {
  interval?: Interval;
  /**
   * Level sound event to be played as the heartbeat sound.
   */
  sound_event?: string;
}
