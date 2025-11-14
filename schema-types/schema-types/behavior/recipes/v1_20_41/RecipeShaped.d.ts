/**
 * behavior/recipes/1.12.0/types/recipe_shaped.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:34.828Z
 */

/**
 * Recipe tags 1.12.0
 */
export type Tags = string[];
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
 * Characters that represent a pattern to be defined by keys.
 *
 * @minItems 1
 * @maxItems 3
 */
export type Pattern = [string] | [string, string] | [string, string, string];
/**
 * When input items match the pattern then these items are the result.
 */
export type Result = Item | Item[];

/**
 * Represents a shaped crafting recipe for a crafting table. The key used in the pattern may be any single character except the `space` character, which is reserved for empty slots in a recipe..
 */
export interface ShapedRecipe1120 {
  description: Definition;
  tags?: Tags;
  key?: Key;
  /**
   * UNDOCUMENTED.
   */
  group?: string;
  pattern?: Pattern;
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
/**
 * Patten key character mapped to item names.
 */
export interface Key {
  [k: string]: Item;
}
