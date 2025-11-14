/**
 * behavior/entities/format/components/barter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.898Z
 */

/**
 * Enables the component to drop an item as a barter exchange.
 */
export interface Barter {
  /**
   * Loot table that's used to drop a random item.
   */
  barter_table?: string;
  /**
   * Duration, in seconds, for which mob won't barter items if it was hurt.
   */
  cooldown_after_being_attacked?: number;
}
