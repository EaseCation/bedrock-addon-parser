/**
 * behavior/items/format/components/use_modifiers.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.819Z
 */

/**
 * How long to use before item is done being used.
 */
export interface UseModifiers {
  /**
   * Modifier value to scale the players movement speed when item is in use.
   */
  movement_modifier?: number;
  /**
   * How long the item takes to use in seconds.
   */
  use_duration: number;
}
