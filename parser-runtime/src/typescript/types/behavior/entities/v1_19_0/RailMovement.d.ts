/**
 * behavior/entities/format/components/rail_movement.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.216Z
 */

/**
 * Defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail.
 */
export interface RailMovement {
  /**
   * Maximum speed that this entity will move at when on the rail.
   */
  max_speed?: number;
}
