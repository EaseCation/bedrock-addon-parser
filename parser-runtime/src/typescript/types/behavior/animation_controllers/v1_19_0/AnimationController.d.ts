/**
 * behavior/animation_controllers/animation_controller.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.076Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The key definition of an animation to play, defined in the entity.
 */
export type Animations1 = string | AnimationSpecification;
/**
 * Molang definition.
 */
export type MolangString180 = string;
/**
 * The animations definition for.
 */
export type Animations = Animations1[];
/**
 * The event or commands to execute.
 */
export type Commands = Commands1 & Commands2;
export type Commands1 = Event | Command | Molang;
export type Commands2 = string;
/**
 * Events, commands or transitions to preform on entry of this state.
 */
export type OnEntry = Commands[];
export type Commands3 = Commands1 & Commands2;
/**
 * Events, commands or transitions to preform on exit of this state.
 */
export type OnExit = Commands3[];
/**
 * The transition definition for.
 */
export type Transition = Transition1[];

/**
 * Animation controller for behaviors.
 */
export interface AnimationController {
  format_version: FormatVersion;
  animation_controllers: AnimationControllers;
}
/**
 * The animation controllers schema for.
 */
export interface AnimationControllers {
  [k: string]: AnimationController1;
}
/**
 * A single animation controller.
 */
export interface AnimationController1 {
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
  on_entry?: OnEntry;
  on_exit?: OnExit;
  transitions?: Transition;
}
/**
 * A object specification on when to animate.
 */
export interface AnimationSpecification {
  [k: string]: MolangString180;
}
export interface Event {
  [k: string]: unknown;
}
export interface Command {
  [k: string]: unknown;
}
export interface Molang {
  [k: string]: unknown;
}
/**
 * A transition to another state.
 */
export interface Transition1 {
  [k: string]: MolangString180;
}
