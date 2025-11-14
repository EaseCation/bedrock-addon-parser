/**
 * behavior/blocks/format/triggers/on_step_on.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.115Z
 */

/**
 * [Experimental] Describes event for this block.
 */
export interface OnStepOn {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
