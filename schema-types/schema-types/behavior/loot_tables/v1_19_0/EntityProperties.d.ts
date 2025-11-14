/**
 * behavior/loot_tables/conditions/entity_properties.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:06.040Z
 */

/**
 * Returns true if the actor properties defined were executed.
 */
export interface EntityProperties {
  /**
   * Returns true if the actor properties defined were executed.
   */
  condition?: string;
  /**
   * The entity to test. The value must be only `this`.
   */
  entity?: string;
  properties?: Properties;
}
/**
 * The entity's properties. `on_fire`, `on_ground` is used for now.
 */
export interface Properties {
  /**
   * Checks if the entity is on fire or not.
   */
  on_fire?: boolean;
  /**
   * Checks if the entity is on the ground or not.
   */
  on_ground?: boolean;
}
