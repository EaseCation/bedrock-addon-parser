/**
 * behavior/blocks/format/components/part_visibility.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.283Z
 */

/**
 * [Experimental] Maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/false.
 */
export type PartVisibility1 = string | boolean;

/**
 * [Experimental] Maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/false.
 */
export interface PartVisibility {
  [k: string]: PartVisibility1;
}
