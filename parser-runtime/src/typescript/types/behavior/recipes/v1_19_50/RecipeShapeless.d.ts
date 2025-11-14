/**
 * behavior/recipes/1.12.0/types/recipe_shapeless.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.065Z
 */

/**
 * Recipe tags 1.12.0
 */
export type Tags = string[];
/**
 * Items used as input (without a shape) for the recipe.
 */
export type Ingredients = Item | Item[];
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
 * When input items match the pattern then these items are the result.
 */
export type Result = Item | Item[];

/**
 * Represents a shapeless crafting recipe..
 */
export interface ShapelessRecipe1120 {
  description: Definition;
  tags?: Tags;
  ingredients?: Ingredients;
  /**
   * UNDOCUMENTED.
   */
  group?: string;
  /**
   * Item used as output for the furnace recipe.
   */
  priority?: number;
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
