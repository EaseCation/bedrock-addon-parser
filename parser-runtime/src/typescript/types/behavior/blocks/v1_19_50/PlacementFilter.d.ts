/**
 * behavior/blocks/format/components/placement_filter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:25.128Z
 */

/**
 * List of any of the following strings describing which face(s) this block can be placed on: "up", "down", "north", "south", "east", "west", "side", "all". Limited to 6 faces.
 */
export type AllowedFaces = ('up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all')[];
/**
 * [Experimental]
 */
export type BlockFilter1 = BlockceptionMinecraftBlockIdentifier | BlockReference;
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
 * List of blocks that this block can be placed against in the "allowed_faces" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below.
 */
export type BlockFilter = BlockFilter1[];

/**
 * [Experimental]
 */
export interface PlacementFilter {
  conditions?: PlacementFilter1[];
  [k: string]: unknown;
}
/**
 * [Experimental]
 */
export interface PlacementFilter1 {
  allowed_faces?: AllowedFaces;
  block_filter?: BlockFilter;
}
export interface BlockReference {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString180;
}
export interface States {
  [k: string]: StateValue;
}
