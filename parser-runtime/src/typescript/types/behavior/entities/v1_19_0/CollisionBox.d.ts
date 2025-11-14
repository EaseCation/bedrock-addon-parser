/**
 * behavior/entities/format/components/collision_box.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.710Z
 */

/**
 * Sets the width and height of the Entity's collision box.
 */
export interface CollisionBox {
  /**
   * Height of the collision box in blocks. A negative value will be assumed to be 0
   */
  height?: number;
  /**
   * Width and Depth of the collision box in blocks. A negative value will be assumed to be 0
   */
  width?: number;
}
