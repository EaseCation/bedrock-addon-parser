/**
 * behavior/entities/format/behaviors/random_search_and_dig.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.471Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;
/**
 * Goal cooldown range in seconds.
 */
export type CooldownRange = VectorOf2Items | number;
/**
 * An vector of 2 number.
 */
export type VectorOf2Items = [] | [number] | [number, number];
/**
 * Digging duration in seconds.
 */
export type DiggingDurationRange = [] | [number] | [number, number];
/**
 * Event to run when the goal ends searching has begins digging.
 */
export type OnDiggingStart = string | Trigger | Trigger1[];
/**
 * The list of conditions for this trigger to execute.
 */
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
/**
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Event to run when the goal failed while in digging state.
 */
export type OnFailDuringDigging = string | Trigger | Trigger1[];
/**
 * Event to run when the goal failed while in searching state.
 */
export type OnFailDuringSearching = string | Trigger | Trigger1[];
/**
 * Event to run when the goal find a item.
 */
export type OnItemFound = string | Trigger | Trigger1[];
/**
 * Event to run when the goal starts searching.
 */
export type OnSearchingStart = string | Trigger | Trigger1[];
/**
 * Event to run when searching and digging has ended.
 */
export type OnSuccess = string | Trigger | Trigger1[];
/**
 * A minecraft block reference.
 */
export type BlockReference = BlockceptionMinecraftBlockIdentifier | BlockReference1;
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
 * List of target block types the goal will look to dig on. Overrides the default list.
 */
export type TargetBlocks = BlockReference[];

/**
 * Allows this entity to locate a random target block that it can path find to. Once found, the entity will move towards it and dig up an item.
 */
export interface RandomLookAround {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  cooldown_range?: CooldownRange;
  digging_duration_range?: DiggingDurationRange;
  /**
   * Amount of retries to find a valid target position within search range.
   */
  find_valid_position_retries?: number;
  /**
   * Distance in blocks within the entity to considers it has reached it's target position.
   */
  goal_radius?: number;
  /**
   * File path relative to the resource pack root for items to spawn list (loot table format).
   */
  item_table?: string;
  on_digging_start?: OnDiggingStart;
  on_fail_during_digging?: OnFailDuringDigging;
  on_fail_during_searching?: OnFailDuringSearching;
  on_item_found?: OnItemFound;
  on_searching_start?: OnSearchingStart;
  on_success?: OnSuccess;
  /**
   * Width and length of the volume around the entity used to find a valid target position
   */
  search_range_xz?: number;
  /**
   * Height of the volume around the entity used to find a valid target position
   */
  search_range_y?: number;
  /**
   * Digging duration before spawning item in seconds.
   */
  spawn_item_after_seconds?: number;
  /**
   * Distance to offset the item's spawn location in the direction the mob is facing.
   */
  spawn_item_pos_offset?: number;
  target_blocks?: TargetBlocks;
  /**
   * Dig target position offset from the feet position of the mob in their facing direction.
   */
  target_dig_position_offset?: number;
}
export interface Trigger {
  /**
   * The event to run when the conditions for this trigger are met.
   */
  event?: string;
  filters?: Filters;
  target?: Subject;
}
export interface Trigger1 {
  /**
   * The event to run when the conditions for this trigger are met.
   */
  event?: string;
  filters?: Filters;
  target?: Subject;
}
export interface BlockReference1 {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString180;
}
export interface States {
  [k: string]: StateValue;
}
