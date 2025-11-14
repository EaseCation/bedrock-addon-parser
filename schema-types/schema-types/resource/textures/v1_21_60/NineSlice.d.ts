/**
 * resource/textures/nine_slice.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.715Z
 */

export type SliceOffsets = number | [number, number, number, number];
/**
 * Width and height of the texture (in this exact order).
 *
 * @minItems 2
 * @maxItems 2
 */
export type SizeOfTheTexture = [number, number];

/**
 * The file that specifies 9Slice textures.
 */
export interface SliceTextureFile {
  nineslice_size?: SliceOffsets;
  base_size?: SizeOfTheTexture;
}
