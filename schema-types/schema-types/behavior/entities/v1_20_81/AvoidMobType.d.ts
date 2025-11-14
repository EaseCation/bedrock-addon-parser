/**
 * behavior/entities/format/behaviors/avoid_mob_type.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.073Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The sound event to play when the mob is avoiding another mob.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
/**
 * The list of conditions another entity must meet to be a valid target to avoid.
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
 * Event that is triggered when escaping from a mob.
 */
export type OnEscapeEvent =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target;
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
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval =
  | []
  | [number]
  | [number, number]
  | number
  | {
      range_min?: number;
      range_max?: number;
    };

/**
 * Allows the entity to run away from other entities that meet the criteria specified.
 */
export interface AvoidMobType {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  avoid_mob_sound?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * The next target position the entity chooses to avoid another entity will be chosen within this XZ Distance.
   */
  avoid_target_xz?: number;
  /**
   * The next target position the entity chooses to avoid another entity will be chosen within this Y Distance.
   */
  avoid_target_y?: number;
  /**
   * Whether or not to ignore direct line of sight while this entity is running away from other specified entities.
   */
  ignore_visibilty?: boolean;
  /**
   * Maximum distance to look for an avoid target for the entity.
   */
  max_dist?: number;
  /**
   * How many blocks away from its avoid target the entity must be for it to stop fleeing from the avoid target.
   */
  max_flee?: number;
  /**
   * Percent chance this entity will stop avoiding another entity based on that entity's strength, where 1.0 = 100%.
   */
  probability_per_strength?: number;
  /**
   * Determine if we should remove target when fleeing or not.
   */
  remove_target?: boolean;
  /**
   * How many blocks within range of its avoid target the entity must be for it to begin sprinting away from the avoid target.
   */
  sprint_distance?: number;
  /**
   * Multiplier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster.
   */
  sprint_speed_multiplier?: number;
  /**
   * Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.
   */
  walk_speed_multiplier?: number;
  /**
   * If true, visbility between this entity and the mob type will not be checked.
   */
  ignore_visibility?: boolean;
  entity_types?: EntityTypes;
  on_escape_event?: OnEscapeEvent;
  sound_interval?: SoundInterval;
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
