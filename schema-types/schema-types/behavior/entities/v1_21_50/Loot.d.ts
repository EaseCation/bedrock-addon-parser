/**
 * behavior/entities/format/components/loot.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.873Z
 */

/**
 * sets the loot table for what items this entity drops upon death.
 */
export interface Loot {
  /**
   * The path to the loot table, relative to the Behavior Pack's root.
   */
  table: string;
}
