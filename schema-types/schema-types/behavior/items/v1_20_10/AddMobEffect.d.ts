/**
 * behavior/items/format/events/add_mob_effect.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.515Z
 */

/**
 * UNDOCUMENTED.
 */
export type Target = 'holder';

/**
 * UNDOCUMENTED.
 */
export interface AddMobEffect {
  /**
   * UNDOCUMENTED.
   */
  effect?: string;
  target?: Target;
  /**
   * UNDOCUMENTED.
   */
  duration?: number;
  /**
   * UNDOCUMENTED.
   */
  amplifier?: number;
}
