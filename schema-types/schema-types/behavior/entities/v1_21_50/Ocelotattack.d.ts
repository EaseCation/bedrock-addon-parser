/**
 * behavior/entities/format/behaviors/ocelotattack.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.863Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Can only be used by the Ocelot. Allows it to perform the sneak and pounce attack.
 */
export interface Ocelotattack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time (in seconds) between attacks.
   */
  cooldown_time?: number;
  /**
   * Max distance from the target, this entity will use this attack behavior.
   */
  max_distance?: number;
  /**
   * Max distance from the target, this entity starts sneaking.
   */
  max_sneak_range?: number;
  /**
   * Max distance from the target, this entity starts sprinting (sprinting takes priority over sneaking).
   */
  max_sprint_range?: number;
  /**
   * Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
   */
  reach_multiplier?: number;
  /**
   * Modifies the attacking entity's movement speed while sneaking.
   */
  sneak_speed_multiplier?: number;
  /**
   * Modifies the attacking entity's movement speed while sprinting.
   */
  sprint_speed_multiplier?: number;
  /**
   * Modifies the attacking entity's movement speed when not sneaking or sprinting, but still within attack range.
   */
  walk_speed_multiplier?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
}
