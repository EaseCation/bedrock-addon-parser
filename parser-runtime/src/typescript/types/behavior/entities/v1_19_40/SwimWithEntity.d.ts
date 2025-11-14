/**
 * behavior/entities/format/behaviors/swim_with_entity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.459Z
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
 * Filters which determine what entites are valid to follow.
 */
export type EntityTypes = EntityType[] | EntityType;
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
 * Allows the entity follow another entity. Both entities must be swimming and in water.
 */
export interface SwimWithEntity {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Percent chance to start following another entity, if not already doing so. 1.0 = 100%
   */
  success_rate?: number;
  /**
   * Percent chance to stop following the current entity, if they're riding another entity or they're not swimming. 1.0 = 100%
   */
  chance_to_stop?: number;
  /**
   * Time (in seconds) between checks to determine if this entity should catch up to the entity being followed or match the direction of the entity being followed.
   */
  state_check_interval?: number;
  /**
   * Distance, from the entity being followed, at which this entity will speed up to reach that entity.
   */
  catch_up_threshold?: number;
  /**
   * Distance, from the entity being followed, at which this entity will try to match that entity's direction.
   */
  match_direction_threshold?: number;
  /**
   * The multiplier this entity's speed is modified by when matching another entity's direction.
   */
  catch_up_multiplier?: number;
  /**
   * Radius around this entity to search for another entity to follow.
   */
  search_range?: number;
  /**
   * Distance, from the entity being followed, at which this entity will stop following that entity.
   */
  stop_distance?: number;
  entity_types?: EntityTypes;
}
/**
 * The entity type.
 */
export interface EntityType {
  filters?: Filters;
  /**
   * Maximum distance this mob can be away to be a valid choice.
   */
  max_dist?: number;
  /**
   * Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
   */
  walk_speed_multiplier?: number;
  /**
   * Multiplier for the running speed. A value of 1.0 means the speed is unchanged
   */
  sprint_speed_multiplier?: number;
  /**
   * If true, the mob has to be visible to be a valid choice.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   */
  must_see_forget_duration?: number;
  [k: string]: unknown;
}
