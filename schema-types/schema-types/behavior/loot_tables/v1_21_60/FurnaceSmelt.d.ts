/**
 * behavior/loot_tables/functions/furnace_smelt.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.316Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'furnace_smelt';
/**
 * A minecraft loot table condition.
 */
export type Condition = {
  [k: string]: unknown;
};
/**
 * UNDOCUMENTED.
 */
export type Conditions = Condition[];

/**
 * If the item to return has a smelted crafting recipe and the loot table is triggered by an entity killed with fire. the result will be the smelted version of the item
 */
export interface FurnaceSmelt {
  function?: Function;
  conditions?: Conditions;
}
