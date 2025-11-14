/**
 * behavior/worldgen/processors/format/processors/minecraft.block_ignore.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.553Z
 */

export type Blocks = string[];
export type ProcessorType = 'minecraft:block_ignore';

export interface BlockIgnore {
  blocks: Blocks;
  processor_type: ProcessorType;
  [k: string]: unknown;
}
