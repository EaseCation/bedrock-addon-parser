/**
 * behavior/features/1.13.0/features.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:28.558Z
 */

/**
 * Specifies the version of the game this entity was made in. Minimum supported version is 1.13.0. Current supported version is 1.13.0.
 */
export type FormatVersion = '1.13.0';
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * Collection of features to be placed one by one. No guarantee of order. All features use the same input position.
 *
 * @minItems 1
 */
export type Features = [string, ...string[]];
/**
 * LIKELY TO BE CHANGED: Do not continue placing features once either the first success or first failure has occurred.
 */
export type EarlyOut = 'none' | 'first_failure' | 'first_success';
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier1 = string;
/**
 * Named reference of feature to be placed.
 */
export type PlacesFeature = string;
/**
 * Dimensions of the Bounding Box.
 */
export type BoundingBoxMin = [] | [number] | [number, number] | [number, number, number];
/**
 * Dimensions of the Bounding Box.
 */
export type BoundingBoxMax = [] | [number] | [number, number] | [number, number, number];
/**
 * Reference to the block to be placed.
 */
export type SurfaceBlockType = string;
/**
 * Reference to the block to be placed.
 */
export type SubsurfaceBlockType = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier2 = string;
/**
 * Reference to the block to fill the cave with.
 */
export type FillWith = string;
/**
 * How many blocks to increase the cave radius by, from the center point of the cave.
 */
export type WidthModifier = string | number;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier3 = string;
/**
 * Feature to be placed.
 */
export type PlacesFeature1 = string;
/**
 * Condition for placing associated Feature.
 */
export type MolangString180 = string;
/**
 * Array of Features, and their associated Conditions, for attempted placement. These features will be evaluated as ordered.
 */
export type ConditionalFeatures = ConditionalFeature[];
/**
 * Denote whether placement should end on first successful placement or first passed condition.
 */
export type EarlyOutScheme = 'condition_success' | 'placement_success';
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier4 = string;
/**
 * The block to fill the inside of the geode.
 */
export type Filler = string;
/**
 * The block that forms the inside layer of the geode shell.
 */
export type InnerLayer = string;
/**
 * The block that has a chance of generating instead of inner_layer.
 */
export type AlternateInnerLayer = string;
/**
 * The block that forms the middle layer of the geode shell.
 */
export type MiddleLayer = string;
/**
 * The block that forms the outer shell of the geode.
 */
export type OuterLayer = string;
/**
 * A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
 *
 * @minItems 1
 */
export type InnerPlacements = [BlockReference, ...BlockReference[]];
/**
 * A block that may be replaced during placement.
 */
export type BlockReference = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier5 = string;
/**
 * Age of the head of the plant.
 */
export type Age = number | Range;
/**
 * Collection of weighted heights that placement will select from.
 *
 * @minItems 1
 */
export type HeightDistribution = [HeightDistribution1, ...HeightDistribution1[]];
/**
 * Collection of weighted heights that placement will select from.
 *
 * @minItems 2
 * @maxItems 2
 */
export type HeightDistribution1 = [PlantHeight, number];
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
export type Blocks = [PlantBodyBlock, number];
/**
 * Plant body block.
 */
export type PlantBodyBlock = string;
/**
 * Collection of weighted block descriptor that placement will select from for the body of the plant.
 *
 * @minItems 1
 */
export type HeadBlocks = [Blocks, ...Blocks[]];
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier6 = string;
/**
 * Reference to the block to fill the cave with.
 */
export type Identifier7 = string;
/**
 * How many blocks to increase the cave radius by, from the center point of the cave.
 */
export type Identifier8 = string | number;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier9 = string;
/**
 * Reference to the block to be placed.
 */
export type PlacesBlock = string;
/**
 *  How far, in blocks, this feature can search for a valid position to place.
 *
 * @minItems 1
 */
export type CanPlaceOn = [Block, ...Block[]];
/**
 *  A list of blocks that the block in this feature can be placed on. Omit this field to allow any block to be placed on.
 */
export type Block = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier10 = string;
/**
 * Collection of replace rules that will be checked in order of definition. If a rule is resolved, the rest will not be resolved for that block position.
 *
 * @minItems 1
 */
export type ReplaceRules = [RepalceRule, ...RepalceRule[]];
/**
 * Reference to the block to be placed.
 */
export type PlacesBlock1 = string;
/**
 * A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
 *
 * @minItems 1
 */
export type MayReplace = [
  BlockceptionMinecraftBlockIdentifier,
  ...BlockceptionMinecraftBlockIdentifier[],
];
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier11 = string;
/**
 * UNDOCUMENTED.
 *
 * @minItems 1
 * @maxItems 4294967295
 */
export type FeatureAreas = [FeatureArea, ...FeatureArea[]];
/**
 * Feature to be placed.
 */
export type Feature = string;
/**
 * Dimensions (size) of the associated Feature.
 *
 * @minItems 2
 * @maxItems 2
 */
export type AreaDimensions = [number, number];
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier12 = string;
/**
 * Named reference of feature to be placed.
 */
export type ScanSurfaceFeature = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier13 = string;
/**
 * Named reference of feature to be placed.
 */
export type PlacesFeature2 = string;
/**
 * Number of scattered positions to generate.
 */
export type Iterations = string | number;
export type ScatterChance =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
    }
  | Iterations1;
