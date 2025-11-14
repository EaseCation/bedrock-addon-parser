/**
 * resource/sounds.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.559Z
 */

export type Volume = number | [] | [number] | [number, number];
export type Pitch = number | [] | [number] | [number, number];
/**
 * A single sound event definition.
 */
export type SoundEvent =
  | string
  | {
      volume?: Volume;
      /**
       * The sound event described in sound_definitions.json
       */
      sound: string;
      pitch?: Pitch;
    };
/**
 * A single sound event definition.
 */
export type SoundEvent1 =
  | string
  | {
      volume?: Volume;
      /**
       * The sound event described in sound_definitions.json
       */
      sound?: string;
      pitch?: Pitch;
    };

/**
 * Sound definitions.
 */
export interface SoundsJson {
  block_sounds?: BlockSounds;
  entity_sounds?: EntitySounds;
  individual_event_sounds?: IndividualEventSounds;
  interactive_sounds?: InteractiveSounds;
}
/**
 * Block sound definitions.
 */
export interface BlockSounds {
  [k: string]: BlockSound;
}
/**
 * A single block sound definition.
 */
export interface BlockSound {
  volume?: Volume;
  pitch?: Pitch;
  events?: Events;
}
export interface Events {
  [k: string]: SoundEvent;
}
/**
 * Entity sounds definitions.
 */
export interface EntitySounds {
  defaults?: EntitySound;
  entities?: Entities;
}
/**
 * Entity sound definitions.
 */
export interface EntitySound {
  volume?: Volume;
  pitch?: Pitch;
  events?: Events1;
  [k: string]: unknown;
}
export interface Events1 {
  [k: string]: SoundEvent;
}
/**
 * Entities definitions.
 */
export interface Entities {
  [k: string]: EntitySound;
}
/**
 * Individual event sounds definitions.
 */
export interface IndividualEventSounds {
  events?: Events2;
}
/**
 * Events.
 */
export interface Events2 {
  [k: string]: SoundEvent;
}
/**
 * Interactive sounds definitions.
 */
export interface InteractiveSounds {
  block_sounds?: BlockSounds1;
  entity_sounds?: EntitySounds1;
}
/**
 * Block sound definitions.
 */
export interface BlockSounds1 {
  [k: string]: BlockSound1;
}
/**
 * A single block sound definition.
 */
export interface BlockSound1 {
  volume?: Volume;
  pitch?: Pitch;
  events?: Events3;
}
export interface Events3 {
  [k: string]: SoundEvent1;
}
/**
 * Entity sound definitions.
 */
export interface EntitySounds1 {
  defaults?: Defaults;
  entities?: EntitesSounds;
}
/**
 * Default sound definitions.
 */
export interface Defaults {
  volume?: Volume;
  pitch?: Pitch;
  [k: string]: EntitySounds2;
}
export interface EntitySounds2 {
  events?: EntityEvents;
  [k: string]: unknown;
}
export interface EntityEvents {
  [k: string]: EntityEvent;
}
/**
 * A single entity event.
 */
export interface EntityEvent {
  [k: string]: string;
}
/**
 * Entities sound definitions.
 */
export interface EntitesSounds {
  [k: string]: EntitySounds3;
}
export interface EntitySounds3 {
  volume?: Volume;
  pitch?: Pitch;
  events?: EntityEvents1;
  [k: string]: unknown;
}
export interface EntityEvents1 {
  [k: string]: EntityEvent1;
}
/**
 * A single entity event.
 */
export interface EntityEvent1 {
  [k: string]: string;
}
