/**
 * behavior/items/format/events/teleport.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.020Z
 */

/**
 * UNDOCUMENTED.
 */
export type Target = 'holder';
/**
 * UNDOCUMENTED.
 */
export type MaximumRange = [] | [number] | [number, number] | [number, number, number];

/**
 * UNDOCUMENTED.
 */
export interface Teleport {
  target?: Target;
  max_range?: MaximumRange;
}
