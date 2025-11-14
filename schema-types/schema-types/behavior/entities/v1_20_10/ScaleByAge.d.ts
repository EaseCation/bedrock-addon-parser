/**
 * behavior/entities/format/components/scale_by_age.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.097Z
 */

/**
 * Defines the entity's size interpolation based on the entity's age.
 */
export interface ScaleByAge {
  /**
   * Ending scale of the entity when it's fully grown.
   */
  end_scale?: number;
  /**
   * Initial scale of the newborn entity.
   */
  start_scale?: number;
}
