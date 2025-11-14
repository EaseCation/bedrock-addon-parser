/**
 * behavior/entities/format/behaviors/ram_attack.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.620Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Minimum and maximum cooldown time-range (positive, in seconds) between each attempted ram attack.
 */
export type CooldownRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * The event to trigger when attacking.
 */
export type OnStart =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters;
      target?: Subject;
    };
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
 * The event to trigger when attacking.
 */
export type Trigger =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters;
      target?: Subject;
    };

/**
 * Allows the mob to search for a random target and, if a direct path exists between the mob and the target, it will perform a charge. If the attack hits, the target will be knocked back based on the mob's speed.
 */
export interface RamAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The modifier to knockback that babies have.
   */
  baby_knockback_modifier?: number;
  cooldown_range?: CooldownRange;
  /**
   * The force of the knockback of the ram attack.
   */
  knockback_force?: number;
  /**
   * The height of the knockback of the ram attack.
   */
  knockback_height?: number;
  /**
   * The minimum distance at which the mob can start a ram attack.
   */
  min_ram_distance?: number;
  on_start?: OnStart;
  /**
   * The sound to play when an entity is about to perform a ram attack.
   */
  pre_ram_sound?: string;
  /**
   * The distance at which the mob start to run with ram speed.
   */
  ram_distance?: number;
  /**
   * The sound to play when an entity is impacting on a ram attack.
   */
  ram_impact_sound?: string;
  /**
   * Sets the entity's speed when charging toward the target.
   */
  ram_speed?: number;
  /**
   * Sets the entity's speed when running toward the target.
   */
  run_speed?: number;
  trigger?: Trigger;
}
