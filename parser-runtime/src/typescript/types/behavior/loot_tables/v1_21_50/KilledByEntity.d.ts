/**
 * behavior/loot_tables/conditions/killed_by_entity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:51.109Z
 */

/**
 * Returns the condition true if the actor of the loot table is killed by a specific entity type.
 */
export interface KilledByEntity {
  /**
   * UNDOCUMENTED.
   */
  condition?: string;
  /**
   * The entity type to match
   */
  entity_type?: string;
}
