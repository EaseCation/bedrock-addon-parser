/**
 * behavior/entities/format/components/damage_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.826Z
 */

/**
 * The list of triggers that fire when the environment conditions match the given filter criteria.
 */
export type Triggers = Triggers1[] | Triggers2;
/**
 * Type of damage that triggers the events.
 */
export type Cause =
  | 'all'
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire_tick'
  | 'fire'
  | 'fireworks'
  | 'fly_into_wall'
  | 'freezing'
  | 'lava'
  | 'lightning'
  | 'magic'
  | 'magma'
  | 'none'
  | 'override'
  | 'piston'
  | 'projectile'
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * Specifies filters for entity definitions and events.
 */
export type OnDamage =
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
 * Defines what events to call when this entity is damaged by specific entities or items.
 */
export interface DamageSensor {
  triggers?: Triggers;
}
/**
 * List of triggers with the events to call when taking specific kinds of damage.
 */
export interface Triggers1 {
  cause?: Cause;
  /**
   * A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0.
   */
  damage_modifier?: number;
  /**
   * A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1.
   */
  damage_multiplier?: number;
  /**
   * If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage.
   */
  deals_damage?: boolean;
  on_damage?: OnDamage;
  /**
   * Defines what sound to play, if any, when the on_damage filters are met.
   */
  on_damage_sound_event?: string;
}
/**
 * List of triggers with the events to call when taking specific kinds of damage.
 */
export interface Triggers2 {
  cause?: Cause;
  /**
   * A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0.
   */
  damage_modifier?: number;
  /**
   * A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1.
   */
  damage_multiplier?: number;
  /**
   * If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage.
   */
  deals_damage?: boolean;
  on_damage?: OnDamage;
  /**
   * Defines what sound to play, if any, when the on_damage filters are met.
   */
  on_damage_sound_event?: string;
}
