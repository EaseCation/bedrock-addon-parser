/**
 * resource/ui/elements/properties/toggle_default_state.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.258Z
 */

/**
 * The default state of the toggle.
 */
export type ToggleDefaultState = ('checked' | 'unchecked') | (string | VariableReference);
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
