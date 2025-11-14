/**
 * behavior/biomes/components/surface_material_adjustments.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.027Z
 */

/**
 * Defines a range of noise values [min, max] for which this adjustment should be applied.
 */
export type HeightRange = [] | [Min] | [Min, Max];
/**
 * The minecraft molang definition that results in a float.
 */
export type Min = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type Max = string | number;
/**
 * Defines a range of noise values [min, max] for which this adjustment should be applied.
 */
export type NoiseRange = [] | [Min1] | [Min1, Max1];
/**
 * All adjustments that match the column's noise values will be applied in the order listed.
 */
export type Adjustments = Adjustment[];

/**
 * Specify fine-detail changes to blocks used in terrain generation (based on a noise function).
 */
export interface SurfaceMaterialAdjustments {
  adjustments?: Adjustments;
}
/**
 * UNDOCUMENTED.
 */
export interface Adjustment {
  height_range?: HeightRange;
  materials?: Materials;
  noise_range?: NoiseRange;
}
/**
 * UNDOCUMENTED.
 */
export interface Materials {
  /**
   * Controls the block type used for the surface of this biome when this adjustment is active.
   */
  top_material?: string;
  /**
   * Controls the block type used in a layer below the surface of this biome when this adjustment is active.
   */
  mid_material?: string;
  /**
   * Controls the block type used as a floor for bodies of water in this biome when this adjustment is active.
   */
  sea_floor_material?: string;
  /**
   * Controls the block type used deep underground in this biome when this adjustment is active.
   */
  foundation_material?: string;
  /**
   * Controls the block type used in the bodies of water in this biome when this adjustment is active.
   */
  sea_material?: string;
}
export interface Min1 {
  [k: string]: unknown;
}
export interface Max1 {
  [k: string]: unknown;
}
