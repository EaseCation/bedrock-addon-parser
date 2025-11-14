/**
 * behavior/items/format/components/icon.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:14.008Z
 */

/**
 * The icon item componenent determines the icon to represent the item in the UI and elsewhere.
 */
export interface Icon {
  /**
   * An index or expression for which frame of the icon to display. Default resolves to 0.
   */
  frame?: number & string;
  /**
   * Legacy texture id for older item icons.
   */
  legacy_id?: string;
  /**
   * The key from the resource_pack/textures/item_texture.json `texture_data` object associated with the texture file Example: blaze_powder.
   */
  texture: string;
}
