/**
 * behavior/blocks/format/events/play_sound.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.783Z
 */

/**
 * The target context to execute against.
 */
export type Target = string;

/**
 * Play a sound relative to target position.
 */
export interface Playsound {
  /**
   * The name of the sound to play.
   */
  sound?: string;
  target?: Target;
}
