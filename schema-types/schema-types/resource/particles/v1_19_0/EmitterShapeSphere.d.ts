/**
 * resource/particles/components/emitter_shape_sphere.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.260Z
 */

/**
 * UNDOCUMENTED: direction.
 */
export type Direction = ('inwards' | 'outwards') | [] | [X] | [X, Y] | [X, Y, Z];
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
 * UNDOCUMENTED: radius.
 */
export type Radius = string | number;

/**
 * UNDOCUMENTED.
 */
export interface EmitterShapeSphereComponentFor1100 {
  direction?: Direction;
  offset?: Offset;
  radius?: Radius;
  /**
   * UNDOCUMENTED: surface only.
   */
  surface_only?: boolean;
}
