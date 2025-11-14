/**
 * resource/blocks.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.190Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * A version that tells Minecraft what type of data format can be expected when reading this file.
 *
 * @minItems 3
 * @maxItems 3
 */
export type FormatVersion1 = [number, number, number];
/**
 * Carried Textures.
 */
export type CarriedTextures =
  | string
  | {
      down?: string;
      up?: string;
      side?: string;
      south?: string;
      north?: string;
      west?: string;
      east?: string;
    };
/**
 * Marks if this block is isotropic or not, or which side are.
 */
export type Isotropic =
  | boolean
  | {
      down?: boolean;
      up?: boolean;
      side?: boolean;
      south?: boolean;
      north?: boolean;
      west?: boolean;
      east?: boolean;
    };
/**
 * Textures.
 */
export type Sound =
  | string
  | {
      down?: string;
      up?: string;
      side?: string;
      south?: string;
      north?: string;
      west?: string;
      east?: string;
    };

/**
 * The minecraft block definition file.
 */
export interface Blocks {
  format_version?: FormatVersion | FormatVersion1;
  [k: string]: Block;
}
/**
 * Block texture definition.
 */
export interface Block {
  /**
   * Specifies the gamma brightness level to apply to the block texture.
   */
  brightness_gamma?: number;
  carried_textures?: CarriedTextures;
  isotropic?: Isotropic;
  /**
   * The sound definition of this block.
   */
  sound?: string;
  textures?: Sound;
}
