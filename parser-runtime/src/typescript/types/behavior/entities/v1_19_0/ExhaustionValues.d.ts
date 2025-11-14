/**
 * behavior/entities/format/components/exhaustion_values.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.617Z
 */

/**
 * Defines an entity's behavior for having items equipped to it.
 */
export interface ExhaustionValues {
  /**
   * Amount of exhaustion applied when attacking.
   */
  attack?: number;
  /**
   * Amount of exhaustion applied when taking damage.
   */
  damage?: number;
  /**
   * Amount of exhaustion applied when healed through food regeneration.
   */
  heal?: number;
  /**
   * Amount of exhaustion applied when jumping.
   */
  jump?: number;
  /**
   * Amount of exhaustion applied when mining.
   */
  mine?: number;
  /**
   * Amount of exhaustion applied when sprinting.
   */
  sprint?: number;
  /**
   * Amount of exhaustion applied when sprint jumping.
   */
  sprint_jump?: number;
  /**
   * Amount of exhaustion applied when swimming.
   */
  swim?: number;
  /**
   * Amount of exhaustion applied when walking.
   */
  walk?: number;
}
