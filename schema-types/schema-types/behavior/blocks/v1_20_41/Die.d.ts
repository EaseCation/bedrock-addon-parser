/**
 * behavior/blocks/format/events/die.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.274Z
 */

/**
 * The target context to execute against.
 */
export type Target = string;

/**
 * Kill target. If target is self and this is run from a block then destroy the block.
 */
export interface Die {
  target?: Target;
}
