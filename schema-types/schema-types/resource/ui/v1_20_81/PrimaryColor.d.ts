/**
 * resource/ui/elements/properties/primary_color.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.328Z
 */

/**
 * The primary color of the element. This can be a hex color code or a color keyword.
 */
export type PrimaryColor =
  | ((string | VariableReference) & string)
  | []
  | [Red]
  | [Red, Green]
  | [Red, Green, Blue];
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
/**
 * A variable
 */
export type Red = string;
/**
 * A variable
 */
export type Green = string;
/**
 * A variable
 */
export type Blue = string;
