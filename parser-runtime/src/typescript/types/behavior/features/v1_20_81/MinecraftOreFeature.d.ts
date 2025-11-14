/**
 * behavior/features/features/minecraft.ore_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.685Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Collection of replace rules that will be checked in order of definition. If a rule is resolved, the rest will not be resolved for that block position.
 *
 * @minItems 1
 */
export type ReplaceRules = [RepalceRule, ...RepalceRule[]];
/**
 * Reference to the block to be placed.
 */
export type PlacesBlock = string;
/**
 * A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
 *
 * @minItems 1
 */
export type MayReplace = [
  BlockceptionMinecraftBlockIdentifier,
  ...BlockceptionMinecraftBlockIdentifier[],
];
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;

/**
 * `minecraft:ore_feature` places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list provided in the `may_replace` field of a `replace_rules` entry. If no `may_replace` field is specified in a `replace_rule` entry, the ore block can replace any existing block.
 * Succeeds if: At least one ore block is successfully placed.
 * Fails if: All ore block placements fail.
 */
export interface OreFeature {
  description: Description;
  /**
   * The number of blocks to be placed.
   */
  count: number;
  replace_rules?: ReplaceRules;
  /**
   * Chance of discarding placement if neighboring block is Air.
   */
  discard_chance_on_air_exposure?: number;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
/**
 * If a rule is resolved, the rest will not be resolved for that block position.
 */
export interface RepalceRule {
  places_block: PlacesBlock;
  may_replace?: MayReplace;
  [k: string]: unknown;
}
