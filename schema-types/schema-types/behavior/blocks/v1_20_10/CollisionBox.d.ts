/**
 * behavior/blocks/format/components/collision_box.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.810Z
 */

/**
 * This component can be specified as a Boolean. If this component is omitted, the default value for this component is true, which will give your block the default values for its parameters (a collision box the size/shape of a regular block).
 */
export type CollisionBox =
  | boolean
  | {
      origin?: Origin;
      size?: Size;
    };
/**
 * Minimal position of the bounds of the collision box. origin is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
 */
export type Origin = [] | [number] | [number, number] | [number, number, number];
/**
 * Size of each side of the collision box. Size is specified as [x, y, z]. origin + size must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
 */
export type Size = [] | [number] | [number, number] | [number, number, number];
