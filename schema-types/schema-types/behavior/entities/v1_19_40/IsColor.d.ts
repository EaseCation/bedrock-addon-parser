/**
 * behavior/entities/filters/filters/is_color.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:16.947Z
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
 * The Palette Color to test.
 */
export type Value =
  | 'black'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'light_blue'
  | 'light_green'
  | 'magenta'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'silver'
  | 'white'
  | 'yellow';

/**
 * Returns true if the subject entity is the named color.
 */
export interface IsColor {
  /**
   * Returns true if the subject entity is the named color.
   */
  test?: string;
  operator?: Operator;
  subject?: Subject;
  value: Value;
  [k: string]: unknown;
}
