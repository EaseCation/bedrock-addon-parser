/**
 * behavior/entities/format/components/despawn.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.815Z
 */

/**
 * The list of conditions that must be satisfied before the Actor is despawned. If a filter is defined then standard despawn rules are ignored.
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
 * Despawns the Actor when the despawn rules or optional filters evaluate to true.
 */
export interface Despawn {
  /**
   * Determines if `min_range_random_chance` is used in the standard despawn rules.
   */
  despawn_from_chance?: boolean;
  despawn_from_distance?: DespawnFromDistance;
  /**
   * Determines if the `min_range_inactivity_timer` is used in the standard despawn rules.
   */
  despawn_from_inactivity?: boolean;
  /**
   * Determines if the mob is instantly despawned at the edge of simulation distance in the standard despawn rules.
   */
  despawn_from_simulation_edge?: boolean;
  filters?: Filters;
  /**
   * The amount of time in seconds that the mob must be inactive.
   */
  min_range_inactivity_timer?: number;
  /**
   * A random chance between 1 and the given value.
   */
  min_range_random_chance?: number;
  /**
   * If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.
   */
  remove_child_entities?: boolean;
}
/**
 * Defines the minimum and maximum distance for despawn to occur.
 */
export interface DespawnFromDistance {
  /**
   * Maximum distance for standard despawn rules to instantly despawn the mob.
   */
  max_distance?: number;
  /**
   * Minimum distance for standard despawn rules to try to despawn the mob.
   */
  min_distance?: number;
}
