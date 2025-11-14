/**
 * resource/render_controllers/render_controllers.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.180Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * A geometry array definition.
 */
export type Geometries1 = string[];
/**
 * A material array definition.
 */
export type Materials1 = string[];
/**
 * Textures.
 */
export type Texture = string[];
/**
 * The value of red, between 0 and 1.
 */
export type R = number | string;
/**
 * The value of green, between 0 and 1.
 */
export type G = number | string;
/**
 * The value of blue, between 0 and 1.
 */
export type B = number | string;
/**
 * The value of alpha, between 0 and 1.
 */
export type A = number | string;
/**
 * The model data to use.
 */
export type MolangString180 = string;
/**
 * The value of red, between 0 and 1.
 */
export type R1 = number | string;
/**
 * The value of green, between 0 and 1.
 */
export type G1 = number | string;
/**
 * The value of blue, between 0 and 1.
 */
export type B1 = number | string;
/**
 * The value of alpha, between 0 and 1.
 */
export type A1 = number | string;
/**
 * The amount of light that blends into what is being rendered, lower values gives darker rendering, (1 = 100%).
 */
export type LightColorMultiplier = string | number;
/**
 * The specification where to apply materials to.
 *
 * @minItems 1
 */
export type Materials2 = [Materials3, ...Materials3[]];
/**
 * The value of red, must result in a float between 0 and 1.
 */
export type R2 = number | string;
/**
 * The value of green, must result in a float between 0 and 1.
 */
export type G2 = number | string;
/**
 * The value of blue, must result in a float between 0 and 1.
 */
export type B2 = number | string;
/**
 * The value of alpha, must result in a float between 0 and 1.
 */
export type A2 = number | string;
/**
 * The value of red, between 0 and 1.
 */
export type R3 = number | string;
/**
 * The value of green, between 0 and 1.
 */
export type G3 = number | string;
/**
 * The value of blue, between 0 and 1.
 */
export type B3 = number | string;
/**
 * The value of alpha, between 0 and 1.
 */
export type A3 = number | string;
/**
 * Determines what part of the object to show or hide.
 *
 * @minItems 1
 */
export type PartVisibility = [PartVisibility1, ...PartVisibility1[]];
/**
 * The texture to apply, multiple texture can be used as to create an overlay effect, a specific material is required though.
 *
 * @minItems 1
 */
export type Textures1 = [Textures2, ...Textures2[]];
/**
 * The texture definition to apply.
 */
export type Textures2 = string;
/**
 * The offset to apply the UV, this will cause the texture on the object to shift by said amount, can be molang. The value for how much to offset is usually specified between 0 and 1
 *
 * @minItems 2
 * @maxItems 2
 */
export type Offset = [Offset1, Offset1];
/**
 * The offset to apply on the texture, can be molang.
 */
export type Offset1 = string | number;
/**
 * The scale to apply to the texture, this will cause texture to seem to grow and shrink if done per frame.
 *
 * @minItems 2
 * @maxItems 2
 */
export type Scale = [Scale1, Scale1];
/**
 * The scale to apply on the texture, can be molang.
 */
export type Scale1 = string | number;

/**
 * A collection of render controllers to apply.
 */
export interface RenderControllers {
  format_version?: FormatVersion;
  render_controllers?: RenderControllers1;
}
/**
 * The collection of render controllers, each property is the identifier of a render controller.
 */
export interface RenderControllers1 {
  [k: string]: RenderController;
}
/**
 * A single render_controller.
 */
export interface RenderController {
  arrays?: Arrays;
  color?: Color;
  /**
   * Whenever or not to apply enviroment lighting to this object.
   */
  filter_lighting?: boolean;
  geometry: MolangString180;
  /**
   * Whenever or not to apply enviroment lighting to this object.
   */
  ignore_lighting?: boolean;
  is_hurt_color?: IsHurtColor;
  light_color_multiplier?: LightColorMultiplier;
  materials: Materials2;
  on_fire_color?: OnFireColor;
  overlay_color?: OverlayColor;
  part_visibility?: PartVisibility;
  textures?: Textures1;
  uv_anim?: UvAnim;
}
/**
 * A collection of definition of arrays.
 */
export interface Arrays {
  geometries?: Geometries;
  materials?: Materials;
  textures?: Textures;
}
/**
 * A collection of Geometry array.
 */
export interface Geometries {
  [k: string]: Geometries1;
}
/**
 * A collection of materials array.
 */
export interface Materials {
  [k: string]: Materials1;
}
/**
 * A collection of texture array.
 */
export interface Textures {
  [k: string]: Texture;
}
/**
 * The color to apply.
 */
export interface Color {
  r?: R;
  g?: G;
  b?: B;
  a?: A;
}
/**
 * The color to overlay on the entity when hurt.
 */
export interface IsHurtColor {
  r?: R1;
  g?: G1;
  b?: B1;
  a?: A1;
}
/**
 * The definitions of what material to apply to what set of bones, can be done through specific names, or patterns using * as a wildcard.
 */
export interface Materials3 {
  /**
   * The material to apply, or patterns using * as a wildcard.
   */
  [k: string]: string;
}
/**
 * The color that will be overlayed when the object is on fire.
 */
export interface OnFireColor {
  r?: R2;
  g?: G2;
  b?: B2;
  a?: A2;
}
/**
 * The color to put over the object.
 */
export interface OverlayColor {
  r?: R3;
  g?: G3;
  b?: B3;
  a?: A3;
}
/**
 * The object that describe different bone visibility.
 */
export interface PartVisibility1 {
  [k: string]: string | boolean | number;
}
/**
 * The UV animation to apply to the render texture.
 */
export interface UvAnim {
  offset: Offset;
  scale: Scale;
}
