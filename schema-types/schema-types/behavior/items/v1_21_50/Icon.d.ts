/**
 * behavior/items/format/components/icon.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.839Z
 */

/**
 * The icon item componenent determines the icon to represent the item in the UI and elsewhere.
 */
export type Icon =
  | string
  | {
      textures: Textures;
    };

/**
 * Contains key-value pairs of textures used by the item
 */
export interface Textures {
  /**
   * The key from the resource_pack/textures/item_texture.json `texture_data` object associated with the texture file Example: blaze_powder.
   */
  default: string;
  /**
   * The key from the resource_pack/textures/item_texture.json `texture_data` object associated with the texture file Example: blaze_powder.
   */
  [k: string]: string;
}
