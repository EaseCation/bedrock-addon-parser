/**
 * resource/biomes/format/components/ambient_sounds.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.829Z
 */

/**
 * Sets the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file.
 */
export interface AmbientSounds {
  /**
   * Named sound that occasionally plays at the listener position.
   */
  addition?: string;
  /**
   * Named sound that loops while the listener position is inside the biome.
   */
  loop?: string;
  /**
   * Named sound that rarely plays at a nearby air block position when the light level is low.
   */
  mood?: string;
}
