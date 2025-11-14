/**
 * behavior/entities/format/components/combat_regeneration.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.167Z
 */

/**
 * Gives Regeneration I and removes Mining Fatigue from the mob that kills the Actor`s attack target.
 */
export interface CombatRegeneration {
  /**
   * Determines if the mob will grant mobs of the same type combat buffs if they kill the target.
   */
  apply_to_family?: boolean;
  /**
   * Determines if the mob will grant itself the combat buffs if it kills the target.
   */
  apply_to_self?: boolean;
  /**
   * The duration in seconds of Regeneration I added to the mob.
   */
  regeneration_duration?: number;
}
