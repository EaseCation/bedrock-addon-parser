/**
 * behavior/entities/format/components/target_nearby_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.466Z
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
 * Defines the entity's range within which it can see or sense other entities to target them.
 */
export interface TargetNearbySensor {
  /**
   * Whether the other entity needs to be visible to trigger `inside` events.
   */
  must_see?: boolean;
  /**
   * Maximum distance in blocks that another entity will be considered in the `inside` range.
   */
  inside_range?: number;
  on_inside_range?: OnInsideRange;
  on_outside_range?: OnOutsideRange;
  on_vision_lost_inside_range?: OnVisionLostInsideRange;
  /**
   * Maximum distance in blocks that another entity will be considered in the `outside` range.
   */
  outside_range?: number;
}
/**
 * Event to call when an entity gets in the inside range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export interface OnInsideRange {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when an entity gets in the outside range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export interface OnOutsideRange {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when an entity exits visual range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export interface OnVisionLostInsideRange {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
