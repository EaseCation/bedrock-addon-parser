/**
 * behavior/entities/filters/filters/distance_to_nearest_player.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.617Z
 */

/**
 * The comparison to apply with `value`.
 */
export type Operator = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';
/**
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';

/**
 * Compares the distance to the nearest Player with a float value.
 */
export interface DistanceToNearestPlayer {
  /**
   * Compares the distance to the nearest Player with a float value.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) A floating point value.
   */
  value: number;
  [k: string]: unknown;
}
