/**
 * behavior/entities/format/components/ambient_sound_interval.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.823Z
 */

/**
 * Sets the entity's delay between playing its ambient sound.
 */
export interface AmbientSoundInterval {
  /**
   * Level sound event to be played as the ambient sound.
   */
  event_name?: string;
  /**
   * List of dynamic level sound events, with conditions for choosing between them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence.
   */
  event_names?: {
    /**
     * The condition that must be satisfied to select the given ambient sound.
     */
    condition?: string;
    /**
     * Level sound event to be played as the ambient sound.
     */
    event_name?: string;
    [k: string]: unknown;
  }[];
  /**
   * Maximum time in seconds to randomly add to the ambient sound delay time.
   */
  range?: number;
  /**
   * Minimum time in seconds before the entity plays its ambient sound again.
   */
  value?: number;
}
