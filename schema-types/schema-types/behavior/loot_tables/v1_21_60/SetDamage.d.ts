/**
 * behavior/loot_tables/functions/set_damage.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.305Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'set_damage';
/**
 * UNDOCUMENTED.
 */
export type Damage =
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
 * The function set_damage.
 */
export interface SetDamage {
  /**
   * UNDOCUMENTED.
   */
  add?: boolean;
  function?: Function;
  damage?: Damage;
}
