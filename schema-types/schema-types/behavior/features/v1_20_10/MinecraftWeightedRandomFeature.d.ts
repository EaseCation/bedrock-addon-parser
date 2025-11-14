/**
 * behavior/features/1.13.0/features/minecraft.weighted_random_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.626Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 *  Collection of weighted features that placement will select from.
 *
 * @minItems 1
 */
export type Features = [Feature, ...Feature[]];
/**
 * Named reference to a feature.
 */
export type Feature = [] | [Feature1] | [Feature1, number];
/**
 * Named reference to a feature.
 */
export type Feature1 = string;

/**
 * 'minecraft:weighted_random_feature' randomly selects and places a feature based on a weight value. Weights are relative, with higher values making selection more likely.
 * Succeeds if: The selected feature is placed.
 * Fails if: The selected feature fails to be placed.
 */
export interface WeightedRandomFeature {
  description: Description;
  features: Features;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
