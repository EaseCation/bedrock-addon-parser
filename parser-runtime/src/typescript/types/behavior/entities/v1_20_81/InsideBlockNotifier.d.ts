/**
 * behavior/entities/format/components/inside_block_notifier.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.603Z
 */

/**
 * A single state of a block.
 */
export type State = string | boolean | number;
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
 * List of blocks, with certain block states, that we are monitoring to see if the entity is inside.
 */
export type BlockList = Block[];

/**
 * Verifies whether the entity is inside any of the listed blocks.
 */
export interface InsideBlockNotifier {
  block_list?: BlockList;
}
/**
 * A of block, with certain block states, that we are monitoring to see if the entity is inside.
 */
export interface Block {
  block?: Block1;
  entered_block_event?: EnteredBlockEvent;
  exited_block_event?: ExitedBlockEvent;
}
export interface Block1 {
  /**
   * The block id, for example: `minecraft:air'.
   */
  name?: string;
  states?: States;
}
/**
 * The block states.
 */
export interface States {
  [k: string]: State;
}
/**
 * Event to run when this mob enters a valid block.
 */
export interface EnteredBlockEvent {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to run when this mob leaves a valid block.
 */
export interface ExitedBlockEvent {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
