/**
 * behavior/entities/format/components/home.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.982Z
 */

/**
 * Optional block that the home position will be associated with. If any of the blocks no longer exist at that position, the home restriction is removed. Example syntax: minecraft:sand. Not supported: minecraft:sand:1
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * Optional block list that the home position will be associated with. If any of the blocks no longer exist at that position, the home restriction is removed. Example syntax: minecraft:sand. Not supported: minecraft:sand:1
 */
export type HomeBlockList = BlockceptionMinecraftItemIdentifier[];
/**
 * Defines how the the entity will be restricted to its home position. The possible values are:
 * - 'none', which poses no restriction.
 * - 'random_movement', which restricts randomized movement to be around the home position.
 * - 'all_movement', which restricts any kind of movement to be around the home position. However, entities that somehow got too far away from their home will always be able to move closer to it, if prompted to do so.
 */
export type RestrictionType = 'none' | 'random_movement' | 'all_movement';

/**
 * Saves a home pos for when the the entity is spawned.
 */
export interface Home {
  /**
   * The radius that the entity will be restricted to in relation to its home.
   */
  restriction_radius?: number;
  home_block_list?: HomeBlockList;
  restriction_type?: RestrictionType;
}
