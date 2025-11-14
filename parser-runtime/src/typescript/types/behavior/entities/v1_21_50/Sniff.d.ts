/**
 * behavior/entities/format/behaviors/sniff.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.665Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Cooldown range between sniffs in seconds.
 */
export type CooldownRange = [] | [number] | [number, number];

/**
 * Sniff compels this entity to detect the nearest player within "sniffing_radius" and update its minecraft:suspect_tracking component state.
 */
export interface Sniff {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  cooldown_range?: CooldownRange;
  /**
   * Sniffing duration in seconds
   */
  duration?: number;
  /**
   * Mob detection radius.
   */
  sniffing_radius?: number;
  /**
   * Mob suspicion horizontal radius. When a player is within this radius horizontally, the anger level towards that player is increased.
   */
  suspicion_radius_horizontal?: number;
  /**
   * Mob suspicion vertical radius. When a player is within this radius vertically, the anger level towards that player is increased.
   */
  suspicion_radius_vertical?: number;
}
