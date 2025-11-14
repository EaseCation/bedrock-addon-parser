/**
 * behavior/entities/format/components/rail_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.276Z
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
 * Defines the behavior of the entity when the rail gets activated or deactivated.
 */
export interface RailSensor {
  /**
   * If true, on tick this entity will trigger its on_deactivate behavior.
   */
  check_block_types?: boolean;
  /**
   * If true, this entity will eject all of its riders when it passes over an activated rail.
   */
  eject_on_activate?: boolean;
  /**
   * If true, this entity will eject all of its riders when it passes over a deactivated rail.
   */
  eject_on_deactivate?: boolean;
  on_activate?: OnActivate;
  on_deactivate?: OnDeactivate;
  /**
   * If true, command blocks will start ticking when passing over an activated rail.
   */
  tick_command_block_on_activate?: boolean;
  /**
   * If false, command blocks will stop ticking when passing over a deactivated rail.
   */
  tick_command_block_on_deactivate?: boolean;
}
/**
 * Event to call when the rail is activated.
 */
export interface OnActivate {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when the rail is deactivated.
 */
export interface OnDeactivate {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
