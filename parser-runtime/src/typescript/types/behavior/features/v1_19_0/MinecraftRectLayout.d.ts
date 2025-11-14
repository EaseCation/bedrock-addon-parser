/**
 * behavior/features/1.13.0/features/minecraft.rect_layout.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:06.580Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * UNDOCUMENTED.
 *
 * @minItems 1
 * @maxItems 4294967295
 */
export type FeatureAreas = [FeatureArea, ...FeatureArea[]];
/**
 * Feature to be placed.
 */
export type Feature = string;
/**
 * Dimensions (size) of the associated Feature.
 *
 * @minItems 2
 * @maxItems 2
 */
export type AreaDimensions = [number, number];

/**
 * `minecraft:rect_layout` places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list provided in the `may_replace` field of a `replace_rules` entry. If no `may_replace` field is specified in a `replace_rule` entry, the ore block can replace any existing block.
 * Succeeds if: At least one ore block is successfully placed.
 * Fails if: All ore block placements fail.
 */
export interface RectLayout {
  description: Description;
  /**
   * Ratio of a Chunk to be filled with empty space rather than features.
   */
  ratio_of_empty_space?: number;
  feature_areas: FeatureAreas;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface FeatureArea {
  feature?: Feature;
  area_dimensions?: AreaDimensions;
}
