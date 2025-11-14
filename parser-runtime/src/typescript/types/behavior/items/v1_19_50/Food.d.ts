/**
 * behavior/items/format/components/food.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.045Z
 */

/**
 * UNDOCUMENTED.
 */
export type Target = 'self';

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
  on_consume?: OnConsume;
  /**
   * If true, this food item is considered meat.
   */
  is_meat?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface OnConsume {
  /**
   * UNDOCUMENTED.
   */
  event?: string;
  target?: Target;
}
