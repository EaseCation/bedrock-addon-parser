/**
 * behavior/items/format/components/shooter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.829Z
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
   * Draw Duration. Default is set to 0.
   */
  max_draw_duration?: number;
  /**
   * Scale power by draw duration? Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;
}
/**
 * Ammunition definition
 */
export interface Ammunition1 {
  /**
   * Item identifier
   */
  item?: string;
  /**
   * If ammo can be in offhand
   */
  use_offhand?: boolean;
  /**
   * If ammo can be stored in the inventory
   */
  search_inventory?: boolean;
  /**
   * If it needs ammo to be used in creative
   */
  use_in_creative?: boolean;
}
