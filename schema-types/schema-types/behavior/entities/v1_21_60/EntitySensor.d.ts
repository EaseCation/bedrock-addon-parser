/**
 * behavior/entities/format/components/entity_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.748Z
 */

/**
 * A component that fires an event when a set of conditions are met by other entities within the defined range.
 */
export type EntitySensor =
  | (EntitySensor1 & {
      /**
       * If true the sensor range is additive on top of the entity's size.
       */
      relative_range?: boolean;
      [k: string]: unknown;
    })
  | {
      subsensors?: Subsensors;
      /**
       * If true the sensor range is additive on top of the entity's size.
       */
      relative_range?: boolean;
      [k: string]: unknown;
    };
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
 * The maximum distance another entity can be from this and have the filters checked against it.
 */
export type Range = VectorOf2Items | number;
/**
 * An vector of 2 number.
 */
export type VectorOf2Items = [] | [number] | [number, number];
/**
 * The list of subsensors.
 */
export type Subsensors = EntitySensor1[];

export interface EntitySensor1 {
  /**
   * How many seconds should elapse before the subsensor can once again sense for entities. The cooldown is applied on top of the base 1 tick (0.05 seconds) delay. Negative values will result in no cooldown being used.
   */
  cooldown?: number;
  event_filters?: Filters;
  /**
   * event.
   */
  event?: string;
  /**
   * The maximum number of entities that must pass the filter conditions for the event to send.
   */
  maximum_count?: number;
  /**
   * The minimum number of entities that must pass the filter conditions for the event to send.
   */
  minimum_count?: number;
  range?: Range;
  /**
   * If true requires all nearby entities to pass the filter conditions for the event to send.
   */
  require_all?: boolean;
  /**
   * The maximum distance another entity can be from this and have the filters checked against it.
   */
  sensor_range?: number;
}
