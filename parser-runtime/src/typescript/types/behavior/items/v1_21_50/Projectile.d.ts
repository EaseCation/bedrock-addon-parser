/**
 * behavior/items/format/components/projectile.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.834Z
 */

/**
 * Compels the item shoot, like an arrow.  Pair with minecraft:shooter for dispensers or as ammunition.  Pair with minecraft:throwable to set the entity spawned.
 */
export interface Projectile {
  /**
   * How long you must charge a projectile for it to critically hit.
   */
  minimum_critical_power?: number;
  /**
   * The entity to be fired as a projectile.
   */
  projectile_entity: string;
}
