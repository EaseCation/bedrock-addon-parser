/**
 * behavior/entities/format/components/navigation.swim.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:23.907Z
 */

/**
 * Tells the pathfinder which blocks to avoid when creating a path.
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
 * Tells the pathfinder which blocks to avoid when creating a path.
 */
export type BlocksToAvoid = Block[];

/**
 * Allows this entity to generate paths that include water.
 */
export interface NavigationSwim {
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  blocks_to_avoid?: BlocksToAvoid;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   */
  can_walk?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater.
   */
  is_amphibious?: boolean;
}
export interface BlockReference {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString180;
}
export interface States {
  [k: string]: StateValue;
}
