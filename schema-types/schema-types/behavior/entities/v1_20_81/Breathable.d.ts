/**
 * behavior/entities/format/components/breathable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.875Z
 */

/**
 * A minecraft block reference.
 */
export type BlockReference = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier1 = string;
/**
 * The key of property is the name of the block state/property, the value must be the same as the block properties accepted values.
 */
export type StateValue = boolean | number | string;
/**
 * A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags.
 */
export type MolangString180 = string;
/**
 * List of blocks this entity can breathe in, in addition to the above.
 */
export type BreatheBlocks = BlockReference[];
/**
 * List of blocks this entity can't breathe in, in addition to the above.
 */
export type NonBreathesBlocks = BlockReference[];

/**
 * Defines what blocks this entity can breathe in and gives them the ability to suffocate.
 */
export interface Breathable {
  /**
   * Time in seconds the entity can hold its breath.
   */
  total_supply?: number;
  /**
   * Time in seconds between suffocation damage.
   */
  suffocate_time?: number;
  /**
   * Time in seconds to recover breath to maximum.
   */
  inhale_time?: number;
  /**
   * If true, this entity can breathe in air.
   */
  breathes_air?: boolean;
  /**
   * If true, this entity can breathe in water.
   */
  breathes_water?: boolean;
  /**
   * If true, this entity can breathe in lava.
   */
  breathes_lava?: boolean;
  /**
   * If true, this entity can breathe in solid blocks.
   */
  breathes_solids?: boolean;
  /**
   * If true, this entity will have visible bubbles while in water.
   */
  generates_bubbles?: boolean;
  breathe_blocks?: BreatheBlocks;
  non_breathe_blocks?: NonBreathesBlocks;
}
export interface BlockReference1 {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString180;
}
export interface States {
  [k: string]: StateValue;
}
