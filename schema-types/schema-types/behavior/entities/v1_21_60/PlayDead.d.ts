/**
 * behavior/entities/format/behaviors/play_dead.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.361Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The list of other triggers that are required for the mob to activate play dead.
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
 * The range of damage that may cause the goal to start depending on randomness. Damage taken below the min will never cause the goal to start. Damage taken above the max will always cause the goal to start.
 */
export type RandomDamageRange = [] | [number] | [number, number];
/**
 * The list of Entity Damage Sources that will cause this mob to play dead.
 */
export type DamageSources = EntityDamageSource | DamageSource[];
/**
 * The types of damage an entity can receive.
 */
export type EntityDamageSource =
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
 * The types of damage an entity can receive.
 */
export type DamageSource =
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
 * Allows the mob to play dead when attacked by other entities. When playing dead, other entities will not target this mob.
 */
export interface PlayDead {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Whether the mob will receive the regeneration effect while playing dead.
   */
  apply_regeneration?: boolean;
  /**
   * The amount of time the mob will remain playing dead (in seconds).
   */
  duration?: number;
  filters?: Filters;
  /**
   * The amount of health at which damage will cause the mob to play dead.
   */
  force_below_health?: number;
  /**
   * The likelihood of this goal starting upon taking damage.
   */
  random_start_chance?: number;
  random_damage_range?: RandomDamageRange;
  damage_sources?: DamageSources;
}
