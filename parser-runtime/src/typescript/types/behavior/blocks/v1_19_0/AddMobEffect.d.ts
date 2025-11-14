/**
 * behavior/blocks/format/events/add_mob_effect.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.027Z
 */

/**
 * The target context to execute against.
 */
export type Target = string;

/**
 * Apply mob effect to target.
 */
export interface AddMobEffect {
  /**
   * The amplifier for the mob effect.
   */
  amplifier?: number;
  /**
   * The duration of the mob effect.
   */
  duration?: number;
  /**
   * The mob effect to apply.
   */
  effect?: string;
  target?: Target;
}
