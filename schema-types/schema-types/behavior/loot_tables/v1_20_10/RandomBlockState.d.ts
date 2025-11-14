/**
 * behavior/loot_tables/functions/random_block_state.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.447Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'random_block_state';

/**
 * The function random_block_state.
 */
export interface RandomBlockState {
  function?: Function;
  /**
   * UNDOCUMENTED.
   */
  block_state?: string;
  values?: Values;
}
/**
 * UNDOCUMENTED.
 */
export interface Values {
  min?: number;
  max?: number;
}
