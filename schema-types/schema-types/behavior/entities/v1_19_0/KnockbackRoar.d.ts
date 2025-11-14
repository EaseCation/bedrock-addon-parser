/**
 * behavior/entities/format/behaviors/knockback_roar.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.842Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The list of conditions another entity must meet to be a valid target to apply damage to.
 */
export type DamageFilters =
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
 * The list of conditions another entity must meet to be a valid target to apply knockback to.
 */
export type KnockbackFilters =
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
 * Event that is triggered when the roar ends.
 */
export type OnRoarEnd =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target;
      [k: string]: unknown;
    };
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
 * Allows the mob to perform a damaging knockback that affects all nearby entities.
 */
export interface KnockbackRoar {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The delay after which the knockback occurs (in seconds).
   */
  attack_time?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  damage_filters?: DamageFilters;
  /**
   * The duration of the roar (in seconds).
   */
  duration?: number;
  /**
   * The damage dealt by the knockback roar.
   */
  knockback_damage?: number;
  /**
   * The strength of the knockback.
   */
  knockback_strength?: number;
  knockback_filters?: KnockbackFilters;
  /**
   * The strength of the horizontal knockback.
   */
  knockback_horizontal_strength?: number;
  /**
   * The radius (in blocks) of the knockback effect.
   */
  knockback_range?: number;
  /**
   * The strength of the vertical knockback.
   */
  knockback_vertical_strength?: number;
  /**
   * The maximum height for vertical knockback.
   */
  knockback_height_cap?: number;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
  on_roar_end?: OnRoarEnd;
}
