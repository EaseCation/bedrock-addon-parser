/**
 * behavior/blocks/format/components/transformation.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.154Z
 */

/**
 * Rotation in xxx?
 */
export type Rotation = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED
 */
export type Scale = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED
 */
export type Translation = [] | [number] | [number, number] | [number, number, number];

/**
 * Supports rotation, scaling, and translation
 */
export interface Transformation {
  rotation?: Rotation;
  scale?: Scale;
  translation?: Translation;
}
