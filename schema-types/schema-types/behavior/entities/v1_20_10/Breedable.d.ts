/**
 * behavior/entities/format/components/breedable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.573Z
 */

/**
 * The list of items that can be used to get the entity into the `love` state.
 */
export type BreedItems = BreedItem[] | BlockceptionMinecraftItemDescriptor;
/**
 * An item that can be used to get the entity into the `love` state.
 */
export type BreedItem = BreedItem1 & BreedItem2;
export type BreedItem1 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * [UNDOCUMENTED] A Molang expression ran against item or block to match.
 */
export type MolangString180 = string;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier1 = string;
export type BreedItem2 = string;
export type BlockceptionMinecraftItemDescriptor = (
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    }
) &
  string;
/**
 * The list of entity definitions that this entity can breed with.
 */
export type BreedsWith = BreedsWithSpec | BreedsWithSpec1[];
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
 * The list of nearby block requirements to get the entity into the `love` state.
 */
export type EnvironmentRequirements = EnvironmentRequirements1 | EnvironmentRequirements2[];
/**
 * The block types required nearby for the entity to breed.
 */
export type Blocks = Blocks1[] | Blocks4;
/**
 * A block type required nearby for the entity to breed.
 */
export type Blocks1 = Blocks2 & Blocks3;
export type Blocks2 = BlockceptionMinecraftBlockIdentifier | BlockReference;
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
export type MolangString1801 = string;
export type Blocks3 = string;
/**
 * A block type required nearby for the entity to breed.
 */
export type Blocks4 = Blocks5 & Blocks6;
export type Blocks5 = BlockceptionMinecraftBlockIdentifier | BlockReference;
export type Blocks6 = string;
/**
 * The filters to run when attempting to fall in love.
 */
export type LoveFilters =
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
 * Defines the way an entity can get into the `love` state.
 */
export interface Breedable {
  /**
   * If true, entities can breed while sitting.
   */
  allow_sitting?: boolean;
  /**
   * If true, the entities will blend their attributes in the offspring after they breed. For example, horses blend their health, movement, and jump_strength in their offspring.
   */
  blend_attributes?: boolean;
  /**
   * Time in seconds before the Entity can breed again.
   */
  breed_cooldown?: number;
  breed_items?: BreedItems;
  breeds_with?: BreedsWith;
  deny_parents_variant?: DenyParentsVariant;
  environment_requirements?: EnvironmentRequirements;
  /**
   * Chance that up to 16 babies will spawn between 0.0 and 1.0, where 1.0 is 100%.
   */
  extra_baby_chance?: number;
  love_filters?: LoveFilters;
  mutation_factor?: MutationFactor;
  /**
   * If true, the entity will become pregnant instead of spawning a baby.
   */
  causes_pregnancy?: boolean;
  /**
   * If true, the babies will be automatically tamed if its parents are.
   */
  inherit_tamed?: boolean;
  /**
   * If true, the entity needs to be at full health before it can breed.
   */
  require_full_health?: boolean;
  /**
   * If true, the entities need to be tamed first before they can breed.
   */
  require_tame?: boolean;
  /**
   * The feed item used will transform to this item upon successful interaction. Format: itemName:auxValue
   */
  transform_to_item?: string;
}
/**
 * An object that describes an item.
 */
export interface ItemDescriptor {
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
  tags?: MolangString180;
  /**
   * [UNDOCUMENTED] A tag to lookup item or block by.
   */
  item_tag?: string;
}
/**
 * An entity definitions that this entity can breed with.
 */
export interface BreedsWithSpec {
  /**
   * The entity definition of this entity's babies.
   */
  baby_type?: string;
  breed_event?: BreedEvent;
  /**
   * The entity definition of this entity's mate.
   */
  mate_type?: string;
  [k: string]: unknown;
}
/**
 * Event to run when this entity breeds.
 */
export interface BreedEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * An entity definitions that this entity can breed with.
 */
export interface BreedsWithSpec1 {
  /**
   * The entity definition of this entity's babies.
   */
  baby_type?: string;
  breed_event?: BreedEvent;
  /**
   * The entity definition of this entity's mate.
   */
  mate_type?: string;
  [k: string]: unknown;
}
/**
 * Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead.
 */
export interface DenyParentsVariant {
  /**
   * The percentage chance of denying the parents` variant.
   */
  chance?: number;
  /**
   * The inclusive maximum of the variant range.
   */
  max_variant?: number;
  /**
   * The inclusive minimum of the variant range.
   */
  min_variant?: number;
}
/**
 * A nearby block requirements to get the entity into the `love` state.
 */
export interface EnvironmentRequirements1 {
  blocks?: Blocks;
  /**
   * The number of the required block types nearby for the entity to breed.
   */
  count?: number;
  /**
   * How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16.
   */
  radius?: number;
  [k: string]: unknown;
}
export interface BlockReference {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString1801;
}
export interface States {
  [k: string]: StateValue;
}
/**
 * A nearby block requirements to get the entity into the `love` state.
 */
export interface EnvironmentRequirements2 {
  blocks?: Blocks;
  /**
   * The number of the required block types nearby for the entity to breed.
   */
  count?: number;
  /**
   * How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16.
   */
  radius?: number;
  [k: string]: unknown;
}
/**
 * Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate.
 */
export interface MutationFactor {
  /**
   * The percentage chance of a mutation on the entity's color.
   */
  color?: number;
  /**
   * The percentage chance of a mutation on the entity's extra variant type.
   */
  extra_variant?: number;
  /**
   * The percentage chance of a mutation on the entity's variant type.
   */
  variant?: number;
}
