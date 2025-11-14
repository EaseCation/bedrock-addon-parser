/**
 * resource/particles/components/particle_appearance_billboard.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.941Z
 */

/**
 * UNDOCUMENTED: size.
 *
 * @minItems 2
 * @maxItems 2
 */
export type Size = [Size1, Size1];
/**
 * UNDOCUMENTED: size.
 */
export type Size1 = string | number;
/**
 * Used to orient the billboard.
 */
export type FacingCameraMode =
  | 'rotate_xyz'
  | 'rotate_y'
  | 'lookat_xyz'
  | 'lookat_y'
  | 'lookat_direction'
  | 'direction_x'
  | 'direction_y'
  | 'direction_z'
  | 'emitter_transform_xy'
  | 'emitter_transform_xz'
  | 'emitter_transform_yz';
/**
 * UNDOCUMENTED.
 */
export type Size2 = string | number;
/**
 * UNDOCUMENTED: base UV.
 *
 * @minItems 2
 * @maxItems 2
 */
export type BaseUV = [BaseUV1, BaseUV1];
/**
 * UNDOCUMENTED: base UV.
 */
export type BaseUV1 = string | number;
/**
 * UNDOCUMENTED: size UV.
 *
 * @minItems 2
 * @maxItems 2
 */
export type SizeUV = [SizeUV1, SizeUV1];
/**
 * UNDOCUMENTED: size UV.
 */
export type SizeUV1 = string | number;
/**
 * UNDOCUMENTED: step UV.
 *
 * @minItems 2
 * @maxItems 2
 */
export type StepUV = [StepUV1, StepUV1];
/**
 * UNDOCUMENTED: step UV.
 */
export type StepUV1 = string | number;
/**
 * UNDOCUMENTED: frames per second.
 */
export type FramesPerSecond = string | number;
/**
 * UNDOCUMENTED: Maximum frame.
 */
export type MaximumFrame = string | number;
/**
 * UNDOCUMENTED: uv.
 *
 * @minItems 2
 * @maxItems 2
 */
export type Uv1 = [Uv2, Uv2];
/**
 * UNDOCUMENTED: uv.
 */
export type Uv2 = string | number;
/**
 * UNDOCUMENTED: uv size.
 *
 * @minItems 2
 * @maxItems 2
 */
export type UvSize = [UvSize1, UvSize1];
/**
 * UNDOCUMENTED: uv size.
 */
export type UvSize1 = string | number;

/**
 * UNDOCUMENTED.
 */
export interface ParticleAppearanceBillboardComponentFor1100 {
  size?: Size;
  facing_camera_mode?: FacingCameraMode;
  /**
   * UNDOCUMENTED
   */
  direction?: {
    /**
     * Specified how to calculate the billboard direction of a particle.
     */
    mode?: 'custom' | 'derive_from_velocity';
    /**
     * The facing direction of emitted particles.
     *
     * @minItems 3
     * @maxItems 3
     */
    custom_direction?: [Size2, Size2, Size2];
    /**
     * The direction is set if the speed of the particle is above the threshold.
     */
    min_speed_threshold?: number;
    [k: string]: unknown;
  };
  uv?: Uv;
}
/**
 * UNDOCUMENTED: uv.
 */
export interface Uv {
  /**
   * UNDOCUMENTED: texture width.
   */
  texture_width?: number;
  /**
   * UNDOCUMENTED: texture height.
   */
  texture_height?: number;
  flipbook?: Flipbook;
  uv?: Uv1;
  uv_size?: UvSize;
}
/**
 * UNDOCUMENTED: flipbook.
 */
export interface Flipbook {
  base_UV?: BaseUV;
  size_UV?: SizeUV;
  step_UV?: StepUV;
  frames_per_second?: FramesPerSecond;
  max_frame: MaximumFrame;
  /**
   * UNDOCUMENTED: stretch to lifetime.
   */
  stretch_to_lifetime?: boolean;
  /**
   * UNDOCUMENTED: loop.
   */
  loop?: boolean;
}
