/**
 * resource/models/entity/1.16.0/model_entity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:32.039Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The collection of geometries.
 *
 * @minItems 1
 */
export type Geometry = [Model, ...Model[]];
/**
 * Offset of the visibility bounding box from the entity location point (in model space units).
 *
 * @minItems 3
 * @maxItems 3
 */
export type VisibleBoundsOffset = [number, number, number];
/**
 * useful for items. A molang expression specifying the bone name of the parent skeletal hierarchy that this bone should use as the root transform. Without this field it will look for a bone in the parent entity with the same name as this bone. If both are missing, it will assume a local skeletal hierarchy (via the `parent` field). If that is also missing, it will attach to the owning entity's root transform.
 */
export type MolangString180 = string;
/**
 * If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box. Note that in 1.12 this is flipped upside-down, but is fixed in 1.14.
 */
export type Pivot = [] | [number] | [number, number] | [number, number, number];
/**
 * @minItems 3
 * @maxItems 3
 */
export type Rotation = [number, number, number];
/**
 * The cube extends this amount relative to its origin (in model space units).
 */
export type Size = [] | [number] | [number, number] | [number, number, number];
/**
 * This is an alternate per-face uv mapping which specifies each face of the cube. Omitting a face will cause that face to not get drawn.
 */
export type Uv =
  | {
      north?: North;
      south?: South;
      east?: East;
      west?: West;
      up?: Up;
      down?: Down;
    }
  | []
  | [number]
  | [number, number];
/**
 * Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
 */
export type Uv1 = [] | [number] | [number, number];
/**
 * The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
 */
export type UvSize = [] | [number] | [number, number];
/**
 * This is the list of cubes associated with this bone.
 */
export type Cubes = {
  /**
   * Grow this box by this additive amount in all directions (in model space units), this field overrides the bone's inflate field for this cube only.
   */
  inflate?: number;
  /**
   * Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone's `mirror` setting for this cube.
   */
  mirror?: boolean;
  /**
   * @minItems 3
   * @maxItems 3
   */
  origin?: [number, number, number];
  pivot?: Pivot;
  /**
   * UNDOCUMENTED.
   */
  reset?: boolean;
  rotation?: Rotation;
  size?: Size;
  uv?: Uv;
}[];
/**
 * The bone pivots around this point (in model space units).
 */
export type Pivot1 = [] | [number] | [number, number] | [number, number, number];
/**
 * This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).
 */
export type Rotation1 = [] | [number] | [number, number] | [number, number, number];
/**
 * ***EXPERIMENTAL*** Adds a mesh to the bone's geometry by converting texels in a texture into boxes.
 */
export type TextureMeshes = {
  /**
   * The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry.
   *
   * @minItems 3
   * @maxItems 3
   */
  local_pivot?: [number, number, number];
  /**
   * The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry.
   *
   * @minItems 3
   * @maxItems 3
   */
  position?: [number, number, number];
  /**
   * The rotation (in degrees) of the texture geometry relative to the offset.
   *
   * @minItems 3
   * @maxItems 3
   */
  rotation?: [number, number, number];
  /**
   * The scale (in degrees) of the texture geometry relative to the offset.
   *
   * @minItems 3
   * @maxItems 3
   */
  scale?: [number, number, number];
  /**
   * The friendly-named texture to use.
   */
  texture: string;
}[];
/**
 * Bones define the `skeleton` of the mob: the parts that can be animated, and to which geometry and other bones are attached.
 */
