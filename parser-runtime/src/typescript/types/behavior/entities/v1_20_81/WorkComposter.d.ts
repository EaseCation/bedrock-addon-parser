/**
 * behavior/entities/format/behaviors/work_composter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.175Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;
/**
 * Event to run when the mob reaches their jobsite.
 */
export type OnArrival = string | Trigger | Trigger1[];
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
 * Allows the NPC to use the composter POI to convert excess seeds into bone meal.
 */
export interface WorkComposter {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The amount of ticks the NPC will stay in their the work location.
   */
  active_time?: number;
  /**
   * The maximum number of times the mob will interact with the composter.
   */
  block_interaction_max?: number;
  /**
   * Determines whether the mob can empty a full composter.
   */
  can_empty_composter?: boolean;
  /**
   * Determines whether the mob can add items to a composter given that it is not full.
   */
  can_fill_composter?: boolean;
  /**
   * If true, this entity can work when their jobsite POI is being rained on.
   */
  can_work_in_rain?: boolean;
  /**
   * The amount of ticks the goal will be on cooldown before it can be used again.
   */
  goal_cooldown?: number;
  /**
   * The maximum number of items which can be added to the composter per block interaction.
   */
  items_per_use_max?: number;
  /**
   * Limits the amount of each compostable item the mob can use. Any amount held over this number will be composted if possible
   */
  min_item_count?: number;
  on_arrival?: OnArrival;
  /**
   * Unused.
   */
  sound_delay_max?: number;
  /**
   * Unused.
   */
  sound_delay_min?: number;
  /**
   * The maximum interval in which the mob will interact with the composter.
   */
  use_block_max?: number;
  /**
   * The minimum interval in which the mob will interact with the composter.
   */
  use_block_min?: number;
  /**
   * If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal
   */
  work_in_rain_tolerance?: number;
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
