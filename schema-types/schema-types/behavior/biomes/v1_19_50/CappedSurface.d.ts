/**
 * behavior/biomes/components/capped_surface.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.222Z
 */

/**
 * Materials used for the surface ceiling.
 *
 * @minItems 1
 */
export type CeilingMaterials = [string, ...string[]];
/**
 * Materials used for the surface floor.
 *
 * @minItems 1
 */
export type FloorMaterials = [string, ...string[]];

/**
 * Generates surface on blocks with non-solid blocks above or below.
 */
export interface CappedSurface {
  ceiling_materials: CeilingMaterials;
  floor_materials: FloorMaterials;
  /**
   * Material used to replace air blocks below sea level.
   */
  sea_material: string;
  /**
   * Material used to repalce solid blocks that are not surface blocks.
   */
  foundation_material: string;
  /**
   * Material used to decorate surface near sea level.
   */
  beach_material?: string;
}
