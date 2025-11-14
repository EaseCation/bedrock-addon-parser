/**
 * behavior/entities/format/behaviors/timer_flag.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.268Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Goal cooldown range in seconds.
 */
export type CooldownRange = number | VectorOf2Items;
/**
 * An vector of 2 number.
 */
export type VectorOf2Items = [] | [number] | [number, number];
/**
 * Goal duration range in seconds.
 */
export type DurationRange = number | VectorOf2Items1;
/**
 * An vector of 2 number.
 */
export type VectorOf2Items1 = [] | [number] | [number, number];
/**
 * UNDOCUMENTED
 *
 * @minItems 1
 * @maxItems 2
 */
export type ControlFlags = ['move' | 'look'] | ['move' | 'look', 'move' | 'look'];
/**
 * Event to run when the goal ends.
 */
export type OnEnd = string | Trigger | Trigger1[];
/**
 * The list of conditions for this trigger to execute.
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
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Event to run when the goal starts.
 */
export type OnStart = string | Trigger | Trigger1[];

/**
 * Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_<n> will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise.
 */
export interface TimerFlag {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  cooldown_range?: CooldownRange;
  duration_range?: DurationRange;
  control_flags?: ControlFlags;
  on_end?: OnEnd;
  on_start?: OnStart;
}
export interface Trigger {
  /**
   * The event to run when the conditions for this trigger are met.
   */
  event?: string;
  filters?: Filters;
  target?: Subject;
}
export interface Trigger1 {
  /**
   * The event to run when the conditions for this trigger are met.
   */
  event?: string;
  filters?: Filters;
  target?: Subject;
}
