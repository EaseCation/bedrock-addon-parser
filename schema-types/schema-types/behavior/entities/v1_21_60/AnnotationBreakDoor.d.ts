/**
 * behavior/entities/format/components/annotation.break_door.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.107Z
 */

/**
 * Allows the actor to break doors assuming that that flags set up for the component to use in navigation.
 */
export interface AnnotationBreakDoor {
  /**
   * The time in seconds required to break through doors.
   */
  break_time?: number;
  /**
   * The minimum difficulty that the world must be on for this entity to break doors.
   */
  min_difficulty?: string;
}