export type Bones = {
  binding?: MolangString180;
  cubes?: Cubes;
  debug?: boolean;
  /**
   * Grow this box by this additive amount in all directions (in model space units).
   */
  inflate?: number;
  /**
   * This is a list of locators associated with this bone. A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation).
   */
  locators?: {
    [k: string]:
      | {
          /**
           * Position of the locator in model space.
           *
           * @minItems 3
           * @maxItems 3
           */
          offset: [number, number, number];
          /**
           * Rotation of the locator in model space.
           *
           * @minItems 3
           * @maxItems 3
           */
          rotation: [number, number, number];
          /**
           * Discard scale inherited from parent bone.
           */
          ignore_inherited_scale?: boolean;
          [k: string]: unknown;
        }
      | [number, number, number];
  };
  /**
   * Mirrors the UV's of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.
   */
  mirror?: boolean;
  /**
   * Animation files refer to this bone via this identifier.
   */
  name: string;
  /**
   * Bone that this bone is relative to. If the parent bone moves, this bone will move along with it.
   */
  parent?: string;
  pivot?: Pivot1;
  /**
   * ***EXPERIMENTAL*** A triangle or quad mesh object. Can be used in conjunction with cubes and texture geometry.
   */
  poly_mesh?: {
    /**
     * If true, UVs are assumed to be [0-1]. If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.
     */
    normalized_uvs?: boolean;
    /**
     * Vertex normals. Can be either indexed via the `polys` section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.
     */
    normals?: [number, number, number][];
    polys:
      | ('tri_list' | 'quad_list')
      | [[number, number, number], [number, number, number], [number, number, number]]
      | [
          [number, number, number],
          [number, number, number],
          [number, number, number],
          [number, number, number],
        ][];
    positions?: [number, number, number][];
    /**
     * Vertex UVs. Can be either indexed via the `polys` section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.
     */
    uvs?: [number, number][];
  };
  render_group_id?: number;
  rotation?: Rotation1;
  texture_meshes?: TextureMeshes;
}[];

/**
 * The minecraft resourcepack model schema for 1.16.0
 */
export interface Geometry1160 {
  /**
   * UNDOCUMENTED.
   */
  debug?: boolean;
  format_version: FormatVersion;
  'minecraft:geometry': Geometry;
}
/**
 * Model specification.
 */
export interface Model {
  description: Description;
  bones?: Bones;
  /**
   * UNDOCUMENTED.
   */
  cape?: string;
}
/**
 * The descriptions of the geometry.
 */
export interface Description {
  /**
   * Entity definition and Client Block definition files refer to this geometry via this identifier.
   */
  identifier: string;
  /**
   * Assumed width in texels of the texture that will be bound to this geometry.
   */
  texture_width?: number;
  /**
   * Assumed height in texels of the texture that will be bound to this geometry.
   */
  texture_height?: number;
  visible_bounds_offset?: VisibleBoundsOffset;
  /**
   * Width of the visibility bounding box (in model space units).
   */
  visible_bounds_width?: number;
  /**
   * Height of the visible bounding box (in model space units).
   */
  visible_bounds_height?: number;
}
/**
 * Specifies the UV's for the face that stretches along the x and y axes, and faces the -z axis.
 */
export interface North {
  uv?: Uv1;
  uv_size?: UvSize;
  /**
   * Specifies the UV's for the face that stretches.
   */
  material_instance?: string;
}
/**
 * Specifies the UV's for the face that stretches along the x and y axes, and faces the z axis.
 */
export interface South {
  uv?: Uv1;
  uv_size?: UvSize;
  /**
   * Specifies the UV's for the face that stretches.
   */
  material_instance?: string;
}
/**
 * Specifies the UV's for the face that stretches along the z and y axes, and faces the x axis.
 */
export interface East {
  uv?: Uv1;
  uv_size?: UvSize;
  /**
   * Specifies the UV's for the face that stretches.
   */
  material_instance?: string;
}
/**
 * Specifies the UV's for the face that stretches along the z and y axes, and faces the -x axis.
 */
export interface West {
  uv?: Uv1;
  uv_size?: UvSize;
  /**
   * Specifies the UV's for the face that stretches.
   */
  material_instance?: string;
}
/**
 * Specifies the UV's for the face that stretches along the x and z axes, and faces the y axis.
 */
export interface Up {
  uv?: Uv1;
  uv_size?: UvSize;
  /**
   * Specifies the UV's for the face that stretches.
   */
  material_instance?: string;
}
/**
 * Specifies the UV's for the face that stretches along the x and z axes, and faces the -y axis.
 */
export interface Down {
  uv?: Uv1;
  uv_size?: UvSize;
  /**
   * Specifies the UV's for the face that stretches.
   */
  material_instance?: string;
}
