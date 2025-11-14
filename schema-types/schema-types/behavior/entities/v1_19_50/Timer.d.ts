/**
 * behavior/entities/format/components/timer.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:23.697Z
 */

/**
 * Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (Minimum and max). Incompatible with random_time_choices.
 */
export type Time = [] | [number] | [number, number] | number;
/**
 * The target of the event.
 */
export type Target =
  | 'baby'
  | 'block'
  | 'damager'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';
/**
 * This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time.
 */
export type RandomTimeChoices = RandomTimeChoices1[];

/**
 * Adds a timer after which an event will fire.
 */
export interface Timer {
  /**
   * If true, the timer will restart every time after it fires.
   */
  looping?: boolean;
  /**
   * If true, the amount of time on the timer will be random between the Minimum and Maximum values specified in time.
   */
  randomInterval?: boolean;
  time?: Time;
  time_down_event?: TimeDownEvent;
  random_time_choices?: RandomTimeChoices;
}
/**
 * Event to fire when the time on the timer runs out.
 */
export interface TimeDownEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time.
 */
export interface RandomTimeChoices1 {
  /**
   * The weight on how likely this section is to trigger.
   */
  weight?: number;
  /**
   * The value in seconds that would be used if this section was picked.
   */
  value?: number;
}
