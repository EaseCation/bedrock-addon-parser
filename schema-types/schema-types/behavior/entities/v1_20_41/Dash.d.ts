/**
 * behavior/entities/format/components/dash.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.136Z
 */

/**
 * Ability for a ridable entity to dash.
 */
export interface Dash {
  /**
   * The dash cooldown in seconds.
   */
  cooldown_time?: number;
  /**
   * Horizontal momentum of the dash.
   */
  horizontal_momentum?: number;
  /**
   * Vertical momentum of the dash.
   */
  vertical_momentum?: number;
}
