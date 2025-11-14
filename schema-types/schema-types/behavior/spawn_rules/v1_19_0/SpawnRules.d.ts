/**
 * behavior/spawn_rules/spawn_rules.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:05.496Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The entity identifier this spawn rule will apply to, entity must exist.
 */
export type BlockceptionMinecraftEntityIdentifier = string;
/**
 * Setting an entity to a pool it will spawn as long as that pool hasn't reached the spawn limit.
 */
export type PopulationControl =
  | 'ambient'
  | 'animal'
  | 'water_animal'
  | 'monster'
  | 'cat'
  | 'pillager';
/**
 * UNDOCUMENTED.
 */
export type BiomeFilter = Filters[] | Filters1;
export type Filters =
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
export type Filters1 =
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
 * This is the minimum difficulty level that a mob spawns.
 */
export type Min = 'easy' | 'normal' | 'hard' | 'peaceful';
/**
 * This is the maximum difficulty level that a mob spawns.
 */
export type Max = 'easy' | 'normal' | 'hard' | 'peaceful';
/**
 * UNDOCUMENTED.
 */
export type HeightFilter1 = Herd | Herd1[];
/**
 * UNDOCUMENTED.
 */
export type PermuteType = PermuteType1[];
/**
 * UNDOCUMENTED.
 */
export type SpawnsOnBlockFilter = string | string[];
/**
 * UNDOCUMENTED.
 */
export type SpawnsOnBlockPreventedFilter = string | string[];
/**
 * UNDOCUMENTED.
 */
export type Blocks = string | string[];
/**
 * UNDOCUMENTED.
 */
export type Conditions = Condition[];

/**
 * Data-Driven spawning allows you to adjust the spawn conditions of mobs.
 */
export interface SpawnRules {
  format_version: FormatVersion;
  'minecraft:spawn_rules': SpawnRules1;
}
/**
 * Data-Driven spawning allows you to adjust the spawn conditions of mobs.
 */
export interface SpawnRules1 {
  description?: Description;
  conditions?: Conditions;
}
/**
 * The descripton of to which entity this spawn rule belongs.
 */
export interface Description {
  identifier: BlockceptionMinecraftEntityIdentifier;
  population_control: PopulationControl;
}
/**
 * UNDOCUMENTED.
 */
export interface Condition {
  'minecraft:biome_filter'?: BiomeFilter;
  'minecraft:brightness_filter'?: BrightnessFilter;
  'minecraft:density_limit'?: DensityLimit;
  'minecraft:difficulty_filter'?: DifficultyFilter;
  'minecraft:delay_filter'?: DelayFilter;
  'minecraft:distance_filter'?: DistanceFilter;
  'minecraft:disallow_spawns_in_bubble'?: DisallowSpawnsInBubble;
  'minecraft:height_filter'?: HeightFilter;
  'minecraft:herd'?: HeightFilter1;
  'minecraft:player_in_village_filter'?: PlayerInVillageFilter;
  'minecraft:permute_type'?: PermuteType;
  'minecraft:mob_event_filter'?: MobEventFilter;
  'minecraft:spawn_event'?: SpawnEvent;
  'minecraft:spawns_on_block_filter'?: SpawnsOnBlockFilter;
  'minecraft:spawns_on_block_prevented_filter'?: SpawnsOnBlockPreventedFilter;
  'minecraft:spawns_lava'?: SpawnsOnLava;
  'minecraft:spawns_on_surface'?: SpawnsOnSurface;
  'minecraft:spawns_underground'?: SpawnsUnderground;
  'minecraft:spawns_underwater'?: SpawnsUnderwater;
  'minecraft:spawns_above_block_filter'?: SpawnsUnderwater1;
  'minecraft:weight'?: Weight;
  'minecraft:world_age_filter'?: WorldAgeFilter;
}
/**
 * UNDOCUMENTED.
 */
export interface BrightnessFilter {
  /**
   * This is the minimum light level value that allows the mob to spawn.
   */
  min?: number;
  /**
   * This is the maximum light level value that allows the mob to spawn.
   */
  max?: number;
  /**
   * This determines if weather can affect the light level conditions that cause the mob to spawn (e.g. Allowing hostile mobs to spawn during the day when it rains.)
   */
  adjust_for_weather?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface DensityLimit {
  /**
   * This is the maximum number of mobs of this type spawnable on the surface.
   */
  surface?: number;
  /**
   * This is the maximum number of mobs of this type spawnable underground.
   */
  underground?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface DifficultyFilter {
  min?: Min;
  max?: Max;
}
/**
 * UNDOCUMENTED.
 */
export interface DelayFilter {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
  /**
   * UNDOCUMENTED.
   */
  identifier?: string;
  /**
   * UNDOCUMENTED.
   */
  spawn_chance?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface DistanceFilter {
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
export interface DisallowSpawnsInBubble {}
/**
 * UNDOCUMENTED.
 */
export interface HeightFilter {
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
 * Herd.
 */
export interface Herd {
  /**
   * UNDOCUMENTED.
   */
  initial_event?: string;
  /**
   * UNDOCUMENTED.
   */
  initial_event_count?: number;
  /**
   * This is the minimum number of mobs that spawn in a herd.
   */
  min_size?: number;
  /**
   * This is the maximum number of mobs that spawn in a herd.
   */
  max_size?: number;
  /**
   * This is an event that can be triggered from spawning.
   */
  event?: string;
  /**
   * This is the number of mobs spawned before the specified event is triggered.
   */
  event_skip_count?: number;
}
/**
 * Herd.
 */
export interface Herd1 {
  /**
   * UNDOCUMENTED.
   */
  initial_event?: string;
  /**
   * UNDOCUMENTED.
   */
  initial_event_count?: number;
  /**
   * This is the minimum number of mobs that spawn in a herd.
   */
  min_size?: number;
  /**
   * This is the maximum number of mobs that spawn in a herd.
   */
  max_size?: number;
  /**
   * This is an event that can be triggered from spawning.
   */
  event?: string;
  /**
   * This is the number of mobs spawned before the specified event is triggered.
   */
  event_skip_count?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface PlayerInVillageFilter {
  /**
   * UNDOCUMENTED.
   */
  distance?: number;
  /**
   * UNDOCUMENTED.
   */
  village_border_tolerance?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface PermuteType1 {
  /**
   * UNDOCUMENTED.
   */
  weight?: number;
  /**
   * UNDOCUMENTED.
   */
  entity_type?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface MobEventFilter {
  /**
   * UNDOCUMENTED.
   */
  event?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface SpawnEvent {
  /**
   * UNDOCUMENTED.
   */
  event?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface SpawnsOnLava {}
/**
 * UNDOCUMENTED.
 */
export interface SpawnsOnSurface {}
/**
 * UNDOCUMENTED.
 */
export interface SpawnsUnderground {}
/**
 * UNDOCUMENTED.
 */
export interface SpawnsUnderwater {}
/**
 * UNDOCUMENTED.
 */
export interface SpawnsUnderwater1 {
  blocks?: Blocks;
  /**
   * UNDOCUMENTED.
   */
  distance?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Weight {
  /**
   * UNDOCUMENTED.
   */
  default?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface WorldAgeFilter {
  /**
   * UNDOCUMENTED.
   */
  min?: number;
}
