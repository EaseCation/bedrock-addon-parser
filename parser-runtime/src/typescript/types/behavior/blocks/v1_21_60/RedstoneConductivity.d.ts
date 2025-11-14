/**
 * behavior/blocks/format/components/redstone_conductivity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.256Z
 */

/**
 * The basic redstone properties of a block; if the component is not provided the default values are used.
 */
export interface RedstoneConductivity {
  /**
   * Specifies if redstone wire can stair-step downward on the block.
   */
  allows_wire_to_step_down?: boolean;
  /**
   * Specifies if the block can be powered by redstone.
   */
  redstone_conductor?: boolean;
}
