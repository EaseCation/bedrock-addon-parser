/**
 * behavior/entities/format/components/tick_world.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.671Z
 */

/**
 * Defines if the entity ticks the world and the radius around it to tick.
 */
export interface TickWorld {
  /**
   * The distance at which the closest player has to be before this entity despawns. This option will be ignored if never_despawn is true. Min: 128 blocks.
   */
  distance_to_players?: number;
  /**
   * If true, this entity will not despawn even if players are far away. If false, distance_to_players will be used to determine when to despawn.
   */
  never_despawn?: boolean;
  /**
   * The area around the entity to tick. Default: 2. Allowed range: 2-6.
   */
  radius?: number;
}
