/**
 * resource/ui/elements/properties/anchor_to.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.473Z
 */

/**
 * The anchor point of the element. This is the point that the element will be positioned relative to.
 */
export type AnchorTo = Anchor | Variable;
/**
 * An anchor is a reference to an element in the UI.
 */
export type Anchor =
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'bottom_middle'
  | 'center'
  | 'left'
  | 'left_middle'
  | 'right'
  | 'right_middle'
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'top_middle';
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type Variable = Variable1 & Variable2;
export type Variable1 = string;
export type Variable2 = string;