/**
 * Probability (0-100] that this scatter will occur. Not evaluated each iteration; either no iterations will run, or all will.
 */
export type Iterations1 = string | number;
/**
 * The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to `xzy`.
 */
export type CoordinateEvalOrder = 'xyz' | 'xzy' | 'yxz' | 'yzx' | 'zxy' | 'zyx';
export type X =
  | Iterations2
  | {
      distribution: Distribution;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      extent: Extent;
    };
/**
 * Expression for the coordinate (evaluated each iteration). Mutually exclusive with random distribution object below.
 */
export type Iterations2 = string | number;
/**
 * Type of distribution - uniform random, gaussian (centered in the range), or grid (either fixed-step or jittered).
 */
export type Distribution =
  | 'uniform'
  | 'gaussian'
  | 'inverse_gaussian'
  | 'fixed_grid'
  | 'jittered_grid';
/**
 * UNDOCUMENTED.
 */
export type Extent = [] | [LowerBound] | [LowerBound, UpperBound];
/**
 * Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around.
 */
export type LowerBound = string | number;
/**
 * Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around.
 */
export type UpperBound = string | number;
export type X1 =
  | Iterations2
  | {
      distribution: Distribution;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      extent: Extent;
    };
export type X2 =
  | Iterations2
  | {
      distribution: Distribution;
      /**
       * When the distribution type is grid, defines the distance between steps along this axis.
       */
      step_size?: number;
      /**
       * When the distribution type is grid, defines the offset along this axis.
       */
      grid_offset?: number;
      extent: Extent;
    };
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier14 = string;
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
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier15 = string;
/**
 * List of features to be placed in sequence. The output position of the previous feature is used as the input position to the next.
 *
 * @minItems 1
 */
export type Features1 = [Feature1, ...Feature1[]];
/**
 * A feature to be placed in sequence. The output position of the previous feature is used as the input position to the next.
 */
export type Feature1 = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier16 = string;
/**
 * A minecraft block identifier.
 */
export type PlacesBlock2 = string;
/**
 * UNDOCUMENTED.
 */
export type Top = string | string[];
/**
 * UNDOCUMENTED.
 */
export type Bottom = string | string[];
/**
 * UNDOCUMENTED.
 */
export type North = string | string[];
/**
 * UNDOCUMENTED.
 */
export type South = string | string[];
/**
 * UNDOCUMENTED.
 */
export type East = string | string[];
/**
 * UNDOCUMENTED.
 */
export type West = string | string[];
/**
 * UNDOCUMENTED.
 */
export type All = string | string[];
/**
 * UNDOCUMENTED.
 */
export type Sides = string | string[];
/**
 * A minecraft block identifier.
 */
export type Block1 = string;
/**
 * A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
 */
export type MayReplace1 = Block1[];
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier17 = string;
/**
 * Named reference of feature to be snapped.
 */
export type FeatureToSnap = string;
/**
 * Defines the surface that the y-value of the placement position will be snapped to. Valid values: `ceiling` and `floor'
 */
export type Surface = 'ceiling' | 'floor';
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier18 = string;
/**
 * Direction the structure will face when placed in the world. Defaults to `random` if omitted.
 */
export type FacingDirection = 'north' | 'south' | 'east' | 'west' | 'random';
/**
 * A minecraft block identifier.
 */
export type Block2 = string;
/**
 * List of blocks the owning structure is allowed to intersect with.
 */
export type BlockAllowlist = Block2[];
/**
 * A minecraft block identifier.
 */
export type Block3 = string;
/**
 * List of blocks the owning structure is allowed to intersect with.
 */
export type BlockWhitelist = Block3[];
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier19 = string;
export type BaseBlock = BlockceptionMinecraftBlockIdentifier | Block4[];
/**
 * A minecraft block identifier.
 */
export type Block4 = string;
/**
 * UNDOCUMENTED.
 */
export type MayReplace2 = BlockceptionMinecraftBlockIdentifier[];
/**
 * UNDOCUMENTED.
 */
export type MayGrowOn = BlockceptionMinecraftBlockIdentifier[];
/**
 * UNDOCUMENTED.
 */
export type MayGrowOn1 = BlockceptionMinecraftBlockIdentifier[];
/**
 * UNDOCUMENTED.
 */
export type MayGrowOn2 = BlockceptionMinecraftBlockIdentifier[];
/**
 * UNDOCUMENTED.
 *
 * @minItems 1
 */
export type Intervals = [number, ...number[]];
/**
 * A minecraft block identifier.
 */
export type TrunkBlock = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock = string;
/**
 * UNDOCUMENTED.
 */
export type VariationChance = ChanceInformation1 | number;
/**
 * A minecraft block identifier.
 */
export type LeafBlock1 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type LeafBlock2 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock3 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock4 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock5 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock6 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock7 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock1 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection1 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type TrunkBlock1 = string;
/**
 * UNDOCUMENTED.
 */
export type LogDecorationFeature = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock2 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection2 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type TrunkBlock2 = string;
/**
 * UNDOCUMENTED.
 */
export type Intervals1 = number[];
/**
 * A minecraft block identifier.
 */
export type TrunkBlock3 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock3 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection3 = 'down' | 'up' | 'out' | 'away';
/**
 * UNDOCUMENTED.
 */
export type CanBeSubmerged =
  | {
      /**
       * UNDOCUMENTED.
       */
      max_depth?: number;
    }
  | boolean;
