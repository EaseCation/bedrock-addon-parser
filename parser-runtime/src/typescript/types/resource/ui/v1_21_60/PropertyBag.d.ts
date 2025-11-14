/**
 * resource/ui/elements/properties/property_bag.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.500Z
 */

/**
 * The property bag that will be used by the element.
 */
export type PropertyBag =
  | {
      [k: string]: PropertyBagProperty;
    }
  | String;
/**
 * An any value.
 */
export type PropertyBagProperty =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown;
    }
  | string;
/**
 * A string value.
 */
export type String = string | ((string | VariableReference) & string);
/**
 * A variable is a reference to a value that can be used in the UI.
 */
export type VariableReference = VariableReference1 & VariableReference2;
export type VariableReference1 = {
  [k: string]: unknown;
};
export type VariableReference2 = string;
