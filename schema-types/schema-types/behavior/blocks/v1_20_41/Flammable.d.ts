/**
 * behavior/blocks/format/components/flammable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.291Z
 */

/**
 * Describes the flammable properties for this block. If set to true, default values are used. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.
 */
export type Flammable =
  | boolean
  | {
      /**
       * Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times.
       */
      seconds_to_destroy?: number;
    };
