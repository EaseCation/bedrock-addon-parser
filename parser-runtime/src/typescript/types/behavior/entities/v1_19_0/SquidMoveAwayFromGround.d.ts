/**
 * behavior/entities/format/behaviors/squid_move_away_from_ground.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:09.395Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the squid to move away from ground blocks and back to water. Can only be used by the Squid.
 */
export interface SquidMoveAwayFromGround {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
