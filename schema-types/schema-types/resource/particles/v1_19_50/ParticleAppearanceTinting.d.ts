/**
 * resource/particles/components/particle_appearance_tinting.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.323Z
 */

/**
 * UNDOCUMENTED.
 */
export type Color =
  | MolangNumber[]
  | string
  | {
      gradient?: Gradient;
      interpolant?: Interpolant;
    };
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber = string | number;
export type Gradient =
  | string[]
  | {
      /**
       * Color.
       */
      [k: string]: string;
    }
  | [number | string, number | string, number | string, ...(number | string)[]][];
/**
 * UNDOCUMENTED: interpolant.
 */
export type Interpolant = string | number;

/**
 * Color fields are special, they can be either an RGB, or a `#RRGGBB` field (or RGBA or `AARRGGBB`).  If RGB(A), the channels are from 0 to 1.  If the string `#AARRGGBB`, then the values are hex from 00 to ff.
 */
export interface ParticleAppearanceTintingComponentFor1100 {
  color?: Color;
}
