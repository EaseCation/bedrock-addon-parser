/**
 * behavior/blocks/format/traits/placement_position.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.234Z
 */

/**
 * Block states you wish to enable
 *
 * @minItems 1
 * @maxItems 2
 */
export type EnabledStates =
  | ['minecraft:block_face' | 'minecraft:vertical_half']
  | [
      'minecraft:block_face' | 'minecraft:vertical_half',
      'minecraft:block_face' | 'minecraft:vertical_half',
    ];

/**
 * Contains information about where the player placed the block.
 */
export interface PlacementPosition {
  enabled_states: EnabledStates;
}
