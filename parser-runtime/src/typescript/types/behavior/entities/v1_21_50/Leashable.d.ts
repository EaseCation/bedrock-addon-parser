/**
 * behavior/entities/format/components/leashable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.890Z
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
 * Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
 */
export interface Leashable {
  /**
   * If true, players can leash this entity even if it is already leashed to another mob.
   */
  can_be_stolen?: boolean;
  /**
   * Distance in blocks at which the leash stiffens, restricting movement.
   */
  hard_distance?: number;
  /**
   * Distance in blocks at which the leash breaks.
   */
  max_distance?: number;
  on_leash?: OnLeash;
  on_unleash?: OnUnleash;
  /**
   * Distance in blocks at which the `spring` effect starts acting to keep this entity close to the entity that leashed it.
   */
  soft_distance?: number;
}
/**
 * Event to call when this entity is leashed.
 */
export interface OnLeash {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when this entity is unleashed.
 */
export interface OnUnleash {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
