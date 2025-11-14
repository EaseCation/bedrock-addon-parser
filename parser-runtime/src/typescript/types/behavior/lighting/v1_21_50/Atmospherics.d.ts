/**
 * behavior/lighting/atmospherics.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.770Z
 */

/**
 * The RGB color of the zenith region of the atmosphere
 */
export type SkyZenithColor = string | [] | [number] | [number, number] | [number, number, number];
/**
 * The RGB color of the horizon region of the atmosphere
 */
export type SkyHorizonColor = string | [] | [number] | [number, number] | [number, number, number];

/**
 * The properties of the atmosphere
 */
export interface Atmospherics {
  horizon_blend_stops?: HorizonBlendStops;
  /**
   * How strong the atmosphere's rayleigh scattering term is
   */
  rayleigh_strength?: number;
  /**
   * How strong the sun's mie scattering term is
   */
  sun_mie_strength?: number;
  /**
   * How strong the moon's mie scattering term is
   */
  moon_mie_strength?: number;
  /**
   * How the lobe of the mie scattering is shaped
   */
  sun_glare_shape?: number;
  sky_zenith_color?: SkyZenithColor;
  sky_horizon_color?: SkyHorizonColor;
}
/**
 * How the atmosphere is divided up
 */
export interface HorizonBlendStops {
  /**
   * The minimum horizon height
   */
  min?: number;
  /**
   * The height relative to the horizon where the zenith contribution will take over
   */
  start?: number;
  /**
   * The height relative to the horizon where mie scattering begins
   */
  mie_start?: number;
  /**
   * The maximum horizon height
   */
  max?: number;
}
