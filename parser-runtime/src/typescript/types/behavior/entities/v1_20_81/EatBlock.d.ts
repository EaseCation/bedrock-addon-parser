/**
 * behavior/entities/format/behaviors/eat_block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:44.892Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The event to trigger when the block eating animation has completed.
 */
export type OnEat = string | Trigger | Trigger1[];
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
 * A molang expression defining the success chance the entity has to consume a block.
 */
export type SuccesChance = string | number;
/**
 * The block to eat.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * The block to replace the eaten block with.
 */
export type ReplaceBlock = string;
/**
 * A collection of pairs of blocks; the first ("eat_block")is the block the entity should eat, the second ("replace_block") is the block that should replace the eaten block.
 */
export type EatAndReplaceBlockPairs = EatAndReplaceBlockPair[];

/**
 * Allows the entity to consume a block, replace the eaten block with another block, and trigger an event as a result.
 */
export interface EatBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  on_eat?: OnEat;
  success_chance?: SuccesChance;
  /**
   * The amount of time (in seconds) it takes for the block to be eaten upon a successful eat attempt.
   */
  time_until_eat?: number;
  eat_and_replace_block_pairs?: EatAndReplaceBlockPairs;
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
/**
 * The block to eat and the block to replace it with.
 */
export interface EatAndReplaceBlockPair {
  eat_block?: BlockceptionMinecraftBlockIdentifier;
  replace_block?: ReplaceBlock;
  [k: string]: unknown;
}
