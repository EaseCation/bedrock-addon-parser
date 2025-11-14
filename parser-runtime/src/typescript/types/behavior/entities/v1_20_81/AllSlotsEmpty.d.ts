/**
 * behavior/entities/filters/filters/all_slots_empty.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.171Z
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
 * The equipment location to test.
 */
export type Value = 'any' | 'armor' | 'feet' | 'hand' | 'head' | 'inventory' | 'leg' | 'torse';

/**
 * Returns true when the designated equipment location for the subject entity is completely empty.
 */
export interface AllSlotsEmpty {
  /**
   * Returns true when the designated equipment location for the subject entity is completely empty.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
