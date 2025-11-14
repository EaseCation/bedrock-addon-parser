/**
 * behavior/biomes/components/mountain_parameters.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.624Z
 */

/**
 * Noise parameters used to drive mountain terrain generation in Overworld.
 */
export interface MountainParameters {
  /**
   * UNDOCUMENTED.
   */
  peaks_factor?: number;
  steep_material_adjustment?: SteepMaterialAdjustment;
  top_slide?: TopSlide;
}
/**
 * Defines surface material for steep slopes.
 */
export interface SteepMaterialAdjustment {
  /**
   * Block type use as steep material.
   */
  material?: string;
  /**
   * Enable for north facing slopes.
   */
  north_slopes?: boolean;
  /**
   * Enable for south facing slopes.
   */
  south_slopes?: boolean;
  /**
   * Enable for west facing slopes.
   */
  west_slopes?: boolean;
  /**
   * Enable for east facing slopes.
   */
  east_slopes?: boolean;
}
/**
 * Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high.
 */
export interface TopSlide {
  enabled?: Enabled;
}
/**
 * If false, top slide will be disabled. If true, other parameters will be taken into account
 */
export interface Enabled {
  [k: string]: unknown;
}
