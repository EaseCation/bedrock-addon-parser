/**
 * behavior/items/format/components/dyeable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.256Z
 */

/**
 * Color to use by default. If you do not want a default color you can leave the "default_color" off and the texture will be the same as if you did not have the component until it is dyed.
 */
export type DefaultColor = string | [] | [number] | [number, number] | [number, number, number];

/**
 * Enables custom items to be dyed in cauldrons.
 */
export interface Dyeable {
  default_color?: DefaultColor;
  [k: string]: unknown;
}
