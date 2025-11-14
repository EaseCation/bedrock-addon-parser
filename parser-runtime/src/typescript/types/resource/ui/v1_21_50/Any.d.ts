/**
 * resource/ui/general/any.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.597Z
 */

/**
 * An any value.
 */
export type Any =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown;
    }
  | string;
