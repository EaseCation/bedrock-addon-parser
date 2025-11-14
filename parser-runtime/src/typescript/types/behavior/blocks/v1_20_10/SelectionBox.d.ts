/**
 * behavior/blocks/format/components/selection_box.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.791Z
 */

/**
 * Defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.
 */
export type SelectionBox =
  | boolean
  | {
      origin?: Origin;
      size?: Size;
    };
/**
 * Minimal position of the bounds of the selection box. "origin" is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
 */
export type Origin = [] | [number] | [number, number] | [number, number, number];
/**
 * Size of each side of the selection box. Size is specified as [x, y, z]. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
 */
export type Size = [] | [number] | [number, number] | [number, number, number];
