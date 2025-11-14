/**
 * behavior/biomes/components/minecraft.surface_parameters.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.103Z
 */

/**
 * Control the blocks used for the default Minecraft Overworld terrain generation.
 */
export interface SurfaceParameters {
  top_material?: TopMaterial;
  mid_material?: MidMaterial;
  sea_floor_material?: SeaFloorMaterial;
  foundation_material?: FoundationMaterial;
  sea_material?: SeaMaterial;
  /**
   * Controls how deep below the world water level the floor should occur.
   */
  sea_floor_depth?: number;
}
/**
 * Controls the block type used for the surface of this biome.
 */
export interface TopMaterial {
  [k: string]: unknown;
}
/**
 * Controls the block type used in a layer below the surface of this biome.
 */
export interface MidMaterial {
  [k: string]: unknown;
}
/**
 * Controls the block type used as a floor for bodies of water in this biome.
 */
export interface SeaFloorMaterial {
  [k: string]: unknown;
}
/**
 * Controls the block type used deep underground in this biome.
 */
export interface FoundationMaterial {
  [k: string]: unknown;
}
/**
 * Controls the block type used for the bodies of water in this biome.
 */
export interface SeaMaterial {
  [k: string]: unknown;
}
