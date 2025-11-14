/**
 * behavior/spawn_rules/spawn_rules.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.679Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = '1.8.0' | '1.10.0' | '1.12.0';
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
 * This component allows the players to specify which biomes the mob spawns in. Each biome in the game has one or more tags. These tags are used to determine what biomes mobs spawn in.
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
 * The identifier of the mob that will spawn.
 */
export type Identifier = string;
/**
 * This is the minimum difficulty level that a mob spawns.
 */
export type Min = 'easy' | 'normal' | 'hard' | 'peaceful';
/**
 * This is the maximum difficulty level that a mob spawns.
 */
export type Max = 'easy' | 'normal' | 'hard' | 'peaceful';
/**
 * This component allows players to determine the herd size of animals.
 */
export type HeightFilter1 = Herd | Herd1[];
/**
 * The event String in this JSON Object is used to filter the spawn rules of the mob type. Can be type minecraft:pillager_patrols_event, minecraft:wandering_trader_event, or minecraft:ender_dragon_event..
 */
export type EventFilter =
  | 'minecraft:pillager_patrols_event'
  | 'minecraft:wandering_trader_event'
  | 'minecraft:ender_dragon_event';
/**
 * This component allows the players to specify the permutations of a mob that will spawn.
 */
export type PermuteType = PermuteType1 | PermuteType2[];
/**
 * UNDOCUMENTED.
 */
export type Blocks = string | string[];
/**
 * This component allows an entity to spawn on a particular block. It includes a string or array of strings for the block they may spawn on.
 */
export type SpawnsOnBlockFilter = string | string[];
/**
 * This component allows an entity to not spawn on a particular block. It includes a string or array of strings for the block they may not spawn on.
 */
export type SpawnsOnBlockPreventedFilter = string | string[];
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
  'minecraft:delay_filter'?: DelayFilter;
  'minecraft:density_limit'?: DensityLimit;
  'minecraft:difficulty_filter'?: DifficultyFilter;
  'minecraft:disallow_spawns_in_bubble'?: DisallowSpawnsInBubble;
  'minecraft:distance_filter'?: DistanceFilter;
  'minecraft:height_filter'?: HeightFilter;
  'minecraft:herd'?: HeightFilter1;
  'minecraft:mob_event_filter'?: MobEventFilter;
  'minecraft:permute_type'?: PermuteType;
  'minecraft:player_in_village_filter'?: PlayerInVillageFilter;
  'minecraft:spawn_event'?: SpawnEvent;
  'minecraft:spawns_above_block_filter'?: SpawnsUnderwater;
  'minecraft:spawns_lava'?: SpawnsOnLava;
  'minecraft:spawns_on_block_filter'?: SpawnsOnBlockFilter;
  'minecraft:spawns_on_block_prevented_filter'?: SpawnsOnBlockPreventedFilter;
  'minecraft:spawns_on_surface'?: SpawnsOnSurface;
  'minecraft:spawns_underground'?: SpawnsUnderground;
  'minecraft:spawns_underwater'?: SpawnsUnderwater1;
  'minecraft:weight'?: Weight;
  'minecraft:world_age_filter'?: WorldAgeFilter;
}
/**
 * This component allows players to set the light level range that causes the mob to spawn.
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
 * This component allows players to set mobs spawn with certain time delays before they will spawn.
 */
export interface DelayFilter {
  /**
   * This is the minimum delay that a mob spawns.
   */
  min?: number;
  /**
   * This is the maximum delay that a mob spawns.
   */
  max?: number;
  identifier: Identifier;
  /**
   * The percent chance that this entity will spawn.
   */
  spawn_chance?: number;
}
/**
 * This component allows the players to specify the amount of mobs to spawn in certain locations.
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
 * This component allows players to set mobs spawn at certain difficulty levels. The min is for Peaceful difficulty and the max is for Hard difficulty.
 */
export interface DifficultyFilter {
  min?: Min;
  max?: Max;
}
/**
 * Allows creators to keep entities from spawning in bubbles.
 */
export interface DisallowSpawnsInBubble {}
/**
 * This component allows players to set mobs spawn with certain distance levels.
 */
export interface DistanceFilter {
  /**
   * This is the minimum distance level that a mob spawns.
   */
  min?: number;
  /**
   * This is the maximum distance level that a mob spawns.
   */
  max?: number;
}
/**
 * This component allows players to set mobs spawn within certain heights of their map.
 */
export interface HeightFilter {
  /**
   * This is the minimum height level that a mob spawns.
   */
  min?: number;
  /**
   * This is the maximum height level that a mob spawns.
   */
  max?: number;
}
/**
 * Herd.
 */
export interface Herd {
  /**
   * Runs an event on the first entities in a group.
   */
  initial_event?: string;
  /**
   * The number of entities that "initial_event" should trigger on.
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
   * Runs an event on the first entities in a group.
   */
  initial_event?: string;
  /**
   * The number of entities that "initial_event" should trigger on.
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
 * This component allows players to spawn mobs on a particular event.
 */
export interface MobEventFilter {
  event?: EventFilter;
}
/**
 * UNDOCUMENTED.
 */
export interface PermuteType1 {
  /**
   * The percentage of 100 of a type of mob that should spawn. If there are multiple weights, they must add up to 100.
   */
  weight?: number;
  /**
   * The type of mob to spawn.
   */
  entity_type?: string;
  /**
   * Causes mobs to spawn with a guaranteed_count before mobs that do not have this spawn condition.
   */
  guaranteed_count?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface PermuteType2 {
  /**
   * The percentage of 100 of a type of mob that should spawn. If there are multiple weights, they must add up to 100.
   */
  weight?: number;
  /**
   * The type of mob to spawn.
   */
  entity_type?: string;
  /**
   * Causes mobs to spawn with a guaranteed_count before mobs that do not have this spawn condition.
   */
  guaranteed_count?: number;
}
/**
 * This component lets players be filtered by whether they are in a village or not, using distance and the village border definitions.
 */
export interface PlayerInVillageFilter {
  /**
   * This is the maximum mob_event level that an entity spawns.
   */
  distance?: number;
  /**
   * This is the minimum mob_event level that an entity spawns.
   */
  village_border_tolerance?: number;
}
/**
 * Event related to the spawning of an entity.
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
export interface SpawnsUnderwater {
  blocks?: Blocks;
  /**
   * UNDOCUMENTED.
   */
  distance?: number;
}
/**
 * This component determines if an entity spawns lava.
 */
export interface SpawnsOnLava {}
/**
 * This component allows the mob to spawn on the ground. Adding the component causes it to be true, removing it causes the mob to stop spawning on the surface.
 */
export interface SpawnsOnSurface {}
/**
 * This component allows an entity to spawn underground.
 */
export interface SpawnsUnderground {}
/**
 * This component allows the mob to spawn underwater. Adding the component causes it to be true, removing it causes the mob to stop spawning underwater.
 */
export interface SpawnsUnderwater1 {}
/**
 * This component allows players to set a priority for how often that mob should spawn. Mobs with lower weight values will have a lower chance to spawn than mobs with higher weight values.
 */
export interface Weight {
  /**
   * This is the priority of the mob spawning out of 100.
   */
  default?: number;
  /**
   * UNDOCUMENTED.
   */
  rarity?: number;
}
/**
 * This component allows players to set mobs spawn after a certain amount of time has passed within a world.
 */
export interface WorldAgeFilter {
  /**
   * This is the minimum world_age_filter level that a mob spawns measured in seconds.
   */
  min?: number;
}
