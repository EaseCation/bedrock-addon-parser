/**
 * behavior/blocks/format/events/damage.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.152Z
 */

/**
 * The target context to execute against.
 */
export type Target = string;

/**
 * Deals damage to the target.
 */
export interface Damage {
  /**
   * The amount of damage to deal.
   */
  amount?: number;
  target?: Target;
  /**
   * The type of damage to deal.
   */
  type?: string;
}
