/**
 * behavior/items/format/components/on_use_on.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:35.021Z
 */

/**
 * Event target (block).
 */
export type Target = 'block';

/**
 * The on_use_on item component allows you to receive an event when the item is used on a block in the world.
 */
export interface OnUseOn {
  on_use_on: OnUseOn1;
}
/**
 * Event trigger for when the item is used.
 */
export interface OnUseOn1 {
  /**
   * Event trigger for when the item is used.
   */
  event?: string;
  target?: Target;
}
