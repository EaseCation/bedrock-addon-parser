/**
 * behavior/recipes/types/base types/unlock.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.760Z
 */

/**
 * Unlock achievement
 */
export type Unlock =
  | {
      /**
       * The context of the achievement to unlock
       */
      context: string;
      [k: string]: unknown;
    }
  | Item[];
export type Item =
  | {
      /**
       * The item to unlock
       */
      item: string;
      /**
       * The data of the item to unlock
       */
      data?: number;
      [k: string]: unknown;
    }
  | {
      /**
       * The item to unlock
       */
      tag: string;
      [k: string]: unknown;
    };
