/**
 * behavior/entities/format/behaviors/rise_to_liquid_level.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.297Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the mob to stay at a certain level when in liquid.
 */
export interface RiseToLiquidLevel {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Vertical offset from the liquid.
   */
  liquid_y_offset?: number;
  /**
   * Displacement for how much the entity will move up in the vertical axis.
   */
  rise_delta?: number;
  /**
   * Displacement for how much the entity will move down in the vertical axis.
   */
  sink_delta?: number;
}
