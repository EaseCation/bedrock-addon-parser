/**
 * behavior/loot_tables/conditions/has_mark_variant.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:21.950Z
 */

/**
 * Returns the condition true if the actor's mark variant is matched to the value.
 */
export interface HasMarkVariant {
  /**
   * Returns the condition true if the actor's mark variant is matched to the value.
   */
  condition?: string;
  /**
   * Tests for the actor's mark variant (if it has one).
   */
  value?: number & string;
}
