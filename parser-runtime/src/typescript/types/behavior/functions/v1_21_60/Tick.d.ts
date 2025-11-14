/**
 * behavior/functions/tick.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.324Z
 */

/**
 * The collection of function path to execute.
 */
export type Values = string[];

/**
 * Mcfunction that are to be called per game tick (20 times per second).
 */
export interface Tick {
  values?: Values;
}
