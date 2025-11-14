/**
 * behavior/cameras/presets/cameras.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.353Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;

/**
 * A camera preset is a set of values that define a camera's position and rotation. This can be used to quickly set a camera to a specific position and rotation.
 */
export interface CameraPreset {
  format_version: FormatVersion;
  'minecraft:camera_preset': {
    [k: string]: unknown;
  };
}
