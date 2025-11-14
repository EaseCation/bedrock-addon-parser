/**
 * resource/blocks.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.155Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * UNDOCUMENTED.
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
  format_version?: FormatVersion;
  [k: string]: Block;
}
/**
 * Block texture definition.
 */
export interface Block {
  /**
   * UNDOCUMENTED.
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
