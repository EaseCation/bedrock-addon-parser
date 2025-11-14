/**
 * behavior/recipes/types/recipe_shaped.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.751Z
 */

/**
 * Recipe Tags
 */
export type Tags = string[];
/**
 * Unlock achievement
 */
export type Unlock =
  | {
      /**
       * The context of the achievement to unlock
       */
      context: string;
      [k: string]: unknown;
    }
  | (
      | {
          /**
           * The item to unlock
           */
          item: string;
          /**
           * The data of the item to unlock
           */
          data?: number;
          [k: string]: unknown;
        }
      | {
          /**
           * The item to unlock
           */
          tag: string;
          [k: string]: unknown;
        }
    )[];
/**
 * Recipe item 1.12.0
 */
export type Item =
  | string
  | {
      item: string;
      data?: number;
      count?: number;
    }
  | {
      /**
       * The item to unlock
       */
      tag: string;
      [k: string]: unknown;
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
export interface ShapedRecipe {
  description: Definition;
  tags: Tags;
  unlock?: Unlock;
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
  /**
   * Used to automatically assume a symmetrical recipe should return the same resultUsed to automatically assume a symmetrical recipe should return the same result
   */
  assume_symmetry?: boolean;
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
