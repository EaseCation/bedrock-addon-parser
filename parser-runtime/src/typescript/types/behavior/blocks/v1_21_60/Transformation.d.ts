/**
 * behavior/blocks/format/components/transformation.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.251Z
 */

/**
 * Amount in degrees the block should be rotated on each axis. "rotation" is specified as [x, y, z] using floating point values and must be axis aligned, otherwise the value will be rounded to the nearest axis-aligned value.
 */
export type Rotation = [] | [number] | [number, number] | [number, number, number];
/**
 * Amount the block should be scaled along each axis. "scale" is specified as [x, y, z] using floating point values.
 */
export type Scale = [] | [number] | [number, number] | [number, number, number];
/**
 * Amount the block should be translated along each axis. "translation" is specified as [x, y, z] using floating point values.
 */
export type Translation = [] | [number] | [number, number] | [number, number, number];
/**
 * Offset to the pivot point around which to apply the scale. "scale_pivot" is specified as [x, y, z] using floating point values.
 */
export type ScalePivot = [] | [number] | [number, number] | [number, number, number];
/**
 * Offset to the pivot point around which to apply the rotation. "rotation_pivot" is specified as [x, y, z] using floating point values.
 */
export type RotationPivot = [] | [number] | [number, number] | [number, number, number];

/**
 * Supports rotation, scaling, and translation
 */
export interface Transformation {
  rotation?: Rotation;
  scale?: Scale;
  translation?: Translation;
  scale_pivot?: ScalePivot;
  rotation_pivot?: RotationPivot;
}
