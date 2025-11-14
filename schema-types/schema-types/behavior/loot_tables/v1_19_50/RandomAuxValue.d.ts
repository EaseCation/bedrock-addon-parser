/**
 * behavior/loot_tables/functions/random_aux_value.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:21.969Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'random_aux_value';

/**
 * The function random_aux_value.
 */
export interface RandomAuxValue {
  function?: Function;
  values?: Values;
}
/**
 * UNDOCUMENTED.
 */
export interface Values {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
