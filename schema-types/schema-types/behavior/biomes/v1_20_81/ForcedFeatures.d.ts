/**
 * behavior/biomes/components/forced_features.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.041Z
 */

/**
 * The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to `xzy`.
 */
export type CoordinateEvalOrder = 'xyz' | 'xzy' | 'yxz' | 'yzx' | 'zxy' | 'zyx';
/**
 * Number of scattered positions to generate.
 */
export type Iterations = Iterations1 & Iterations2;
export type Iterations1 = string | number;
export type Iterations2 = string;
export type ScatterChance =
  | {
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
    }
  | MolangNumber
  | number;
/**
 * Probability (0-100) that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
 */
export type MolangNumber = MolangNumber1 & MolangNumber2;
export type MolangNumber1 = string | number;
export type MolangNumber2 = string;
export type X =
  | MolangNumber3
  | number
  | {
      distribution: Distribution;
      extent: Extent;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
    };
/**
 * Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
 */
export type MolangNumber3 = MolangNumber4 & MolangNumber5;
export type MolangNumber4 = string | number;
export type MolangNumber5 = string;
/**
 * Type of distribution - uniform random, gaussian (centered in the range), or grid (either fixed-step or jittered).
 */
export type Distribution =
  | 'uniform'
  | 'gaussian'
  | 'inverse_gaussian'
  | 'triangle'
  | 'fixed_grid'
  | 'jittered_grid';
/**
 * UNDOCUMENTED.
 */
export type Extent = [] | [LowerBound] | [LowerBound, UpperBound];
/**
 * Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around.
 */
export type LowerBound = LowerBound1 & LowerBound2;
export type LowerBound1 = string | number;
export type LowerBound2 = string;
/**
 * Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around.
 */
export type UpperBound = UpperBound1 & UpperBound2;
export type UpperBound1 = string | number;
export type UpperBound2 = string;
export type X1 =
  | MolangNumber6
  | number
  | {
      distribution: Distribution;
      extent: Extent;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
    };
export type MolangNumber6 = MolangNumber4 & MolangNumber5;
export type X2 =
  | MolangNumber7
  | number
  | {
      distribution: Distribution;
      extent: Extent;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
    };
export type MolangNumber7 = MolangNumber4 & MolangNumber5;
/**
 * UNDOCUMENTED.
 */
export type FirstPass = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass1 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass2 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass3 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass4 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass5 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass6 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass7 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass8 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass9 = Iteration[];
/**
 * UNDOCUMENTED.
 */
export type FirstPass10 = Iteration[];

/**
 * Force specific decorative features (trees, plants, etc.) to appear in this Biome, regardless of normal decoration rules.
 */
export interface ForcedFeatures {
  after_sky_pass?: FirstPass;
  after_surface_pass?: FirstPass1;
  after_underground_pass?: FirstPass2;
  before_sky_pass?: FirstPass3;
  before_surface_pass?: FirstPass4;
  before_underground_pass?: FirstPass5;
  final_pass?: FirstPass6;
  first_pass?: FirstPass7;
  surface_pass?: FirstPass8;
  sky_pass?: FirstPass9;
  underground_pass?: FirstPass10;
}
/**
 * UNDOCUMENTED.
 */
export interface Iteration {
  coordinate_eval_order?: CoordinateEvalOrder;
  /**
   * UNDOCUMENTED.
   */
  identifier: string;
  iterations: Iterations;
  /**
   * UNDOCUMENTED.
   */
  places_feature: string;
  scatter_chance?: ScatterChance;
  x?: X;
  y?: X1;
  z?: X2;
}
