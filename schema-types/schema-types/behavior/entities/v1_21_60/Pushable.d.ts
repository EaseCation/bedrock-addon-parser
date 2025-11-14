/**
 * behavior/entities/format/components/pushable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.238Z
 */

/**
 * Defines what can push an entity between other entities and pistons.
 */
export interface Pushable {
  /**
   * Whether the entity can be pushed by other entities.
   */
  is_pushable?: boolean;
  /**
   * Whether the entity can be pushed by pistons safely.
   */
  is_pushable_by_piston?: boolean;
}
