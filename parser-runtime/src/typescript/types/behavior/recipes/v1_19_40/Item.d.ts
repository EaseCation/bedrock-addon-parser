/**
 * behavior/recipes/1.12.0/types/base types/item.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:13.866Z
 */

/**
 * Recipe item 1.12.0
 */
export type Item =
  | string
  | {
      item: string;
      data?: number;
      count?: number;
    };
