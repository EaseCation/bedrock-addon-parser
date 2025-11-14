/**
 * behavior/loot_tables/functions/set_count.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.838Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'set_count';
/**
 * UNDOCUMENTED.
 */
export type Count =
  | number
  | {
      min?: number;
      max?: number;
      [k: string]: unknown;
    };

/**
 * The function set_count.
 */
export interface SetCount {
  /**
   * UNDOCUMENTED.
   */
  add?: boolean;
  function?: Function;
  count?: Count;
}
