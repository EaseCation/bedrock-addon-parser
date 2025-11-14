/**
 * behavior/entities/format/components/spawn_entity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.414Z
 */

/**
 * The entities to spawn.
 */
export type Entities = EntitySpawn | EntitySpawn1[];
/**
 * If present, the specified entity will only spawn if the filter evaluates to true.
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
 * Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).
 */
export interface SpawnEntity {
  entities?: Entities;
}
export interface EntitySpawn {
  filters?: Filters;
  /**
   * Maximum amount of time to randomly wait in seconds before another entity is spawned.
   */
  max_wait_time?: number;
  /**
   * Minimum amount of time to randomly wait in seconds before another entity is spawned.
   */
  min_wait_time?: number;
  /**
   * The number of entities of this type to spawn each time that this triggers.
   */
  num_to_spawn?: number;
  /**
   * If true, this the spawned entity will be leashed to the parent.
   */
  should_leash?: boolean;
  /**
   * If true, this component will only ever spawn the specified entity once.
   */
  single_use?: boolean;
  /**
   * Identifier of the entity to spawn, leave empty to spawn the item defined above instead.
   */
  spawn_entity?: string;
  /**
   * Event to call when the entity is spawned.
   */
  spawn_event?: string;
  /**
   * Item identifier of the item to spawn.
   */
  spawn_item?: string;
  /**
   * Method to use to spawn the entity.
   */
  spawn_method?: string;
  /**
   * Identifier of the sound effect to play when the entity is spawned.
   */
  spawn_sound?: string;
}
export interface EntitySpawn1 {
  filters?: Filters;
  /**
   * Maximum amount of time to randomly wait in seconds before another entity is spawned.
   */
  max_wait_time?: number;
  /**
   * Minimum amount of time to randomly wait in seconds before another entity is spawned.
   */
  min_wait_time?: number;
  /**
   * The number of entities of this type to spawn each time that this triggers.
   */
  num_to_spawn?: number;
  /**
   * If true, this the spawned entity will be leashed to the parent.
   */
  should_leash?: boolean;
  /**
   * If true, this component will only ever spawn the specified entity once.
   */
  single_use?: boolean;
  /**
   * Identifier of the entity to spawn, leave empty to spawn the item defined above instead.
   */
  spawn_entity?: string;
  /**
   * Event to call when the entity is spawned.
   */
  spawn_event?: string;
  /**
   * Item identifier of the item to spawn.
   */
  spawn_item?: string;
  /**
   * Method to use to spawn the entity.
   */
  spawn_method?: string;
  /**
   * Identifier of the sound effect to play when the entity is spawned.
   */
  spawn_sound?: string;
}
