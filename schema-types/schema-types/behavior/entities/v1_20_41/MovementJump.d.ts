/**
 * behavior/entities/format/components/movement.jump.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.944Z
 */

/**
 * Delay after landing when using the slime move control.
 */
export type JumpDelay = [] | [number] | [number, number];

/**
 * Move control that causes the mob to jump as it moves with a specified delay between jumps.
 */
export interface MovementJump {
  jump_delay?: JumpDelay;
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
}
