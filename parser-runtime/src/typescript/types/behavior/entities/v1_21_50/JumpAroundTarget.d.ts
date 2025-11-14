/**
 * behavior/entities/format/behaviors/jump_around_target.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.055Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Scaling temporarily applied to the entity's AABB bounds when jumping. A smaller bounding box reduces the risk of collisions during the jump. When check_collision is true it also increases the chance of being able to jump when close to obstacles.
 */
export type EntityBoundingBoxScale = number;
/**
 * The jump angles in float degrees that are allowed when performing the jump. The order in which the angles are chosen is randomized.
 */
export type JumpAngles = number[];
/**
 * The range deciding how close to and how far away from the target the landing position can be when jumping.
 */
export type VerticalSearchDistance = [] | [number] | [number, number];
/**
 * Target needs to be within this range for the jump to happen.
 */
export type ValidDistanceToTarget = [] | [number] | [number, number];
/**
 * Conditions that need to be met for the behavior to start.
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
 * Allows an entity to jump around a target.
 */
export interface JumpAroundTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Enables collision checks when calculating the jump. Setting check_collision to true may affect performance and should be used with care.
   */
  check_collision?: boolean;
  entity_bounding_box_scale?: EntityBoundingBoxScale;
  jump_angles?: JumpAngles;
  /**
   * The time in seconds to spend in cooldown before this goal can be used again.
   */
  jump_cooldown_duration?: number;
  /**
   * The time in seconds to spend in cooldown after being hurt before this goal can be used again.
   */
  jump_cooldown_when_hurt_duration?: number;
  landing_distance_from_target?: VerticalSearchDistance;
  /**
   * This angle (in degrees) is used for controlling the spread when picking a landing position behind the target. A zero spread angle means the landing position will be straight behind the target with no variance. A 90 degree spread angle means the landing position can be up to 45 degrees to the left and to the right of the position straight behind the target's view direction.
   */
  landing_position_spread_degrees?: number;
  /**
   * If the entity was hurt within these last seconds, the jump_cooldown_when_hurt_duration will be used instead of jump_cooldown_duration.
   */
  last_hurt_duration?: number;
  /**
   * If the entity's line of sight towards its target is obstructed by an obstacle with a height below this number, the obstacle will be ignored, and the goal will try to find a valid landing position.
   */
  line_of_sight_obstruction_height_ignore?: number;
  /**
   * Maximum velocity a jump can be performed at.
   */
  max_jump_velocity?: number;
  /**
   * The time in seconds to spend preparing for the jump.
   */
  prepare_jump_duration?: number;
  /**
   * The number of blocks above the entity's head that has to be air for this goal to be usable.
   */
  required_vertical_space?: number;
  /**
   * The number of blocks above and below from the jump target position that will be checked to find a surface to land on.
   */
  snap_to_surface_block_range?: number;
  valid_distance_to_target?: ValidDistanceToTarget;
  filters?: Filters;
}
