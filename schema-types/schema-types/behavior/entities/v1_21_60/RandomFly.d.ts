/**
 * behavior/entities/format/behaviors/random_fly.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.332Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;

/**
 * Allows a mob to randomly fly around.
 */
export interface RandomFly {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob will avoid blocks that cause damage.
   */
  avoid_damage_blocks?: boolean;
  /**
   * If true, the mob can stop flying and land on a tree instead of the ground.
   */
  can_land_on_trees?: boolean;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
  /**
   * Height in blocks to add to the selected target position.
   */
  y_offset?: number;
}
