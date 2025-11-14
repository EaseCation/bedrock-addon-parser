/**
 * behavior/entities/format/components/balloonable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.899Z
 */

/**
 * allows the entity to have a balloon attached and defines the conditions and events for the entity when is ballooned.
 */
export interface Balloonable {
  /**
   * Distance in blocks where the 'spring' effect lifts the entity.
   */
  soft_distance?: number;
  /**
   * Distance in blocks where the balloon breaks.
   */
  max_distance?: number;
  /**
   * Event to call when the entity is ballooned.
   */
  on_balloon?: string;
  /**
   * Event to call when the entity is unballooned.
   */
  on_unballoon?: string;
  /**
   * Mass that the entity has when computing balloon pull forces.
   */
  mass?: number;
}
