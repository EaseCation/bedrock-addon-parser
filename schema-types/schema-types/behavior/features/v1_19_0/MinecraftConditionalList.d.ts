/**
 * behavior/features/1.13.0/features/minecraft.conditional_list.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:06.615Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Feature to be placed.
 */
export type PlacesFeature = string;
/**
 * Condition for placing associated Feature.
 */
export type MolangString180 = string;
/**
 * Array of Features, and their associated Conditions, for attempted placement. These features will be evaluated as ordered.
 */
export type ConditionalFeatures = ConditionalFeature[];
/**
 * Denote whether placement should end on first successful placement or first passed condition.
 */
export type EarlyOutScheme = 'condition_success' | 'placement_success';

/**
 * `minecraft:conditional_list` Places the first suitable feature within a collection.
 * These conditional features will be evaluated in order.
 * Succeeds if: A condition is successfully resolved.
 * Fails if: No condition is successfully resolved.
 * Example use: assigning a feature to an expression
 */
export interface ConditionalList {
  description: Description;
  conditional_features: ConditionalFeatures;
  early_out_scheme?: EarlyOutScheme;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
/**
 * A Feature, and their associated Conditions, for attempted placement. These features will be evaluated as ordered.
 */
export interface ConditionalFeature {
  places_feature: PlacesFeature;
  condition: MolangString180;
}
