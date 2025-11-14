/**
 * behavior/features/1.13.0/features/minecraft.vegetation_patch_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:14.224Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * UNDOCUMENTED.
 */
export type ReplaceBlock = string;
/**
 * UNDOCUMENTED.
 */
export type ReplaceableBlocks = ReplaceBlock[];
/**
 * UNDOCUMENTED.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * UNDOCUMENTED.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;

/**
 * Feature type `minecraft:vegetation_patch_feature` has not yet been documented.
 */
export interface VegetationPatchFeature {
  description: Description;
  replaceable_blocks?: ReplaceableBlocks;
  ground_block?: BlockceptionMinecraftBlockIdentifier;
  vegetation_feature?: BlockceptionMinecraftFeatureIdentifier;
  /**
   * UNDOCUMENTED.
   */
  surface?: string;
  /**
   * UNDOCUMENTED.
   */
  depth?: number;
  /**
   * UNDOCUMENTED.
   */
  extra_deep_block_chance?: number;
  /**
   * UNDOCUMENTED.
   */
  vertical_range?: number;
  /**
   * UNDOCUMENTED.
   */
  vegetation_chance?: number;
  /**
   * UNDOCUMENTED.
   */
  horizontal_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  extra_edge_column_chance?: number;
  /**
   * UNDOCUMENTED.
   */
  waterlogged?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
