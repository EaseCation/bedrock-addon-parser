/**
 * behavior/worldgen/processors/format/processors.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.312Z
 */

export type Processors = Processors1 & Processors2;
export type Processors1 = {
  [k: string]: unknown;
};
export type ProcessorType =
  | 'minecraft:rule'
  | 'minecraft:capped'
  | 'minecraft:block_ignore'
  | 'minecraft:protected_blocks';

export interface Processors2 {
  processor_type?: ProcessorType;
  [k: string]: unknown;
}
