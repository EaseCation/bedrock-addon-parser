/**
 * behavior/entities/format/components/shooter.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.240Z
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
 * List of projectiles that can be used by the shooter. Projectiles are evaluated in the order of the list; after a projectile is chosen, the rest of the list is ignored.
 */
export type Projectiles = (string | Projectile)[];

/**
 * Defines the entity's ranged attack behavior.
 */
export interface Shooter {
  /**
   * ID of the Potion effect to be applied on hit.
   */
  aux_val?: number;
  /**
   * Actor definition to use as projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile
   */
  def?: string;
  /**
   * Sets whether the projectiles being used are flagged as magic. If set, the ranged attack goal will not be used at the same time as other magic goals, such as minecraft:behavior.drink_potion.
   */
  magic?: boolean;
  /**
   * Velocity in which the projectiles will be shot. A power of 0 will be overwritten by the default projectile throw power.
   */
  power?: number;
  projectiles?: Projectiles;
  /**
   * Sound that is played when the shooter shoots a projectile.
   */
  sound?: string;
}
/**
 * A projectile defintion
 */
export interface Projectile {
  /**
   * ID of the Potion effect to be applied on hit.
   */
  aux_val?: number;
  /**
   * Actor definition to use as projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile
   */
  def?: string;
  filters?: Filters;
  [k: string]: unknown;
}
