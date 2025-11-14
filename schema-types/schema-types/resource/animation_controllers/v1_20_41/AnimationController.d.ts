/**
 * resource/animation_controllers/animation_controller.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.490Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
export type Animations1 = string | AnimationSpecification;
/**
 * Molang definition.
 */
export type MolangString180 = string;
/**
 * The animations definition for.
 */
export type Animations = Animations1[];
export type BlendTransition =
  | number
  | {
      /**
       * Mapping of time since the animation was canceled, to the blend value at that time. A default key of time=0 to a blend value of 1.0 is provided if any other key is set and a blend value at time=0 hasn't already been set.
       */
      [k: string]: number;
    };
/**
 * The effects to be emitted.
 */
export type ParticleEffects = ParticleEffects1[];
/**
 * The specification on when to transition to a new state.
 */
export type Transitions = string | AnimationSpecification;
/**
 * The transition definition for.
 */
export type Transition = Transitions[];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber = string | number;
/**
 * Sets molang on data on entry.
 */
export type OnEntry = string[];
/**
 * Sets molang on data on exit.
 */
export type OnExit = string[];

/**
 * UNDOCUMENTED.
 */
export interface AnimationController {
  format_version: FormatVersion;
  animation_controllers: AnimationControllersSchema;
}
/**
 * The animation controllers schema for.
 */
export interface AnimationControllersSchema {
  [k: string]: AAnimationController;
}
/**
 * A single animation controller.
 */
export interface AAnimationController {
  states: States;
  /**
   * The state to start with, if not specified state at position 0 in the array is used.
   */
  initial_state?: string;
}
/**
 * The states of this animation controller.
 */
export interface States {
  [k: string]: AnimationState;
}
/**
 * Animation state.
 */
export interface AnimationState {
  animations?: Animations;
  blend_transition?: BlendTransition;
  /**
   * When blending a transition to another state, animate each euler axis through the shortest rotation, instead of by value.
   */
  blend_via_shortest_path?: boolean;
  particle_effects?: ParticleEffects;
  /**
   * Collection of sounds to trigger on entry to this animation state.
   */
  sound_effects?: {
    /**
     * Valid sound effect names should be listed in the entity's resource_definition json file.
     */
    effect: string;
  }[];
  transitions?: Transition;
  variables?: {
    [k: string]: {
      input: MolangNumber;
      remap_curve?: RemapCurve;
    };
  };
  on_entry?: OnEntry;
  on_exit?: OnExit;
}
/**
 * A object specification on how to transition.
 */
export interface AnimationSpecification {
  [k: string]: MolangString180 | number;
}
/**
 * UNDOCUMENTED: particle effects.
 */
export interface ParticleEffects1 {
  /**
   * Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).
   */
  bind_to_actor?: false;
  /**
   * The name of a particle effect that should be played.
   */
  effect: string;
  /**
   * The name of a locator on the actor where the effect should be located.
   */
  locator?: string;
  /**
   * A molang script that will be run when the particle emitter is initialized.
   */
  pre_effect_script?: string;
}
export interface RemapCurve {
  [k: string]: number;
}
