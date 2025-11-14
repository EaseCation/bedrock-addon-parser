/**
 * behavior/entities/format/components/physics.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.767Z
 */

/**
 * Defines the physical properties of an actor, including whether it is affected by gravity, whether it collides with objects, or whether it is pushed to the closest space.
 */
export interface Physics {
  /**
   * Whether or not the entity collides with things.
   */
  has_collision?: boolean;
  /**
   * Whether or not the entity is affected by gravity.
   */
  has_gravity?: boolean;
  /**
   * Whether or not the entity is pushed to the closest space.
   */
  push_towards_closest_space?: boolean;
}
