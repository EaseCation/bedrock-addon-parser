/**
 * behavior/entities/format/components/interact.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.582Z
 */

/**
 * The interactions.
 */
export type Interactions = InteractionSpec | InteractionSpec1[];
/**
 * File path, relative to the Behavior Pack's path, to the loot table file.
 */
export type BlockceptionMinecraftLootTableIdentifier = string;
/**
 * Event to fire when the interaction occurs.
 */
export type OnInteract = string | Trigger | Trigger1[];
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
 * List of sounds to play when the interaction occurs.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
/**
 * File path, relative to the Behavior Pack's path, to the loot table file.
 */
export type Table = string;

/**
 * Defines interactions with this entity.
 */
export interface Interact {
  interactions?: Interactions;
}
export interface InteractionSpec {
  add_items?: AddItems;
  /**
   * Time in seconds before this entity can be interacted with again.
   */
  cooldown?: number;
  /**
   * Allows entity to admire the item. Requires "minecraft:admire_item" and "minecraft:behavior.admire_item" to work.
   */
  admire?: boolean;
  /**
   * Allows entity to barter with the item. Requires "minecraft:barter" to work.
   */
  barter?: boolean;
  /**
   * Time in seconds before this entity can be interacted with after being attacked.
   */
  cooldown_after_being_attacked?: number;
  /**
   * The amount of health this entity will recover or hurt when interacting with this item. Negative values will harm the entity.
   */
  health_amount?: number;
  /**
   * The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability.
   */
  hurt_item?: number;
  /**
   * Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls.
   */
  interact_text?: string;
  on_interact?: OnInteract;
  particle_on_start?: ParticleOnStart;
  play_sounds?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * List of entities to spawn when the interaction occurs.
   */
  spawn_entities?: string;
  spawn_items?: SpawnItems;
  /**
   * If true, the player will do the "swing" animation when interacting with this entity.
   */
  swing?: boolean;
  /**
   * The feed item used will transform to this item upon successful interaction. Format: itemName:auxValue
   */
  transform_to_item?: string;
  /**
   * If true, the interaction will use an item.
   */
  use_item?: boolean;
  /**
   * Vibration to emit when the interaction occurs. Admitted values are entity_interact (used by default), shear, and none (no vibration emitted).
   */
  vibration?: string;
  /**
   * UNDOCUMENTED Item to give to the player upon successful interaction.
   */
  give_item?: boolean;
  /**
   * UNDOCUMENTED Takes an item from the player.
   */
  take_item?: boolean;
  /**
   * The entity's equipment slot to remove and drop the item from, if any, upon successful interaction.
   */
  drop_item_slot?: string;
  /**
   * The entity's equipment slot to equip the item to, if any, upon successful interaction.
   */
  equip_item_slot?: string;
  repair_entity_item?: RepairEntityItem;
}
/**
 * Loot table with items to add to the player's inventory upon successful interaction.
 */
export interface AddItems {
  table?: BlockceptionMinecraftLootTableIdentifier;
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
 * Particle effect that will be triggered at the start of the interaction.
 */
export interface ParticleOnStart {
  /**
   * Whether or not the particle will appear closer to who performed the interaction.
   */
  particle_offset_towards_interactor?: boolean;
  /**
   * The type of particle that will be spawned.
   */
  particle_type?: string;
  /**
   * Will offset the particle this amount in the y direction.
   */
  particle_y_offset?: number;
  [k: string]: unknown;
}
/**
 * Loot table with items to drop on the ground upon successful interaction.
 */
export interface SpawnItems {
  table?: Table;
}
/**
 * Allows to repair one of the entity's items.
 */
export interface RepairEntityItem {
  /**
   * How much of the item durability should be restored upon interaction.
   */
  amount?: number;
  /**
   * The entity's slot containing the item to be repaired.
   */
  slot?: string;
  [k: string]: unknown;
}
export interface InteractionSpec1 {
  add_items?: AddItems;
  /**
   * Time in seconds before this entity can be interacted with again.
   */
  cooldown?: number;
  /**
   * Allows entity to admire the item. Requires "minecraft:admire_item" and "minecraft:behavior.admire_item" to work.
   */
  admire?: boolean;
  /**
   * Allows entity to barter with the item. Requires "minecraft:barter" to work.
   */
  barter?: boolean;
  /**
   * Time in seconds before this entity can be interacted with after being attacked.
   */
  cooldown_after_being_attacked?: number;
  /**
   * The amount of health this entity will recover or hurt when interacting with this item. Negative values will harm the entity.
   */
  health_amount?: number;
  /**
   * The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability.
   */
  hurt_item?: number;
  /**
   * Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls.
   */
  interact_text?: string;
  on_interact?: OnInteract;
  particle_on_start?: ParticleOnStart;
  play_sounds?: BlockceptionMinecraftGeneralSoundEvent;
  /**
   * List of entities to spawn when the interaction occurs.
   */
  spawn_entities?: string;
  spawn_items?: SpawnItems;
  /**
   * If true, the player will do the "swing" animation when interacting with this entity.
   */
  swing?: boolean;
  /**
   * The feed item used will transform to this item upon successful interaction. Format: itemName:auxValue
   */
  transform_to_item?: string;
  /**
   * If true, the interaction will use an item.
   */
  use_item?: boolean;
  /**
   * Vibration to emit when the interaction occurs. Admitted values are entity_interact (used by default), shear, and none (no vibration emitted).
   */
  vibration?: string;
  /**
   * UNDOCUMENTED Item to give to the player upon successful interaction.
   */
  give_item?: boolean;
  /**
   * UNDOCUMENTED Takes an item from the player.
   */
  take_item?: boolean;
  /**
   * The entity's equipment slot to remove and drop the item from, if any, upon successful interaction.
   */
  drop_item_slot?: string;
  /**
   * The entity's equipment slot to equip the item to, if any, upon successful interaction.
   */
  equip_item_slot?: string;
  repair_entity_item?: RepairEntityItem;
}
