/**
 * behavior/entities/filters/filters/actor_health.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:00.976Z
 */

/**
 * (Optional) The comparison to apply with `value`.
 */
export type Operator = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';
/**
 * (Optional) The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';

/**
 * Tests the health of the subject.
 */
export interface ActorHealth {
  /**
   * Tests the health of the subject.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  /**
   * (Required) A integer value.
   */
  value: number;
  [k: string]: unknown;
}
