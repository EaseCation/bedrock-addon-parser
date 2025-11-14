/**
 * behavior/entities/format/components/physics.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.478Z
 */

/**
 * Defines physics properties of an actor, including if it is affected by gravity or if it collides with objects.
 */
export interface Physics {
  /**
   * Whether or not the object collides with things.
   */
  has_collision?: boolean;
  /**
   * Whether or not the entity is affected by gravity.
   */
  has_gravity?: boolean;
}
