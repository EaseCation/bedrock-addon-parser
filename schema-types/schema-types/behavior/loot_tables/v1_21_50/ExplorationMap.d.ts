/**
 * behavior/loot_tables/functions/exploration_map.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:51.136Z
 */

/**
 * Transforms a normal map into a treasure map that marks the location of hidden treasure.
 */
export type Function = 'exploration_map';
/**
 * The destination value defines what type of treasure map they receive.
 */
export type Destination =
  | 'endcity'
  | 'fortress'
  | 'mineshaft'
  | 'monument'
  | 'ruins'
  | 'stronghold'
  | 'temple'
  | 'village'
  | 'mansion'
  | 'shipwreck'
  | 'buriedtreasure'
  | 'pillageroutpost';

/**
 * Transforms a normal map into a treasure map that marks the location of hidden treasure.
 */
export interface ExplorationMap {
  function?: Function;
  destination?: Destination;
}
