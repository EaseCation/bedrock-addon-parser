/**
 * behavior/worldgen/template_pools/format/minecraft.template_pool.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.518Z
 */

/**
 * An array of pool elements.
 *
 * @minItems 1
 */
export type Elements = [unknown, ...unknown[]];

export interface TemplatePool {
  description: Description;
  elements: Elements;
  /**
   * Fallback template pool to use if no element in the pool can be placed successfully.
   */
  fallback?: string;
}
/**
 * The description of this template pool.
 */
export interface Description {
  /**
   * Identifier of the template pool. This is used by both the start_pool property of the Jigsaw Structure JSON and the Jigsaw Block's Target Pool field.
   */
  identifier: string;
}
