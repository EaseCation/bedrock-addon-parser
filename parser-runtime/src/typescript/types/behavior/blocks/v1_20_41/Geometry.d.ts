/**
 * behavior/blocks/format/components/geometry.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:38.289Z
 */

/**
 * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
 */
export type Geometry =
  | string
  | {
      /**
       * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      identifier: string;
      bone_visibility?: BoneVisibility;
    };

/**
 * A list of bones that should be visible when rendering this block. If not specified, all bones will be visible.
 */
export interface BoneVisibility {
  /**
   * Whether or not the bone should be visible.
   */
  [k: string]: boolean;
}
