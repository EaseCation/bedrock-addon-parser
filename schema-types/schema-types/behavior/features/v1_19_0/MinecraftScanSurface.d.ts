/**
 * behavior/features/1.13.0/features/minecraft.scan_surface.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:06.579Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * Named reference of feature to be placed.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;

/**
 * `minecraft:scan_surface` scans the surface of a Chunk, calling place() on the surface of each block column.
 * Succeeds if: A Feature was successfully placed during the scan.
 * Fails if: No Feature was placed during the course of the scan.
 */
export interface RectLayout {
  description: Description;
  scan_surface_feature: BlockceptionMinecraftFeatureIdentifier;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
