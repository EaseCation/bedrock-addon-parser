/**
 * behavior/items/format/components/food.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.794Z
 */

/**
 * When an item has a food component, it becomes edible to the player.
 */
export interface Food {
  /**
   * If true you can always eat this item (even when not hungry), defaults to false.
   */
  can_always_eat?: boolean;
  /**
   * How much nutrition does this food item give the player when eaten.
   */
  nutrition?: number;
  /**
   * Saturation Modifier is used in this formula: (nutrition * saturation_modifier * 2) when appling the saturation buff. Which happens when you eat the item.
   */
  saturation_modifier?: number;
  /**
   * When used, convert the *this* item to the one specified by `using_converts_to`.
   */
  using_converts_to?: string;
}
