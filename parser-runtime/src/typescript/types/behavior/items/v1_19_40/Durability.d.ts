/**
 * behavior/items/format/components/durability.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:14.024Z
 */

/**
 * Durability item component: how much damage can this item take before breaking.
 */
export interface Durability {
  damage_chance: DamangeChance;
  /**
   * Maximum durability is the amount of damage that this item can take before breaking.
   */
  max_durability?: number;
}
/**
 * Damange chance.
 */
export interface DamangeChance {
  /**
   * The minimum.
   */
  min: number;
  /**
   * The minimum.
   */
  max: number;
}
