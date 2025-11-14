/**
 * behavior/blocks/format/traits/placement_direction.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.124Z
 */

/**
 * Block states you wish to enable
 *
 * @minItems 1
 */
export type EnabledStates = [
  'minecraft:cardinal_direction' | 'minecraft:facing_direction',
  ...('minecraft:cardinal_direction' | 'minecraft:facing_direction')[],
];

/**
 * Contains information about the player's rotation when the block was placed.
 */
export interface PlacementDirection {
  enabled_states: EnabledStates;
  /**
   * This rotation offset only applies to the horizontal state values
   */
  y_rotation_offset?: number;
}
