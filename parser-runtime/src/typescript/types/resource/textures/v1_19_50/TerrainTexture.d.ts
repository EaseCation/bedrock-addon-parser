/**
 * resource/textures/terrain_texture.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.246Z
 */

export type Texture = string | Texture1;
/**
 * The possible variations to use for this texture.
 */
export type Variantions = Variantion[];

/**
 * An collection of texture definitions.
 */
export interface TerrainTextureFile {
  /**
   * UNDOCUMENTED.
   */
  num_mip_levels?: number;
  /**
   * UNDOCUMENTED.
   */
  padding?: number;
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
  textures?: Texture | Texture[];
  [k: string]: unknown;
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
   * The tint color to be applied to the texture.
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
 * One of the variantions, specified along with a possible weight.
 */
export interface Variantion {
  /**
   * A texture file.
   */
  path: string;
  /**
   * The weight of the texture.
   */
  weight?: number;
  [k: string]: unknown;
}
