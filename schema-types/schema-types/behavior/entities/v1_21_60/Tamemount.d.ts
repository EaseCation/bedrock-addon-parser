/**
 * behavior/entities/format/components/tamemount.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.096Z
 */

/**
 * The list of items that, if carried while interacting with the entity, will anger it.
 */
export type AutoRejectItems = AutoRejectItems1 | AutoRejectItems2[];
/**
 * Name of the item this entity dislikes and will cause it to get angry if used while untamed.
 */
export type Item =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier2 | ItemDescriptor2;
      [k: string]: unknown;
    };
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier1 = string;
/**
 * [UNDOCUMENTED] A Molang expression ran against item or block to match.
 */
export type MolangString180 = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier2 = string;
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export type FeedItems = FeedItems1 | FeedItems2[];
/**
 * Name of the item this entity likes and can be used to increase this entity's temper.
 */
export type Item1 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier2 | ItemDescriptor2;
      [k: string]: unknown;
    };
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
 * Allows the Entity to be tamed by mounting it.
 */
export interface Tamemount {
  /**
   * The amount the entity's temper will increase when mounted.
   */
  attempt_temper_mod?: number;
  auto_reject_items?: AutoRejectItems;
  /**
   * The text that shows in the feeding interact button.
   */
  feed_text?: string;
  feed_items?: FeedItems;
  /**
   * The maximum value for the entity's random starting temper.
   */
  max_temper?: number;
  /**
   * The minimum value for the entity's random starting temper.
   */
  min_temper?: number;
  /**
   * The text that shows in the riding interact button.
   */
  ride_text?: string;
  tame_event?: TameEvent;
}
/**
 * The list of items that this entity dislikes and will cause it to get angry if used while untamed.
 */
export interface AutoRejectItems1 {
  item?: Item;
  [k: string]: unknown;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor1 {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor2 {
  item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * The list of items that this entity dislikes and will cause it to get angry if used while untamed.
 */
export interface AutoRejectItems2 {
  item?: Item;
  [k: string]: unknown;
}
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export interface FeedItems1 {
  item?: Item1;
  /**
   * The amount of temper this entity gains when fed this item.
   */
  temper_mod?: number;
  [k: string]: unknown;
}
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export interface FeedItems2 {
  item?: Item1;
  /**
   * The amount of temper this entity gains when fed this item.
   */
  temper_mod?: number;
  [k: string]: unknown;
}
/**
 * Event that triggers when the entity becomes tamed.
 */
export interface TameEvent {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
