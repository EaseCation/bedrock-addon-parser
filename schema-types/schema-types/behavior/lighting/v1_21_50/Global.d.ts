/**
 * behavior/lighting/global.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.765Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The RGB color that the sun contributes to direct surface lighting; supports RGB array or HEX string
 */
export type Color = string | [] | [number] | [number, number] | [number, number, number];
/**
 * The RGB color that the moon contributes to direct surface lighting; supports RGB array or HEX string
 */
export type Color1 = string | [] | [number] | [number, number] | [number, number, number];
/**
 * The color of the light emitted by the block, in RGB format or hex format.
 */
export type LightingColor = string | [] | [number] | [number, number] | [number, number, number];
/**
 * The default MER value to use for blocks when not defined via textureset; supports RGB array or HEX string
 */
export type Color2 = string | [] | [number] | [number, number] | [number, number, number];
/**
 * The default MER value to use for actors/mobs when not defined via textureset; supports RGB array or HEX string
 */
export type Color3 = string | [] | [number] | [number, number] | [number, number, number];
/**
 * The default MER value to use for particles when not defined via textureset; supports RGB array or HEX string
 */
export type Color4 = string | [] | [number] | [number, number] | [number, number, number];

export interface Global {
  format_version?: FormatVersion;
  directional_lights?: DirectionalLights;
}
/**
 * The directional lights that affect the world
 */
export interface DirectionalLights {
  sun?: Sun;
  moon?: Moon;
  /**
   * The rotational offset of the sun and moon from their standard orbital axis; measured in degrees
   */
  orbital_offset_degrees?: number;
  point_lights?: PointLights;
  pbr?: PBR;
}
/**
 * The sun directional light
 */
export interface Sun {
  /**
   * How bright the sun is, measured in lux (lx)
   */
  illuminance?: number;
  color?: Color;
}
/**
 * The moon directional light
 */
export interface Moon {
  /**
   * How bright the moon is, measured in lux (lx)
   */
  illuminance?: number;
  color?: Color1;
}
/**
 * The point lights that affect the world
 */
export interface PointLights {
  colors?: Colors;
}
/**
 * List of key-value pairs where the key is a namespace-qualified block name and the value is a color
 */
export interface Colors {
  [k: string]: LightingColor;
}
/**
 * The physically-based rendering properties for the world
 */
export interface PBR {
  blocks?: Blocks;
  actors?: Actors;
  particles?: Particles;
}
/**
 * The PBR properties for blocks
 */
export interface Blocks {
  color?: Color2;
}
/**
 * The PBR properties for actors
 */
export interface Actors {
  color?: Color3;
}
/**
 * The PBR properties for particles
 */
export interface Particles {
  color?: Color4;
}
