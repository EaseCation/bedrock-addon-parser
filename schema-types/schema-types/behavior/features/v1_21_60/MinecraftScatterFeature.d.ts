/**
 * behavior/features/features/minecraft.scatter_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.523Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * Named reference of feature to be placed.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to `xzy`.
 */
export type CoordinateEvalOrder = 'xyz' | 'xzy' | 'yxz' | 'yzx' | 'zxy' | 'zyx';
/**
 * Number of scattered positions to generate.
 */
export type Iterations = string | number;
export type ScatterChance =
  | MolangNumber
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
    };
/**
 * Probability (0-100] that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
 */
export type MolangNumber = string | number;
export type X =
  | MolangNumber1
  | {
      distribution: Distribution1;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      extent: Extent;
    };
/**
 * Expression for the coordinate (evaluated each iteration). Mutually exclusive with random distribution object below.
 */
export type MolangNumber1 = string | number;
/**
 * Type of distribution - uniform random, gaussian (centered in the range),  triangle (centered in the range), or grid (either fixed-step or jittered).
 */
export type Distribution1 =
  | 'uniform'
  | 'gaussian'
  | 'inverse_gaussian'
  | 'triangle'
  | 'fixed_grid'
  | 'jittered_grid';
/**
 * The lower and upper bound as an offset from the input position
 */
export type Extent = [] | [LowerBound] | [LowerBound, UpperBound];
/**
 * Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around.
 */
export type LowerBound = string | number;
/**
 * Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around.
 */
export type UpperBound = string | number;
export type Y =
  | MolangNumber1
  | {
      distribution: Distribution1;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      extent: Extent;
    };
export type Z =
  | MolangNumber1
  | {
      distribution: Distribution1;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      extent: Extent;
    };

/**
 * `minecraft:scatter_feature` scatters a feature throughout a chunk. The `x`, `y`, and `z` fields are per-coordinate parameters.
 * Note that coordinates represent an offset from the input position, not an absolute position. Coordinates may be a single value, a random distribution, or molang expression that resolves to a numeric value. The `coordinate_eval_order` field is provided for finer control of coordinate resolution (particularly when using the `grid` distribution). `iterations` controls how many individual placements should occur if the `scatter_chance` check succeeds. The `scatter_chance` check happens once, so either all placements will run or none will.
 * Succeeds if: At least one feature placement succeeds.
 * Fails if: All feature placements fail.
 */
export interface ScatterFeature {
  description: Description;
  places_feature: BlockceptionMinecraftFeatureIdentifier;
  /**
   * If true, snaps the y-value of the scattered position to the terrain heightmap. If false or unset, y-value is unmodified.
   */
  project_input_to_floor?: boolean;
  distribution?: Distribution;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
/**
 * Parameters controlling the initial scatter of the feature.
 */
export interface Distribution {
  coordinate_eval_order?: CoordinateEvalOrder;
  iterations: Iterations;
  scatter_chance?: ScatterChance;
  x?: X;
  z?: Y;
  y?: Z;
}
