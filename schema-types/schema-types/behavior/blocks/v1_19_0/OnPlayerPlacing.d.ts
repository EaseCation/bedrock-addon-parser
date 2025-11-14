/**
 * behavior/blocks/format/components/on_player_placing.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.046Z
 */

/**
 * Describes event for this block.
 */
export interface OnPlayerPlacing {
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
