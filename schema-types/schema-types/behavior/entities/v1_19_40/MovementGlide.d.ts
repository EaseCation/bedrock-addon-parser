/**
 * behavior/entities/format/components/movement.glide.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.640Z
 */

/**
 * This is the move control for a flying mob that has a gliding movement.
 */
export interface MovementGlide {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
  /**
   * UNDOCUMENTED.
   */
  start_speed?: number;
  /**
   * UNDOCUMENTED.
   */
  speed_when_turning?: number;
}
