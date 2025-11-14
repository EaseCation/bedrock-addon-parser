/**
 * resource/ui/elements/properties/destroy_at_end.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.793Z
 */

/**
 * If true, the element will be destroyed at the end of the animation.
 */
export type DestroyAtEnd =
  | ('popup' | 'details_bubble_control' | 'bundle_mode_popup_control' | 'selected_item_details')
  | Variable;
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type Variable = Variable1 & Variable2;
export type Variable1 = string;
export type Variable2 = string;
