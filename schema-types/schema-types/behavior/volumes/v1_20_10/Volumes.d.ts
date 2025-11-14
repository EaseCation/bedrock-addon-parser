/**
 * behavior/volumes/1.17.0/volumes.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.221Z
 */

/**
 * Specifies the version of the game this entity was made in. Minimum supported version is 1.17.0. Current supported version is 1.17.0.
 */
export type FormatVersion = '1.17.0';
/**
 * The unique identifier for this volume. It must be of the form `namespace:name', where namespace cannot be `minecraft`.
 */
export type BlockceptionMinecraftEntityVolume = string;
/**
 * The name of the dimension the bounding box will exist in: one of `overworld', `nether` or `the end`.
 */
export type Dimension = 'overworld' | 'nether' | 'the end';
/**
 * The maximum block position of the bounding box.
 */
export type Maximum = [] | [number] | [number, number] | [number, number, number];
/**
 * The minimum block position of the bounding box.
 */
export type Minimum = [] | [number] | [number, number] | [number, number, number];
/**
 * Molang expression to test against the actor. The given event will be triggered if the expression evaluates to true.
 */
export type MolangString180 = string;
/**
 * One of `self` or `other`. Self means the event is attached to the volume. Other means the event is attached to the actor.
 */
export type Target = 'self' | 'other';
/**
 * Required array that contains all the triggers.
 */
export type OnEnter = OnEnterTrigger[];
/**
 * Molang expression to test against the actor. The given event will be triggered if the expression evaluates to true.
 */
export type Condition = string;
/**
 * One of `self` or `other`. Self means the event is attached to the volume. Other means the event is attached to the actor.
 */
export type Target1 = 'self' | 'other';
/**
 * Required array that contains all the triggers.
 */
export type OnEnter1 = OnEnterTrigger1[];

/**
 * UNDOCUMENTED.
 */
export interface SpawnRules1170 {
  format_version: FormatVersion;
  'minecraft:volume': SpawnRules;
}
/**
 * UNDOCUMENTED.
 */
export interface SpawnRules {
  description?: Description;
  components?: Components;
}
/**
 * The description contains a single `identifier` string.
 */
export interface Description {
  identifier?: BlockceptionMinecraftEntityVolume;
}
/**
 * UNDOCUMENTED.
 */
export interface Components {
  'minecraft:bounds'?: Bounds;
  'minecraft:fog'?: Fog;
  'minecraft:on_actor_enter'?: OnActorEnter;
  'minecraft:on_actor_leave'?: OnActorLeave;
}
/**
 * Component that defines a minimum and maximum block position for a bounding box and which world dimension the bounding box is in. Every volume must have a bounds component.
 */
export interface Bounds {
  dimension?: Dimension;
  max?: Maximum;
  min?: Minimum;
}
/**
 * Displays the given fog whenever a player enters the volume. Each volume can only have one fog attached.
 */
export interface Fog {
  /**
   * The identifier of a fog definition. Note that you will not receive any feedback if the definition does not exist.
   */
  fog_identifier?: string;
  /**
   * The priority for this fog definition setting. Smaller numbers have higher priority. Fogs with equal priority will be combined together.
   */
  priority?: number;
}
/**
 * Component that defines what happens when an actor enters the volume. Can contain multiple json objects.
 */
export interface OnActorEnter {
  on_enter: OnEnter;
}
/**
 * Trigger.
 */
export interface OnEnterTrigger {
  condition?: MolangString180;
  /**
   * Name of the event to run.
   */
  event?: string;
  target?: Target;
}
/**
 * Component that defines what happens when an actor leaves the volume.
 */
export interface OnActorLeave {
  on_enter: OnEnter1;
}
/**
 * Trigger.
 */
export interface OnEnterTrigger1 {
  condition?: Condition;
  /**
   * Name of the event to run.
   */
  event?: string;
  target?: Target1;
}
