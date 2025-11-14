/**
 * behavior/features/features/minecraft.sequence_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.676Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * List of features to be placed in sequence. The output position of the previous feature is used as the input position to the next.
 *
 * @minItems 1
 */
export type Features = [
  BlockceptionMinecraftFeatureIdentifier,
  ...BlockceptionMinecraftFeatureIdentifier[],
];
/**
 * A feature to be placed in sequence. The output position of the previous feature is used as the input position to the next.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;

/**
 * `minecraft:sequence_feature` places a collection of features sequentially, in the order they appear in data. The output position of the previous feature is used as the input position for the next. For example, a tree feature is placed at (0, 0, 0) and places blocks up to (0, 10, 0). The next feature in the sequence begins at (0, 10, 0).
 * Succeeds if: All features in the sequence are successfully placed.
 * Fails if: Any feature in the sequence fails to be placed. Features that have not yet been placed at the time of failure are skipped.
 */
export interface SequenceFeature {
  description: Description;
  features: Features;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
