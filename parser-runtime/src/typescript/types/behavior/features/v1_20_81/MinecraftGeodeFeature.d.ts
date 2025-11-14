/**
 * behavior/features/features/minecraft.geode_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.699Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * The block to fill the inside of the geode.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * The block that forms the inside layer of the geode shell.
 */
export type InnerLayer = string;
/**
 * The block that has a chance of generating instead of inner_layer.
 */
export type AlternateInnerLayer = string;
/**
 * The block that forms the middle layer of the geode shell.
 */
export type MiddleLayer = string;
/**
 * The block that forms the outer shell of the geode.
 */
export type OuterLayer = string;
/**
 * A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
 *
 * @minItems 1
 */
export type InnerPlacements = [BlockReference, ...BlockReference[]];
/**
 * A block that may be replaced during placement.
 */
export type BlockReference = string;

/**
 * `minecraft:geode_feature` generates a rock formation to simulate a geode. Each layer of, and block within, the geode can be replaced.
 * Succeeds if: At least one block within the geode is placed.
 * Fails if: All blocks within the geode fail to be placed.
 */
export interface GeodeFeature {
  description: Description;
  filler: BlockceptionMinecraftBlockIdentifier;
  inner_layer: InnerLayer;
  alternate_inner_layer: AlternateInnerLayer;
  middle_layer: MiddleLayer;
  outer_layer: OuterLayer;
  inner_placements?: InnerPlacements;
  /**
   * The minimum distance each distribution point must be from the outer wall. [0,10]
   */
  min_outer_wall_distance: number;
  /**
   * The maximum distance each distribution point can be from the outer wall. [0,20]
   */
  max_outer_wall_distance: number;
  /**
   * The minimum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all destribution points. [0,10]
   */
  min_distribution_points: number;
  /**
   * The maximum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all destribution points. [0,20]
   */
  max_distribution_points: number;
  /**
   * The lowest possible value of random offset applied to the position of each distribution point. [0,10]
   */
  min_point_offset: number;
  /**
   * The highest possible value of random offset applied to the position of each distribution point. [0,10]
   */
  max_point_offset: number;
  /**
   * The maximum possible radius of the geode generated.
   */
  max_radius: number;
  /**
   * An offset applied to each distribution point that forms the geode crack opening. [0,10]
   */
  crack_point_offset: number;
  /**
   * The likelihood of a geode generating with a crack in its shell. [0,1]
   */
  generate_crack_chance: number;
  /**
   * How large the crack opening of the geode should be when generated. [0,5]
   */
  base_crack_size: number;
  /**
   * A multiplier applied to the noise that is applied to the distribution points within the geode. Higher = more noisy.
   */
  noise_multiplier: number;
  /**
   * The likelihood that a special block will be placed on the inside of the geode. [0,1]
   */
  use_potential_placements_chance: number;
  /**
   * The likelihood that a block in the innermost layer of the geode will be replaced with an alternate option. [0,1]
   */
  use_alternate_layer0_chance: number;
  /**
   *  If true, the potential placement block will only be placed on the alternate layer0 blocks that get placed. Potential placement blocks are blocks that depend on the existance of another block to be placed. The latter are the layer0 alternate blocks.
   */
  placements_require_layer0_alternate: boolean;
  /**
   * The threshold of invalid blocks for a geode to have a distribution point in before it aborts generation entirely.
   */
  invalid_blocks_threshold: number;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
