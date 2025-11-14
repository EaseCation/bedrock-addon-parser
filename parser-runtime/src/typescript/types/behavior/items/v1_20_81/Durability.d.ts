/**
 * behavior/items/format/components/durability.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.798Z
 */

/**
 * Durability item component: how much damage can this item take before breaking.
 */
export interface Durability {
  damage_chance?: DamageChance;
  /**
   * Maximum durability is the amount of damage that this item can take before breaking.
   */
  max_durability: number;
}
/**
 * Damage chance.
 */
export interface DamageChance {
  /**
   * The minimum.
   */
  min: number;
  /**
   * The maximum.
   */
  max: number;
}
