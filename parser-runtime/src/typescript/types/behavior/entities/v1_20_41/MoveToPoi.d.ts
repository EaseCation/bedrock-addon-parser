/**
 * behavior/entities/format/behaviors/move_to_poi.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.743Z
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
 * Tells the goal what POI type it should be looking for.
 */
export type PointOfInterestType = 'bed' | 'jobsite' | 'meeting_area';

/**
 * Allows the mob to move to a POI if able to.
 */
export interface MoveToPoi {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  poi_type?: PointOfInterestType;
}
