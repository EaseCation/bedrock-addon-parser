/**
 * resource/ui/elements/properties/variables.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.230Z
 */

/**
 * The variables that are contained within this element.
 */
export type Variables = (string | VariableReference) | Variables1[] | Variables2;
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;

export interface Variables1 {
  [k: string]: VariableDefinition;
}
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export interface VariableDefinition {
  [k: string]: unknown;
}
export interface Variables2 {
  [k: string]: VariableDefinition;
}
