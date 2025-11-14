/**
 * behavior/blocks/format/components/ticking.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.030Z
 */

/**
 * The Range between which the component will trigger his event.
 */
export type Range = [] | [number] | [number, number];

/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export interface Ticking {
  /**
   * Does the event loop.
   */
  looping?: boolean;
  range?: Range;
  on_tick?: OnTick;
}
/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export interface OnTick {
  [k: string]: unknown;
}
