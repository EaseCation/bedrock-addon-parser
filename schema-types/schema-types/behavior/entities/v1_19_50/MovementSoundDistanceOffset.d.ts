/**
 * behavior/entities/format/components/movement_sound_distance_offset.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:23.946Z
 */

/**
 * Sets the offset used to determine the next step distance for playing a movement sound.
 */
export interface MovementSoundDistanceOffset {
  /**
   * The higher the number, the less often the movement sound will be played.
   */
  value: number;
}
