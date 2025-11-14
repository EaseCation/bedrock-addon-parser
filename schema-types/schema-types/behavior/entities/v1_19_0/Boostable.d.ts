/**
 * behavior/entities/format/components/boostable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.751Z
 */

/**
 * List of items that can be used to boost while riding this entity.
 */
export type BoostItems = {
  /**
   * This is the damage that the item will take each time it is used.
   */
  damage?: number;
  /**
   * Name of the item that can be used to boost.
   */
  item?: string;
  /**
   * The item used to boost will become this item once it is used up.
   */
  replace_item?: string;
}[];

/**
 * Defines the conditions and behavior of a rideable entity's boost.
 */
export interface Boostable {
  /**
   * Time in seconds for the boost.
   */
  duration?: number;
  /**
   * Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast.
   */
  speed_multiplier?: number;
  boost_items?: BoostItems;
}
