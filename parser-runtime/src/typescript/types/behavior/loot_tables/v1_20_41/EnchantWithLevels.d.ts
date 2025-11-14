/**
 * behavior/loot_tables/functions/enchant_with_levels.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:34.949Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'enchant_with_levels';
/**
 * UNDOCUMENTED.
 */
export type Levels =
  | number
  | {
      min: number;
      max: number;
    };

/**
 * The function enchant_with_levels.
 */
export interface EnchantWithLevels {
  function?: Function;
  levels?: Levels;
  /**
   * UNDOCUMENTED.
   */
  treasure?: boolean;
}
