/**
 * behavior/blocks/format/components/destructible_by_mining.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.806Z
 */

/**
 * Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.
 */
export type DestructibleByMining =
  | boolean
  | {
      /**
       * Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times.
       */
      seconds_to_destroy?: number;
    };
