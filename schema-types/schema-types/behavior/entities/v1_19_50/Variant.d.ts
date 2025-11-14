/**
 * behavior/entities/format/components/variant.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:23.670Z
 */

/**
 * Used to differentiate the component group of a variant of an entity from others (e.g. ocelot, villager) Parameters
 */
export interface Variant {
  /**
   * The ID of the variant. By convention, 0 is the ID of the base entity
   */
  value: number;
}
