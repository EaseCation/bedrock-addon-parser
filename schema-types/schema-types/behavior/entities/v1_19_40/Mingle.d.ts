/**
 * behavior/entities/format/behaviors/mingle.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:17.986Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;
/**
 * The entity type that this entity is allowed to mingle with.
 */
export type MinglePartnerType = string[] | string;

/**
 * Allows an entity to go to the village bell and mingle with other entities.
 */
export interface Mingle {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * Amount of time in seconds that the entity will chat with another entity.
   */
  duration?: number;
  /**
   * The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities.
   */
  mingle_distance?: number;
  mingle_partner_type?: MinglePartnerType;
}
