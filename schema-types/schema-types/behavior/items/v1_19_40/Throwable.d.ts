/**
 * behavior/items/format/components/throwable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:13.992Z
 */

/**
 * Throwable item component. Throwable items, such as a snowball.
 */
export interface Throwable {
  /**
   * Whether the item should use the swing animation when thrown. Default is set to false.
   */
  do_swing_animation?: boolean;
  /**
   * The scale at which the power of the throw increases. Default is set to 1.0.
   */
  launch_power_scale?: number;
  /**
   * The maximum duration to draw a throwable item. Default is set to 0.0.
   */
  max_draw_duration?: number;
  /**
   * The minimum duration to draw a throwable item. Default is set to 0.0.
   */
  min_draw_duration?: number;
  /**
   * The maximum power to launch the throwable item. Default is set to 1.0.
   */
  max_launch_power?: number;
  /**
   * Whether or not the power of the throw increases with duration charged. Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;
}
