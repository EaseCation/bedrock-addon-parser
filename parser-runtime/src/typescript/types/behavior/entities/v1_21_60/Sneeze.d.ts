/**
 * behavior/entities/format/behaviors/sneeze.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.229Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * List of entity types this mob will startle (cause to jump) when it sneezes.
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
 * Sound to play when the sneeze is about to happen.
 */
export type PrepareSound = string;
/**
 * Sound to play when the sneeze occurs.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;

/**
 * Allows the mob to stop and sneeze possibly startling nearby mobs and dropping an item.
 */
export interface Sneeze {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * The probability that the mob will drop an item when it sneezes.
   */
  drop_item_chance?: number;
  entity_types?: EntityTypes;
  /**
   * Loot table to select dropped items from.
   */
  loot_table?: string;
  prepare_sound?: PrepareSound;
  /**
   * The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing).
   */
  prepare_time?: number;
  /**
   * The probability of sneezing. A value of 1.00 is 100%
   */
  probability?: number;
  sound?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * Distance in blocks that mobs will be startled.
   */
  within_radius?: number;
}
/**
 * The entity type.
 */
export interface EntityType {
  filters?: Filters;
  /**
   * The amount of time in seconds that the mob has to wait before selecting a target of the same type again
   */
  cooldown?: number;
  /**
   * Maximum distance this mob can be away to be a valid choice.
   */
  max_dist?: number;
  /**
   * UNDOCUMENTED.
   */
  max_height?: number;
  /**
   * UNDOCUMENTED.
   */
  max_flee?: number;
  /**
   * UNDOCUMENTED.
   */
  priority?: number;
  /**
   * UNDOCUMENTED.
   */
  within_default?: number;
  /**
   * UNDOCUMENTED.
   */
  check_if_outnumbered?: boolean;
  /**
   * If true, the mob has to be visible to be a valid choice.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   */
  must_see_forget_duration?: number;
  /**
   * If true, the mob will stop being targeted if it stops meeting any conditions.
   */
  reevaluate_description?: boolean;
  /**
   * Multiplier for the running speed. A value of 1.0 means the speed is unchanged
   */
  sprint_speed_multiplier?: number;
  /**
   * Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
   */
  walk_speed_multiplier?: number;
}
