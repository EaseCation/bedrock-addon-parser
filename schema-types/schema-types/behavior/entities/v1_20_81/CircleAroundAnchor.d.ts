/**
 * behavior/entities/format/behaviors/circle_around_anchor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.041Z
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
 * Horizontal distance from the anchor point this entity must stay within upon a successful radius adjustment.
 */
export type RadiusRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * The number of blocks above the target that the next anchor point can be set. This value is used only when the entity is tracking a target.
 */
export type HeightAboveTargetRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * The range of height in blocks offset the mob can have from it's anchor point.
 */
export type HeightOffsetRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };

/**
 * Causes an entity to circle around an anchor point placed near a point or target.
 */
export interface CircleAroundAnchor {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  radius_range?: RadiusRange;
  /**
   * A random value to determine when to increase the size of the radius up to the maximum. This has a 1/value chance every tick to do so.
   */
  radius_change_chance?: number;
  height_above_target_range?: HeightAboveTargetRange;
  height_offset_range?: HeightOffsetRange;
  /**
   * A random value to determine when to change the height of the mob from the anchor point. This has a 1/value chance every tick to do so.
   */
  height_change_chance?: number;
  /**
   * Maximum distance from the anchor-point in which this entity considers itself to have reached the anchor point. This is to prevent the entity from bouncing back and forth trying to reach a specific spot.
   */
  goal_radius?: number;
  /**
   * The number of blocks to increase the current movement radius by, upon successful `radius_adjustment_chance`. If the current radius increases over the range maximum, the current radius will be set back to the range minimum and the entity will change between clockwise and counter-clockwise movement.
   */
  radius_change?: number;
  /**
   * Percent chance to determine how often to increase the size of the current movement radius around the anchor point. 1 = 100%. `radius_change_chance` is deprecated and has been replaced with `radius_adjustment_chance`.
   */
  radius_adjustment_chance?: number;
  /**
   * Percent chance to determine how often to increase or decrease the current height around the anchor point. 1 = 100%. `height_change_chance` is deprecated and has been replaced with `height_adjustment_chance`.
   */
  height_adjustment_chance?: number;
  /**
   * Number of degrees to change this entity's facing by, when the entity selects its next anchor point.
   */
  angle_change?: number;
}
