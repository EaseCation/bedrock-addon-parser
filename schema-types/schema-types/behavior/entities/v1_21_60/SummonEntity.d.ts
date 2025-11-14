/**
 * behavior/entities/format/behaviors/summon_entity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.166Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
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
 * The color of the particles for this spell.
 */
export type ParticleColor = number | string;
/**
 * The base shape of this step. Valid values are circle and line
 */
export type Shape = 'line' | 'circle';
/**
 * The sound event to play for this step.
 */
export type SoundEvent = string;
/**
 * Event to invoke on each summoned entity on spawn.
 */
export type SummonEvent = string;
/**
 * List of steps for the spell.
 */
export type Sequence = Sequence1[];
/**
 * The sound event to play when using this spell.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
/**
 * List of spells for the mob to use to summon entities.
 */
export type SummonChoices = {
  /**
   * Time in seconds the spell casting will take.
   */
  cast_duration?: number;
  /**
   * Time in seconds the mob has to wait before using the spell again.
   */
  cooldown_time?: number;
  /**
   * If true, the mob will do the casting animations and render spell particles.
   */
  do_casting?: boolean;
  filters?: Filters;
  /**
   * Upper bound of the activation distance in blocks for this spell.
   */
  max_activation_range?: number;
  /**
   * Lower bound of the activation distance in blocks for this spell.
   */
  min_activation_range?: number;
  particle_color?: ParticleColor;
  sequence?: Sequence;
  start_sound_event?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * The weight of this spell. Controls how likely the mob is to choose this spell when casting one
   */
  weight?: number;
}[];

/**
 * Allows the mob to attack the player by summoning other entities.
 */
export interface SummonEntity {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  summon_choices?: SummonChoices;
}
export interface Sequence1 {
  /**
   * Amount of time in seconds to wait before this step starts.
   */
  delay?: number;
  /**
   * Amount of time in seconds before each entity is summoned in this step.
   */
  delay_per_summon?: number;
  /**
   * Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can
   */
  entity_lifespan?: number;
  /**
   * Amount of time in seconds to wait before this step starts.
   */
  base_delay?: number;
  /**
   * The entity type of the entities we will spawn in this step.
   */
  entity_type?: string;
  /**
   * Number of entities that will be spawned in this step.
   */
  num_entities_spawned?: number;
  shape?: Shape;
  /**
   * The base size of the entity.
   */
  size?: number;
  sound_event?: SoundEvent;
  /**
   * Maximum number of summoned entities at any given time.
   */
  summon_cap?: number;
  /**
   * Maximum radius where the summon entities can spawn.
   */
  summon_cap_radius?: number;
  summon_event?: SummonEvent;
  /**
   * The target of the spell. This is where the spell will start (line will start here, circle will be centered here)
   */
  target?: string;
}
