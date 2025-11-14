/**
 * behavior/spawn_rules/components/mob_event_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.310Z
 */

/**
 * The event String in this JSON Object is used to filter the spawn rules of the mob type. Can be type minecraft:pillager_patrols_event, minecraft:wandering_trader_event, or minecraft:ender_dragon_event..
 */
export type EventFilter =
  | 'minecraft:pillager_patrols_event'
  | 'minecraft:wandering_trader_event'
  | 'minecraft:ender_dragon_event';

/**
 * This component allows players to spawn mobs on a particular event.
 */
export interface MobEventFilter {
  event?: EventFilter;
}
