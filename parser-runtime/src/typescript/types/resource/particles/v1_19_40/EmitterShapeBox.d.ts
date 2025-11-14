/**
 * resource/particles/components/emitter_shape_box.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.343Z
 */

/**
 * UNDOCUMENTED: direction.
 */
export type Direction = ('inwards' | 'outwards') | [] | [X] | [X, Y] | [X, Y, Z];
/**
 * UNDOCUMENTED: radius.
 */
export type X = string | number;
/**
 * UNDOCUMENTED: radius.
 */
export type Y = string | number;
/**
 * UNDOCUMENTED: radius.
 */
export type Z = string | number;
/**
 * UNDOCUMENTED: radius.
 */
export type Radius = string | number;
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
 * UNDOCUMENTED: half dimensions.
 */
export type HalfDimensions = [] | [X2] | [X2, Y2] | [X2, Y2, Z2];
/**
 * UNDOCUMENTED.
 */
export type X2 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y2 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z2 = string | number;

/**
 * UNDOCUMENTED.
 */
export interface EmitterShapeBoxComponentFor1100 {
  direction?: Direction;
  radius?: Radius;
  offset?: Offset;
  half_dimensions?: HalfDimensions;
  /**
   * UNDOCUMENTED: surface only.
   */
  surface_only?: boolean;
}
