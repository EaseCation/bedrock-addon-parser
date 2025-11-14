/**
 * behavior/items/format/components/hover_text_color.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.790Z
 */

/**
 * The hover text color component determines the color of the item name when hovering over it.
 */
export type HoverTextColor =
  | Color
  | {
      value: Value;
    };
export type Color =
  | 'black'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'light_blue'
  | 'light_green'
  | 'magenta'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'silver'
  | 'white'
  | 'yellow';
/**
 * The color of the item's hover text.
 */
export type Value =
  | 'black'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'light_blue'
  | 'light_green'
  | 'magenta'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'silver'
  | 'white'
  | 'yellow';
