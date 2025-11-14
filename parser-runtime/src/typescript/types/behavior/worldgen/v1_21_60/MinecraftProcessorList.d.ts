/**
 * behavior/worldgen/processors/format/minecraft.processor_list.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.315Z
 */

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

export interface ProcessorList {
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
