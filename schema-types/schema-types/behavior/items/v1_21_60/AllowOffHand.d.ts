/**
 * behavior/items/format/components/allow_off_hand.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.268Z
 */

/**
 * The allow off hand component determines whether the item can be placed in the off hand slot of the inventory.
 */
export type AllowOffHand =
  | boolean
  | {
      /**
       * Whether the item can be placed in the off hand slot
       */
      value: boolean;
    };
