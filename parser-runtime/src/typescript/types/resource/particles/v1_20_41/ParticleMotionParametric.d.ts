/**
 * resource/particles/components/particle_motion_parametric.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.441Z
 */

/**
 * UNDOCUMENTED: relative position.
 *
 * @minItems 3
 * @maxItems 3
 */
export type RelativePosition = [RelativePosition1, RelativePosition1, RelativePosition1];
/**
 * UNDOCUMENTED: relative position.
 */
export type RelativePosition1 = string | number;
/**
 * UNDOCUMENTED: rotation.
 */
export type Rotation = string | number;
/**
 * UNDOCUMENTED: relative position.
 *
 * @minItems 3
 * @maxItems 3
 */
export type Direction = [Direction1, Direction1, Direction1];
/**
 * UNDOCUMENTED: relative position.
 */
export type Direction1 = string | number;

/**
 * UNDOCUMENTED.
 */
export interface ParticleMotionParametricComponentFor1100 {
  relative_position?: RelativePosition;
  rotation?: Rotation;
  direction?: Direction;
}
