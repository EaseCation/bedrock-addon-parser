/**
 * resource/ui/elements/properties/easing.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.605Z
 */

/**
 * The easing of the animation.
 */
export type Easing =
  | (
      | 'linear'
      | 'spring'
      | 'in_quad'
      | 'out_quad'
      | 'in_out_quad'
      | 'in_cubic'
      | 'out_cubic'
      | 'in_out_cubic'
      | 'in_quart'
      | 'out_quart'
      | 'in_out_quart'
      | 'in_quint'
      | 'out_quint'
      | 'in_out_quint'
      | 'in_sine'
      | 'out_sine'
      | 'in_out_sine'
      | 'in_expo'
      | 'out_expo'
      | 'in_out_expo'
      | 'in_circ'
      | 'out_circ'
      | 'in_out_circ'
      | 'in_bounce'
      | 'out_bounce'
      | 'in_out_bounce'
      | 'in_back'
      | 'out_back'
      | 'in_out_back'
      | 'in_elastic'
      | 'out_elastic'
      | 'in_out_elastic'
    )
  | (string | VariableReference);
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
