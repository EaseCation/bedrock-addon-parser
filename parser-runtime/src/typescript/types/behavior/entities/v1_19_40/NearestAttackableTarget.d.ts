/**
 * behavior/entities/format/behaviors/nearest_attackable_target.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.919Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Filters which types of targets are valid for this entity.
 */
export type EntityTypes = EntityType | EntityType[];
/**
 * Conditions that make this target a valid type.
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
 * Allows an entity to attack the closest target within a given subset of specific target types.
 */
export interface NearestAttackableTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes;
  /**
   * Time range (in seconds) between searching for an attack target, range is in (0, `attack_interval`]. Only used if `attack_interval` is greater than 0, otherwise `scan_interval` is used.
   */
  attack_interval?: number;
  /**
   * Alias for `attack_interval`; provides the same functionality as `attack_interval`.
   */
  attack_interval_min?: number;
  /**
   * If true, this entity can attack its owner.
   */
  attack_owner?: boolean;
  /**
   * If true, this entity requires a path to the target.
   */
  must_reach?: boolean;
  /**
   * Determines if target-validity requires this entity to be in range only, or both in range and in sight.
   */
  must_see?: boolean;
  /**
   * Time (in seconds) the target must not be seen by this entity to become invalid. Used only if `must_see` is true.
   */
  must_see_forget_duration?: number;
  /**
   * Time (in seconds) this entity can continue attacking the target after the target is no longer valid.
   */
  persist_time?: number;
  /**
   * Allows the attacking entity to update the nearest target, otherwise a target is only reselected after each `scan_interval` or `attack_interval`.
   */
  reselect_targets?: boolean;
  /**
   * If `attack_interval` is 0 or isn't declared, then between attacks: scanning for a new target occurs every amount of ticks equal to `scan_interval`, minimum value is 1. Values under 10 can affect performance.
   */
  scan_interval?: number;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Multiplied with the target's armor coverage percentage to modify `max_dist` when detecting an invisible target.
   */
  target_invisible_multiplier?: number;
  /**
   * Maximum vertical target-search distance, if it's greater than the target type's `max_dist`. A negative value defaults to `entity_types` greatest `max_dist`.
   */
  target_search_height?: number;
  /**
   * Multiplied with the target type's `max_dist` when trying to detect a sneaking target.
   */
  target_sneak_visibility_multiplier?: number;
  /**
   * Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare `minecraft:follow_range`.
   */
  within_radius?: number;
}
/**
 * A entity type.
 */
export interface EntityType {
  filters?: Filters;
  /**
   * To be a valid target choice, the target type cannot be farther away from this entity than `max_dist`.
   */
  max_dist?: number;
  /**
   * Determines if target-validity requires this entity to be in range only, or both in range and in sight.
   */
  must_see?: boolean;
  /**
   * Time (in seconds) the target must not be seen by this entity to become invalid. Used only if `must_see` is true.
   */
  must_see_forget_duration?: boolean & number;
  [k: string]: unknown;
}
