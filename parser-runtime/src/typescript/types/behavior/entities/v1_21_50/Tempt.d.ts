/**
 * behavior/entities/format/behaviors/tempt.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:52.540Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;
export type BlockceptionMinecraftItemDescriptor =
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
 * List of items this mob is tempted by.
 */
export type Items = BlockceptionMinecraftItemDescriptor[];
/**
 * Range of random ticks to wait between tempt sounds.
 */
export type SoundInterval = number | [] | [number] | [number, number];
/**
 * Sound to play while the mob is being tempted.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;

/**
 * Allows an entity to be tempted by a set item.
 */
export interface Tempt {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob can stop being tempted if the player moves too fast while close to this mob.
   */
  can_get_scared?: boolean;
  /**
   * If true, the mob can be tempted even if it has a passenger (i.e. if being ridden).
   */
  can_tempt_while_ridden?: boolean;
  /**
   * If true, vertical distance to the player will be considered when tempting.
   */
  can_tempt_vertically?: boolean;
  items?: Items;
  sound_interval?: SoundInterval;
  tempt_sound?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * Distance in blocks this mob can get tempted by a player holding an item they like.
   */
  within_radius?: number;
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
