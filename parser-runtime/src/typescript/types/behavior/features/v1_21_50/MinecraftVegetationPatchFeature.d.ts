/**
 * behavior/features/features/minecraft.vegetation_patch_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.969Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * Block used to create a base for the vegetation patch.
 */
export type ReplaceBlock = string;
/**
 * Blocks that can be replaced by the ground blocks on the patch.
 */
export type ReplaceableBlocks = ReplaceBlock[];
/**
 * Block used to create a base for the vegetation patch.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * Feature that will be placed by the patch.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Determines if a vegetation patch will grow from the ceiling or the floor.
 */
export type Surface = 'floor' | 'ceiling';

/**
 * Feature type `minecraft:vegetation_patch_feature` has not yet been documented.
 */
export interface VegetationPatchFeature {
  description: Description;
  replaceable_blocks: ReplaceableBlocks;
  ground_block: BlockceptionMinecraftBlockIdentifier;
  vegetation_feature: BlockceptionMinecraftFeatureIdentifier;
  surface?: Surface;
  /**
   * Depth of the base covered by the ground blocks.
   */
  depth?: number;
  /**
   * Probability of putting the ground blocks one block deeper. Adds some randomness to the bottom of the patch.
   */
  extra_deep_block_chance?: number;
  /**
   * Vertical range used to determine a suitable surface position for the patch.
   */
  vertical_range?: number;
  /**
   * Probability of spawning vegetation on the patch. Larger numbers create a denser vegetation patch.
   */
  vegetation_chance?: number;
  /**
   * Horizontal area that the vegetation patch will cover.
   */
  horizontal_radius: number;
  /**
   * Probability of spawning vegetation on the edge of the patch radius.
   */
  extra_edge_column_chance?: number;
  /**
   * If true, waterlogs the positions occupied by the ground blocks.
   */
  waterlogged?: boolean;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
