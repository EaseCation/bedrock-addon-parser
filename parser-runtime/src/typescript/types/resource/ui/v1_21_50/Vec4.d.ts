/**
 * resource/ui/general/vec4.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.582Z
 */

export type Vec4 =
  | ((string | VariableReference) & string)
  | []
  | [X]
  | [X, Y]
  | [X, Y, Width]
  | [X, Y, Width, Height];
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
export type X = ('default' | 'fill') | string | number;
/**
 * A variable
 */
export type Y = ('default' | 'fill') | string | number;
/**
 * A variable
 */
export type Width = ('default' | 'fill') | string | number;
/**
 * A variable
 */
export type Height = ('default' | 'fill') | string | number;
