/**
 * behavior/entities/format/behaviors/defend_trusted_target.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.322Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Sound to occasionally play while defending.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
/**
 * The event to run when this mob starts to defend the entity it trusts.
 */
export type OnDefendStart =
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
 * List of entity types that this mob considers valid targets.
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
 * Allows the mob to target another mob that hurts an entity it trusts.
 */
export interface DefendTrustedTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  aggro_sound?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * Time in seconds between attacks.
   */
  attack_interval?: number;
  /**
   * If true, only entities in this mob's viewing range can be selected as targets.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   */
  must_see_forget_duration?: number;
  on_defend_start?: OnDefendStart;
  /**
   * Distance in blocks that the target can be within to launch an attack.
   */
  within_radius?: number;
  entity_types?: EntityTypes;
  /**
   * Probability that a sound will play.
   */
  sound_chance?: number;
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
