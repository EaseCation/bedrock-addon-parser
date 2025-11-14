/**
 * resource/sounds/music_definitions.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.178Z
 */

/**
 * The definition file of music of the resourcepack.
 */
export interface MusicFile {
  [k: string]: Music;
}
/**
 * A music defintion.
 */
export interface Music {
  /**
   * The name of the minecraft music event.
   */
  event_name: string;
  /**
   * UNDOCUMENTED: Minimum delay.
   */
  min_delay?: number;
  /**
   * UNDOCUMENTED: Maximum delay.
   */
  max_delay?: number;
}
