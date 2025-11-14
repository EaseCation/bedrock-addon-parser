/**
 * behavior/items/format/components/damage_absorption.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.261Z
 */

/**
 * List of damage causes that can be absorbed by the item. By default, no damage cause is absorbed.
 *
 * @minItems 1
 */
export type AbsorbableCauses = [EntityDamageSource, ...EntityDamageSource[]];
/**
 * The types of damage an entity can receive.
 */
export type EntityDamageSource =
  | 'all'
  | 'anvil'
  | 'block_explosion'
  | 'campfire'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fire'
  | 'fire_tick'
  | 'fireworks'
  | 'fly_into_wall'
  | 'freezing'
  | 'lava'
  | 'lightning'
  | 'magic'
  | 'magma'
  | 'none'
  | 'override'
  | 'piston'
  | 'projectile'
  | 'ram_attack'
  | 'self_destruct'
  | 'sonic_boom'
  | 'soul_campfire'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';

/**
 * It allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component.
 */
export interface DamageAbsorption {
  absorbable_causes: AbsorbableCauses;
  [k: string]: unknown;
}
