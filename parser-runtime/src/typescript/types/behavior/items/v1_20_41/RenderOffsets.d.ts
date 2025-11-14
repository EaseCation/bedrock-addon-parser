/**
 * behavior/items/format/components/render_offsets.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:35.019Z
 */

/**
 * Render offsets component: optional values can be given to offset the way the item is rendered. Depreciated in json formats 1.20.10 and higher
 */
export interface RenderOffsets {
  /**
   * Right hand transform data.
   */
  main_hand?: string;
  /**
   * Left hand transform data.
   */
  off_hand?: string;
}
