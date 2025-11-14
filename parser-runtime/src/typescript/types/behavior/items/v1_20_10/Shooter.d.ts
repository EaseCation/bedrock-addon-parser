/**
 * behavior/items/format/components/shooter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.521Z
 */

/**
 * Ammunition.
 */
export type Ammunition = Ammunition1[];

/**
 * Shooter Item Component.
 */
export interface Shooter {
  ammunition?: Ammunition;
  /**
   * Charge on draw? Default is set to false.
   */
  charge_on_draw?: boolean;
  /**
   * Launch power scale. Default is set to 1.0.
   */
  launch_power_scale?: number;
  /**
   * Draw Duration. Default is set to 0.
   */
  max_draw_duration?: number;
  /**
   * Launch power. Default is set to 1.0.
   */
  max_launch_power?: number;
  /**
   * Scale power by draw duration? Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface Ammunition1 {
  /**
   * UNDOCUMENTED.
   */
  item?: string;
  /**
   * UNDOCUMENTED.
   */
  use_offhand?: boolean;
  /**
   * UNDOCUMENTED.
   */
  search_inventory?: boolean;
  /**
   * UNDOCUMENTED.
   */
  use_in_creative?: boolean;
}
