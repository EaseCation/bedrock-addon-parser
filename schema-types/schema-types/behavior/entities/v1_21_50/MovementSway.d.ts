/**
 * behavior/entities/format/components/movement.sway.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.846Z
 */

/**
 * This move control causes the mob to sway side to side giving the impression it is swimming.
 */
export interface MovementSway {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
  /**
   * Strength of the sway movement.
   */
  sway_amplitude?: number;
  /**
   * Multiplier for the frequency of the sway movement.
   */
  sway_frequency?: number;
}
