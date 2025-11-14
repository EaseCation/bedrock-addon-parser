/**
 * behavior/entities/format/components/celebrate_hunt.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.857Z
 */

/**
 * The list of conditions that target of hunt must satisfy to initiate celebration.
 */
export type CeleberationTargets =
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
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval =
  | []
  | [number]
  | [number, number]
  | number
  | {
      /**
       * Minimum.
       */
      range_min?: number;
      /**
       * Maximum.
       */
      range_max?: number;
    };

/**
 * Specifies hunt celebration behavior.
 */
export interface CelebrateHunt {
  /**
   * If true, celebration will be broadcasted to other entities in the radius.
   */
  broadcast?: boolean;
  celebration_targets?: CeleberationTargets;
  /**
   * The sound event to play when the mob is celebrating.
   */
  celebrate_sound?: string;
  /**
   * Duration, in seconds, of celebration.
   */
  duration?: number;
  /**
   * If broadcast is enabled, specifies the radius in which it will notify other entities for celebration.
   */
  radius?: number;
  sound_interval?: SoundInterval;
}
