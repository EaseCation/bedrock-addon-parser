/**
 * behavior/blocks/format/events.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.249Z
 */

/**
 * UNDOCUMENTED.
 */
export interface Events {
  'minecraft:on_fall_on'?: Event;
  'minecraft:on_interact'?: Event;
  'minecraft:on_placed'?: Event;
  'minecraft:on_player_destroyed'?: Event;
  'minecraft:on_player_placing'?: Event;
  'minecraft:on_step_off'?: Event;
  'minecraft:on_step_on'?: Event;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface Event {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
}
