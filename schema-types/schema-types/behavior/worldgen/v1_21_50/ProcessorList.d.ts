/**
 * behavior/worldgen/processors/processor_list.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.497Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * A list of processors.
 *
 * @minItems 1
 */
export type Processors = [Processors1, ...Processors1[]];
export type Processors1 = {
  [k: string]: unknown;
} & {
  [k: string]: unknown;
} & {
  [k: string]: unknown;
} & {
  [k: string]: unknown;
};

/**
 * Rules used by Jigsaw Structures to determine which blocks to modify or replace when placing a Structure Template in the world.
 */
export interface ProcessorList {
  format_version: FormatVersion;
  'minecraft:processor_list': ProcessorList1;
}
export interface ProcessorList1 {
  description: Description;
  processors: Processors;
}
/**
 * The description of this jigsaw.
 */
export interface Description {
  /**
   * Identifier of the Processor List. This is referenced by Template Pools when pairing processors with Structure Templates.
   */
  identifier?: string;
}
