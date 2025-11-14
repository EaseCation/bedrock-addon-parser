/**
 * behavior/entities/format/behaviors/investigate_suspicious_location.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.068Z
 */

/**
 * Allows the mob to inspect bookshelves.
 */
export interface InspectBookshelf {
  /**
   * Distance in blocks within the entity considers it has reached its target position.
   */
  goal_radius?: number;
  /**
   * The higher the priority, the sooner this behavior will be executed as a goal.
   */
  priority?: number;
  /**
   * Movement speed multiplier.
   */
  speed_multiplier?: number;
}
