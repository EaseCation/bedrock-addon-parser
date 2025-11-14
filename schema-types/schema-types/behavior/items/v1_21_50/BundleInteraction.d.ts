/**
 * behavior/items/format/components/bundle_interaction.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.859Z
 */

/**
 * Adds bundle-specific interactions and tooltip to the item.
 */
export interface BundleInteraction {
  /**
   * The maximum number of slots in the bundle viewable by the plater. Can be from 1 to 64. Default is 12.
   */
  num_viewable_slots?: number;
  [k: string]: unknown;
}
