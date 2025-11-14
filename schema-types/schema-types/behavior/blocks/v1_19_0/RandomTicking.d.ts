/**
 * behavior/blocks/format/components/random_ticking.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.035Z
 */

/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export type OnTick = string;
/**
 * The Range between which the component will trigger his event.
 */
export type Range = unknown[];

/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export interface RandomTicking {
  on_tick?: OnTick;
  /**
   * Does the event loop.
   */
  looping?: boolean;
  range?: Range;
}
