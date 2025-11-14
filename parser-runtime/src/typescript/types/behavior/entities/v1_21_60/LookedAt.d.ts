/**
 * behavior/entities/format/components/looked_at.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.509Z
 */

/**
 * Defines the entities that can trigger this component.
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
 * Defines the type of block shape used to check for line of sight obstructions.
 */
export type LineOfSightObstructionType = 'outline' | 'collision' | 'collision_for_camera';
/**
 * A list of locations on the owner entity towards which line of sight checks are performed. At least one location must be unobstructed for the entity to be considered as looked at.
 *
 * @minItems 1
 */
export type LookAtLocations = [
  {
    location?: Location;
    /**
     * Vertical offset from the set location
     */
    vertical_offset?: number;
  },
  ...{
    location?: Location;
    /**
     * Vertical offset from the set location
     */
    vertical_offset?: number;
  }[],
];
/**
 * Location to be looked at
 */
export type Location = 'head' | 'body' | 'feet';
/**
 * The range for the random amount of time during which the entity is `cooling down` and won't get angered or look for a target.
 */
export type LookCooldown =
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
 * The target of the event.
 */
export type Target =
  | 'baby'
  | 'block'
  | 'damager'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';
/**
 * Defines if and how the owner entity will set entities that are looking at it as its combat targets. Valid values:
 * - "never", looking entities are never set as targets, but events are emitted.
 * - "once_and_stop_scanning", the first detected looking entity is set as target. Scanning and event emission is suspended if and until the owner entity has a target.
 * - "once_and_keep_scanning", the first detected looking entity is set as target. Scanning and event emission continues.
 */
export type SetTarget = 'never' | 'once_and_stop_scanning' | 'once_and_keep_scanning';

/**
 * Defines the behavior when another entity looks at this entity.
 */
export interface LookedAt {
  /**
   * Defines, in degrees, the width of the field of view for entities looking at the owner entity. If 'scale_fov_by_distance' is set to true, this value corresponds to the field of view at a distance of one block between the entities.
   */
  field_of_view?: number;
  filters?: Filters;
  /**
   * Limits the search to only the nearest Player that meets the specified "filters" rather than all nearby entities.
   */
  find_players_only?: boolean;
  line_of_sight_obstruction_type?: LineOfSightObstructionType;
  look_at_locations?: LookAtLocations;
  looked_at_cooldown?: LookCooldown;
  looked_at_event?: LookedAtEvent;
  not_looked_at_event?: NotLookedAtEvent;
  /**
   * When true, the field of view narrows as the distance between the owner entity and the entity looking at it increases. This ensures that the width of the view cone remains somewhat constant towards the owner entity position, regardless of distance.
   */
  scale_fov_by_distance?: boolean;
  /**
   * Maximum distance this entity will look for another entity looking at it.
   */
  search_radius?: number;
  set_target?: SetTarget;
}
/**
 * The event identifier to run when the entities specified in filters look at this entity.
 */
export interface LookedAtEvent {
  filters?: Filters1;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines the event to trigger when no entity is found looking at the owner entity.
 */
export interface NotLookedAtEvent {
  filters?: Filters1;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
