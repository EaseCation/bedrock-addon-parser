/**
 * behavior/entities/format/components/experience_reward.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.706Z
 */

/**
 * A molang expression defining the amount of experience rewarded when this entity is successfully bred. An array of expressions adds each expression's result together for a final total.
 */
export type OnBred = string | number;
/**
 * A molang expression defining the amount of experience rewarded when this entity dies. An array of expressions adds each expression's result together for a final total.
 */
export type OnDeath = string | number;

/**
 * Defines the amount of experience rewarded when the entity dies or is successfully bred.
 */
export interface ExperienceReward {
  on_bred?: OnBred;
  on_death?: OnDeath;
}
