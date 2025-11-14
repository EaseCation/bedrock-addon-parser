/**
 * behavior/entities/format/components/game_event_movement_tracking.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.073Z
 */

/**
 * Allows an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through. It is added by default to every mob. Add it again to override its behavior.
 */
export interface GameEventMovementTracking {
  /**
   * If true, the `flap` game event will be emitted when the entity moves through air.
   */
  emit_flap?: boolean;
  /**
   * If true, the `entityMove` game event will be emitted when the entity moves on ground or through a solid.
   */
  emit_move?: boolean;
  /**
   * If true, the `swim` game event will be emitted when the entity moves through a liquid.
   */
  emit_swim?: boolean;
}
