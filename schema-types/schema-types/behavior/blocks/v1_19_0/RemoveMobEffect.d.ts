/**
 * behavior/blocks/format/events/remove_mob_effect.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.019Z
 */

/**
 * Removes mob effect from target.
 */
export interface RemoveMobEffect {
  /**
   * The mob effect to remove. Use `all` to remove all mob effects from target.
   */
  effect?: string;
  /**
   * The target context to execute against.
   */
  target?: string;
}
