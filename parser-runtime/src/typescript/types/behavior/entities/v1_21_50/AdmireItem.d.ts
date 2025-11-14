/**
 * behavior/entities/format/components/admire_item.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.340Z
 */

/**
 * Causes the mob to ignore attackable targets for a given duration.
 */
export interface AdmireItem {
  /**
   * Duration, in seconds, for which mob won't admire items if it was hurt.
   */
  cooldown_after_being_attacked?: number;
  /**
   * Duration, in seconds, that the mob is pacified.
   */
  duration?: number;
}
