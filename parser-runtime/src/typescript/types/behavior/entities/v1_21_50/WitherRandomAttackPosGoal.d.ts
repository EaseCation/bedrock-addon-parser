/**
 * behavior/entities/format/behaviors/wither_random_attack_pos_goal.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.479Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * Allows the wither to launch random attacks. Can only be used by the Wither Boss.
 */
export interface WitherRandomAttackPosGoal {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
