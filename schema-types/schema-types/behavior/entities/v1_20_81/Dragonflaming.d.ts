/**
 * behavior/entities/format/behaviors/dragonflaming.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.958Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows this entity to use a flame-breath attack. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonflaming {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time (in seconds), after roar, to breath flame.
   */
  cooldown_time?: number;
  /**
   * Time (in seconds), after roar, to breath flame.
   */
  flame_time?: number;
  /**
   * Number of ground flame-breath attacks to use before flight-takeoff.
   */
  ground_flame_count?: number;
  /**
   * Time (in seconds) to roar, before breathing flame.
   */
  roar_time?: number;
}