/**
 * A minecraft block identifier.
 */
export type TrunkBlock4 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock4 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection4 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type LeafBlock8 = string;
/**
 * UNDOCUMENTED.
 */
export type VariationChance1 = ChanceInformation1 | number;
/**
 * A minecraft block identifier.
 */
export type LeafBlock9 = string;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock5 = string;
/**
 * UNDOCUMENTED.
 */
export type StepDirection5 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type LeafBlock10 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock11 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock12 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock13 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock14 = string;
/**
 * A minecraft block identifier.
 */
export type LeafBlock15 = string;
/**
 * UNDOCUMENTED.
 */
export type Items = [] | [number] | [number, number];
/**
 * UNDOCUMENTED.
 */
export type LeafBlocks = Items[];
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier20 = string;
/**
 * A minecraft block identifier.
 */
export type FillWith1 = string;
/**
 * How many blocks to increase the cave radius by, from the center point of the cave.
 */
export type WidthModifier1 = string | number;
/**
 * A minecraft block identifier.
 */
export type ReplaceAirWith = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier21 = string;
/**
 * A minecraft block identifier.
 */
export type ReplaceBlock = string;
/**
 * UNDOCUMENTED.
 */
export type ReplaceableBlocks = ReplaceBlock[];
/**
 * A minecraft block identifier.
 */
export type GroundBlock = string;
/**
 * UNDOCUMENTED.
 */
export type VegetationFeature = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier22 = string;
/**
 *  Collection of weighted features that placement will select from.
 *
 * @minItems 1
 */
export type Features2 = [Feature2, ...Feature2[]];
/**
 * Named reference to a feature.
 */
export type Feature2 = [] | [Feature3] | [Feature3, number];
/**
 * Named reference to a feature.
 */
export type Feature3 = string;

/**
 * Features are decorations scattered throughout the world. Things such as trees, plants, flowers, springs, ore, and coral are all features. Basically, if it isn't the terrain or a mob, it's probably a feature!
 */
export interface Features1130 {
  format_version: FormatVersion;
  'minecraft:aggregate_feature'?: AggregateFeature;
  'minecraft:beards_and_shavers'?: BeardsAndShavers;
  'minecraft:cave_carver_feature'?: CaveCarverFeature;
  'minecraft:conditional_list'?: ConditionalList;
  'minecraft:geode_feature'?: GeodeFeature;
  'minecraft:growing_plant_feature'?: GrowingPlantFeature;
  'minecraft:hell_cave_carver_feature'?: HellCaveCarverFeature;
  'minecraft:multiface_feature'?: MultifaceFeature;
  'minecraft:ore_feature'?: OreFeature;
  'minecraft:rect_layout'?: RectLayout;
  'minecraft:scan_surface'?: RectLayout1;
  'minecraft:scatter_feature'?: ScatterFeature;
  'minecraft:search_feature'?: SearchFeature;
  'minecraft:sequence_feature'?: SequenceFeature;
  'minecraft:single_block_feature'?: SingleBlockFeature;
  'minecraft:snap_to_surface_feature'?: SnapToSurfaceFeature;
  'minecraft:structure_template_feature'?: StructureTemplateFeature;
  'minecraft:tree_feature'?: StructureTemplateFeature1;
  'minecraft:underwater_cave_carver_feature'?: UnderwaterCaveCarverFeature;
  'minecraft:vegetation_patch_feature'?: VegetationPatchFeature;
  'minecraft:weighted_random_feature'?: WeightedRandomFeature;
}
/**
 * 'minecraft:aggregate_feature` places a collection of features in an arbitary order. All features in the collection use the same input position. Features should not depend on each other, as there is no guarantee on the order the features will be placed.
 *  Succeeds if: At lease one feature is placed successfully.
 *  Fails if: All features fail to be placed.
 */
