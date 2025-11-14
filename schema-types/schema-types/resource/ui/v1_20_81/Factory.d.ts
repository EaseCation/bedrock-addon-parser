/**
 * resource/ui/elements/properties/factory.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.414Z
 */

/**
 * The factory that will be used to create the element.
 */
export type Factory =
  | {
      control_ids?: ControlIDs;
      control_name?: ControlName;
      factory_variables?: FactoryVariables;
      /**
       * The name of the factory.
       */
      name?: string;
      [k: string]: VariableDefinition;
    }
  | (string | VariableReference3);
/**
 * The IDs of the controls that will be created by the factory.
 */
export type ControlIDs =
  | string
  | {
      [k: string]: string;
    };
/**
 * The name of the control that will be created by the factory.
 */
export type ControlName = string | ((string | VariableReference) & string);
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
/**
 * The variables that will be used by the factory.
 */
export type FactoryVariables = string[] | string;
export type VariableReference3 = VariableReference1 & VariableReference2;

/**
 * A variable is a reference to a value that can be used in the UI.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\$.*".
 */
export interface VariableDefinition {
  [k: string]: unknown;
}
