/**
 * behavior/entities/format/components/boss.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.879Z
 */

/**
 * The current state of the boss for updating the boss HUD.
 */
export interface Boss {
  /**
   * The Maximum distance from the boss at which the boss's health bar is present on the players screen.
   */
  hud_range?: number;
  /**
   * The name that will be displayed above the boss's health bar.
   */
  name?: string;
  /**
   * Whether the sky should darken in the presence of the boss.
   */
  should_darken_sky?: boolean;
}
