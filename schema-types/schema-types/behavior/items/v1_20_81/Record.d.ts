/**
 * behavior/items/format/components/record.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.782Z
 */

/**
 * Used by record items to play music.
 */
export interface Record {
  /**
   * Signal strength for comparator blocks to use, from 1 - 13
   */
  comparator_signal?: number;
  /**
   * Duration of sound event in seconds, float value.
   */
  duration?: number;
  /**
   * Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5, relic.
   */
  sound_event: string;
}
