/**
 * behavior/blocks/format/triggers/random_ticking.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.113Z
 */

/**
 * [Experimental] Triggers the specified event randomly based on the random tick speed gamerule. The random tick speed determines how often blocks are updated.
 */
export interface RandomTicking {
  on_tick?: OnTick;
  /**
   * A condition using Molang queries that results to true/false. If true on the random tick, the event will be triggered. If false on the random tick, the event will not be triggered.
   */
  condition?: string;
  /**
   * The event that will be triggered.
   */
  event?: string;
  /**
   * The target of the event executed by the block
   */
  target?: string;
}
/**
 * the event that will be triggered on random ticks.
 */
export interface OnTick {
  [k: string]: unknown;
}
