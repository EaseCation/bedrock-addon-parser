/**
 * resource/animations/actor_animation.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.379Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * How does time pass when playing the animation. Defaults to `query.anim_time + query.delta_time` which means advance in seconds.
 */
export type StartDelay = string | number;
/**
 * The weight of the animation when blending with other animations. Defaults to 1.
 */
export type BlendWeight = string | number;
/**
 * The Position transformation during this animation.
 */
export type Position =
  | PositionArray
  | {
      [k: string]: TimelineObject;
    };
/**
 * An array of 3 items that describe the bones position.
 *
 * @minItems 3
 * @maxItems 3
 */
export type PositionArray = [PositionX, PositionY, PositionZ];
/**
 * The position over the X-axis or forwards/backwards.
 * Can be molang or a float
 */
export type PositionX = string | number;
/**
 * The position over the Y-axis, or up/down.
 * Can be molang or a float
 */
export type PositionY = string | number;
/**
 * The position over the Z-axis, or left/right.
 * Can be molang or a float
 */
export type PositionZ = string | number;
/**
 * A single point in time.
 */
export type TimelineObject =
  | ScaleX
  | PositionArray1
  | {
      lerp_mode?: LerpMode;
      pre?: Pre;
      post?: Pre1;
    };
/**
 * Uniform position.
 */
export type ScaleX = string | number;
/**
 * An array of 3 items that describe the bones position.
 *
 * @minItems 3
 * @maxItems 3
 */
export type PositionArray1 = [PositionX, PositionY, PositionZ];
/**
 * UNDOCUMENTED.
 */
export type LerpMode = 'linear' | 'catmullrom';
/**
 * UNDOCUMENTED.
 *
 * @minItems 3
 * @maxItems 3
 */
export type Pre = [PositionX, PositionY, PositionZ];
/**
 * UNDOCUMENTED.
 *
 * @minItems 3
 * @maxItems 3
 */
export type Pre1 = [PositionX, PositionY, PositionZ];
/**
 * The rotation transformation during this animation.
 */
export type Rotation =
  | RotationArray
  | {
      [k: string]: TimelineObject1;
    };
/**
 * An array of 3 items that describe the bones rotation.
 *
 * @minItems 3
 * @maxItems 3
 */
export type RotationArray = [RotationX, RotationY, RotationZ];
/**
 * The rotation over the X-axis, or up or down.
 * Can be molang or a float
 */
export type RotationX = string | number;
/**
 * The rotation over the Y-axis, or yaw.
 * Can be molang or a float
 */
export type RotationY = string | number;
/**
 * The rotation over the Z-axis, or roll.
 * Can be molang or a float
 */
export type RotationZ = string | number;
/**
 * A single point in time.
 */
export type TimelineObject1 =
  | ScaleX1
  | RotationArray1
  | {
      lerp_mode?: LerpMode1;
      pre?: Pre2;
      post?: Pre3;
    };
/**
 * Uniform rotation.
 */
export type ScaleX1 = string | number;
/**
 * UNDOCUMENTED.
 *
 * @minItems 3
 * @maxItems 3
 */
export type RotationArray1 = [RotationX, RotationY, RotationZ];
/**
 * UNDOCUMENTED.
 */
export type LerpMode1 = 'linear' | 'catmullrom';
/**
 * UNDOCUMENTED.
 *
 * @minItems 3
 * @maxItems 3
 */
export type Pre2 = [RotationX, RotationY, RotationZ];
/**
 * UNDOCUMENTED.
 *
 * @minItems 3
 * @maxItems 3
 */
export type Pre3 = [RotationX, RotationY, RotationZ];
/**
 * UNDOCUMENTED.
 */
export type Scale =
  | ScaleX2
  | ScaleArray
  | {
      [k: string]: TimelineObject2;
    };
/**
 * Uniform scale.
 */
export type ScaleX2 = string | number;
/**
 * An array of 3 items that describe the bones scale.
 *
 * @minItems 3
 * @maxItems 3
 */
export type ScaleArray = [ScaleX3, ScaleY, ScaleZ];
/**
 * The scale over the X-axis or forwards/backwards.
 * Can be molang or a float
 */
export type ScaleX3 = string | number;
/**
 * The scale over the Y-axis, or up/down.
 * Can be molang or a float
 */
export type ScaleY = string | number;
/**
 * The scale over the Z-axis, or left/right.
 * Can be molang or a float
 */
export type ScaleZ = string | number;
/**
 * A single point in time.
 */
