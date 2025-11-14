/**
 * behavior/blocks/format/components/material_instances.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.259Z
 */

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
 * The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".
 */
export interface MaterialInstances {
  [k: string]: MaterialInstance;
}
