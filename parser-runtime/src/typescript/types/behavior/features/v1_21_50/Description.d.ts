/**
 * behavior/features/types/description.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.965Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;

/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
