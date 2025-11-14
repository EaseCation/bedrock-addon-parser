/**
 * behavior/entities/format/behaviors/avoid_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.090Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Block search method.
 */
export type TargetSelectionMethod = 'random' | 'nearest';
export type BlockID =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier2 | ItemDescriptor2;
      [k: string]: unknown;
    };
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier1 = string;
/**
 * [UNDOCUMENTED] A Molang expression ran against item or block to match.
 */
export type MolangString180 = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier2 = string;
/**
 * List of block types this mob avoids.
 */
export type TargetBlocks = BlockID[];
/**
 * The sound event to play when the mob is avoiding a block.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
/**
 * Minecraft behavior event.
 */
export type Event =
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
 * Escape trigger.
 */
export type WalkSpeedModifier = Event[];
/**
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval =
  | []
  | [number]
  | [number, number]
  | number
  | {
      range_min?: number;
      range_max?: number;
    };

/**
 * Allows this entity to avoid certain blocks.
 */
export interface AvoidBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Should start tick interval.
   */
  tick_interval?: number;
  /**
   * Maximum distance to look for a block in xz.
   */
  search_range?: number;
  /**
   * Maximum distance to look for a block in y.
   */
  search_height?: number;
  /**
   * Modifier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster.
   */
  sprint_speed_modifier?: number;
  target_selection_method?: TargetSelectionMethod;
  target_blocks?: TargetBlocks;
  avoid_block_sound?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * Modifier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.
   */
  walk_speed_modifier?: number;
  on_escape?: WalkSpeedModifier;
  sound_interval?: SoundInterval;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor1 {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor2 {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
