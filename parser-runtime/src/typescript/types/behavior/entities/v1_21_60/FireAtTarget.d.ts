/**
 * behavior/entities/format/behaviors/fire_at_target.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:01.758Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Target needs to be within this range for the attack to happen.
 */
export type AttackRange = [] | [number] | [number, number] | [number, number, number];
/**
 * Offset vector from the owner_anchor.
 */
export type OwnerOffset = [] | [number] | [number, number] | [number, number, number];
/**
 * Offset vector from the target_anchor.
 */
export type TargetOffset = [] | [number] | [number, number] | [number, number, number];
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
 * Allows an entity to attack by firing a shot with a delay. Anchor and offset parameters of this component overrides the anchor and offset from projectile component.
 */
export interface FireAtTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The cooldown time in seconds before this goal can be used again.
   */
  attack_cooldown?: number;
  attack_range?: AttackRange;
  /**
   * Entity anchor for the projectile spawn location.
   */
  owner_anchor?: number;
  owner_offset?: OwnerOffset;
  /**
   * Entity anchor for projectile target.
   */
  target_anchor?: number;
  target_offset?: TargetOffset;
  /**
   * Time in seconds between firing the projectile and ending the goal.
   */
  post_shoot_delay?: number;
  /**
   * Time in seconds before firing the projectile.
   */
  pre_shoot_delay?: number;
  /**
   * Actor definition to use as projectile for the ranged attack. The actor must be a projectile.
   */
  projectile_def?: string;
  /**
   * Field of view (in degrees) when using sensing to detect a target for attack.
   */
  ranged_fov?: number;
  /**
   * Maximum head rotation (in degrees), on the X-axis, that this entity can apply while trying to look at the target.
   */
  max_head_rotation_x?: number;
  /**
   * Maximum head rotation (in degrees), on the Y-axis, that this entity can apply while trying to look at the target.
   */
  max_head_rotation_y?: number;
  filters?: Filters;
}
