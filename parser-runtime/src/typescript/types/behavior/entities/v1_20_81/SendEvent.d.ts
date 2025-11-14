/**
 * behavior/entities/format/behaviors/send_event.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.441Z
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
 * The sound event to play when using this spell.
 */
export type StartSoundEvent = string;
/**
 * The sound event to play when this step happens.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
/**
 * List of events to send.
 */
export type Sequence = {
  /**
   * Amount of time in seconds before starting this step.
   */
  base_delay?: number;
  /**
   * The event to send to the entity.
   */
  event?: string;
  sound_event?: BlockceptionMinecraftGeneralSoundEvent;
}[];
/**
 * List of spells for the mob to use.
 */
export type EventChoices = EventChoice[];
/**
 * List of events to send.
 */
export type Sequence1 = {
  /**
   * Amount of time in seconds before starting this step.
   */
  base_delay?: number;
  /**
   * The event to send to the entity.
   */
  event?: string;
  sound_event?: BlockceptionMinecraftGeneralSoundEvent;
}[];

/**
 * Allows the mob to send an event to another mob.
 */
export interface SendEvent {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time in seconds for the entire event sending process.
   */
  cast_duration?: number;
  /**
   * If true, the mob will face the entity it sends an event to.
   */
  look_at_target?: boolean;
  event_choices?: EventChoices;
  sequence?: Sequence1;
}
/**
 * A spell that the mob can cast.
 */
export interface EventChoice {
  /**
   * The minimum distance in blocks the target must be for this spell to be cast.
   */
  min_activation_range?: number;
  /**
   * The maxmimum distance in blocks the target must be for this spell to be cast.
   */
  max_activation_range?: number;
  /**
   * Time in seconds before the mob can use this spell again.
   */
  cooldown_time?: number;
  /**
   * Time in seconds the spell casting will take.
   */
  cast_duration?: number;
  filters?: Filters;
  /**
   * The color of the particles for this spell.
   */
  particle_color?: string;
  /**
   * The weight of this spell. Controls how likely this spell will be picked
   */
  weight?: number;
  start_sound_event?: StartSoundEvent;
  sequence?: Sequence;
}
