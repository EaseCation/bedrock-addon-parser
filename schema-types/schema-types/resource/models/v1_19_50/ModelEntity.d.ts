/**
 * resource/models/entity/1.8.0/model_entity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.437Z
 */

/**
 * UNDOCUMENTED.
 */
export type Positions = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Normals = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Polys = [number, number, number] | [number, number, number, unknown][];
/**
 * UNDOCUMENTED.
 */
export type Rotation = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type TextureMeshes = {
  texture?: string;
  local_pivot?: [] | [number] | [number, number] | [number, number, number];
  position?: [] | [number] | [number, number] | [number, number, number];
  rotation?: [] | [number] | [number, number] | [number, number, number];
  scale?: [] | [number] | [number, number] | [number, number, number];
}[];
/**
 * The bones definitions.
 */
export type Bones = Bone[];
/**
 * UNDOCUMENTED: visible bounds offset.
 */
export type VisibleBoundsOffset = [] | [number] | [number, number] | [number, number, number];

/**
 * UNDOCUMENTED.
 */
export interface ModelSchemaFor180 {
  /**
   * UNDOCUMENTED.
   */
  debug?: boolean;
  /**
   * A version that tells minecraft what type of data format can be expected when reading this file.
   */
  format_version: string;
  [k: string]: Geometry;
}
/**
 * Geometry specification.
 */
export interface Geometry {
  bones?: Bones;
  /**
   * UNDOCUMENTED.
   */
  cape?: string;
  /**
   * UNDOCUMENTED.
   */
  debug?: boolean;
  /**
   * UNDOCUMENTED: texturewidth.
   */
  texturewidth?: number;
  /**
   * UNDOCUMENTED: textureheight.
   */
  textureheight?: number;
  /**
   * UNDOCUMENTED: visible bounds width.
   */
  visible_bounds_width?: number;
  /**
   * UNDOCUMENTED: visible bounds height.
   */
  visible_bounds_height?: number;
  visible_bounds_offset?: VisibleBoundsOffset;
}
/**
 * The bone definition.
 */
export interface Bone {
  bind_pose_rotation?: [] | [number] | [number, number] | [number, number, number];
  cubes?: {
    inflate?: number;
    mirror?: boolean;
    origin?: [] | [number] | [number, number] | [number, number, number];
    size?: [] | [number] | [number, number] | [number, number, number];
    uv?: [] | [number] | [number, number];
  }[];
  debug?: boolean;
  inflate?: number;
  locators?: {
    [k: string]: number[];
  };
  mirror?: boolean;
  name: string;
  neverRender?: boolean;
  parent?: string;
  pivot?: [] | [number] | [number, number] | [number, number, number];
  poly_mesh?: PolyMesh;
  /**
   * UNDOCUMENTED.
   */
  render_group_id?: number;
  /**
   * UNDOCUMENTED.
   */
  reset?: boolean;
  rotation?: Rotation;
  texture_meshes?: TextureMeshes;
}
/**
 * UNDOCUMENTED.
 */
export interface PolyMesh {
  /**
   * UNDOCUMENTED.
   */
  normalized_uvs?: boolean;
  positions?: Positions;
  normals?: Normals;
  polys: Polys;
}
