/**
 * behavior/items/format/components/dye_powder.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:35.031Z
 */

/**
 * Defines what color the dye is.
 */
export type Color =
  | 'black'
  | 'red'
  | 'green'
  | 'brown'
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'silver'
  | 'gray'
  | 'pink'
  | 'lime'
  | 'yellow'
  | 'lightblue'
  | 'magenta'
  | 'orange'
  | 'white';

/**
 * Dye powder, there are 16 kinds of dye.
 */
export interface DyePowder {
  color: Color;
}
