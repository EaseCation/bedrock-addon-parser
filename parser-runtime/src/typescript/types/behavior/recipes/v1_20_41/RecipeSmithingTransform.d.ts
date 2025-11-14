/**
 * behavior/recipes/1.12.0/types/recipe_smithing_transform.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:34.824Z
 */

/**
 * Recipe tags 1.12.0
 */
export type Tags = string[];
/**
 * Item used as base for the smithing recipe.
 */
export type Base = Item | Item[];
/**
 * Recipe item 1.12.0
 */
export type Item =
  | string
  | {
      item: string;
      data?: number;
      count?: number;
    };
/**
 * Item used as addition for the smithing recipe.
 */
export type Addition = Item | Item[];
/**
 * When input items match the pattern then these items are the result.
 */
export type Result = Item | Item[];

/**
 * Represents a smithing table crafting recipe..
 */
export interface SmithingTransformRecipe1120 {
  description: Definition;
  tags?: Tags;
  base?: Base;
  addition?: Addition;
  result?: Result;
}
/**
 * Recipe definition 1.12.0
 */
export interface Definition {
  /**
   * UNDOCUMENTED.
   */
  identifier?: string;
}
