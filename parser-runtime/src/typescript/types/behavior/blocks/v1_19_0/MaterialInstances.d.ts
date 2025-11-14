/**
 * behavior/blocks/format/components/material_instances.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.053Z
 */

/**
 * UNDOCUMENTED.
 */
export type RenderMethod = 'blend' | 'opaque' | 'alpha_test';

/**
 * Maps face or material_instance names in a geometry file to an actual material instance. Material instance can either be a full material instance or a name to another already defined instance
 */
export interface MaterialInstances {
  '*'?: MaterialInstance;
  [k: string]: MaterialInstance;
}
/**
 * A single material instance.
 */
export interface MaterialInstance {
  /**
   * UNDOCUMENTED.
   */
  ambient_occlusion?: boolean;
  /**
   * UNDOCUMENTED.
   */
  face_dimming?: boolean;
  render_method?: RenderMethod;
  /**
   * UNDOCUMENTED.
   */
  texture?: string;
}
