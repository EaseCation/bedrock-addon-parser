/**
 * behavior/entities/format/behaviors/drop_item_for.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:37.968Z
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
 * The list of conditions another entity must meet to be a valid target to drop an item for.
 */
export type EntityTypes = EntityType[] | EntityType;
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
 * The event to trigger when the entity attempts to drop an item.
 */
export type OnDropAttempt =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The list of conditions for this trigger to execute.
 */
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
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * The range in blocks within which the entity searches to find a target to drop an item for.
 */
export type TargetRange = [] | [number] | [number, number] | [number, number, number];
/**
 * When the entity teleports, offset the teleport position by this many blocks in the X, Y, and Z coordinate.
 */
export type TeleportOffset = [] | [number] | [number, number] | [number, number, number];
/**
 * The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0.
 */
export type TimeOfDayRange =
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
 * Allows the entity to move toward a target, and drop an item near the target. This goal requires a "minecraft:navigation" to execute.
 */
export interface DropItemFor {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  entity_types?: EntityTypes;
  /**
   * Total time that the goal is on cooldown before it can be used again.
   */
  cooldown?: number;
  /**
   * The percent chance the entity will drop an item when using this goal.
   */
  drop_item_chance?: number;
  /**
   * Distance in blocks within the entity considers it has reached it's target position.
   */
  goal_radius?: number;
  /**
   * The loot table that contains the possible loot the entity can drop with this goal.
   */
  loot_table?: string;
  /**
   * The maximum height the entities head will look at when dropping the item. The entity will always be looking at its target.
   */
  max_head_look_at_height?: number;
  /**
   * If the target position is farther away than this distance on any tick, the entity will teleport to the target position.
   */
  minimum_teleport_distance?: number;
  /**
   * The preferred distance the entity tries to be from the target it is dropping an item for.
   */
  offering_distance?: number;
  on_drop_attempt?: OnDropAttempt;
  /**
   * The number of blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * The Height in blocks the entity will search within to find a valid target position.
   */
  search_height?: number;
  /**
   * The distance in blocks the entity will search within to find a valid target position.
   */
  search_range?: number;
  /**
   * The numbers of seconds that will pass before the dropped entity can be picked up from the ground.
   */
  seconds_before_pickup?: number;
  target_range?: TargetRange;
  teleport_offset?: TeleportOffset;
  time_of_day_range?: TimeOfDayRange;
}
/**
 * The entity type.
 */
export interface EntityType {
  filters?: Filters;
  /**
   * Maximum distance this mob can be away to be a valid choice.
   */
  max_dist?: number;
  /**
   * UNDOCUMENTED.
   */
  max_height?: number;
  /**
   * UNDOCUMENTED.
   */
  max_flee?: number;
  /**
   * UNDOCUMENTED.
   */
  priority?: number;
  /**
   * UNDOCUMENTED.
   */
  check_if_outnumbered?: number;
  /**
   * If true, the mob has to be visible to be a valid choice.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   */
  must_see_forget_duration?: number;
  /**
   * If true, the mob will stop being targeted if it stops meeting any conditions.
   */
  reevaluate_description?: boolean;
  /**
   * Multiplier for the running speed. A value of 1.0 means the speed is unchanged
   */
  sprint_speed_multiplier?: number;
  /**
   * Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
   */
  walk_speed_multiplier?: number;
}
