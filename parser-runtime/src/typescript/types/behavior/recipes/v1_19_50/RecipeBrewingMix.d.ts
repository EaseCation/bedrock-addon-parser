/**
 * behavior/recipes/1.12.0/types/recipe_brewing_mix.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.069Z
 */

/**
 * Recipe tags 1.12.0
 */
export type Tags = string[];

/**
 * Represents a Potion Brewing Container Recipe..
 */
export interface BrewingRecipe1120 {
  description: Definition;
  tags?: Tags;
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
