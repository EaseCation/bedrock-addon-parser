/**
 * behavior/loot_tables/functions/set_data.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:21.958Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'set_data';
/**
 * UNDOCUMENTED.
 */
export type Data =
  | number
  | {
      /**
       * UNDOCUMENTED.
       */
      min?: number;
      /**
       * UNDOCUMENTED.
       */
      max?: number;
      [k: string]: unknown;
    };

/**
 * The function set_data.
 */
export interface SetData {
  function?: Function;
  data?: Data;
}
