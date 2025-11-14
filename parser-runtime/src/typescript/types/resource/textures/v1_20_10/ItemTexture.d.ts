/**
 * resource/textures/item_texture.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.847Z
 */

export type Texture = string | Texture1;
/**
 * UNDOCUMENTED.
 */
export type Variantions = Variantion[];
/**
 * A collection of textures.
 */
export type TextureData2 = Texture[];

/**
 * UNDOCUMENTED.
 */
export interface ItemTextureFile {
  /**
   * UNDOCUMENTED.
   */
  resource_pack_name?: string;
  texture_data?: TextureData;
  /**
   * UNDOCUMENTED.
   */
  texture_name?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface TextureData {
  [k: string]: TextureData1;
}
/**
 * UNDOCUMENTED.
 */
export interface TextureData1 {
  textures?: Texture | TextureData2;
}
/**
 * A collection of texture files.
 */
export interface Texture1 {
  overlay_color?: OverlayColor;
  /**
   * A texture file.
   */
  path?: string;
  /**
   * UNDOCUMENTED.
   */
  tint_color?: string;
  variations?: Variantions;
}
/**
 * The color to apply to the texture.
 */
export interface OverlayColor {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface Variantion {
  /**
   * A texture file.
   */
  path: string;
  /**
   * UNDOCUMENTED.
   */
  weight?: number;
  [k: string]: unknown;
}
