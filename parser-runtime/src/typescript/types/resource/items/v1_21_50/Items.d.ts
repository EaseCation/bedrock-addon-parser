/**
 * resource/items/1.10.0/items.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.978Z
 */

/**
 * The item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * The render offset used for the item.
 */
export type RenderOffsets = 'apple';

/**
 * Minecraft items 1.10.0
 */
export interface Item {
  /**
   * A version that tells minecraft what type of data format can be expected when reading this file.
   */
  format_version: string;
  'minecraft:item': Item1;
  [k: string]: unknown;
}
/**
 * A resource pack definition of an item.
 */
export interface Item1 {
  description: Description;
  components: Components;
}
/**
 * The description of an item.
 */
export interface Description {
  identifier: BlockceptionMinecraftItemIdentifier;
  /**
   * The category this item belongs in.
   */
  category?: string;
}
/**
 * The components that describe this item.
 */
export interface Components {
  /**
   * The texture defined in `textures/item_texture.json`
   */
  'minecraft:icon'?: string;
  'minecraft:render_offsets'?: RenderOffsets;
}
