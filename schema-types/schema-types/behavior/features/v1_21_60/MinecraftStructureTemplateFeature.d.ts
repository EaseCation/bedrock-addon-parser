/**
 * behavior/features/features/minecraft.structure_template_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.511Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Direction the structure will face when placed in the world. Defaults to `random` if omitted.
 */
export type FacingDirection = 'north' | 'south' | 'east' | 'west' | 'random';
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * List of blocks the owning structure is allowed to intersect with.
 */
export type BlockAllowlist = BlockceptionMinecraftBlockIdentifier[];
/**
 * A minecraft block identifier.
 */
export type Block = string;
/**
 * List of blocks the owning structure is allowed to intersect with.
 */
export type BlockWhitelist = Block[];

/**
 * `minecraft:structure_template_feature` places a structure in the world. The structure must be stored as a .mcstructure file in the `structures` subdirectory of a behavior pack. It is possible to reference structures that are part of other behavior packs, they do not need to come from the same behavior pack as this feature. Constraints can be defined to specify where the structure is allowed to be placed. During placement, the feature will search for a position within the 'adjustment_radius' that satisfies all constraints. If none are found, the structure will not be placed.
 * Succeeds if: The structure is placed in the world.
 * Fails if: The structure fails to be placed within the world.
 */
export interface StructureTemplateFeature {
  description: Description;
  /**
   * Reference to the structure to be placed.
   */
  structure_name: string;
  /**
   * How far the structure is allowed to move when searching for a valid placement position. Search is radial, stopping when the nearest valid position is found. Defaults to 0 if omitted.
   */
  adjustment_radius?: number;
  facing_direction?: FacingDirection;
  /**
   * Specific constraints that must be satisfied when placing this structure.
   */
  constraints: {
    grounded?: Grounded;
    unburied?: Unburied;
    block_intersection?: Unburied1;
  };
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
/**
 * When specified, ensures the structure is on the ground.
 */
export interface Grounded {}
/**
 * When specified, ensures the structure has air above it.
 */
export interface Unburied {}
/**
 * When specified, ensures the structure has air above it.
 */
export interface Unburied1 {
  block_allowlist?: BlockAllowlist;
  block_whitelist?: BlockWhitelist;
}