export type TimelineObject2 =
  | ScaleX4
  | ScaleArray1
  | {
      lerp_mode?: LerpMode2;
      pre?: ScaleArray2;
      post?: ScaleArray3;
    };
/**
 * Uniform rotation.
 */
export type ScaleX4 = string | number;
/**
 * An array of 3 items that describe the bones scale.
 *
 * @minItems 3
 * @maxItems 3
 */
export type ScaleArray1 = [ScaleX3, ScaleY, ScaleZ];
/**
 * UNDOCUMENTED.
 */
export type LerpMode2 = 'linear' | 'catmullrom';
/**
 * An array of 3 items that describe the bones scale.
 *
 * @minItems 3
 * @maxItems 3
 */
export type ScaleArray2 = [ScaleX3, ScaleY, ScaleZ];
/**
 * An array of 3 items that describe the bones scale.
 *
 * @minItems 3
 * @maxItems 3
 */
export type ScaleArray3 = [ScaleX3, ScaleY, ScaleZ];
/**
 * Should this animation stop, loop, or stay on the last frame when finished (true, false, hold_on_last_frame).
 */
export type Loop = boolean | 'hold_on_last_frame';
/**
 * How long to wait in seconds before looping this animation. Note that this expression is evaluated after each loop and on looping animation only.
 */
export type LoopDelay = string | number;
/**
 * A single point in time.
 */
export type TimelineObject3 = ParticleEffect | ParticleEffect1[];
/**
 * A molang script that will be run when the particle emitter is initialized.
 */
export type MolangString180 = string;
/**
 * How long to wait in seconds before playing this animation. Note that this expression is evaluated once before playing, and only re-evaluated if asked to play from the beginning again. A looping animation should use `loop_delay` if it wants a delay between loops.
 */
export type StartDelay1 = string | number;
/**
 * A single point in time.
 */
export type TimelineObject4 = SoundEffect1 | SoundEffect2[];
export type CollectionTimelimeItems = string[];

/**
 * The RP animation that changes an actors models, or molang data.
 */
export interface ActorAnimation {
  format_version: FormatVersion;
  animations: AnimationsSchema;
}
/**
 * The animation specification.
 */
export interface AnimationsSchema {
  [k: string]: Animation;
}
/**
 * The animation specification.
 */
export interface Animation {
  anim_time_update?: StartDelay;
  /**
   * Override calculated value (set as the last keyframe time) and set animation length in seconds.
   */
  animation_length?: number;
  blend_weight?: BlendWeight;
  bones?: Bones;
  loop?: Loop;
  loop_delay?: LoopDelay;
  /**
   * Reset bones in this animation to the default pose before applying this animation.
   */
  override_previous_animation?: boolean;
  particle_effects?: ParticleEffects;
  start_delay?: StartDelay1;
  sound_effects?: SoundEffect;
  timeline?: Timeline;
}
/**
 * Defines how the bones in an animation move or transform.
 */
export interface Bones {
  [k: string]: BoneTransformation;
}
/**
 * The bone definition that declare how it transforms during animation.
 */
export interface BoneTransformation {
  position?: Position;
  rotation?: Rotation;
  relative_to?: RelativeTo;
  scale?: Scale;
}
/**
 * If set, makes the bone rotation relative to the entity instead of the bone's parent.
 */
export interface RelativeTo {
  /**
   * If set, makes the bone rotation relative to the entity instead of the bone's parent.
   */
  rotation?: string;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface ParticleEffects {
  [k: string]: TimelineObject3;
}
export interface ParticleEffect {
  /**
   * The name of a particle effect that should be played.
   */
  effect: string;
  /**
   * The name of a locator on the actor where the effect should be located.
   */
  locator?: string;
  pre_effect_script?: MolangString180;
  /**
   * Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).
   */
  bind_to_actor?: false;
}
export interface ParticleEffect1 {
  /**
   * The name of a particle effect that should be played.
   */
  effect: string;
  /**
   * The name of a locator on the actor where the effect should be located.
   */
  locator?: string;
  pre_effect_script?: MolangString180;
  /**
   * Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).
   */
  bind_to_actor?: false;
}
/**
 * UNDOCUMENTED.
 */
export interface SoundEffect {
  [k: string]: TimelineObject4;
}
export interface SoundEffect1 {
  /**
   * Valid sound effect names should be listed in the entity's resource_definition json file.
   */
  effect?: string;
}
export interface SoundEffect2 {
  /**
   * Valid sound effect names should be listed in the entity's resource_definition json file.
   */
  effect?: string;
}
/**
 * The time line.
 */
export interface Timeline {
  [k: string]: string | CollectionTimelimeItems;
}
