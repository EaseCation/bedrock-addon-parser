/**
 * behavior/features/features/minecraft.growing_plant_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.539Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type BlockceptionMinecraftFeatureIdentifier = string;
/**
 * Age of the head of the plant.
 */
export type Age = number | Range;
/**
 * Collection of weighted heights that placement will select from.
 *
 * @minItems 1
 */
export type HeightDistribution = [Items, ...Items[]];
/**
 * Collection of weighted heights that placement will select from.
 *
 * @minItems 2
 * @maxItems 2
 */
export type Items = [PlantHeight, number];
/**
 * Plant height.
 */
export type PlantHeight = number | Range;
/**
 * Direction that the plant grows towards. Valid values: UP and DOWN
 */
export type GrowthDirection = 'UP' | 'DOWN' | 'up' | 'down';
/**
 * Collection of weighted block descriptor that placement will select from for the body of the plant.
 *
 * @minItems 1
 */
export type BodyBlocks = [Blocks, ...Blocks[]];
/**
 * Collection of weighted block descriptor that placement will select from for the plant.
 *
 * @minItems 2
 * @maxItems 2
 */
export type Blocks = [BlockceptionMinecraftBlockIdentifier, Age1];
/**
 * Plant body block.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * A described range.
 */
export type Age1 =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Collection of weighted block descriptor that placement will select from for the body of the plant.
 *
 * @minItems 1
 */
export type HeadBlocks = [Blocks, ...Blocks[]];

/**
 * `minecraft:growing_plant_feature` places a growing plant in the world. A growing plant is a column that is anchored either to the ceiling or the floor, based on its growth direction.
 * The growing plant has a body and a head, where the head is the tip of the plant, and the body consists of the remainder blocks.
 * This feature can be used to define growing plants with variable body and head blocks, e.g. Cave Vines.
 */
export interface GrowingPlantFeature {
  description: Description;
  age?: Age;
  height_distribution: HeightDistribution;
  growth_direction: GrowthDirection;
  body_blocks: BodyBlocks;
  head_blocks: HeadBlocks;
  /**
   * Plant blocks can be placed in water.
   */
  allow_water?: boolean;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: BlockceptionMinecraftFeatureIdentifier;
  [k: string]: unknown;
}
/**
 * A range.
 */
export interface Range {
  /**
   * The maximum plant height.
   */
  range_max: number;
  /**
   * The minimum plant height.
   */
  range_min: number;
  [k: string]: unknown;
}
