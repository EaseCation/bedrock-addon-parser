/**
 * behavior/recipes/1.12.0/types/furnace.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:13.863Z
 */

/**
 * Recipe tags 1.12.0
 */
export type Tags = string[];

/**
 * Represents a furnace recipe for a furnace.'Input` items will burn and transform into items specified in `output`..
 */
export interface FurnaceRecipe1120 {
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
