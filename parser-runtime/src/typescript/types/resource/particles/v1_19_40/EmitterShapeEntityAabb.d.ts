/**
 * resource/particles/components/emitter_shape_entity_aabb.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.334Z
 */

/**
 * UNDOCUMENTED: direction.
 */
export type Direction = [] | [X] | [X, Y] | [X, Y, Z];
/**
 * UNDOCUMENTED.
 */
export type X = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z = string | number;
/**
 * UNDOCUMENTED.
 */
export type Offset = [] | [X1] | [X1, Y1] | [X1, Y1, Z1];
/**
 * UNDOCUMENTED.
 */
export type X1 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y1 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z1 = string | number;

/**
 * UNDOCUMENTED.
 */
export interface EmitterShapeEntityAabbComponentFor1100 {
  direction?: Direction;
  offset?: Offset;
}
