/**
 * behavior/entities/format/components/instant_despawn.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.574Z
 */

/**
 * Despawns the Actor immediately.
 */
export interface InstantDespawn {
  /**
   * If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.
   */
  remove_child_entities?: boolean;
}
