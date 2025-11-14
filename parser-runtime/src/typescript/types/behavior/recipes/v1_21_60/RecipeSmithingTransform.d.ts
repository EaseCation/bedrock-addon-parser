/**
 * behavior/recipes/types/recipe_smithing_transform.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.079Z
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
    }
  | {
      /**
       * The item to unlock
       */
      tag: string;
      [k: string]: unknown;
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
  unlock?: Unlock;
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
