/**
 * behavior/entities/format/components/angry.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.109Z
 */

/**
 * Conditions that make this entry in the list valid.
 */
export type BroadcastFilters =
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
 * Filter out mob types that it should not attack while angry (other Piglins).
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
 * A list of entity families to broadcast anger to.
 */
export type BroadcastTargets = string[];
export type Filters1 =
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
 * The target of the event.
 */
export type Target =
  | 'baby'
  | 'block'
  | 'damager'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';
/**
 * The sound event to play when the mob is angry.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
/**
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval =
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum interval.
       */
      range_min?: number;
      /**
       * The maximum interval.
       */
      range_max?: number;
    };

/**
 * Defines the entity's 'angry' state using a timer.
 */
export interface Angry {
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry.
   */
  broadcast_anger?: boolean;
  broadcast_filters?: BroadcastFilters;
  filters?: Filters;
  /**
   * Distance in blocks within which other entities of the same entity definition will become angry.
   */
  broadcast_range?: number;
  broadcast_targets?: BroadcastTargets;
  calm_event?: CalmEvent;
  angry_sound?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks.
   */
  broadcast_anger_on_attack?: boolean;
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked.
   */
  broadcast_anger_on_being_attacked?: boolean;
  /**
   * If false, when this mob is killed it does not spread its anger to other entities of the same entity definition within the broadcastRange
   */
  broadcast_anger_when_dying?: boolean;
  /**
   * The amount of time in seconds that the entity will be angry.
   */
  duration?: number;
  /**
   * Variance in seconds added to the duration [-delta, delta].
   */
  duration_delta?: number;
  sound_interval?: SoundInterval;
}
/**
 * Event to run after the number of seconds specified in duration expires (when the entity stops being "angry")
 */
export interface CalmEvent {
  filters?: Filters1;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
