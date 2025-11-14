/**
 * behavior/blocks/format/components/tick.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.413Z
 */

/**
 * The Range between which the component will trigger his event.
 */
export type IntervalRange = unknown[];

/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export interface Tick {
  /**
   * Does the event loop.
   */
  looping?: boolean;
  interval_range?: IntervalRange;
}
