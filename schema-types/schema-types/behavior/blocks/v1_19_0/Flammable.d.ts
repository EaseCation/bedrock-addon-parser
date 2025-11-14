/**
 * behavior/blocks/format/components/flammable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.059Z
 */

/**
 * Describes the flammable properties for this block.
 */
export interface Flammable {
  /**
   * How likely the block will be destroyed by flames when on fire. Value must be greater than or equal to 0.
   */
  burn_odds?: number;
  /**
   * How likely the block will catch flame when next to a fire. Value must be greater than or equal to 0.
   */
  flame_odds?: number;
}
