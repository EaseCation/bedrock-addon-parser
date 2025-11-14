/**
 * behavior/entities/format/components/friction_modifier.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.697Z
 */

/**
 * Defines how much does friction affect this entity.
 */
export interface FrictionModifier {
  /**
   * The higher the number, the more the friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much
   */
  value?: number;
}
