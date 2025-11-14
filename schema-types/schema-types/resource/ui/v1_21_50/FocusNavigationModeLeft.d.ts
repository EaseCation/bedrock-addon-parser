/**
 * resource/ui/elements/properties/focus_navigation_mode_left.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.758Z
 */

/**
 * The focus navigation mode that will be used when navigating left.
 */
export type FocusNavigationModeLeft = NavigationMode | (string | VariableReference);
/**
 * The navigation mode of the UI.
 */
export type NavigationMode = 'contained' | 'stop';
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
