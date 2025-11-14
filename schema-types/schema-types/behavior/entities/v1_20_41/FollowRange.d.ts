/**
 * behavior/entities/format/components/follow_range.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.075Z
 */

/**
 * Defines the range of blocks that a mob will pursue a target.
 */
export interface FollowRange {
  /**
   * Range of the amount of damage the melee follow_range deals. A negative value can heal the entity instead of hurting it.
   */
  value?: number;
  /**
   * Duration, in seconds, of the status ailment applied to the damaged entity.
   */
  max?: number;
}
