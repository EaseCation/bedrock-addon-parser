/**
 * behavior/recipes/types/furnace.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.095Z
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
 * Represents a furnace recipe for a furnace.'Input` items will burn and transform into items specified in `output`..
 */
export interface FurnaceRecipe {
  description: Definition;
  tags?: Tags;
  /**
   * Items used as input for the furnace recipe.
   */
  input?: string;
  /**
   * Items used as output for the furnace recipe.
   */
  output?: string;
  unlock?: Unlock;
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
