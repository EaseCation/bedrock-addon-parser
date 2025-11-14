/**
 * behavior/entities/format/behaviors/take_flower.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.574Z
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
 * Conditions that need to be met for the behavior to start.
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
 * The dimensions of the AABB used to search for a potential mob to take a flower from.
 */
export type SearchArea = [] | [number] | [number, number] | [number, number, number];

/**
 * Can only be used by Villagers. Allows the mob to accept flowers from Iron Golems.
 */
export interface TakeFlower {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  filters?: Filters;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  max_head_rotation_y?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  max_rotation_x?: number;
  /**
   * The maximum amount of time (in seconds) for the mob to randomly wait for before taking the flower.
   */
  max_wait_time?: number;
  /**
   * Minimum distance (in blocks) for the entity to be considered having reached its target.
   */
  min_distance_to_target?: number;
  /**
   * The minimum amount of time (in seconds) for the mob to randomly wait for before taking the flower.
   */
  min_wait_time?: number;
  search_area?: SearchArea;
}
