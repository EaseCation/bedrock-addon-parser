/**
 * behavior/items/format/components/on_use.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.038Z
 */

/**
 * UNDOCUMENTED.
 */
export type Target = 'self';

/**
 * The on_use item component allows you to receive an event when the item is used.
 */
export interface OnUse {
  on_use: OnUse1;
}
/**
 * Event trigger for when the item is used.
 */
export interface OnUse1 {
  /**
   * UNDOCUMENTED.
   */
  event?: string;
  target?: Target;
}
