/**
 * behavior/worldgen/jigsaw_structures/format/minecraft.jigsaw.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.325Z
 */

/**
 * Specifies the biomes in which the Jigsaw Structure can generate.
 */
export type BiomeFilters =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec1;
/**
 * All tests in an `all_of` group must pass in order for the group to pass.
 */
export type AllOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * One or more tests in an `any_of` group must pass in order for the group to pass.
 */
export type AnyOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
/**
 * All tests in a `none_of` group must fail in order for the group to pass.
 */
export type NoneOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec1 =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * Heightmap used to calculate the relative start height. For example, a heightmap_projection of ocean_floor and a start_height of 10 means the Jigsaw Structure will begin generating 10 blocks above the ocean floor.
 */
export type HeightmapProjection = 'ocean_floor' | 'world_surface';
/**
 * Specifies the world generation phase in which the structure is generated. This is used as a grouping concept to keep similar world-generation features generally bundled together.
 */
export type Step =
  | 'fluid_springs'
  | 'lakes'
  | 'local_modifications'
  | 'raw_generation'
  | 'strongholds'
  | 'surface_structures'
  | 'top_layer_modification'
  | 'underground_decoration'
  | 'underground_ores'
  | 'underground_structures'
  | 'vegetal_decoration';
/**
 * How the terrain should adapt relative to the generated Jigsaw Structure.
 */
export type TerrainAdaptation = 'beard_box' | 'beard_thin' | 'bury' | 'encapsulate' | 'none';

export interface Jigsaw {
  biome_filters?: BiomeFilters;
  description: Description;
  heightmap_projection: HeightmapProjection;
  /**
   *  The maximum recursion depth for Jigsaw Structure Generation. For example, a Jigsaw Structure that builds a road with a max_depth of 5 will only have paths that are a maximum of 5 structures templates in length in any given direction from the origin.
   */
  max_depth: number;
  /**
   * World height at which the Jigsaw Structure should begin generation.
   */
  start_height: number;
  /**
   * The first Template Pool to use when generating the Jigsaw Structure.
   */
  start_pool: string;
  step: Step;
  terrain_adaptation?: TerrainAdaptation;
}
/**
 * The description of this jigsaw.
 */
export interface Description {
  /**
   * Identifier of the Jigsaw Structure. This is used with commands such as /locate, as well as within Structure Set definitions to specify which Jigsaw Structures are included in a given set.
   */
  identifier: string;
}
