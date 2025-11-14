/**
 * behavior/features/1.13.0/features/minecraft.single_block_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.274Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Reference to the block to be placed.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * UNDOCUMENTED.
 */
export type Top = string | string[];
/**
 * UNDOCUMENTED.
 */
export type Bottom = string | string[];
/**
 * UNDOCUMENTED.
 */
export type North = string | string[];
/**
 * UNDOCUMENTED.
 */
export type South = string | string[];
/**
 * UNDOCUMENTED.
 */
export type East = string | string[];
/**
 * UNDOCUMENTED.
 */
export type West = string | string[];
/**
 * UNDOCUMENTED.
 */
export type All = string | string[];
/**
 * UNDOCUMENTED.
 */
export type Sides = string | string[];
/**
 * A block that may be replaced during placement. Omit this field to allow any block to be replaced.
 */
export type Block = string;
/**
 * A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
 */
export type MayReplace = Block[];

/**
 * `minecraft:single_block_feature` places a single block in the world. The `may_place_on` and `may_replace` fields are allowlists which specify where the block can be placed. If these fields are omitted, the block can be placed anywhere. The block's internal survivability and placement rules can optionally be enforced with the `enforce_survivability_rules` and `enforce_placement_rules` fields. These rules are specified per-block and are typically designed to produce high quality gameplay or natural behavior. However, enabling this enforcement may make it harder to debug placement failures.
 *  Succeeds if: The block is successfully placed in the world.
 *  Fails if: The block fails to be placed.
 */
export interface SingleBlockFeature {
  description: Description;
  places_block: BlockceptionMinecraftBlockIdentifier;
  /**
   * If true, enforce the block's canPlace check.
   */
  enforce_placement_rules: boolean;
  /**
   * If true, enforce the block's canSurvive check.
   */
  enforce_survivability_rules: boolean;
  may_attach_to?: MayAttachTo;
  may_replace?: MayReplace;
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
export interface MayAttachTo {
  min_sides_must_attach?: MinimumSidesMustAttach;
  auto_rotate?: AutoRotate;
  top?: Top;
  bottom?: Bottom;
  north?: North;
  south?: South;
  east?: East;
  west?: West;
  all?: All;
  sides?: Sides;
}
/**
 * UNDOCUMENTED.
 */
export interface MinimumSidesMustAttach {
  [k: string]: unknown;
}
/**
 * Automatically rotate the block to attach sensibly.
 */
export interface AutoRotate {
  [k: string]: unknown;
}
