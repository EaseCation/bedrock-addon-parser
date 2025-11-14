/**
 * behavior/entities/format/components/grows_crop.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.644Z
 */

/**
 * Could increase crop growth when entity walks over crop.
 */
export interface GrowsCrop {
  /**
   * Value between 0-1. Chance of success per tick.
   */
  chance?: number;
  /**
   * Number of charges.
   */
  charges?: number;
}
