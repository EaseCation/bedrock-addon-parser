/**
 * behavior/entities/format/components/addrider.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.680Z
 */

/**
 * Adds a rider to the entity. Requires `minecraft:rideable.`
 */
export interface AddRider {
  /**
   * The entity type that will be riding this entity.
   */
  entity_type: string;
  /**
   * The spawn event that will be used when the riding entity is created.
   */
  spawn_event?: string;
}
