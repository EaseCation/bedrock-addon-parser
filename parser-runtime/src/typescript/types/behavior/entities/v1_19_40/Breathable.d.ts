/**
 * behavior/entities/format/components/breathable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.888Z
 */

/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * List of blocks this entity can breathe in, in addition to the above.
 */
export type BreatheBlocks = BlockceptionMinecraftBlockIdentifier[];
/**
 * List of blocks this entity can't breathe in, in addition to the above.
 */
export type NonBreathesBlocks = BlockceptionMinecraftBlockIdentifier[];

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
