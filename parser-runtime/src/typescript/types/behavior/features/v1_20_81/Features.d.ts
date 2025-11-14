/**
 * behavior/features/features.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.477Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
/**
 * Collection of features to be placed one by one. No guarantee of order. All features use the same input position.
 *
 * @minItems 1
 */
export type Features1 = [string, ...string[]];
/**
 * Do not continue placing features once either the first success or first failure has occurred.
 */
export type EarlyOut = 'none' | 'first_failure' | 'first_success';
/**
 * Reference to the block to fill the cave with.
 */
export type FillWith = string;
/**
 * How many blocks to increase the cave radius by, from the center point of the cave.
 */
export type WidthModifier = string | number;
/**
 * The scaling in y
 *
 * @minItems 2
 * @maxItems 2
 */
export type YScale = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type HorizontalRadiusMultiplier = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type VerticalRadiusMultiplier = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type FloorLevel = [number, number];
/**
 * Reference to the block to fill the cave with.
 */
export type OreBlock = string;
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
export type Blocks = [PlantBodyBlock, Age1];
/**
 * Plant body block.
 */
export type PlantBodyBlock = string;
/**
 * Defines the height of the trunk.
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
 * Reference to the block to fill the cave with.
 */
export type Identifier1 = string;
/**
 * How many blocks to increase the cave radius by, from the center point of the cave.
 */
export type Identifier2 = string | number;
/**
 * The scaling in y
 *
 * @minItems 2
 * @maxItems 2
 */
export type YScale1 = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type HorizontalRadiusMultiplier1 = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type VerticalRadiusMultiplier1 = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type FloorLevel1 = [number, number];
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
 * A minecraft block identifier.
 */
export type PlacesBlock2 = string;
/**
 * Defines a block face that is allowed to be exposed to air and/or water. Other faces need to be embedded for blocks to be placed by this feature. Defaults to upwards face
 */
export type ExposedFace = 'up' | 'down' | 'side' | 'north' | 'east' | 'west' | 'south';
/**
 * Named reference of feature to be placed.
 */
export type PlacesFeature = string;
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
 * Type of distribution - uniform random, gaussian (centered in the range),  triangle (centered in the range), or grid (either fixed-step or jittered).
 */
export type Distribution =
  | 'uniform'
  | 'gaussian'
  | 'inverse_gaussian'
  | 'triangle'
  | 'fixed_grid'
  | 'jittered_grid';
/**
 * The lower and upper bound as an offset from the input position
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
 * List of features to be placed in sequence. The output position of the previous feature is used as the input position to the next.
 *
 * @minItems 1
 */
export type Features2 = [Feature, ...Feature[]];
/**
 * A feature to be placed in sequence. The output position of the previous feature is used as the input position to the next.
 */
export type Feature = string;
/**
 * A minecraft block identifier.
 */
export type PlacesBlock3 = string;
/**
 * UNDOCUMENTED.
 */
export type Top = Block1 | Block2[];
/**
 * A minecraft block identifier.
 */
export type Block1 = string;
/**
 * A minecraft block identifier.
 */
export type Block2 = string;
/**
 * UNDOCUMENTED.
 */
export type Bottom = Block1 | Block2[];
/**
 * UNDOCUMENTED.
 */
export type North = Block1 | Block2[];
/**
 * UNDOCUMENTED.
 */
export type South = Block1 | Block2[];
/**
 * UNDOCUMENTED.
 */
export type East = Block1 | Block2[];
/**
 * UNDOCUMENTED.
 */
export type West = Block1 | Block2[];
/**
 * UNDOCUMENTED.
 */
export type All = Block1 | Block2[];
/**
 * UNDOCUMENTED.
 */
export type Sides = Block1 | Block2[];
/**
 * A minecraft block identifier.
 */
export type Block3 = string;
/**
 * A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
 */
export type MayReplace1 = Block3[];
/**
 * Named reference of feature to be snapped.
 */
export type FeatureToSnap = string;
/**
 * Defines the surface that the y-value of the placement position will be snapped to. Valid values: `ceiling` and `floor'
 */
export type Surface = 'ceiling' | 'floor' | 'random_horizontal';
/**
 * Direction the structure will face when placed in the world. Defaults to `random` if omitted.
 */
export type FacingDirection = 'north' | 'south' | 'east' | 'west' | 'random';
/**
 * A minecraft block identifier.
 */
export type Block4 = string;
/**
 * List of blocks the owning structure is allowed to intersect with.
 */
export type BlockAllowlist = Block4[];
/**
 * A minecraft block identifier.
 */
export type Block5 = string;
/**
 * List of blocks the owning structure is allowed to intersect with.
 */
export type BlockWhitelist = Block5[];
/**
 * Named reference of feature to be placed.
 */
export type FeatureToPlace = string;
export type BaseBlock = BlockceptionMinecraftBlockIdentifier | Block6[];
/**
 * A minecraft block identifier.
 */
export type Block6 = string;
/**
 * List of blocks that the base cluster of a tree can replace.
 */
export type MayReplace2 = BlockceptionMinecraftBlockIdentifier[];
/**
 * List of blocks where a tree can grow on.
 */
export type MayGrowOn = BlockceptionMinecraftBlockIdentifier[];
/**
 * List of blocks that a tree can replace.
 */
export type MayReaplce = BlockceptionMinecraftBlockIdentifier[];
/**
 * List of blocks that a tree can grow through.
 */
