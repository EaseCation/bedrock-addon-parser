/**
 * behavior/features/features/minecraft.search_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.677Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * Named reference of feature to be placed.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Maximum extent of the bounding volume expressed as [ x, y, z ].
 */
export type Max = [] | [number] | [number, number] | [number, number, number];
/**
 * Maxium extent of the bounding volume expressed as [ x, y, z ].
 */
export type Min = [] | [number] | [number, number] | [number, number, number];
/**
 * Axis that the search will sweep along through the `search_volume`.
 */
export type SearchAxis = '-x' | '+x' | '-y' | '+y' | '-z' | '+z';

/**
 * `minecraft:search_feature` sweeps a volume searching for a valid placement location for its referenced feature. The `search_volume` field specifies the axis-aligned bounding box that defines the boundaries of the search. The search sweeps along the axis defined by the `search_axis` field, layer by layer. For example, if `search_axis` = '-x', blocks with greater x values will be checked before blocks with lower x values. Each layer is searched from the bottom-left to the top-right before moving to the next layer along the axis. By default, only one valid position must be found, but this can be altered by specifying the `required_successes` field. If fewer than the required successes are found, no placement will occur.
 * Succeeds if: The number of valid positions is equal to the value specified by `required_successes`.
 * Fails if: The number of valid positions is less than the value specified by `required_successes`.
 */
export interface SearchFeature {
  description: Description;
  places_feature?: BlockceptionMinecraftFeatureIdentifier;
  search_volume?: PlacesFeature;
  search_axis: SearchAxis;
  /**
   * Number of valid positions the search must find in order to place the referenced feature.
   */
  required_successes?: number;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
/**
 * Axis-aligned bounding box that will be searched for valid placement positions. Expressed as offsets from the input position.
 */
export interface PlacesFeature {
  max: Max;
  min: Min;
}
