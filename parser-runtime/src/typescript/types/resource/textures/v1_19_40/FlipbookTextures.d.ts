/**
 * resource/textures/flipbook_textures.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.260Z
 */

/**
 * The collection of frame index to display.
 */
export type Frames = number[];
/**
 * The file that specifies animated textures.
 */
export type FlipbookTextureFile = FlipbookTexture[];

/**
 * A single flipbook texture.
 */
export interface FlipbookTexture {
  /**
   * UNDOCUMENTED.
   */
  atlas_index?: number;
  /**
   * UNDOCUMENTED.
   */
  atlas_tile?: string;
  /**
   * UNDOCUMENTED.
   */
  atlas_tile_variant?: number;
  /**
   * UNDOCUMENTED.
   */
  blend_frames?: boolean;
  /**
   * A texture file.
   */
  flipbook_texture?: string;
  frames?: Frames;
  /**
   * UNDOCUMENTED.
   */
  replicate?: number;
  /**
   * The amount of ticks to wait between frames.
   */
  ticks_per_frame?: number;
}
