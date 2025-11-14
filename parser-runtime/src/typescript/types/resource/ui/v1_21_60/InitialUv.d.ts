/**
 * resource/ui/elements/properties/initial_uv.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.539Z
 */

/**
 * The initial UV of the animation.
 */
export type InitialUV = ((string | VariableReference) & string) | [] | [Width] | [Width, Height];
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
export type Width = Width1 & Width2;
export type Width1 = ('default' | 'fill') | string | number;
export type Width2 = string;
/**
 * A variable
 */
export type Height = Height1 & Height2;
export type Height1 = ('default' | 'fill') | string | number;
export type Height2 = string;
