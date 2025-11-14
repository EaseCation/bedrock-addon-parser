/**
 * behavior/features/features/minecraft.single_block_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.672Z
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
export type Top = Block | Block1[];
/**
 * Reference to the block it may attach to.
 */
export type Block = string;
/**
 * Reference to the block it may attach to.
 */
export type Block1 = string;
/**
 * UNDOCUMENTED.
 */
export type Bottom = Block | Block1[];
/**
 * UNDOCUMENTED.
 */
export type North = Block | Block1[];
/**
 * UNDOCUMENTED.
 */
export type South = Block | Block1[];
/**
 * UNDOCUMENTED.
 */
export type East = Block | Block1[];
/**
 * UNDOCUMENTED.
 */
export type West = Block | Block1[];
/**
 * UNDOCUMENTED.
 */
export type All = Block | Block1[];
/**
 * UNDOCUMENTED.
 */
export type Sides = Block | Block1[];
/**
 * A block that may be replaced during placement. Omit this field to allow any block to be replaced.
 */
export type Block2 = string;
/**
 * A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
 */
export type MayReplace = Block2[];

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
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
/**
 * The list of valid block and block faces the given block may attach to when being placed.
 */
export interface MayAttachTo {
  min_sides_must_attach?: MinimumSidesMustAttach;
  /**
   * Automatically rotate the block to attach sensibly.
   */
  auto_rotate?: boolean;
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
 * Minimum number of sides that must be attached when being placed.
 */
export interface MinimumSidesMustAttach {
  [k: string]: unknown;
}
