/**
 * resource/biomes/format/components/fog_appearance.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:55.012Z
 */

/**
 * Set the fog settings used during rendering. Biomes without this component will have default fog settings.
 */
export interface FogAppearance {
  /**
   * Identifier of fog definition to use.
   */
  fog_identifier: string;
}
