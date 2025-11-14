/**
 * resource/ui/elements/properties/use_child_anchors.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.609Z
 */

/**
 * If true, this element will stack its controlled element in respect to their anchor values.
 */
export type UseChildAnchors = boolean | ((string | VariableReference) & string);
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
