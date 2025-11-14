/**
 * behavior/features/features/minecraft.fossil_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.703Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Reference to the block to fill the cave with.
 */
export type BlockceptionMinecraftBlockIdentifier = string;

/**
 * 'minecraft:fossil_feature' generates a skeletal structure composed of bone blocks and parametric ore blocks.
 */
export interface FossilFeature {
  description: Description;
  ore_block?: BlockceptionMinecraftBlockIdentifier;
  /**
   * UNDOCUMENTED
   */
  max_empty_corners?: number;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
