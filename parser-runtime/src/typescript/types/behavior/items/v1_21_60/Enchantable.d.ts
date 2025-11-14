/**
 * behavior/items/format/components/enchantable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.255Z
 */

/**
 * If true you can always eat this item (even when not hungry), defaults to false.
 */
export type Slot =
  | 'axe'
  | 'bow'
  | 'armor_feet'
  | 'armor_torso'
  | 'armor_head'
  | 'armor_legs'
  | 'hoe'
  | 'pickaxe'
  | 'shovel'
  | 'elytra'
  | 'fishing_rod'
  | 'flintsteel'
  | 'sword'
  | 'shears'
  | 'cosmetic_head';

/**
 * The enchantable component determines what enchantments can be applied to the item.
 */
export interface Enchantable {
  slot: Slot;
  /**
   * The value of the enchantment.
   */
  value?: number;
}
