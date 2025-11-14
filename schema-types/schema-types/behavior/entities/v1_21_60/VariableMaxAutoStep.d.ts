/**
 * behavior/entities/format/components/variable_max_auto_step.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.022Z
 */

/**
 * Entities with this component will have a maximum auto step height that is different depending on wether they are on a block that prevents jumping. Incompatible with "runtime_identifier": "minecraft:horse".
 */
export interface VariableMaxAutoStep {
  /**
   * The maximum auto step height when on any other block.
   */
  base_value?: number;
  /**
   * The maximum auto step height when on any other block and controlled by the player.
   */
  controlled_value?: number;
  /**
   * The maximum auto step height when on a block that prevents jumping.
   */
  jump_prevented_value?: number;
}