export type MayGrowThrough = BlockceptionMinecraftBlockIdentifier[];
/**
 * Intervals used to randomize the trunk height, the value of each interval will create a random number where (0 <= rand < interval)), and will be added to the height.
 *
 * @minItems 1
 */
export type Intervals = [number, ...number[]];
/**
 * Number of blocks below the tree height at which diagonal branches can be created.
 */
export type LeanHeight =
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
 * Number of steps taken in X/Z direction while creating a diagonal branch.
 */
export type LeanSteps =
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
 * Length for the diagonal branch in the Y axis.
 */
export type LeanLength =
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
 * A minecraft block identifier.
 */
export type TrunkBlock = string;
/**
 * Length for the branch in the Y axis.
 */
export type BranchLength =
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
 * Starting Y position for the branch.
 */
export type BranchPosition =
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
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * The block thata forms the canopy of the tree.
 */
export type LeafBlock = string;
/**
 * Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a denser tree.
 */
export type VariationChance = ChanceInformation1 | ChanceInformation1[];
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation1 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation2 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock = string;
/**
 * Directions to spread decoration blocks.
 */
export type StepDirection = 'down' | 'up' | 'out' | 'away';
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation3 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation4 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation5 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation6 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * The blocks that form the canopy of the tree
 *
 * @minItems 1
 */
export type LeafBlocks = [LeafBlock] | [LeafBlock, number];
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation7 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock1 = string;
/**
 * Directions to spread decoration blocks.
 */
export type StepDirection1 = 'down' | 'up' | 'out' | 'away';
/**
 * A minecraft block identifier.
 */
export type HangingBlock = string;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation8 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Intervals used to randomize the trunk height, the value of each interval will create a random number where (0 <= rand < interval)), and will be added to the height.
 *
 * @minItems 1
 */
export type Intervals1 = [number, ...number[]];
/**
 * Branch length in X/Z axis.
 */
export type BranchHorizontalLength =
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
 * Branch starting position relative to the top of the tree
 */
export type BranchStartOffsetFromTop =
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
 * Branch end position relative to the top of the tree
 */
export type BranchEndOffsetFromTop =
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
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation9 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Feature that can be used to decorate the fallen log.
 */
export type LogDecorationFeature = string;
/**
 * Length for the branch in the Y axis.
 */
export type BranchLength1 =
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
 * Number of branches to place.
 */
export type BranchSteps =
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
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation10 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Intervals used to randomize the trunk height, the value of each interval will create a random number where (0 <= rand < interval)), and will be added to the height.
 *
 * @minItems 1
 */
export type Intervals2 = [number, ...number[]];
/**
 * Randomized distance between branches.
 */
export type BranchInterval =
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
 * Defines the height of the trunk.
 */
export type TrunkHeight5 =
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
 * Modifier for the height of the trunk.
 */
export type HeightModifier =
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
 * Specifies if the trunk can be submerged.
 */
export type CanBeSubmerged =
  | {
      /**
       * Defines the max depth at which the trunk can be submerged.
       */
      max_depth?: number;
    }
  | boolean;
/**
 * Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a denser tree.
 */
export type VariationChance1 = ChanceInformation1 | ChanceInformation1[];
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation11 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * A minecraft block identifier.
 */
export type DecorationBlock2 = string;
/**
 * Directions to spread decoration blocks.
 */
export type StepDirection2 = 'down' | 'up' | 'out' | 'away';
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation12 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation13 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation14 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation15 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * The blocks that form the canopy of the tree
 *
 * @minItems 1
 */
export type LeafBlocks1 = [LeafBlock] | [LeafBlock, number];
/**
 * A minecraft block identifier.
 */
export type HangingBlock1 = string;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation16 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * The blocks that form the canopy of the tree
 *
 * @minItems 1
 */
export type LeafBlocks2 = [LeafBlock] | [LeafBlock, number];
/**
 * A minecraft block identifier.
 */
export type RootBlock = string;
/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation17 =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
/**
 * A minecraft block identifier.
 */
export type AboveRootBlock = string;
/**
 * A minecraft block identifier.
 */
export type MuddyRootBlock = string;
/**
 * A minecraft block identifier.
 */
export type MudBlock = string;
/**
 * Root offset from the trunk
 */
export type YOffset =
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
 * List of blocks that a root can grow through.
 */
export type RootsMayGrowThrough = BlockceptionMinecraftBlockIdentifier[];
/**
 * A minecraft block identifier.
 */
export type FillWith1 = string;
/**
 * How many blocks to increase the cave radius by, from the center point of the cave.
 */
export type WidthModifier1 = string | number;
/**
 * The scaling in y
 *
 * @minItems 2
 * @maxItems 2
 */
