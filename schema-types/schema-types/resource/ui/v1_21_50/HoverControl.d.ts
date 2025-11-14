/**
 * resource/ui/elements/properties/hover_control.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.730Z
 */

/**
 * The control that will be hovered.
 */
export type HoverControl = 'hover' | (string | VariableReference);
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
