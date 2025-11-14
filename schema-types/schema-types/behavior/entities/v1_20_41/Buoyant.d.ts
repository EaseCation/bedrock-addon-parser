/**
 * behavior/entities/format/components/buoyant.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.193Z
 */

/**
 * A minecraft block reference.
 */
export type Block = BlockceptionMinecraftBlockIdentifier | BlockReference;
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
 * List of blocks this entity can float on. Must be a liquid block.
 */
export type LiquidBlocks = Block[];

/**
 * Enables an entity to float on the specified liquid blocks.
 */
export interface Buoyant {
  /**
   * Base buoyancy used to calculate how much will a mob float.
   */
  base_buoyancy?: number;
  /**
   * Applies gravity each tick. Causes more of a wave simulation, but will cause more gravity to be applied outside liquids.
   */
  apply_gravity?: boolean;
  /**
   * Base buoyancy used to calculate how much will a mob float.
   */
  buoyancy?: number;
  /**
   * Probability for a big wave hitting the entity. Only used if `simulate_waves` is true.
   */
  big_wave_probability?: number;
  /**
   * Multiplier for the speed to make a big wave. Triggered depending on `big_wave_probability`.
   */
  big_wave_speed?: number;
  /**
   * How much an actor will be dragged down when the Buoyancy Component is removed.
   */
  drag_down_on_buoyancy_removed?: number;
  liquid_blocks?: LiquidBlocks;
  /**
   * Should the movement simulate waves going through.
   */
  simulate_waves?: boolean;
}
export interface BlockReference {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString180;
}
export interface States {
  [k: string]: StateValue;
}
