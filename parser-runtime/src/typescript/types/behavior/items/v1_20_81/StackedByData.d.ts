/**
 * behavior/items/format/components/stacked_by_data.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.777Z
 */

/**
 * The stacked by data component determines if the same item with different aux values can stack.
 */
export type StackedByData =
  | boolean
  | {
      /**
       * Also defines whether the item actors can merge while floating in the world.
       */
      value: boolean;
    };
