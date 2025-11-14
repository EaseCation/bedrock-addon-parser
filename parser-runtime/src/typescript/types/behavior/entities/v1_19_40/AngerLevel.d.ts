/**
 * behavior/entities/format/components/anger_level.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.022Z
 */

/**
 * Filter that is applied to determine if a mob can be a nuisance.
 */
export type NuisanceFilter =
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
 * Filter that is applied to determine if a mob can be a nuisance.
 */
export type OnIncreaseSounds =
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
 * Allows this entity to track anger towards a set of nuisances
 */
export interface AngerLevel {
  /**
   * Anger level will decay over time. Defines how often anger towards all nuisances will be decreased by one
   */
  anger_decrement_interval?: number;
  /**
   * Anger boost applied to angry threshold when mob gets angry.
   */
  angry_boost?: number;
  /**
   * Threshold that define when the mob is considered angry at a nuisance.
   */
  angry_threshold?: number;
  /**
   * The default amount of annoyingness for any given nuisance. Specifies how much to raise anger level on each provocation
   */
  default_annoyingness?: string;
  /**
   * The maximum anger level that can be reached. Applies to any nuisance
   */
  max_anger?: number;
  nuisance_filter?: NuisanceFilter;
  on_increase_sounds?: OnIncreaseSounds;
  /**
   * Defines if the mob should remove target if it falls below 'angry' threshold.
   */
  remove_targets_below_angry_threshold?: boolean;
}
