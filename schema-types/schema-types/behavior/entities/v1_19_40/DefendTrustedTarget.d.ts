/**
 * behavior/entities/format/behaviors/defend_trusted_target.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.302Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The event to run when this mob starts to defend the entity it trusts.
 */
export type OnDefendStart =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target;
      [k: string]: unknown;
    };
/**
 * The target of the event.
 */
export type Target =
  | 'baby'
  | 'block'
  | 'damager'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';

/**
 * Allows the mob to target another mob that hurts an entity it trusts.
 */
export interface DefendTrustedTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Sound to occasionally play while defending.
   */
  aggro_sound?: string;
  /**
   * Time in seconds between attacks.
   */
  attack_interval?: number;
  /**
   * If true, only entities in this mob's viewing range can be selected as targets.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   */
  must_see_forget_duration?: number;
  on_defend_start?: OnDefendStart;
  /**
   * Distance in blocks that the target can be within to launch an attack.
   */
  within_radius?: number;
  entity_types?: EntityTypes;
  /**
   * Probability that a sound will play.
   */
  sound_chance?: number;
}
/**
 * List of entity types that this mob considers valid targets.
 */
export interface EntityTypes {}
