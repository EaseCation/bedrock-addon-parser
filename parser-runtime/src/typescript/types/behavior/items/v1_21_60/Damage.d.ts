/**
 * behavior/items/format/components/damage.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.262Z
 */

/**
 * The damage component determines how much extra damage the item does on attack.
 */
export type Damage =
  | number
  | {
      /**
       * How much extra damage the item does, must be a positive number.
       */
      value: number;
    };
