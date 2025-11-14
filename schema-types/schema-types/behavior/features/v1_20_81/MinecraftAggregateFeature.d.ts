/**
 * behavior/features/features/minecraft.aggregate_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.707Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Collection of features to be placed one by one. No guarantee of order. All features use the same input position.
 *
 * @minItems 1
 */
export type Features = [string, ...string[]];
/**
 * Do not continue placing features once either the first success or first failure has occurred.
 */
export type EarlyOut = 'none' | 'first_failure' | 'first_success';

/**
 * 'minecraft:aggregate_feature` places a collection of features in an arbitary order. All features in the collection use the same input position. Features should not depend on each other, as there is no guarantee on the order the features will be placed.
 *  Succeeds if: At lease one feature is placed successfully.
 *  Fails if: All features fail to be placed.
 */
export interface AggregateFeature {
  description: Description;
  features: Features;
  early_out?: EarlyOut;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
