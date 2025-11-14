/**
 * behavior/biomes/components/climate.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.047Z
 */

/**
 * UNDOCUMENTED.
 */
export type SnowAccumulation = [] | [number] | [number, number];

/**
 * Describes temperature, humidity, precipitation, etc.  Biomes without this component will have default values.
 */
export interface Climate {
  /**
   * UNDOCUMENTED.
   */
  temperature?: number;
  /**
   * UNDOCUMENTED.
   */
  downfall?: number;
  /**
   * UNDOCUMENTED.
   */
  red_spores?: number;
  /**
   * UNDOCUMENTED.
   */
  blue_spores?: number;
  /**
   * UNDOCUMENTED.
   */
  ash?: number;
  /**
   * UNDOCUMENTED.
   */
  white_ash?: number;
  snow_accumulation?: SnowAccumulation;
}
