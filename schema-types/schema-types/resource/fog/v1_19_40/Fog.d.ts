/**
 * resource/fog/fog.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.382Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The identifier for these fog settings. The identifier must include a namespace.
 */
export type BlockceptionMinecraftFogIdentifier = string;
/**
 * Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
 */
export type RenderDistanceType = 'fixed' | 'render';
/**
 * Additional fog data which will slowly transition to the distance fog of current biome.
 */
export type TransitionFog = boolean;
/**
 * Proportion of light that is absorbed (lost) per block.
 */
export type Absorption = [] | [number] | [number, number] | [number, number, number] | string;
/**
 * Proportion of light that is scattered per block.
 */
export type Scattering = [] | [number] | [number, number] | [number, number, number] | string;

/**
 * UNDOCUMENTED.
 */
export interface Fog {
  format_version?: FormatVersion;
  'minecraft:fog_settings'?: FogSettings;
}
/**
 * The definition of a single fog.
 */
export interface FogSettings {
  description?: Description;
  distance?: Distance;
  volumetric?: Volumetric;
}
/**
 * The identifying description of this fog settings.
 */
export interface Description {
  identifier?: BlockceptionMinecraftFogIdentifier;
}
/**
 * The distance fog settings for different camera locations.
 */
export interface Distance {
  air?: Air;
  weather?: Weather;
  water?: Water;
  lava?: Lava;
  lava_resistance?: LavaResistance;
  powder_snow?: PowderSnow;
}
/**
 * The fog settings when the camera is in the air.
 */
export interface Air {
  /**
   * The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
   */
  fog_start: number;
  /**
   * The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
   */
  fog_end: number;
  /**
   * The color that the fog will take on.
   */
  fog_color: string;
  render_distance_type: RenderDistanceType;
  transition_fog?: TransitionFog;
}
/**
 *  The fog settings for when the camera is in the air with active weather (rain, snow, etc..).
 */
export interface Weather {
  /**
   * The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
   */
  fog_start: number;
  /**
   * The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
   */
  fog_end: number;
  /**
   * The color that the fog will take on.
   */
  fog_color: string;
  render_distance_type: RenderDistanceType;
  transition_fog?: TransitionFog;
}
/**
 * The fog settings when the camera is in water.
 */
export interface Water {
  /**
   * The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
   */
  fog_start: number;
  /**
   * The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
   */
  fog_end: number;
  /**
   * The color that the fog will take on.
   */
  fog_color: string;
  render_distance_type: RenderDistanceType;
  transition_fog?: TransitionFog;
}
/**
 * The fog settings when the camera is in lava.
 */
export interface Lava {
  /**
   * The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
   */
  fog_start: number;
  /**
   * The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
   */
  fog_end: number;
  /**
   * The color that the fog will take on.
   */
  fog_color: string;
  render_distance_type: RenderDistanceType;
  transition_fog?: TransitionFog;
}
/**
 * The fog settings when the camera is in lava and the player has the lava resistance effect active.
 */
export interface LavaResistance {
  /**
   * The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
   */
  fog_start: number;
  /**
   * The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
   */
  fog_end: number;
  /**
   * The color that the fog will take on.
   */
  fog_color: string;
  render_distance_type: RenderDistanceType;
  transition_fog?: TransitionFog;
}
/**
 * The fog settings when the camera is inside a Powder Snow block.
 */
export interface PowderSnow {
  /**
   * The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
   */
  fog_start: number;
  /**
   * The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
   */
  fog_end: number;
  /**
   * The color that the fog will take on.
   */
  fog_color: string;
  render_distance_type: RenderDistanceType;
  transition_fog?: TransitionFog;
}
/**
 * The volumetric fog settings.
 */
export interface Volumetric {
  density?: Density;
  media_coefficients?: MediaCoefficients;
}
/**
 * The density settings for different camera locations.
 */
export interface Density {
  air?: Air1;
  water?: Water1;
  lava?: Lava1;
  lava_resistance?: LavaResistance1;
}
/**
 * Fog density values as light passes through air blocks.
 */
export interface Air1 {
  /**
   * The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
   */
  max_density: number;
  /**
   * The height in blocks that the ground fog will become it's maximum density.
   */
  max_density_height?: number;
  /**
   * The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than `max_density_height`.
   */
  zero_density_height?: number;
  /**
   * When set to true, the density will be uniform across all heights.
   */
  uniform?: boolean;
}
/**
 * Fog density values as light passes through water blocks.
 */
export interface Water1 {
  /**
   * The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
   */
  max_density: number;
  /**
   * The height in blocks that the ground fog will become it's maximum density.
   */
  max_density_height?: number;
  /**
   * The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than `max_density_height`.
   */
  zero_density_height?: number;
  /**
   * When set to true, the density will be uniform across all heights.
   */
  uniform?: boolean;
}
/**
 * Fog density values as light passes through lava blocks.
 */
export interface Lava1 {
  /**
   * The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
   */
  max_density: number;
  /**
   * The height in blocks that the ground fog will become it's maximum density.
   */
  max_density_height?: number;
  /**
   * The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than `max_density_height`.
   */
  zero_density_height?: number;
  /**
   * When set to true, the density will be uniform across all heights.
   */
  uniform?: boolean;
}
/**
 * Fog density values as light passes through lava blocks while the player has lava resistance.
 */
export interface LavaResistance1 {
  /**
   * The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
   */
  max_density: number;
  /**
   * The height in blocks that the ground fog will become it's maximum density.
   */
  max_density_height?: number;
  /**
   * The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than `max_density_height`.
   */
  zero_density_height?: number;
  /**
   * When set to true, the density will be uniform across all heights.
   */
  uniform?: boolean;
}
/**
 * The coefficient settings for the volumetric fog in different blocks.
 */
export interface MediaCoefficients {
  air?: Air2;
  water?: Water2;
  cloud?: Cloud;
}
/**
 * Fog coefficient values while light passes through air.
 */
export interface Air2 {
  absorption?: Absorption;
  scattering?: Scattering;
}
/**
 * Fog coefficient values while light passes through water.
 */
export interface Water2 {
  absorption?: Absorption;
  scattering?: Scattering;
}
/**
 * Fog coefficient values while light passes through clouds.
 */
export interface Cloud {
  absorption?: Absorption;
  scattering?: Scattering;
}
