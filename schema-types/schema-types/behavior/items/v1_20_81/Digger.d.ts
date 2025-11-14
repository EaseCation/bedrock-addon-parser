/**
 * behavior/items/format/components/digger.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.800Z
 */

export type Block =
  | string
  | {
      /**
       * The block tags.
       */
      tags?: string;
    };
/**
 * Destroy speed per block.
 */
export type DestroySpeeds = DestroySpeed[];

/**
 * Digger item. Component put on items that dig.
 */
export interface Digger {
  /**
   * Toggles if the item will be used efficiently.
   */
  use_efficiency?: boolean;
  destroy_speeds: DestroySpeeds;
}
/**
 * Destroy speed per block.
 */
export interface DestroySpeed {
  speed?: number;
  block?: Block;
}
