/**
 * behavior/blocks/format/components/entity_collision.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.220Z
 */

/**
 * Can only be set to false or an object, it disables the collision of the block with entities.
 */
export type EntityCollision =
  | false
  | {
      origin?: Origin;
      size?: Size;
    };
/**
 * Minimal position Bounds of the collision box.
 */
export type Origin = [] | [number] | [number, number] | [number, number, number];
/**
 * Size of each side of the box of the component.
 */
export type Size = [] | [number] | [number, number] | [number, number, number];
