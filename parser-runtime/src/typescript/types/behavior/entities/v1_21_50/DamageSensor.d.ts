/**
 * behavior/entities/format/components/damage_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.147Z
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
  | 'block_explosion'
  | 'campfire'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fire'
  | 'fire_tick'
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
  | 'ram_attack'
  | 'self_destruct'
  | 'sonic_boom'
  | 'soul_campfire'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * Defines how received damage affects the entity:
 * - 'yes', received damage is applied to the entity.
 * - 'no', received damage is not applied to the entity.
 * - 'no_but_side_effects_apply', received damage is not applied to the entity, but the side effects of the attack are. This means that the attacker's weapon loses durability, enchantment side effects are applied, and so on.
 */
export type DealsDamage = 'yes' | 'no' | 'no_but_side_effects_apply';
/**
 * Specifies filters for entity definitions and events.
 */
export type OnDamage = string | Trigger | Trigger1[];
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
 * Defines what sound to play, if any, when the on_damage filters are met.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;

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
  deals_damage?: DealsDamage;
  on_damage?: OnDamage;
  on_damage_sound_event?: BlockceptionMinecraftGeneralSoundEvent;
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
  deals_damage?: DealsDamage;
  on_damage?: OnDamage;
  on_damage_sound_event?: BlockceptionMinecraftGeneralSoundEvent;
}
