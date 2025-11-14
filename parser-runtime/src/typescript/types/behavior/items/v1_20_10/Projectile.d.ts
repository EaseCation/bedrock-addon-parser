/**
 * behavior/items/format/components/projectile.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.525Z
 */

/**
 * Projectile item component. projectile items shoot out, like an arrow.
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
