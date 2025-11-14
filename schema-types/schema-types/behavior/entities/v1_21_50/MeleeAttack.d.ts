/**
 * behavior/entities/format/behaviors/melee_attack.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.980Z
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
 * Defines the event to trigger when this entity successfully attacks.
 */
export type OnAttack = string | Trigger | Trigger1[];
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
 * Defines the event to trigger when this entity successfully kills.
 */
export type OnKill = string | Trigger | Trigger1[];

/**
 * Allows the mob to use close combat melee attacks.
 */
export interface MeleeAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Allows the entity to use this attack behavior, only once EVER.
   */
  attack_once?: boolean;
  /**
   * Defines the entity types this entity will attack.
   */
  attack_types?: string;
  /**
   * If the entity is on fire, this allows the entity's target to catch on fire after being hi
   */
  can_spread_on_fire?: boolean;
  /**
   * Cooldown time (in seconds) between attacks.
   */
  cooldown_time?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary".
   */
  inner_boundary_time_increase?: number;
  /**
   * Unused. No effect on "minecraft:behavior.melee_attack".
   */
  max_dist?: number;
  /**
   * Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
   */
  max_path_time?: number;
  /**
   * Field of view (in degrees) when using the sensing component to detect an attack target.
   */
  melee_fov?: number;
  /**
   * Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
   */
  min_path_time?: number;
  on_attack?: OnAttack;
  on_kill?: OnKill;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary".
   */
  outer_boundary_time_increase?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
   */
  path_fail_time_increase?: number;
  /**
   * Distance at which to increase attack path recalculation by "inner_boundary_tick_increase".
   */
  path_inner_boundary?: number;
  /**
   * Distance at which to increase attack path recalculation by "outer_boundary_tick_increase".
   */
  path_outer_boundary?: number;
  /**
   * This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval".
   */
  random_stop_interval?: number;
  /**
   * Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
   */
  reach_multiplier?: number;
  /**
   * Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
   */
  require_complete_path?: boolean;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Unused. No effect on "minecraft:behavior.melee_attack".
   */
  target_dist?: number;
  /**
   * Allows the entity to track the attack target, even if the entity has no sensing.
   */
  track_target?: boolean;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
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
