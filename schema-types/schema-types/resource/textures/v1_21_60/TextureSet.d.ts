/**
 * resource/textures/texture_set.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.711Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * This is an RGB 3-channel image (defaults to uniform alpha of 1.0), or an RGBA 4-channel image, or a 4 value array for a uniform color with alpha.
 */
export type Color =
  | string
  | []
  | [number]
  | [number, number]
  | [number, number, number]
  | [number, number, number, number];
/**
 * 1-channel layer image or a single value in this JSON file for a uniform heightmap. This layer and the "normal" layer should not both be defined at the same time.
 */
export type Heightmap = string | number;
/**
 * This is a 3-channel image (or 4-channel where the 4th channel is ignored) or a 3-value array for a uniform MER. RGB images map Red to Metalness, Green to Emissive, and Blue to Roughness.
 */
export type MetalnessEmissiveRoughness =
  | string
  | []
  | [number]
  | [number, number]
  | [number, number, number];
/**
 * This is a 3-channel normal map image (or 4-channel where the 4th channel is ignored). This layer and the "heightmap" layer should not both be defined at the same time.
 */
export type Normal = string;

export interface TextureSet {
  format_version?: FormatVersion;
  'minecraft:texture_set'?: TextureSet1;
}
/**
 * Texture Sets are used to define multiple PBR layers for a texture resource.
 */
export interface TextureSet1 {
  color: Color;
  heightmap?: Heightmap;
  metalness_emissive_roughness?: MetalnessEmissiveRoughness;
  normal?: Normal;
}
