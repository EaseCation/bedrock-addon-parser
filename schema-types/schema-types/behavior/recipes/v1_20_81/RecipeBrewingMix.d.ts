/**
 * behavior/recipes/types/recipe_brewing_mix.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.376Z
 */

/**
 * Recipe tags 1.12.0
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
 * Represents a Potion Brewing Container Recipe..
 */
export interface BrewingRecipe1120 {
  description: Definition;
  tags?: Tags;
  unlock?: Unlock;
  /**
   * Input potion used on the brewing stand.
   */
  input?: string;
  /**
   * Output potion from mixing the input potion with the reagent on the brewing stand.
   */
  output?: string;
  /**
   * Item used to mix with the input potion.
   */
  reagent?: string;
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
