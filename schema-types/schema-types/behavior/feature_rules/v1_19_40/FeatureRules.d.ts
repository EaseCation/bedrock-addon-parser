/**
 * behavior/feature_rules/1.13.0/feature_rules.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:14.101Z
 */

/**
 * Specifies the version of the game this entity was made in. Minimum supported version is 1.13.0. Current supported version is 1.13.0.
 */
export type FormatVersion = '1.13.0';
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * When the feature should be placed relative to others. Earlier passes in the list are guaranteed to occur before later passes. Order is not guaranteed within each pass.
 */
export type PlacementPass =
  | 'pregeneration_pass'
  | 'first_pass'
  | 'before_underground_pass'
  | 'underground_pass'
  | 'after_underground_pass'
  | 'before_surface_pass'
  | 'surface_pass'
  | 'after_surface_pass'
  | 'before_sky_pass'
  | 'sky_pass'
  | 'after_sky_pass'
  | 'final_pass';
/**
 * List of filter tests to determine which biomes this rule will attach to.
 */
export type PlacementPass1 =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec1;
/**
 * All tests in an `all_of` group must pass in order for the group to pass.
 */
export type AllOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * One or more tests in an `any_of` group must pass in order for the group to pass.
 */
export type AnyOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
/**
 * All tests in a `none_of` group must fail in order for the group to pass.
 */
export type NoneOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec1 =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
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
/**
 * UNDOCUMENTED.
 */
export type X =
  | MolangNumber1
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
 * Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
 */
export type MolangNumber1 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y =
  | MolangNumber1
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
 * UNDOCUMENTED.
 */
export type Z =
  | MolangNumber1
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
 * Each feature rule controls exactly one feature and serves as the root of a chain of feature data.
 */
export interface FeatureRules1130 {
  format_version: FormatVersion;
  'minecraft:feature_rules': FeatureRules;
}
/**
 * Each feature rule controls exactly one feature and serves as the root of a chain of feature data.
 */
export interface FeatureRules {
  description: Description;
  conditions: Conditions;
  distribution?: Distribution;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  /**
   * Named reference to the feature controlled by this rule.
   */
  places_feature: string;
}
/**
 * Parameters to control where and when the feature will be placed.
 */
export interface Conditions {
  placement_pass: PlacementPass;
  'minecraft:biome_filter'?: PlacementPass1;
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
