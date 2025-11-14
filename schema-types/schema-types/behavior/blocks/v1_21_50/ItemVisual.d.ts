/**
 * behavior/blocks/format/components/item_visual.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.428Z
 */

/**
 * The "minecraft:geometry" component that will be used for the item.
 */
export type Geometry =
  | string
  | {
      /**
       * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      identifier: string;
      bone_visibility?: BoneVisibility;
      /**
       * The description identifer of the block culling rule used to cull this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      culling?: string;
    };
/**
 * Whether or not the bone should be visible. Can be defined as a boolean or a molang expression resulting in a boolean.
 */
export type BoneVisibility1 = boolean | string;
/**
 * The material instance for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".
 */
export type MaterialInstance =
  | string
  | {
      ambient_occlusion?: AmbientOcclusion;
      /**
       * Should this material be dimmed by the direction it's facing?
       */
      face_dimming?: boolean;
      render_method?: RenderMethod;
      /**
       * Texture name for the material.
       */
      texture?: string;
    };
/**
 * Should this material have ambient occlusion applied when lighting? If true, shadows will be created around and underneath the block.
 */
export type AmbientOcclusion = boolean | number;
/**
 * The render method to use. Must be one of these options: opaque - Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency. double_sided - Used for completely disabling backface culling. blend - Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures). alpha_test - Used for a block like the vanilla (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also disables backface culling.
 */
export type RenderMethod =
  | 'opaque'
  | 'double_sided'
  | 'blend'
  | 'alpha_test'
  | 'alpha_test_single_sided';

/**
 * The description identifier of the geometry and material used to render the item of this block.
 * Experimental toggles required: Upcoming Creator Features
 */
export interface ItemVisual {
  geometry: Geometry;
  material_instances: Geometry1;
}
/**
 * A list of bones that should be visible when rendering this block. If not specified, all bones will be visible.
 */
export interface BoneVisibility {
  [k: string]: BoneVisibility1;
}
/**
 * The "minecraft:material_instances" component that will be used for the item.
 */
export interface Geometry1 {
  [k: string]: MaterialInstance;
}
