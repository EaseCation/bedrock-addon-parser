/**
 * behavior/items/format/components/max_stack_size.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.243Z
 */

/**
 * The max stack size component determines how many of the item can be stacked together.
 */
export type MaxStackSize =
  | number
  | {
      /**
       * How many of the item that can be stacked.
       */
      value: number;
    };
