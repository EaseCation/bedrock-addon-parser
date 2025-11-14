/**
 * behavior/entities/format/components/nameable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.494Z
 */

/**
 * Trigger to run when the entity gets named.
 */
export type DefaultTrigger = string | Trigger | Trigger1[];
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
 * Describes the special names for this entity and the events to call when the entity acquires those names.
 */
export type NameActions = NameAction[] | NameAction1;
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
 * Allows this entity to be named (e.g. using a name tag).
 */
export interface Nameable {
  /**
   * If true, this entity can be renamed with name tags.
   */
  allow_name_tag_renaming?: boolean;
  /**
   * If true, the name will always be shown.
   */
  always_show?: boolean;
  default_trigger?: DefaultTrigger;
  name_actions?: NameActions;
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
/**
 * Describes the special names for this entity and the events to call when the entity acquires those names.
 */
export interface NameAction {
  /**
   * List of special names that will cause the events defined in `on_named` to fire.
   */
  name_filter?: string;
  on_named?: OnNamed;
}
/**
 * Event to be called when this entity acquires the name specified in `name_filter'.
 */
export interface OnNamed {
  filters?: Filters1;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Describes the special names for this entity and the events to call when the entity acquires those names.
 */
export interface NameAction1 {
  /**
   * List of special names that will cause the events defined in `on_named` to fire.
   */
  name_filter?: string;
  on_named?: OnNamed;
}
