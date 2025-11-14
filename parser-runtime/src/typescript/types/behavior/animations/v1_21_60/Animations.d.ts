/**
 * behavior/animations/animations.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.169Z
 */

/**
 * The event or commands to execute.
 */
export type Commands = Commands1 & Commands2;
export type Commands1 = Variable | MinecraftCommand | Molang | Event;
export type Commands2 = string;
/**
 * The event or commands to execute.
 */
export type Commands3 = Commands4 & Commands5;
export type Commands4 = Variable | MinecraftCommand | Molang | Event;
export type Commands5 = string;
export type CollectionTimelimeItems = Commands3[];
/**
 * How does time pass when playing the animation. Defaults to `query.anim_time + query.delta_time` which means advance in seconds.
 */
export type AnimationTimeUpdate = string | number;

/**
 * Animation for behavior for.
 */
export interface Animation {
  format_version: '1.8.0' | '1.10.0';
  animations: AnimationsSchema;
}
/**
 * The animation specification.
 */
export interface AnimationsSchema {
  [k: string]: Animation1;
}
/**
 * A single animation definition for.
 */
export interface Animation1 {
  /**
   * The time in seconds this animation will last.
   */
  animation_length?: number;
  /**
   * Whenever this animation should loop once it reaches the end, will only happen if the animation is still active.
   */
  loop?: boolean;
  timeline?: Timeline;
  anim_time_update?: AnimationTimeUpdate;
}
/**
 * A timeline specification, property names are timestamps.
 */
export interface Timeline {
  [k: string]: Commands | CollectionTimelimeItems;
}
/**
 * Sets the value to a molang variable.
 */
export interface Variable {
  [k: string]: unknown;
}
/**
 * Executes a minecraft command.
 */
export interface MinecraftCommand {
  [k: string]: unknown;
}
export interface Molang {
  [k: string]: unknown;
}
/**
 * An event to be called upon within the executing entity.
 */
export interface Event {
  [k: string]: unknown;
}
