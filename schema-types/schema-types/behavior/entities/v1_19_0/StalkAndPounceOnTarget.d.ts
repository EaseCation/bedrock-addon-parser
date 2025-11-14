/**
 * behavior/entities/format/behaviors/stalk_and_pounce_on_target.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.384Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Filters to apply on the block the mob lands on to determine if it is valid for getting stuck.
 */
export type StuckBlock =
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
 * Allows an entity to stalk a specific target. Once within range of the target, the entity will then leap at the target and deal damage based upon its attack attribute.
 */
export interface StalkAndPounceOnTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing
   */
  interest_time?: number;
  /**
   * The distance in blocks the mob jumps in the direction of its target.
   */
  leap_distance?: number;
  /**
   * The height in blocks the mob jumps when leaping at its target.
   */
  leap_height?: number;
  /**
   * The maximum distance away a target can be before the mob gives up on stalking.
   */
  max_stalk_dist?: number;
  /**
   * The maximum distance away from the target in blocks to begin pouncing at the target.
   */
  pounce_max_dist?: number;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * The movement speed in which you stalk your target.
   */
  stalk_speed?: number;
  /**
   * The Maximum distance away from the target when landing from the pounce that will still result in damaging the target.
   */
  strike_dist?: number;
  /**
   * The amount of time the mob will be stuck if they fail and land on a block they can be stuck on.
   */
  stuck_time?: number;
  /**
   * The distance in blocks the mob jumps in the direction of their target.
   */
  leap_dist?: number;
  stuck_blocks?: StuckBlock;
}
