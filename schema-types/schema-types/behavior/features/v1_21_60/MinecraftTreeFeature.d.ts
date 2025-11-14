/**
 * behavior/features/features/minecraft.tree_feature.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.444Z
 */

/**
 * The name of this feature in the form `namespace_name:feature_name`. `feature_name` must match the filename.
 */
export type Identifier = string;
export type BaseBlock = BlockceptionMinecraftBlockIdentifier | Block[];
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * A minecraft block identifier.
 */
export type Block = string;
/**
 * List of blocks that the base cluster of a tree can replace.
 */
export type MayReplace = BlockceptionMinecraftBlockIdentifier[];
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
 * The width of the tree trunk.
 */
export type TrunkWidth = number;
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
 * The block that forms the tree trunk.
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
 * If true the canopy uses a simple pattern.
 */
export type SimplifyCanopy = boolean;
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
 * The block used for decorating the trunk.
 */
export type DecorationBlock = string;
/**
 * Directions to spread decoration blocks.
 */
export type StepDirection = 'down' | 'up' | 'out' | 'away';
/**
 * Number of layers for the canopy.
 */
export type Height = number;
/**
 * The radius of the canopy.
 */
export type Radius = number;
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
 * The block used for decorating the trunk.
 */
export type DecorationBlock1 = string;
/**
 * Directions to spread decoration blocks.
 */
export type StepDirection1 = 'down' | 'up' | 'out' | 'away';
/**
 * The block to be used as a hanging block.
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
export type BlockceptionMinecraftFeatureIdentifier = string;
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
 * Feature's description containing the identifier
 */
export interface Description {
  identifier: Identifier;
  [k: string]: unknown;
}
/**
 * Allows you to define a number of clusters for the base of the tree. Used to generate mega tree variants.
 */
export interface BaseCluster {
  may_replace: MayReplace;
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
  trunk_width?: TrunkWidth;
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
  simplify_canopy?: SimplifyCanopy;
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
  height?: Height;
  radius?: Radius;
  trunk_width?: TrunkWidth;
  wide_bottom_layer_hole_chance?: ChanceInformation3;
  corner_hole_chance?: ChanceInformation4;
  hanging_leaves_chance?: ChanceInformation5;
  hanging_leaves_extension_chance?: ChanceInformation6;
}
/**
 * Configuration object for the fancy canopy.
 */
export interface FancyCanopy {
  height?: Height;
  radius?: Radius;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the mangrove canopy.
 */
export interface MangroveCanopy {
  canopy_height?: Height;
  canopy_radius?: Radius;
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
  canopy_height?: Height;
  base_radius?: Radius;
  /**
   * Width of the tree trunk.
   */
  core_width?: number;
  simplify_canopy?: SimplifyCanopy;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the mega pine canopy.
 */
export interface MegaPineCanopy {
  canopy_height?: Height;
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
  height?: Height;
  radius?: Radius;
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
  log_decoration_feature?: BlockceptionMinecraftFeatureIdentifier;
  trunk_decoration?: Decoration;
}
/**
 * Configutarion for the fancy trunk.
 */
export interface FancyTrunk {
  trunk_height?: TrunkHeight2;
  trunk_width?: TrunkWidth;
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
  trunk_width?: TrunkWidth;
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
  trunk_width?: TrunkWidth;
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
  simplify_canopy?: SimplifyCanopy;
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
  height?: Height;
  radius?: Radius;
  trunk_width?: TrunkWidth;
  wide_bottom_layer_hole_chance?: ChanceInformation12;
  corner_hole_chance?: ChanceInformation13;
  hanging_leaves_chance?: ChanceInformation14;
  hanging_leaves_extension_chance?: ChanceInformation15;
}
/**
 * Configuration object for the fancy canopy.
 */
export interface FancyCanopy1 {
  height?: Height;
  radius?: Radius;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the mangrove canopy.
 */
export interface MangroveCanopy1 {
  canopy_height?: Height;
  canopy_radius?: Radius;
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
  canopy_height?: Height;
  base_radius?: Radius;
  /**
   * Width of the tree trunk.
   */
  core_width?: number;
  simplify_canopy?: SimplifyCanopy;
  leaf_block?: LeafBlock;
}
/**
 * Configuration object for the mega pine canopy.
 */
export interface MegaPineCanopy1 {
  canopy_height?: Height;
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
  height?: Height;
  radius?: Radius;
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
  canopy_height?: Height;
  canopy_radius?: Radius;
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
