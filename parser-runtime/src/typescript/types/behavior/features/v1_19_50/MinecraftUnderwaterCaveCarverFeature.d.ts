/**
 * behavior/features/1.13.0/features/minecraft.underwater_cave_carver_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.222Z
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
 * How many blocks to increase the cave radius by, from the center point of the cave.
 */
export type WidthModifier = string | number;
/**
 * Reference to the block to replace air blocks with.
 */
export type ReplaceAirWith = string;

/**
 * 'minecraft:underwater_cave_carver_feature' carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.This feature will specifically target creating caves only below sea level.
 * This feature will also only work when placed specifically in the pass `pregeneration_pass`.
 */
export interface UnderwaterCaveCarverFeature {
  description: Description;
  fill_with?: BlockceptionMinecraftBlockIdentifier;
  width_modifier?: WidthModifier;
  replace_air_with?: ReplaceAirWith;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
