/**
 * behavior/items/format/events.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.757Z
 */

/**
 * UNDOCUMENTED.
 */
export type Target = 'holder';
/**
 * UNDOCUMENTED.
 */
export type Type = 'magic';
/**
 * UNDOCUMENTED.
 */
export type Target1 = 'holder';
/**
 * UNDOCUMENTED.
 */
export type Target2 = 'holder';
/**
 * UNDOCUMENTED.
 */
export type MaximumRange = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Sequence = Sequence1[];
/**
 * UNDOCUMENTED.
 */
export type Randomize = Randomize1[];
/**
 * UNDOCUMENTED.
 */
export type Command = string[];
/**
 * UNDOCUMENTED.
 */
export type Target3 = 'other';

/**
 * UNDOCUMENTED.
 */
export interface Events {
  on_consume?: Event;
  [k: string]: Event;
}
/**
 * UNDOCUMENTED.
 */
export interface Event {
  sequence?: Sequence;
  randomize?: Randomize;
  run_command?: RunCommand;
}
/**
 * UNDOCUMENTED.
 */
export interface Sequence1 {
  add_mob_effect?: AddMobEffect;
  damage?: Shoot;
  decrement_stack?: DecrementStack;
  remove_mob_effect?: RemoveMobEffect;
  shoot?: Shoot1;
  swing?: Swing;
  teleport?: Teleport;
  transform_item?: TransformItem;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface AddMobEffect {
  /**
   * UNDOCUMENTED.
   */
  effect?: string;
  target?: Target;
  /**
   * UNDOCUMENTED.
   */
  duration?: number;
  /**
   * UNDOCUMENTED.
   */
  amplifier?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Shoot {
  type?: Type;
  /**
   * UNDOCUMENTED.
   */
  amount?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface DecrementStack {}
/**
 * UNDOCUMENTED.
 */
export interface RemoveMobEffect {
  /**
   * UNDOCUMENTED.
   */
  effect?: string;
  target?: Target1;
}
/**
 * UNDOCUMENTED.
 */
export interface Shoot1 {
  /**
   * UNDOCUMENTED.
   */
  angle_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  launch_power?: number;
  /**
   * UNDOCUMENTED.
   */
  projectile?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface Swing {}
/**
 * UNDOCUMENTED.
 */
export interface Teleport {
  target?: Target2;
  max_range?: MaximumRange;
}
/**
 * UNDOCUMENTED.
 */
export interface TransformItem {
  /**
   * UNDOCUMENTED.
   */
  transform?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface Randomize1 {
  /**
   * UNDOCUMENTED.
   */
  weight: number;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface RunCommand {
  command?: Command;
  target?: Target3;
}
