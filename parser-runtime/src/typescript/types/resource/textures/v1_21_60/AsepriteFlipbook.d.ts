/**
 * resource/textures/aseprite_flipbook.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.721Z
 */

/**
 * The frames of the flipbook.
 */
export type Frames = Frame[];

/**
 * The file that specifies Aseprite/libresprite flipbook animation.
 */
export interface AsepriteFlipbookFile {
  meta: Meta;
  frames: Frames;
}
/**
 * The meta data of the flipbook.
 */
export interface Meta {
  size: Size;
  /**
   * The path to the sprite sheet. The value is required, but not used.
   */
  image: string;
  [k: string]: unknown;
}
/**
 * The size of the flipbook sprite sheet.
 */
export interface Size {
  /**
   * The width of the sprite sheet.
   */
  w: number;
  /**
   * The height of the sprite sheet.
   */
  h: number;
  [k: string]: unknown;
}
/**
 * A frame of the flipbook.
 */
export interface Frame {
  /**
   * The duration of the frame in milliseconds.
   */
  duration: number;
  frame: Frame1;
  [k: string]: unknown;
}
/**
 * The position of the frame in the sprite sheet (UV).
 */
export interface Frame1 {
  /**
   * The x position of the frame in the sprite sheet.
   */
  x: number;
  /**
   * The y position of the frame in the sprite sheet.
   */
  y: number;
  [k: string]: unknown;
}
