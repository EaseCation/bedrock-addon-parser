/**
 * behavior/recipes/recipes.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.073Z
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
 * Items used as input (without a shape) for the recipe.
 */
export type Ingredients = Item[];
/**
 * When input items match the pattern then these items are the result.
 */
export type Result1 = Item | Item[];
/**
 * Item used as base for the smithing recipe.
 */
export type Base = Item | Item[];
/**
 * Item used as addition for the smithing recipe.
 */
export type Addition = Item | Item[];
/**
 * When input items match the pattern then these items are the result.
 */
export type Result2 = Item | Item[];

/**
 * Minecraft recipe
 */
export interface Recipe {
  /**
   * A version that tells minecraft what type of data format can be expected when reading this file.
   */
  format_version: string;
  'minecraft:recipe_furnace'?: FurnaceRecipe;
  'minecraft:recipe_brewing_container'?: BrewingRecipe1120;
  'minecraft:recipe_brewing_mix'?: BrewingRecipe11201;
  'minecraft:recipe_shaped'?: ShapedRecipe;
  'minecraft:recipe_shapeless'?: ShapelessRecipe1120;
  'minecraft:recipe_smithing_transform'?: SmithingTransformRecipe1120;
}
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
 * Represents a Potion Brewing Container Recipe..
 */
export interface BrewingRecipe11201 {
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
 * Patten key character mapped to item names.
 */
export interface Key {
  [k: string]: Item;
}
/**
 * Represents a shapeless crafting recipe..
 */
export interface ShapelessRecipe1120 {
  description: Definition;
  tags?: Tags;
  unlock?: Unlock;
  ingredients?: Ingredients;
  /**
   * UNDOCUMENTED.
   */
  group?: string;
  /**
   * Item used as output for the furnace recipe.
   */
  priority?: number;
  result?: Result1;
}
/**
 * Represents a smithing table crafting recipe..
 */
export interface SmithingTransformRecipe1120 {
  description: Definition;
  tags?: Tags;
  unlock?: Unlock;
  base?: Base;
  addition?: Addition;
  result?: Result2;
}
