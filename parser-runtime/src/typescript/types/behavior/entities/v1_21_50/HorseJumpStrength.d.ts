/**
 * behavior/entities/format/components/horse.jump_strength.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.981Z
 */

/**
 * The multiplier to apply to the jumping height.
 */
export type Value =
  | {
      range_min?: number;
      range_max?: number;
    }
  | number;

/**
 * Allows this mob to jump higher when being ridden by a player.
 */
export interface HorseJumpStrength {
  value?: Value;
}
