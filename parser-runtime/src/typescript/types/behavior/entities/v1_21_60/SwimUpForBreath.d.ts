/**
 * behavior/entities/format/behaviors/swim_up_for_breath.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.162Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The material the mob is traveling in. An air block will only be considered valid to move to with a block of this material below it.
 */
export type IdleTime = 'water' | 'lava' | 'any';

/**
 * Allows the mob to try to move to air once it is close to running out of its total breathable supply.
 */
export interface SwimUpForBreath {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  material_type?: IdleTime;
  /**
   * The height (in blocks) above the mob's current position that it will search for a valid air block to move to. If a valid block cannot be found, the mob will move to the position this many blocks above it.
   */
  search_height?: number;
  /**
   * The radius (in blocks) around the mob's current position that it will search for a valid air block to move to.
   */
  search_radius?: number;
  /**
   * Movement speed multiplier of the mob when using this Goal.
   */
  speed_mod?: number;
}
