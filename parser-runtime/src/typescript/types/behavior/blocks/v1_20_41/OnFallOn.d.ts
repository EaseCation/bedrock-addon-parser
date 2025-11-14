/**
 * behavior/blocks/format/triggers/on_fall_on.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.259Z
 */

/**
 * [Experimental] Describes event for this block.
 */
export interface OnFallOn {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The minimum distance in blocks that an actor needs to fall to trigger this event.
   */
  min_fall_distance?: number;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
