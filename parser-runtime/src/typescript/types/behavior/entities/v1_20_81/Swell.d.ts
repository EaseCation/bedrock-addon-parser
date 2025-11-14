/**
 * behavior/entities/format/behaviors/swell.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.336Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the creeper to swell up when a player is nearby. It can only be used by Creepers.
 */
export interface Swell {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * This mob starts swelling when a target is at least this many blocks away.
   */
  start_distance?: number;
  /**
   * This mob stops swelling when a target has moved away at least this many blocks.
   */
  stop_distance?: number;
}