export interface AggregateFeature {
  description: Description;
  features: Features;
  early_out?: EarlyOut;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
/**
 * `minecraft:beards_and_shavers` will build a `beard` or `shave` out space so as to provide a clear space for a feature to place.
 * Succeeds if: a beard/shave is made (this should always happen).
 * Fails if: will always return placement pos, but interior feature placement not guaranteed.
 */
export interface BeardsAndShavers {
  description: Description1;
  places_feature: PlacesFeature;
  bounding_box_min: BoundingBoxMin;
  bounding_box_max: BoundingBoxMax;
  /**
   * Y Delta for BAS.
   */
  y_delta: number;
  surface_block_type: SurfaceBlockType;
  subsurface_block_type: SubsurfaceBlockType;
  /**
   * Y Delta for BAS.
   */
  beard_raggedness_min?: number;
  /**
   * Y Delta for BAS.
   */
  beard_raggedness_max?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Description1 {
  identifier: Identifier1;
  [k: string]: unknown;
}
/**
 * `minecraft:cave_carver_feature` carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature will also only work when placed specifically in the pass `pregeneration_pass`.
 */
export interface CaveCarverFeature {
  description: Description2;
  fill_with?: FillWith;
  width_modifier?: WidthModifier;
}
/**
 * UNDOCUMENTED.
 */
export interface Description2 {
  identifier: Identifier2;
  [k: string]: unknown;
}
/**
 * `minecraft:conditional_list` Places the first suitable feature within a collection.
 * These conditional features will be evaluated in order.
 * Succeeds if: A condition is successfully resolved.
 * Fails if: No condition is successfully resolved.
 * Example use: assigning a feature to an expression
 */
export interface ConditionalList {
  description: Description3;
  conditional_features: ConditionalFeatures;
  early_out_scheme?: EarlyOutScheme;
}
/**
 * UNDOCUMENTED.
 */
export interface Description3 {
  identifier: Identifier3;
  [k: string]: unknown;
}
/**
 * A Feature, and their associated Conditions, for attempted placement. These features will be evaluated as ordered.
 */
export interface ConditionalFeature {
  places_feature: PlacesFeature1;
  condition: MolangString180;
}
/**
 * `minecraft:geode_feature` generates a rock formation to simulate a geode. Each layer of, and block within, the geode can be replaced.
 * Succeeds if: At least one block within the geode is placed.
 * Fails if: All blocks within the geode fail to be placed.
 */
export interface GeodeFeature {
  description: Description4;
  filler: Filler;
  inner_layer: InnerLayer;
  alternate_inner_layer: AlternateInnerLayer;
  middle_layer: MiddleLayer;
  outer_layer: OuterLayer;
  inner_placements?: InnerPlacements;
  /**
   * The minimum distance each distribution point must be from the outer wall. [0,10]
   */
  min_outer_wall_distance: number;
  /**
   * The maximum distance each distribution point can be from the outer wall. [0,20]
   */
  max_outer_wall_distance: number;
  /**
   * The minimum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all destribution points. [0,10]
   */
  min_distribution_points: number;
  /**
   * The maximum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all destribution points. [0,20]
   */
  max_distribution_points: number;
  /**
   * The lowest possible value of random offset applied to the position of each distribution point. [0,10]
   */
  min_point_offset: number;
  /**
   * The highest possible value of random offset applied to the position of each distribution point. [0,10]
   */
  max_point_offset: number;
  /**
   * The maximum possible radius of the geode generated.
   */
  max_radius: number;
  /**
   * An offset applied to each distribution point that forms the geode crack opening. [0,10]
   */
  crack_point_offset: number;
  /**
   * The likelihood of a geode generating with a crack in its shell. [0,1]
   */
  generate_crack_chance: number;
  /**
   * How large the crack opening of the geode should be when generated. [0,5]
   */
  base_crack_size: number;
  /**
   * A multiplier applied to the noise that is applied to the distribution points within the geode. Higher = more noisy.
   */
  noise_multiplier: number;
  /**
   * The likelihood that a special block will be placed on the inside of the geode. [0,1]
   */
  use_potential_placements_chance: number;
  /**
   * The likelihood that a block in the innermost layer of the geode will be replaced with an alternate option. [0,1]
   */
  use_alternate_layer0_chance: number;
  /**
   *  If true, the potential placement block will only be placed on the alternate layer0 blocks that get placed. Potential placement blocks are blocks that depend on the existance of another block to be placed. The latter are the layer0 alternate blocks.
   */
  placements_require_layer0_alternate: boolean;
  /**
   * The threshold of invalid blocks for a geode to have a distribution point in before it aborts generation entirely.
   */
  invalid_blocks_threshold: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Description4 {
  identifier: Identifier4;
  [k: string]: unknown;
}
/**
 * `minecraft:growing_plant_feature` places a growing plant in the world. A growing plant is a column that is anchored either to the ceiling or the floor, based on its growth direction.
 * The growing plant has a body and a head, where the head is the tip of the plant, and the body consists of the remainder blocks.
 * This feature can be used to define growing plants with variable body and head blocks, e.g. Cave Vines.
 */
export interface GrowingPlantFeature {
  description: Description5;
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
 * UNDOCUMENTED.
 */
export interface Description5 {
  identifier: Identifier5;
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
/**
 * `minecraft:hell_cave_carver_feature` carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.This feature will also only work when placed specifically in the pass `pregeneration_pass`.
 */
export interface HellCaveCarverFeature {
  description: Description6;
  fill_with?: Identifier7;
  width_modifier?: Identifier8;
}
/**
 * UNDOCUMENTED.
 */
export interface Description6 {
  identifier: Identifier6;
  [k: string]: unknown;
}
/**
 * `minecraft:multiface_feature` places one or a few multiface blocks on floors/walls/ceilings. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if this feature can be placed on them based on the list provided in the `can_place_on` field. If no `can_replace_on` field is specified, the `place_block` block can be placed on any existing block.
 * This feature will also try to spread the `place_block` block around the location in world the feature is placed.
 * Succeeds if: At least one block is successfully placed.
 * Fails if: All block placements fail.
 */
export interface MultifaceFeature {
  description: Description7;
  places_block: PlacesBlock;
  /**
   * How far, in blocks, this feature can search for a valid position to place.
   */
  search_range: number;
  /**
   * Can this feature be placed on the ground (top face of a block)?.
   */
  can_place_on_floor: boolean;
  /**
   * Can this feature be placed on the ceiling (bottom face of a block)?.
   */
  can_place_on_ceiling: boolean;
  /**
   * Can this feature be placed on the wall (side faces of a block)?.
   */
  can_place_on_wall: boolean;
  /**
   * For each block placed by this feature, how likely will that block spread to another?.
   */
  chance_of_spreading: number;
  can_place_on?: CanPlaceOn;
}
/**
 * UNDOCUMENTED.
 */
export interface Description7 {
  identifier: Identifier9;
  [k: string]: unknown;
}
/**
 * `minecraft:ore_feature` places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list provided in the `may_replace` field of a `replace_rules` entry. If no `may_replace` field is specified in a `replace_rule` entry, the ore block can replace any existing block.
 * Succeeds if: At least one ore block is successfully placed.
 * Fails if: All ore block placements fail.
 */
export interface OreFeature {
  description: Description8;
  /**
   * The number of blocks to be placed.
   */
  count: number;
  replace_rules?: ReplaceRules;
}
/**
 * UNDOCUMENTED.
 */
export interface Description8 {
  identifier: Identifier10;
  [k: string]: unknown;
}
/**
 * If a rule is resolved, the rest will not be resolved for that block position.
 */
export interface RepalceRule {
  places_block: PlacesBlock1;
  may_replace?: MayReplace;
  [k: string]: unknown;
}
/**
 * `minecraft:rect_layout` places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list provided in the `may_replace` field of a `replace_rules` entry. If no `may_replace` field is specified in a `replace_rule` entry, the ore block can replace any existing block.
 * Succeeds if: At least one ore block is successfully placed.
 * Fails if: All ore block placements fail.
 */
export interface RectLayout {
  description: Description9;
  /**
   * Ratio of a Chunk to be filled with empty space rather than features.
   */
  ratio_of_empty_space?: number;
  feature_areas: FeatureAreas;
}
/**
 * UNDOCUMENTED.
 */
export interface Description9 {
  identifier: Identifier11;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface FeatureArea {
  feature?: Feature;
  area_dimensions?: AreaDimensions;
}
/**
 * `minecraft:scan_surface` scans the surface of a Chunk, calling place() on the surface of each block column.
 * Succeeds if: A Feature was successfully placed during the scan.
 * Fails if: No Feature was placed during the course of the scan.
 */
export interface RectLayout1 {
  description: Description10;
  scan_surface_feature: ScanSurfaceFeature;
}
/**
 * UNDOCUMENTED.
 */
export interface Description10 {
  identifier: Identifier12;
  [k: string]: unknown;
}
/**
 * `minecraft:scatter_feature` scatters a feature throughout a chunk. The `x`, `y`, and `z` fields are per-coordinate parameters.
 * Note that coordinates represent an offset from the input position, not an absolute position. Coordinates may be a single value, a random distribution, or molang expression that resolves to a numeric value. The `coordinate_eval_order` field is provided for finer control of coordinate resolution (particularly when using the `grid` distribution). `iterations` controls how many individual placements should occur if the `scatter_chance` check succeeds. The `scatter_chance` check happens once, so either all placements will run or none will.
 * Succeeds if: At least one feature placement succeeds.
 * Fails if: All feature placements fail.
 */
export interface ScatterFeature {
  description: Description11;
  places_feature: PlacesFeature2;
  /**
   * If true, snaps the y-value of the scattered position to the terrain heightmap. If false or unset, y-value is unmodified.
   */
  project_input_to_floor?: boolean;
  iterations?: Iterations;
  scatter_chance?: ScatterChance;
  coordinate_eval_order?: CoordinateEvalOrder;
  x?: X;
  y?: X1;
  z?: X2;
}
/**
 * UNDOCUMENTED.
 */
export interface Description11 {
  identifier: Identifier13;
  [k: string]: unknown;
}
/**
 * `minecraft:search_feature` sweeps a volume searching for a valid placement location for its referenced feature. The `search_volume` field specifies the axis-aligned bounding box that defines the boundaries of the search. The search sweeps along the axis defined by the `search_axis` field, layer by layer. For example, if `search_axis` = '-x', blocks with greater x values will be checked before blocks with lower x values. Each layer is searched from the bottom-left to the top-right before moving to the next layer along the axis. By default, only one valid position must be found, but this can be altered by specifying the `required_successes` field. If fewer than the required successes are found, no placement will occur.
 * Succeeds if: The number of valid positions is equal to the value specified by `required_successes`.
 * Fails if: The number of valid positions is less than the value specified by `required_successes`.
 */
export interface SearchFeature {
  description: Description12;
  places_feature?: BlockceptionMinecraftFeatureIdentifier;
  search_volume?: PlacesFeature3;
  search_axis: SearchAxis;
  /**
   * Number of valid positions the search must find in order to place the referenced feature.
   */
  required_successes?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Description12 {
  identifier: Identifier14;
  [k: string]: unknown;
}
/**
 * Axis-aligned bounding box that will be searched for valid placement positions. Expressed as offsets from the input position.
 */
export interface PlacesFeature3 {
  max: Max;
  min: Min;
}
/**
 * `minecraft:sequence_feature` places a collection of features sequentially, in the order they appear in data. The output position of the previous feature is used as the input position for the next. For example, a tree feature is placed at (0, 0, 0) and places blocks up to (0, 10, 0). The next feature in the sequence begins at (0, 10, 0).
 * Succeeds if: All features in the sequence are successfully placed.
 * Fails if: Any feature in the sequence fails to be placed. Features that have not yet been placed at the time of failure are skipped.
 */
export interface SequenceFeature {
  description: Description13;
  features: Features1;
}
/**
 * UNDOCUMENTED.
 */
export interface Description13 {
  identifier: Identifier15;
  [k: string]: unknown;
}
/**
 * `minecraft:single_block_feature` places a single block in the world. The `may_place_on` and `may_replace` fields are allowlists which specify where the block can be placed. If these fields are omitted, the block can be placed anywhere. The block's internal survivability and placement rules can optionally be enforced with the `enforce_survivability_rules` and `enforce_placement_rules` fields. These rules are specified per-block and are typically designed to produce high quality gameplay or natural behavior. However, enabling this enforcement may make it harder to debug placement failures.
 *  Succeeds if: The block is successfully placed in the world.
 *  Fails if: The block fails to be placed.
 */
export interface SingleBlockFeature {
  description: Description14;
  places_block: PlacesBlock2;
  /**
   * If true, enforce the block's canPlace check.
   */
  enforce_placement_rules: boolean;
  /**
   * If true, enforce the block's canSurvive check.
   */
  enforce_survivability_rules: boolean;
  may_attach_to?: MayAttachTo;
  may_replace?: MayReplace1;
}
/**
 * UNDOCUMENTED.
 */
export interface Description14 {
  identifier: Identifier16;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface MayAttachTo {
  min_sides_must_attach?: MinimumSidesMustAttach;
  auto_rotate?: AutoRotate;
  top?: Top;
  bottom?: Bottom;
  north?: North;
  south?: South;
  east?: East;
  west?: West;
  all?: All;
  sides?: Sides;
}
/**
 * UNDOCUMENTED.
 */
export interface MinimumSidesMustAttach {
  [k: string]: unknown;
}
/**
 * Automatically rotate the block to attach sensibly.
 */
export interface AutoRotate {
  [k: string]: unknown;
}
/**
 * `minecraft:snap_to_surface_feature` snaps the y-value of a feature placement pos to the floor or the ceiling within the provided `vertical_search_range`. The placement biome is preserved.
 * If the snap position goes outside of the placement biome, placement will fail.
 */
export interface SnapToSurfaceFeature {
  description: Description15;
  feature_to_snap: FeatureToSnap;
  /**
   * Range to search for a floor or ceiling for snaping the feature.
   */
  vertical_search_range: number;
  surface?: Surface;
}
/**
 * UNDOCUMENTED.
 */
export interface Description15 {
  identifier: Identifier17;
  [k: string]: unknown;
}
/**
 * `minecraft:structure_template_feature` places a structure in the world. The structure must be stored as a .mcstructure file in the `structures` subdirectory of a behavior pack. It is possible to reference structures that are part of other behavior packs, they do not need to come from the same behavior pack as this feature. Constraints can be defined to specify where the structure is allowed to be placed. During placement, the feature will search for a position within the 'adjustment_radius' that satisfies all constraints. If none are found, the structure will not be placed.
 * Succeeds if: The structure is placed in the world.
 * Fails if: The structure fails to be placed within the world.
 */
export interface StructureTemplateFeature {
  description: Description16;
  /**
   * Reference to the structure to be placed.
   */
  structure_name: string;
  /**
   * How far the structure is allowed to move when searching for a valid placement position. Search is radial, stopping when the nearest valid position is found. Defaults to 0 if omitted.
   */
  adjustment_radius?: number;
  facing_direction?: FacingDirection;
  /**
   * Specific constraints that must be satisfied when placing this structure.
   */
  constraints: {
    grounded?: Grounded;
    unburied?: Unburied;
    block_intersection?: Unburied1;
  };
}
/**
 * UNDOCUMENTED.
 */
export interface Description16 {
  identifier: Identifier18;
  [k: string]: unknown;
}
/**
 * When specified, ensures the structure is on the ground.
 */
export interface Grounded {}
/**
 * When specified, ensures the structure has air above it.
 */
export interface Unburied {}
/**
 * When specified, ensures the structure has air above it.
 */
export interface Unburied1 {
  block_allowlist?: BlockAllowlist;
  block_whitelist?: BlockWhitelist;
}
/**
 * Feature type 'minecraft:tree_feature' has not yet been documented.
 */
export interface StructureTemplateFeature1 {
  description: Description17;
  base_block?: BaseBlock;
  base_cluster?: BaseCluster;
  may_grow_on?: MayGrowOn;
  may_replace?: MayGrowOn1;
  may_grow_through?: MayGrowOn2;
  acacia_trunk?: AcaciaTrunk;
  fallen_trunk?: FallenTrunk;
  fancy_trunk?: FancyTrunk;
  mega_trunk?: MegaTrunk;
  trunk?: Trunk;
  acacia_canopy?: AcaciaCanopy1;
  canopy?: Canopy1;
  fancy_canopy?: FancyCanopy1;
  mega_canopy?: MegaCanopy1;
  mega_pine_canopy?: MegaPineCanopy1;
  pine_canopy?: PineCanopy1;
  roofed_canopy?: RoofedCanopy1;
  spruce_canopy?: SpruceCanopy1;
  random_spread_canopy?: RandomSpreadCanopy;
}
/**
 * UNDOCUMENTED.
 */
export interface Description17 {
  identifier: Identifier19;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface BaseCluster {
  may_replace: MayReplace2;
  /**
   * UNDOCUMENTED.
   */
  num_clusters: number;
  /**
   * UNDOCUMENTED.
   */
  cluster_radius: number;
}
/**
 * UNDOCUMENTED.
 */
export interface AcaciaTrunk {
  /**
   * UNDOCUMENTED.
   */
  trunk_width?: number;
  trunk_height?: TrunkHeight;
  trunk_lean?: {
    [k: string]: unknown;
  };
  trunk_block?: TrunkBlock;
  branches?: Branches;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkHeight {
  /**
   * UNDOCUMENTED.
   */
  base?: number;
  intervals?: Intervals;
  /**
   * UNDOCUMENTED.
   */
  min_height_for_canopy?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Branches {
  /**
   * UNDOCUMENTED.
   */
  branch_length?: number;
  /**
   * UNDOCUMENTED.
   */
  branch_position?: number;
  branch_chance?: ChanceInformation;
  branch_canopy?: BranchCanopy;
  trunk_decoration?: TrunkDecoration;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface BranchCanopy {
  acacia_canopy?: AcaciaCanopy;
  canopy?: Canopy;
  fancy_canopy?: FancyCanopy;
  mega_canopy?: MegaCanopy;
  mega_pine_canopy?: MegaPineCanopy;
  pine_canopy?: PineCanopy;
  roofed_canopy?: RoofedCanopy;
  spruce_canopy?: SpruceCanopy;
}
/**
 * UNDOCUMENTED.
 */
export interface AcaciaCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_size?: number;
  leaf_block?: LeafBlock;
  /**
   * UNDOCUMENTED.
   */
  simplify_canopy?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface Canopy {
  canopy_offset?: CanopyOffset;
  /**
   * UNDOCUMENTED.
   */
  min_width?: number;
  canopy_slope?: CanopySlope;
  variation_chance?: VariationChance;
  leaf_block?: LeafBlock1;
  canopy_decoration?: CanopyDecoration;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopyOffset {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopySlope {
  /**
   * UNDOCUMENTED.
   */
  rise?: number;
  /**
   * UNDOCUMENTED.
   */
  run?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation1 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopyDecoration {
  decoration_chance?: ChanceInformation2;
  decoration_block?: DecorationBlock;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation2 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FancyCanopy {
  /**
   * UNDOCUMENTED.
   */
  height?: number;
  /**
   * UNDOCUMENTED.
   */
  radius?: number;
  leaf_block?: LeafBlock2;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  /**
   * UNDOCUMENTED.
   */
  simplify_canopy?: boolean;
  leaf_block?: LeafBlock3;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaPineCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  radius_step_modifier?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  leaf_block?: LeafBlock4;
}
/**
 * UNDOCUMENTED.
 */
export interface PineCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  leaf_block?: LeafBlock5;
}
/**
 * UNDOCUMENTED.
 */
export interface RoofedCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  /**
   * UNDOCUMENTED.
   */
  outer_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  inner_radius?: number;
  leaf_block?: LeafBlock6;
}
/**
 * UNDOCUMENTED.
 */
export interface SpruceCanopy {
  /**
   * UNDOCUMENTED.
   */
  lower_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  upper_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  max_radius?: number;
  leaf_block?: LeafBlock7;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkDecoration {
  decoration_chance?: ChanceInformation3;
  decoration_block?: DecorationBlock1;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection1;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation3 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FallenTrunk {
  /**
   * UNDOCUMENTED.
   */
  log_length?: number;
  /**
   * UNDOCUMENTED.
   */
  stump_height?: number;
  /**
   * UNDOCUMENTED.
   */
  height_modifier?: number;
  trunk_block?: TrunkBlock1;
  log_decoration_feature?: LogDecorationFeature;
  trunk_decoration?: TrunkDecoration1;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkDecoration1 {
  decoration_chance?: ChanceInformation4;
  decoration_block?: DecorationBlock2;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection2;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation4 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FancyTrunk {
  trunk_height?: TrunkHeight1;
  /**
   * UNDOCUMENTED.
   */
  trunk_width?: number;
  branches?: Branches1;
  trunk_block?: TrunkBlock2;
  /**
   * UNDOCUMENTED.
   */
  width_scale?: number;
  /**
   * UNDOCUMENTED.
   */
  foliage_altitude_factor?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkHeight1 {
  /**
   * UNDOCUMENTED.
   */
  base?: number;
  /**
   * UNDOCUMENTED.
   */
  variance?: number;
  /**
   * UNDOCUMENTED.
   */
  scale?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Branches1 {
  /**
   * UNDOCUMENTED.
   */
  slope?: number;
  /**
   * UNDOCUMENTED.
   */
  density?: number;
  /**
   * UNDOCUMENTED.
   */
  min_altitude_factor?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaTrunk {
  /**
   * UNDOCUMENTED.
   */
  trunk_width?: number;
  trunk_height?: TrunkHeight2;
  trunk_block?: TrunkBlock3;
  trunk_decoration?: TrunkDecoration2;
  branches?: Branches2;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkHeight2 {
  /**
   * UNDOCUMENTED.
   */
  base?: number;
  intervals?: Intervals1;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkDecoration2 {
  decoration_chance?: ChanceInformation5;
  decoration_block?: DecorationBlock3;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection3;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation5 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Branches2 {
  /**
   * UNDOCUMENTED.
   */
  branch_length?: number;
  /**
   * UNDOCUMENTED.
   */
  branch_slope?: number;
  /**
   * UNDOCUMENTED.
   */
  branch_interval?: number;
  branch_altitude_factor?: BranchAltitudeFactor;
  branch_canopy?: BranchCanopy1;
}
/**
 * UNDOCUMENTED.
 */
export interface BranchAltitudeFactor {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface BranchCanopy1 {
  acacia_canopy?: AcaciaCanopy;
  canopy?: Canopy;
  fancy_canopy?: FancyCanopy;
  mega_canopy?: MegaCanopy;
  mega_pine_canopy?: MegaPineCanopy;
  pine_canopy?: PineCanopy;
  roofed_canopy?: RoofedCanopy;
  spruce_canopy?: SpruceCanopy;
}
/**
 * UNDOCUMENTED.
 */
export interface Trunk {
  /**
   * UNDOCUMENTED.
   */
  trunk_height?: number;
  /**
   * UNDOCUMENTED.
   */
  height_modifier?: number;
  can_be_submerged?: CanBeSubmerged;
  trunk_block?: TrunkBlock4;
  trunk_decoration?: TrunkDecoration3;
}
/**
 * UNDOCUMENTED.
 */
export interface TrunkDecoration3 {
  decoration_chance?: ChanceInformation6;
  decoration_block?: DecorationBlock4;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection4;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation6 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface AcaciaCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_size?: number;
  leaf_block?: LeafBlock8;
  /**
   * UNDOCUMENTED.
   */
  simplify_canopy?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface Canopy1 {
  canopy_offset?: CanopyOffset1;
  /**
   * UNDOCUMENTED.
   */
  min_width?: number;
  canopy_slope?: CanopySlope1;
  variation_chance?: VariationChance1;
  leaf_block?: LeafBlock9;
  canopy_decoration?: CanopyDecoration1;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopyOffset1 {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopySlope1 {
  /**
   * UNDOCUMENTED.
   */
  rise?: number;
  /**
   * UNDOCUMENTED.
   */
  run?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface CanopyDecoration1 {
  decoration_chance?: ChanceInformation7;
  decoration_block?: DecorationBlock5;
  /**
   * UNDOCUMENTED.
   */
  num_steps?: number;
  step_direction?: StepDirection5;
}
/**
 * UNDOCUMENTED.
 */
export interface ChanceInformation7 {
  /**
   * UNDOCUMENTED.
   */
  numerator?: number;
  /**
   * UNDOCUMENTED.
   */
  denominator?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FancyCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  height?: number;
  /**
   * UNDOCUMENTED.
   */
  radius?: number;
  leaf_block?: LeafBlock10;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  /**
   * UNDOCUMENTED.
   */
  simplify_canopy?: boolean;
  leaf_block?: LeafBlock11;
}
/**
 * UNDOCUMENTED.
 */
export interface MegaPineCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  radius_step_modifier?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  leaf_block?: LeafBlock12;
}
/**
 * UNDOCUMENTED.
 */
export interface PineCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  base_radius?: number;
  leaf_block?: LeafBlock13;
}
/**
 * UNDOCUMENTED.
 */
export interface RoofedCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  core_width?: number;
  /**
   * UNDOCUMENTED.
   */
  outer_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  inner_radius?: number;
  leaf_block?: LeafBlock14;
}
/**
 * UNDOCUMENTED.
 */
export interface SpruceCanopy1 {
  /**
   * UNDOCUMENTED.
   */
  lower_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  upper_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  max_radius?: number;
  leaf_block?: LeafBlock15;
}
/**
 * UNDOCUMENTED.
 */
export interface RandomSpreadCanopy {
  /**
   * UNDOCUMENTED.
   */
  canopy_height?: number;
  /**
   * UNDOCUMENTED.
   */
  canopy_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  leaf_placement_attempts?: number;
  leaf_blocks?: LeafBlocks;
}
/**
 * 'minecraft:underwater_cave_carver_feature' carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.This feature will specifically target creating caves only below sea level.
 * This feature will also only work when placed specifically in the pass `pregeneration_pass`.
 */
export interface UnderwaterCaveCarverFeature {
  description: Description18;
  fill_with?: FillWith1;
  width_modifier?: WidthModifier1;
  replace_air_with?: ReplaceAirWith;
}
/**
 * UNDOCUMENTED.
 */
export interface Description18 {
  identifier: Identifier20;
  [k: string]: unknown;
}
/**
 * Feature type `minecraft:vegetation_patch_feature` has not yet been documented.
 */
export interface VegetationPatchFeature {
  description: Description19;
  replaceable_blocks?: ReplaceableBlocks;
  ground_block?: GroundBlock;
  vegetation_feature?: VegetationFeature;
  /**
   * UNDOCUMENTED.
   */
  surface?: string;
  /**
   * UNDOCUMENTED.
   */
  depth?: number;
  /**
   * UNDOCUMENTED.
   */
  extra_deep_block_chance?: number;
  /**
   * UNDOCUMENTED.
   */
  vertical_range?: number;
  /**
   * UNDOCUMENTED.
   */
  vegetation_chance?: number;
  /**
   * UNDOCUMENTED.
   */
  horizontal_radius?: number;
  /**
   * UNDOCUMENTED.
   */
  extra_edge_column_chance?: number;
  /**
   * UNDOCUMENTED.
   */
  waterlogged?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface Description19 {
  identifier: Identifier21;
  [k: string]: unknown;
}
/**
 * 'minecraft:weighted_random_feature' randomly selects and places a feature based on a weight value. Weights are relative, with higher values making selection more likely.
 * Succeeds if: The selected feature is placed.
 * Fails if: The selected feature fails to be placed.
 */
export interface WeightedRandomFeature {
  description: Description20;
  features: Features2;
}
/**
 * UNDOCUMENTED.
 */
export interface Description20 {
  identifier: Identifier22;
  [k: string]: unknown;
}
