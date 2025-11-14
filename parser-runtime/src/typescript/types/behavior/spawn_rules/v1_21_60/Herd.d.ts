/**
 * behavior/spawn_rules/components/herd.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.152Z
 */

/**
 * This component allows players to determine the herd size of animals.
 */
export type HeightFilter = Herd | Herd1[];

/**
 * Herd.
 */
export interface Herd {
  /**
   * Runs an event on the first entities in a group.
   */
  initial_event?: string;
  /**
   * The number of entities that "initial_event" should trigger on.
   */
  initial_event_count?: number;
  /**
   * This is the minimum number of mobs that spawn in a herd.
   */
  min_size?: number;
  /**
   * This is the maximum number of mobs that spawn in a herd.
   */
  max_size?: number;
  /**
   * This is an event that can be triggered from spawning.
   */
  event?: string;
  /**
   * This is the number of mobs spawned before the specified event is triggered.
   */
  event_skip_count?: number;
}
/**
 * Herd.
 */
export interface Herd1 {
  /**
   * Runs an event on the first entities in a group.
   */
  initial_event?: string;
  /**
   * The number of entities that "initial_event" should trigger on.
   */
  initial_event_count?: number;
  /**
   * This is the minimum number of mobs that spawn in a herd.
   */
  min_size?: number;
  /**
   * This is the maximum number of mobs that spawn in a herd.
   */
  max_size?: number;
  /**
   * This is an event that can be triggered from spawning.
   */
  event?: string;
  /**
   * This is the number of mobs spawned before the specified event is triggered.
   */
  event_skip_count?: number;
}
