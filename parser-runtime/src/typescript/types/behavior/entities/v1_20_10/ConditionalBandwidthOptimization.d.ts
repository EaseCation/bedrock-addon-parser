/**
 * behavior/entities/format/components/conditional_bandwidth_optimization.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.524Z
 */

export type Filters =
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
 * Conditions that must be met for these optimization values to be used.
 */
export type ConditionalValues1 = Filters[];
/**
 * The object containing the conditional bandwidth optimization values.
 */
export type ConditionalValues = ConditionalValue[];

/**
 * Defines the Conditional Spatial Update Bandwidth Optimizations of this entity.
 */
export interface ConditionalBandwidthOptimization {
  conditional_values?: ConditionalValues;
  default_values?: DefaultValues;
}
/**
 * The object containing the conditional bandwidth optimization values.
 */
export interface ConditionalValue {
  /**
   * In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.
   */
  max_dropped_ticks?: number;
  /**
   * The maximum distance considered during bandwidth optimizations. Any value below the Maximum is interpolated to find optimization, and any value greater than or equal to this Maximum results in Maximum optimization.
   */
  max_optimized_distance?: number;
  /**
   * When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.
   */
  use_motion_prediction_hints?: boolean;
  conditional_values?: ConditionalValues1;
}
/**
 * The object containing the default bandwidth optimization values.
 */
export interface DefaultValues {
  /**
   * In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.
   */
  max_dropped_ticks?: number;
  /**
   * The maximum distance considered during bandwidth optimizations. Any value below the Maximum is interpolated to find optimization, and any value greater than or equal to this Maximum results in Maximum optimization.
   */
  max_optimized_distance?: number;
  /**
   * When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.
   */
  use_motion_prediction_hints?: boolean;
}