export type YScale2 = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type HorizontalRadiusMultiplier2 = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type VerticalRadiusMultiplier2 = [number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type FloorLevel2 = [number, number];
/**
 * A minecraft block identifier.
 */
export type ReplaceAirWith = string;
/**
 * A minecraft block identifier.
 */
export type ReplaceBlock = string;
/**
 * Blocks that can be replaced by the ground blocks on the patch.
 */
export type ReplaceableBlocks = ReplaceBlock[];
/**
 * A minecraft block identifier.
 */
export type GroundBlock = string;
/**
 * Feature that will be placed by the patch.
 */
export type VegetationFeature = string;
/**
 * Determines if a vegetation patch will grow from the ceiling or the floor.
 */
export type Surface1 = 'floor' | 'ceiling';
/**
 *  Collection of weighted features that placement will select from.
 *
 * @minItems 1
 */
export type Features3 = [Feature1, ...Feature1[]];
/**
 * Named reference to a feature.
 */
export type Feature1 = [] | [Feature2] | [Feature2, number];
/**
 * Named reference to a feature.
 */
export type Feature2 = string;

/**
 * Features are decorations scattered throughout the world. Things such as trees, plants, flowers, springs, ore, and coral are all features. Basically, if it isn't the terrain or a mob, it's probably a feature!
 */
export interface Features {
  format_version: FormatVersion;
  'minecraft:aggregate_feature'?: AggregateFeature;
  'minecraft:cave_carver_feature'?: CaveCarverFeature;
  'minecraft:fossil_feature'?: FossilFeature;
  'minecraft:geode_feature'?: GeodeFeature;
  'minecraft:growing_plant_feature'?: GrowingPlantFeature;
  'minecraft:multiface_feature'?: MultifaceFeature;
  'minecraft:nether_cave_carver_feature'?: NetherCaveCarverFeature;
  'minecraft:ore_feature'?: OreFeature;
  'minecraft:partially_exposed_blob_feature'?: PartiallyExposedBlobFeature;
  'minecraft:scatter_feature'?: ScatterFeature;
  'minecraft:search_feature'?: SearchFeature;
  'minecraft:sequence_feature'?: SequenceFeature;
  'minecraft:single_block_feature'?: SingleBlockFeature;
  'minecraft:snap_to_surface_feature'?: SnapToSurfaceFeature;
  'minecraft:structure_template_feature'?: StructureTemplateFeature;
  'minecraft:surface_relative_threshold_feature'?: SurfaceRelativeThresholdFeature;
  'minecraft:tree_feature'?: TreeFeature;
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
  features: Features1;
  early_out?: EarlyOut;
}
/**
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
/**
 * `minecraft:cave_carver_feature` carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature will also only work when placed specifically in the pass `pregeneration_pass`.
 */
export interface CaveCarverFeature {
  description: Description;
  fill_with?: FillWith;
  width_modifier?: WidthModifier;
  /**
   * The chance to skip doing the carve (1 / value).
   */
  skip_carve_chance?: number;
  /**
   * The height limit where we attempt to carve
   */
  height_limit?: number;
  y_scale?: YScale;
  horizontal_radius_multiplier?: HorizontalRadiusMultiplier;
  vertical_radius_multiplier?: VerticalRadiusMultiplier;
  floor_level?: FloorLevel;
}
/**
 * 'minecraft:fossil_feature' generates a skeletal structure composed of bone blocks and parametric ore blocks.
 */
export interface FossilFeature {
  description: Description;
  ore_block?: OreBlock;
  /**
   * UNDOCUMENTED
   */
  max_empty_corners?: number;
}
/**
 * `minecraft:geode_feature` generates a rock formation to simulate a geode. Each layer of, and block within, the geode can be replaced.
 * Succeeds if: At least one block within the geode is placed.
 * Fails if: All blocks within the geode fail to be placed.
 */
export interface GeodeFeature {
  description: Description;
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
 * `minecraft:multiface_feature` places one or a few multiface blocks on floors/walls/ceilings. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if this feature can be placed on them based on the list provided in the `can_place_on` field. If no `can_replace_on` field is specified, the `place_block` block can be placed on any existing block.
 * This feature will also try to spread the `place_block` block around the location in world the feature is placed.
 * Succeeds if: At least one block is successfully placed.
 * Fails if: All block placements fail.
 */
export interface MultifaceFeature {
  description: Description;
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
 * `minecraft:nether_cave_carver_feature` carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.This feature will also only work when placed specifically in the pass `pregeneration_pass`.
 */
export interface NetherCaveCarverFeature {
  description: Description;
  fill_with?: Identifier1;
  width_modifier?: Identifier2;
  /**
   * The chance to skip doing the carve (1 / value).
   */
  skip_carve_chance?: number;
  /**
   * The height limit where we attempt to carve
   */
  height_limit?: number;
  y_scale?: YScale1;
  horizontal_radius_multiplier?: HorizontalRadiusMultiplier1;
  vertical_radius_multiplier?: VerticalRadiusMultiplier1;
  floor_level?: FloorLevel1;
}
/**
 * `minecraft:ore_feature` places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list provided in the `may_replace` field of a `replace_rules` entry. If no `may_replace` field is specified in a `replace_rule` entry, the ore block can replace any existing block.
 * Succeeds if: At least one ore block is successfully placed.
 * Fails if: All ore block placements fail.
 */
export interface OreFeature {
  description: Description;
  /**
   * The number of blocks to be placed.
   */
  count: number;
  replace_rules?: ReplaceRules;
  /**
   * Chance of discarding placement if neighboring block is Air.
   */
  discard_chance_on_air_exposure?: number;
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
 * 'minecraft:partially_exposed_blob_feature' generates a blob of the specified block with the specified dimensions For the most part the blob is embedded in the specified surface, however a single side is allowed to be exposed.
 */
export interface PartiallyExposedBlobFeature {
  description: Description;
  places_block: PlacesBlock2;
  /**
   * Defines the cubic radius of the blob.
   */
  placement_radius_around_floor: number;
  /**
   * The probability of trying to place a block at each position within the placement bounds.
   */
  placement_probability_per_valid_position: number;
  exposed_face?: ExposedFace;
}
/**
 * `minecraft:scatter_feature` scatters a feature throughout a chunk. The `x`, `y`, and `z` fields are per-coordinate parameters.
 * Note that coordinates represent an offset from the input position, not an absolute position. Coordinates may be a single value, a random distribution, or molang expression that resolves to a numeric value. The `coordinate_eval_order` field is provided for finer control of coordinate resolution (particularly when using the `grid` distribution). `iterations` controls how many individual placements should occur if the `scatter_chance` check succeeds. The `scatter_chance` check happens once, so either all placements will run or none will.
 * Succeeds if: At least one feature placement succeeds.
 * Fails if: All feature placements fail.
 */
export interface ScatterFeature {
  description: Description;
  places_feature: PlacesFeature;
  /**
   * If true, snaps the y-value of the scattered position to the terrain heightmap. If false or unset, y-value is unmodified.
   */
  project_input_to_floor?: boolean;
  iterations: Iterations;
  scatter_chance?: ScatterChance;
  coordinate_eval_order?: CoordinateEvalOrder;
  x?: X;
  y?: X1;
  z?: X2;
}
/**
 * `minecraft:search_feature` sweeps a volume searching for a valid placement location for its referenced feature. The `search_volume` field specifies the axis-aligned bounding box that defines the boundaries of the search. The search sweeps along the axis defined by the `search_axis` field, layer by layer. For example, if `search_axis` = '-x', blocks with greater x values will be checked before blocks with lower x values. Each layer is searched from the bottom-left to the top-right before moving to the next layer along the axis. By default, only one valid position must be found, but this can be altered by specifying the `required_successes` field. If fewer than the required successes are found, no placement will occur.
 * Succeeds if: The number of valid positions is equal to the value specified by `required_successes`.
 * Fails if: The number of valid positions is less than the value specified by `required_successes`.
 */
export interface SearchFeature {
  description: Description;
  places_feature?: BlockceptionMinecraftFeatureIdentifier;
  search_volume?: PlacesFeature1;
  search_axis: SearchAxis;
  /**
   * Number of valid positions the search must find in order to place the referenced feature.
   */
  required_successes?: number;
}
/**
 * Axis-aligned bounding box that will be searched for valid placement positions. Expressed as offsets from the input position.
 */
export interface PlacesFeature1 {
  max: Max;
  min: Min;
}
/**
 * `minecraft:sequence_feature` places a collection of features sequentially, in the order they appear in data. The output position of the previous feature is used as the input position for the next. For example, a tree feature is placed at (0, 0, 0) and places blocks up to (0, 10, 0). The next feature in the sequence begins at (0, 10, 0).
 * Succeeds if: All features in the sequence are successfully placed.
 * Fails if: Any feature in the sequence fails to be placed. Features that have not yet been placed at the time of failure are skipped.
 */
export interface SequenceFeature {
  description: Description;
  features: Features2;
}
/**
 * `minecraft:single_block_feature` places a single block in the world. The `may_place_on` and `may_replace` fields are allowlists which specify where the block can be placed. If these fields are omitted, the block can be placed anywhere. The block's internal survivability and placement rules can optionally be enforced with the `enforce_survivability_rules` and `enforce_placement_rules` fields. These rules are specified per-block and are typically designed to produce high quality gameplay or natural behavior. However, enabling this enforcement may make it harder to debug placement failures.
 *  Succeeds if: The block is successfully placed in the world.
 *  Fails if: The block fails to be placed.
 */
export interface SingleBlockFeature {
  description: Description;
  places_block: PlacesBlock3;
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
 * The list of valid block and block faces the given block may attach to when being placed.
 */
export interface MayAttachTo {
  min_sides_must_attach?: MinimumSidesMustAttach;
  /**
   * Automatically rotate the block to attach sensibly.
   */
  auto_rotate?: boolean;
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
 * Minimum number of sides that must be attached when being placed.
 */
export interface MinimumSidesMustAttach {
  [k: string]: unknown;
}
/**
 * `minecraft:snap_to_surface_feature` snaps the y-value of a feature placement pos to the floor or the ceiling within the provided `vertical_search_range`. The placement biome is preserved.
 * If the snap position goes outside of the placement biome, placement will fail.
 */
export interface SnapToSurfaceFeature {
  description: Description;
  feature_to_snap: FeatureToSnap;
  /**
   * Range to search for a floor or ceiling for snaping the feature.
   */
  vertical_search_range: number;
  surface?: Surface;
  /**
   * Determines whether the feature can snap through air blocks
   */
  allow_air_placement?: boolean;
  /**
   * Determines whether the feature can snap through water blocks
   */
  allow_underwater_placement?: boolean;
}
/**
 * `minecraft:structure_template_feature` places a structure in the world. The structure must be stored as a .mcstructure file in the `structures` subdirectory of a behavior pack. It is possible to reference structures that are part of other behavior packs, they do not need to come from the same behavior pack as this feature. Constraints can be defined to specify where the structure is allowed to be placed. During placement, the feature will search for a position within the 'adjustment_radius' that satisfies all constraints. If none are found, the structure will not be placed.
 * Succeeds if: The structure is placed in the world.
 * Fails if: The structure fails to be placed within the world.
 */
export interface StructureTemplateFeature {
  description: Description;
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
 * 'minecraft:surface_relative_threshold_feature' determines whether the provided position is below the estimated surface level of the world, and places a feature if so.If the provided position is above configured surface or the surface is not available, placement will fail.
 */
export interface SurfaceRelativeThresholdFeature {
  description: Description;
  feature_to_place: FeatureToPlace;
  /**
   * The minimum number of blocks required to be between the estimated surface level and a valid place for this feature.
   */
  minimum_distance_below_surface?: number;
}
/**
 * 'minecraft:tree_feature' will place a tree in the world. A tree consists of a column that is anchored to a base block with set parameters for what it can be placed on and canopy that extends from the column. Trees support multiple types of canopies, trunks, and roots.
 */
export interface TreeFeature {
  description: Description;
  base_block?: BaseBlock;
  base_cluster?: BaseCluster;
  may_grow_on?: MayGrowOn;
  may_replace?: MayReaplce;
  may_grow_through?: MayGrowThrough;
  acacia_trunk?: AcaciaTrunk;
  cherry_trunk?: CherryTrunk;
  fallen_trunk?: FallenTrunk;
  fancy_trunk?: FancyTrunk;
  mangrove_trunk?: MangroveTrunk;
  mega_trunk?: MegaTrunk;
  trunk?: Trunk;
  acacia_canopy?: AcaciaCanopy1;
  canopy?: Canopy1;
  cherry_canopy?: CherryCanopy1;
  fancy_canopy?: FancyCanopy1;
  mangrove_canopy?: MangroveCanopy1;
  mega_canopy?: MegaCanopy1;
  mega_pine_canopy?: MegaPineCanopy1;
  pine_canopy?: PineCanopy1;
  roofed_canopy?: RoofedCanopy1;
  spruce_canopy?: SpruceCanopy1;
  random_spread_canopy?: RandomSpreadCanopy;
  mangrove_roots?: MangroveRoots;
}
/**
 * Allows you to define a number of clusters for the base of the tree. Used to generate mega tree variants.
 */
export interface BaseCluster {
  may_replace: MayReplace2;
  /**
   * Number of clusters that can be generated.
   */
  num_clusters: number;
  /**
   * Radius where the clusters that can be generated.
   */
  cluster_radius: number;
}
/**
 * Configutarion for the acacia trunk.
 */
export interface AcaciaTrunk {
  /**
   * The width of the tree trunk.
   */
  trunk_width?: number;
  trunk_height?: TrunkHeight;
  trunk_lean?: TrunkLean;
  trunk_block?: TrunkBlock;
  branches?: Branches;
}
/**
 * Configuration object for the trunk height.
 */
export interface TrunkHeight {
  /**
   * Min height for the trunk.
   */
  base?: number;
  intervals?: Intervals;
  /**
   * Min height where the canopy can be placed.
   */
  min_height_for_canopy?: number;
}
/**
 * Configuration object for diagonal branches.
 */
export interface TrunkLean {
  /**
   * If true, diagonal branches will be created.
   */
  allow_diagonal_growth?: boolean;
  lean_height?: LeanHeight;
  lean_steps?: LeanSteps;
  lean_length?: LeanLength;
}
/**
 * Configuration object for branches.
 */
export interface Branches {
  branch_length?: BranchLength;
  branch_position?: BranchPosition;
  branch_chance?: ChanceInformation;
  branch_canopy?: BranchCanopy;
  trunk_decoration?: Decoration;
}
/**
 * Configuration object for the canopy.
 */
export interface BranchCanopy {
  acacia_canopy?: AcaciaCanopy;
  canopy?: Canopy;
  cherry_canopy?: CherryCanopy;
  fancy_canopy?: FancyCanopy;
  mangrove_canopy?: MangroveCanopy;
  mega_canopy?: MegaCanopy;
  mega_pine_canopy?: MegaPineCanopy;
  pine_canopy?: PineCanopy;
  roofed_canopy?: RoofedCanopy;
  spruce_canopy?: SpruceCanopy;
}
/**
 * Configuration object for the acacia canopy.
 */
export interface AcaciaCanopy {
  /**
   * The size of the canopy.
   */
  canopy_size?: number;
  leaf_block?: LeafBlock;
  /**
   * If true the canopy uses a simple pattern.
   */
  simplify_canopy?: boolean;
}
/**
 * Configuration object for the normal canopy.
 */
export interface Canopy {
  canopy_offset?: CanopyOffset;
  /**
   * Min width for the canopy.
   */
  min_width?: number;
  canopy_slope?: CanopySlope;
  variation_chance?: VariationChance;
  leaf_block?: LeafBlock;
  canopy_decoration?: CanopyDecoration;
}
/**
 * Canopy position offset relative to the block above the trunk.
 */
export interface CanopyOffset {
  /**
   * Min canopy position offset.
   */
  min?: number;
  /**
   * Max canopy position offset.
   */
  max?: number;
}
/**
 * Configuration object for the canopy slope.
 */
export interface CanopySlope {
  /**
   * The numerator for the slope fraction.
   */
  rise?: number;
  /**
   * The denominator for the slope fraction.
   */
  run?: number;
}
/**
 * Configuration object for the canopy decoration.
 */
export interface CanopyDecoration {
  decoration_chance?: ChanceInformation2;
  decoration_block?: DecorationBlock;
  /**
   * Number of decoration blocks to place.
   */
  num_steps?: number;
  step_direction?: StepDirection;
}
/**
 * Configuration object for the cherry canopy.
 */
export interface CherryCanopy {
  leaf_block?: LeafBlock;
  /**
   * Number of layers for the canopy.
   */
  height?: number;
  /**
   * The radius of the canopy.
   */
  radius?: number;
  /**
   * The width of the tree trunk.
   */
  trunk_width?: number;
  wide_bottom_layer_hole_chance?: ChanceInformation3;
  corner_hole_chance?: ChanceInformation4;
  hanging_leaves_chance?: ChanceInformation5;
  hanging_leaves_extension_chance?: ChanceInformation6;
}
/**
 * Configuration object for the fancy canopy.
 */
export interface FancyCanopy {
  /**
   * Number of layers for the canopy.
   */
  height?: number;
  /**
   * The radius of the canopy.
   */
  radius?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the mangrove canopy.
 */
export interface MangroveCanopy {
  /**
   * Number of layers for the canopy.
   */
  canopy_height?: number;
  /**
   * The radius of the canopy.
   */
  canopy_radius?: number;
  /**
   * Max number of attempts to create leaf blocks.
   */
  leaf_placement_attempts?: number;
  leaf_blocks?: LeafBlocks;
  canopy_decoration?: Decoration;
  hanging_block?: HangingBlock;
  hanging_block_placement_chance?: ChanceInformation8;
}
/**
 * Configuration object for the decoration.
 */
export interface Decoration {
  decoration_chance?: ChanceInformation7;
  decoration_block?: DecorationBlock1;
  /**
   * Number of decoration blocks to place.
   */
  num_steps?: number;
  step_direction?: StepDirection1;
}
/**
 * Configuration object for the mega canopy.
 */
export interface MegaCanopy {
  /**
   * Number of layers for the canopy.
   */
  canopy_height?: number;
  /**
   * The radius of the canopy.
   */
  base_radius?: number;
  /**
   * Width of the tree trunk.
   */
  core_width?: number;
  /**
   * If true the canopy uses a simple pattern.
   */
  simplify_canopy?: boolean;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the mega pine canopy.
 */
export interface MegaPineCanopy {
  /**
   * Number of layers for the canopy.
   */
  canopy_height?: number;
  /**
   * The radius of the canopy.
   */
  base_radius?: number;
  /**
   * Modifier for the base radius of the canopy.
   */
  radius_step_modifier?: number;
  /**
   * Width of the tree trunk.
   */
  core_width?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the pine canopy.
 */
export interface PineCanopy {
  /**
   * Number of layers for the canopy.
   */
  height?: number;
  /**
   * The radius of the canopy.
   */
  radius?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the roofed canopy.
 */
export interface RoofedCanopy {
  /**
   * Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle.
   */
  canopy_height?: number;
  /**
   * Width of the tree trunk.
   */
  core_width?: number;
  /**
   * Radius used for the base and top layers.
   */
  outer_radius?: number;
  /**
   * Radius used for the middle layers.
   */
  inner_radius?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the spruce canopy.
 */
export interface SpruceCanopy {
  /**
   * Min canopy position offset.
   */
  lower_offset?: number;
  /**
   * Max canopy position offset.
   */
  upper_offset?: number;
  /**
   * Max radius of the canopy.
   */
  max_radius?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configutarion for the cherry trunk.
 */
export interface CherryTrunk {
  trunk_block?: TrunkBlock;
  trunk_height?: TrunkHeight1;
  branches?: Branches1;
}
/**
 * Configuration object for the trunk height.
 */
export interface TrunkHeight1 {
  /**
   * Min height for the trunk.
   */
  base?: number;
  intervals?: Intervals1;
}
/**
 * Configuration object for branches.
 */
export interface Branches1 {
  tree_type_weights?: TreeTypeWeights;
  branch_horizontal_length?: BranchHorizontalLength;
  branch_start_offset_from_top?: BranchStartOffsetFromTop;
  branch_end_offset_from_top?: BranchEndOffsetFromTop;
  branch_chance?: ChanceInformation9;
  branch_canopy?: BranchCanopy;
}
/**
 * Configuration object to pick a tree variant based on a weighted random number
 */
export interface TreeTypeWeights {
  /**
   * Tree variant with one branch.
   */
  one_branch?: number;
  /**
   * Tree variant with two branches.
   */
  two_branches?: number;
  /**
   * Tree variant with three branch.
   */
  two_branches_and_trunk?: number;
}
/**
 * Configutarion for the fallen trunk.
 */
export interface FallenTrunk {
  /**
   * Length of the fallen log.
   */
  log_length?: number;
  /**
   * height of the stump.
   */
  stump_height?: number;
  /**
   * Modifier for the length of the fallen log.
   */
  height_modifier?: number;
  trunk_block?: TrunkBlock;
  log_decoration_feature?: LogDecorationFeature;
  trunk_decoration?: Decoration;
}
/**
 * Configutarion for the fancy trunk.
 */
export interface FancyTrunk {
  trunk_height?: TrunkHeight2;
  /**
   * The width of the tree trunk.
   */
  trunk_width?: number;
  branches?: Branches2;
  trunk_block?: TrunkBlock;
  /**
   * Scale modifier for the tree radius.
   */
  width_scale?: number;
  /**
   * Min height for foliage. Represented by a percentage of the tree height.
   */
  foliage_altitude_factor?: number;
}
/**
 * Configuration object for the trunk height.
 */
export interface TrunkHeight2 {
  /**
   * Min height for the trunk.
   */
  base?: number;
  /**
   * Modifier for the trunk height.
   */
  variance?: number;
  /**
   * Final tree height is multiplied by this scale.
   */
  scale?: number;
}
/**
 * Configuration object for branches.
 */
export interface Branches2 {
  /**
   * Slope for the branch, where 0 is horizontal and 1 is vertical.
   */
  slope?: number;
  /**
   * Density of foliage.
   */
  density?: number;
  /**
   * Min height for branches. Represented by a percentage of the tree height.
   */
  min_altitude_factor?: number;
}
/**
 * Configutarion for the mangrove trunk.
 */
export interface MangroveTrunk {
  /**
   * The width of the tree trunk.
   */
  trunk_width?: number;
  trunk_height?: TrunkHeight3;
  trunk_block?: TrunkBlock;
  branches?: Branches3;
  trunk_decoration?: Decoration;
}
/**
 * Configuration object for the trunk height.
 */
export interface TrunkHeight3 {
  /**
   * Min height for the trunk.
   */
  base?: number;
  /**
   * Tree height modifier A.
   */
  height_rand_a?: number;
  /**
   * Tree height modifier B.
   */
  height_rand_b?: number;
}
/**
 * Configuration object for branches.
 */
export interface Branches3 {
  branch_length?: BranchLength1;
  branch_steps?: BranchSteps;
  branch_chance?: ChanceInformation10;
}
/**
 * Configutarion for the mega trunk.
 */
export interface MegaTrunk {
  /**
   * The width of the tree trunk.
   */
  trunk_width?: number;
  trunk_height?: TrunkHeight4;
  trunk_block?: TrunkBlock;
  trunk_decoration?: Decoration;
  branches?: Branches4;
}
/**
 * Configuration object for the trunk height.
 */
export interface TrunkHeight4 {
  /**
   * Min height for the trunk.
   */
  base?: number;
  intervals?: Intervals2;
  /**
   * Min height where the canopy can be placed.
   */
  min_height_for_canopy?: number;
}
/**
 * Configuration object for branches.
 */
export interface Branches4 {
  /**
   * Length for the branch.
   */
  branch_length?: number;
  /**
   * Slope for the branch, where 0 is horizontal and 1 is vertical.
   */
  branch_slope?: number;
  branch_interval?: BranchInterval;
  branch_altitude_factor?: BranchAltitudeFactor;
  branch_canopy?: BranchCanopy;
}
/**
 * Altitude at which branches can spawn, relative to the tree height.
 */
export interface BranchAltitudeFactor {
  /**
   * Min altitude where branches can spawn.
   */
  min?: number;
  /**
   * Max altitude where branches can spawn.
   */
  max?: number;
}
/**
 * Configutarion for the normal trunk.
 */
export interface Trunk {
  trunk_height?: TrunkHeight5;
  height_modifier?: HeightModifier;
  can_be_submerged?: CanBeSubmerged;
  trunk_block?: TrunkBlock;
  trunk_decoration?: Decoration;
}
/**
 * Configuration object for the acacia canopy.
 */
export interface AcaciaCanopy1 {
  /**
   * The size of the canopy.
   */
  canopy_size?: number;
  leaf_block?: LeafBlock;
  /**
   * If true the canopy uses a simple pattern.
   */
  simplify_canopy?: boolean;
}
/**
 * Configuration object for the normal canopy.
 */
export interface Canopy1 {
  canopy_offset?: CanopyOffset1;
  /**
   * Min width for the canopy.
   */
  min_width?: number;
  canopy_slope?: CanopySlope1;
  variation_chance?: VariationChance1;
  leaf_block?: LeafBlock;
  canopy_decoration?: CanopyDecoration1;
}
/**
 * Canopy position offset relative to the block above the trunk.
 */
export interface CanopyOffset1 {
  /**
   * Min canopy position offset.
   */
  min?: number;
  /**
   * Max canopy position offset.
   */
  max?: number;
}
/**
 * Configuration object for the canopy slope.
 */
export interface CanopySlope1 {
  /**
   * The numerator for the slope fraction.
   */
  rise?: number;
  /**
   * The denominator for the slope fraction.
   */
  run?: number;
}
/**
 * Configuration object for the canopy decoration.
 */
export interface CanopyDecoration1 {
  decoration_chance?: ChanceInformation11;
  decoration_block?: DecorationBlock2;
  /**
   * Number of decoration blocks to place.
   */
  num_steps?: number;
  step_direction?: StepDirection2;
}
/**
 * Configuration object for the cherry canopy.
 */
export interface CherryCanopy1 {
  leaf_block?: LeafBlock;
  /**
   * Number of layers for the canopy.
   */
  height?: number;
  /**
   * The radius of the canopy.
   */
  radius?: number;
  /**
   * The width of the tree trunk.
   */
  trunk_width?: number;
  wide_bottom_layer_hole_chance?: ChanceInformation12;
  corner_hole_chance?: ChanceInformation13;
  hanging_leaves_chance?: ChanceInformation14;
  hanging_leaves_extension_chance?: ChanceInformation15;
}
/**
 * Configuration object for the fancy canopy.
 */
export interface FancyCanopy1 {
  /**
   * Number of layers for the canopy.
   */
  height?: number;
  /**
   * The radius of the canopy.
   */
  radius?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the mangrove canopy.
 */
export interface MangroveCanopy1 {
  /**
   * Number of layers for the canopy.
   */
  canopy_height?: number;
  /**
   * The radius of the canopy.
   */
  canopy_radius?: number;
  /**
   * Max number of attempts to create leaf blocks.
   */
  leaf_placement_attempts?: number;
  leaf_blocks?: LeafBlocks1;
  canopy_decoration?: Decoration;
  hanging_block?: HangingBlock1;
  hanging_block_placement_chance?: ChanceInformation16;
}
/**
 * Configuration object for the mega canopy.
 */
export interface MegaCanopy1 {
  /**
   * Number of layers for the canopy.
   */
  canopy_height?: number;
  /**
   * The radius of the canopy.
   */
  base_radius?: number;
  /**
   * Width of the tree trunk.
   */
  core_width?: number;
  /**
   * If true the canopy uses a simple pattern.
   */
  simplify_canopy?: boolean;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the mega pine canopy.
 */
export interface MegaPineCanopy1 {
  /**
   * Number of layers for the canopy.
   */
  canopy_height?: number;
  /**
   * The radius of the canopy.
   */
  base_radius?: number;
  /**
   * Modifier for the base radius of the canopy.
   */
  radius_step_modifier?: number;
  /**
   * Width of the tree trunk.
   */
  core_width?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the pine canopy.
 */
export interface PineCanopy1 {
  /**
   * Number of layers for the canopy.
   */
  height?: number;
  /**
   * The radius of the canopy.
   */
  radius?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the roofed canopy.
 */
export interface RoofedCanopy1 {
  /**
   * Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle.
   */
  canopy_height?: number;
  /**
   * Width of the tree trunk.
   */
  core_width?: number;
  /**
   * Radius used for the base and top layers.
   */
  outer_radius?: number;
  /**
   * Radius used for the middle layers.
   */
  inner_radius?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the spruce canopy.
 */
export interface SpruceCanopy1 {
  /**
   * Min canopy position offset.
   */
  lower_offset?: number;
  /**
   * Max canopy position offset.
   */
  upper_offset?: number;
  /**
   * Max radius of the canopy.
   */
  max_radius?: number;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the random spread canopy.
 */
export interface RandomSpreadCanopy {
  /**
   * Number of layers for the canopy.
   */
  canopy_height?: number;
  /**
   * The radius of the canopy.
   */
  canopy_radius?: number;
  /**
   * Max number of attempts to create leaf blocks.
   */
  leaf_placement_attempts?: number;
  leaf_blocks?: LeafBlocks2;
}
/**
 * Configuration for mangrove roots
 */
export interface MangroveRoots {
  /**
   * Max width that the roots can occupy. The width increases up to the max width while moving downwards. When a max width is reached, roots will grow vertically
   */
  max_root_width?: number;
  /**
   * Max length that the roots can occupy.
   */
  max_root_length?: number;
  root_block?: RootBlock;
  above_root?: AboveRoot;
}
/**
 * Configuration object for blocks decorating the top of the roots
 */
export interface AboveRoot {
  above_root_chance?: ChanceInformation17;
  above_root_block?: AboveRootBlock;
  muddy_root_block?: MuddyRootBlock;
  mud_block?: MudBlock;
  y_offset?: YOffset;
  roots_may_grow_through?: RootsMayGrowThrough;
  root_decoration?: Decoration;
}
/**
 * 'minecraft:underwater_cave_carver_feature' carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.This feature will specifically target creating caves only below sea level.
 * This feature will also only work when placed specifically in the pass `pregeneration_pass`.
 */
export interface UnderwaterCaveCarverFeature {
  description: Description;
  fill_with?: FillWith1;
  width_modifier?: WidthModifier1;
  /**
   * The chance to skip doing the carve (1 / value).
   */
  skip_carve_chance?: number;
  /**
   * The height limit where we attempt to carve
   */
  height_limit?: number;
  y_scale?: YScale2;
  horizontal_radius_multiplier?: HorizontalRadiusMultiplier2;
  vertical_radius_multiplier?: VerticalRadiusMultiplier2;
  floor_level?: FloorLevel2;
  replace_air_with?: ReplaceAirWith;
}
/**
 * Feature type `minecraft:vegetation_patch_feature` has not yet been documented.
 */
export interface VegetationPatchFeature {
  description: Description;
  replaceable_blocks: ReplaceableBlocks;
  ground_block: GroundBlock;
  vegetation_feature: VegetationFeature;
  surface?: Surface1;
  /**
   * Depth of the base covered by the ground blocks.
   */
  depth?: number;
  /**
   * Probability of putting the ground blocks one block deeper. Adds some randomness to the bottom of the patch.
   */
  extra_deep_block_chance?: number;
  /**
   * Vertical range used to determine a suitable surface position for the patch.
   */
  vertical_range?: number;
  /**
   * Probability of spawning vegetation on the patch. Larger numbers create a denser vegetation patch.
   */
  vegetation_chance?: number;
  /**
   * Horizontal area that the vegetation patch will cover.
   */
  horizontal_radius: number;
  /**
   * Probability of spawning vegetation on the edge of the patch radius.
   */
  extra_edge_column_chance?: number;
  /**
   * If true, waterlogs the positions occupied by the ground blocks.
   */
  waterlogged?: boolean;
}
/**
 * 'minecraft:weighted_random_feature' randomly selects and places a feature based on a weight value. Weights are relative, with higher values making selection more likely.
 * Succeeds if: The selected feature is placed.
 * Fails if: The selected feature fails to be placed.
 */
export interface WeightedRandomFeature {
  description: Description;
  features: Features3;
}
