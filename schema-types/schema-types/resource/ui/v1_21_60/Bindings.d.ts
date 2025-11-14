/**
 * resource/ui/elements/properties/bindings.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.643Z
 */

/**
 * The bindings that are contained within this element.
 */
export type Bindings = (string | VariableReference) | Bindings1[];
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
/**
 * The name of the collection that the binding is in.
 */
export type BindingCollectionName = string | ((string | VariableReference3) & string);
export type VariableReference3 = VariableReference1 & VariableReference2;
/**
 * The prefix of the collection that the binding is in.
 */
export type BindingCollectionPrefix = string | ((string | VariableReference3) & string);
/**
 * The condition that must be met for the binding to be applied.
 */
export type BindingCondition =
  | ('once' | 'always' | 'always_when_visible' | 'visible')
  | (string | VariableReference);
/**
 * The name of the binding. This is used to reference the binding in the element's properties.
 */
export type BindingName = string | ((string | VariableReference3) & string);
/**
 * The name of the binding. This is used to reference the binding in the element's properties.
 */
export type BindingNameOverride = string | ((string | VariableReference3) & string);
/**
 * The type of the binding.
 */
export type BindingType =
  | ('collection' | 'global' | 'collection_details' | 'none' | 'view')
  | Variable;
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type Variable = Variable1 & Variable2;
export type Variable1 = string;
export type Variable2 = string;
/**
 * If true, the binding will be ignored.
 */
export type Ignored = boolean | ((string | VariableReference4) & string);
export type VariableReference4 = VariableReference1 & VariableReference2;
/**
 * If true, the binding will resolve sibling scope.
 */
export type ResolveSiblingScope = boolean | ((string | VariableReference4) & string);
/**
 * The name of the control that the binding is in.
 */
export type SourceControlName = string | ((string | VariableReference3) & string);
/**
 * The name of the property that the binding is in.
 */
export type SourcePropertyName = string | ((string | VariableReference3) & string);
/**
 * The name of the property that the binding is in.
 */
export type TargetPropertyName = string | ((string | VariableReference3) & string);

export interface Bindings1 {
  binding_collection_name?: BindingCollectionName;
  binding_collection_prefix?: BindingCollectionPrefix;
  binding_condition?: BindingCondition;
  binding_name?: BindingName;
  binding_name_override?: BindingNameOverride;
  binding_type?: BindingType;
  ignored?: Ignored;
  resolve_sibling_scope?: ResolveSiblingScope;
  source_control_name?: SourceControlName;
  source_property_name?: SourcePropertyName;
  target_property_name?: TargetPropertyName;
}
