/**
 * behavior/items/items.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.183Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The identifier for this item. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla item.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * A translation string of an existing group in minecraft to group this block/item under
 */
export type ItemGroup =
  | 'itemGroup.name.anvil'
  | 'itemGroup.name.arrow'
  | 'itemGroup.name.axe'
  | 'itemGroup.name.banner'
  | 'itemGroup.name.banner_pattern'
  | 'itemGroup.name.bed'
  | 'itemGroup.name.boat'
  | 'itemGroup.name.boots'
  | 'itemGroup.name.buttons'
  | 'itemGroup.name.candles'
  | 'itemGroup.name.chalkboard'
  | 'itemGroup.name.chest'
  | 'itemGroup.name.chestboat'
  | 'itemGroup.name.chestplate'
  | 'itemGroup.name.concrete'
  | 'itemGroup.name.concretePowder'
  | 'itemGroup.name.cookedFood'
  | 'itemGroup.name.copper'
  | 'itemGroup.name.coral'
  | 'itemGroup.name.coral_decorations'
  | 'itemGroup.name.crop'
  | 'itemGroup.name.door'
  | 'itemGroup.name.dye'
  | 'itemGroup.name.enchantedBook'
  | 'itemGroup.name.fence'
  | 'itemGroup.name.fenceGate'
  | 'itemGroup.name.firework'
  | 'itemGroup.name.fireworkStars'
  | 'itemGroup.name.flower'
  | 'itemGroup.name.glass'
  | 'itemGroup.name.glassPane'
  | 'itemGroup.name.glazedTerracotta'
  | 'itemGroup.name.goatHorn'
  | 'itemGroup.name.grass'
  | 'itemGroup.name.hanging_sign'
  | 'itemGroup.name.helmet'
  | 'itemGroup.name.hoe'
  | 'itemGroup.name.horseArmor'
  | 'itemGroup.name.leaves'
  | 'itemGroup.name.leggings'
  | 'itemGroup.name.lingeringPotion'
  | 'itemGroup.name.log'
  | 'itemGroup.name.minecart'
  | 'itemGroup.name.miscFood'
  | 'itemGroup.name.mobEgg'
  | 'itemGroup.name.monsterStoneEgg'
  | 'itemGroup.name.mushroom'
  | 'itemGroup.name.netherWartBlock'
  | 'itemGroup.name.ore'
  | 'itemGroup.name.permission'
  | 'itemGroup.name.pickaxe'
  | 'itemGroup.name.planks'
  | 'itemGroup.name.potion'
  | 'itemGroup.name.potterySherds'
  | 'itemGroup.name.pressurePlate'
  | 'itemGroup.name.rail'
  | 'itemGroup.name.rawFood'
  | 'itemGroup.name.record'
  | 'itemGroup.name.sandstone'
  | 'itemGroup.name.sapling'
  | 'itemGroup.name.sculk'
  | 'itemGroup.name.seed'
  | 'itemGroup.name.shovel'
  | 'itemGroup.name.shulkerBox'
  | 'itemGroup.name.sign'
  | 'itemGroup.name.skull'
  | 'itemGroup.name.slab'
  | 'itemGroup.name.smithing_templates'
  | 'itemGroup.name.splashPotion'
  | 'itemGroup.name.stainedClay'
  | 'itemGroup.name.stairs'
  | 'itemGroup.name.stone'
  | 'itemGroup.name.stoneBrick'
  | 'itemGroup.name.sword'
  | 'itemGroup.name.trapdoor'
  | 'itemGroup.name.walls'
  | 'itemGroup.name.wood'
  | 'itemGroup.name.wool'
  | 'itemGroup.name.woolCarpet';
/**
 * Determines which category this block/item will be placed under in the inventory and crafting table container screens.
 */
export type Category = 'construction' | 'equipment' | 'items' | 'nature' | 'none';
/**
 * The allow off hand component determines whether the item can be placed in the off hand slot of the inventory.
 */
export type AllowOffHand =
  | boolean
  | {
      /**
       * Whether the item can be placed in the off hand slot
       */
      value: boolean;
    };
/**
 * Tags.
 */
export type MolangString180 = string;
/**
 * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
 */
export type UseOn = AllowedBlock[];
/**
 * The can destroy in creative component determines if the item will break blocks in creative when swinging.
 */
export type CanDestroyInCreative =
  | boolean
  | {
      /**
       * Whether the item can destroy blocks while in creative
       */
      value: boolean;
    };
/**
 * Used to register custom components.
 */
export type CustomComponents = string[];
/**
 * The damage component determines how much extra damage the item does on attack.
 */
export type Damage =
  | number
  | {
      /**
       * How much extra damage the item does, must be a positive number.
       */
      value: number;
    };
/**
 * List of damage causes that can be absorbed by the item. By default, no damage cause is absorbed.
 *
 * @minItems 1
 */
export type AbsorbableCauses = [EntityDamageSource, ...EntityDamageSource[]];
/**
 * The types of damage an entity can receive.
 */
export type EntityDamageSource =
  | 'all'
  | 'anvil'
  | 'block_explosion'
  | 'campfire'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fire'
  | 'fire_tick'
  | 'fireworks'
  | 'fly_into_wall'
  | 'freezing'
  | 'lava'
  | 'lightning'
  | 'magic'
  | 'magma'
  | 'none'
  | 'override'
  | 'piston'
  | 'projectile'
  | 'ram_attack'
  | 'self_destruct'
  | 'sonic_boom'
  | 'soul_campfire'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
export type Block =
  | string
  | {
      /**
       * The block tags.
       */
      tags?: string;
    };
/**
 * Destroy speed per block.
 */
export type DestroySpeeds = DestroySpeed[];
/**
 * Sound effect to emit when the threshold is met.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
/**
 * Color to use by default. If you do not want a default color you can leave the "default_color" off and the texture will be the same as if you did not have the component until it is dyed.
 */
export type DefaultColor = string | [] | [number] | [number, number] | [number, number, number];
/**
 * If true you can always eat this item (even when not hungry), defaults to false.
 */
export type Slot =
  | 'axe'
  | 'bow'
  | 'armor_feet'
  | 'armor_torso'
  | 'armor_head'
  | 'armor_legs'
  | 'hoe'
  | 'pickaxe'
  | 'shovel'
  | 'elytra'
  | 'fishing_rod'
  | 'flintsteel'
  | 'sword'
  | 'shears'
  | 'cosmetic_head';
/**
 * List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.
 */
export type DispenseOn = BlockDescriptor[];
/**
 * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
 */
export type UseOn1 = BlockDescriptor1[];
/**
 * The glint component determines whether the item has the enchanted glint render effect on it
 */
export type Glint =
  | boolean
  | {
      /**
       * Whether the item has the glint effect.
       */
      value: boolean;
    };
/**
 * This component determines if an item is rendered like a tool while in hand.
 */
export type HandEquipped =
  | boolean
  | {
      /**
       * If the item is rendered like a tool while in hand.
       */
      value: boolean;
    };
/**
 * The icon item componenent determines the icon to represent the item in the UI and elsewhere.
 */
export type Icon =
  | string
  | {
      textures: Textures;
    };
/**
 * The liquid clipped component determines whether the item interacts with liquid blocks on use.
 */
export type LiquidClipped =
  | boolean
  | {
      /**
       * Whether the item interacts with liquid blocks on use.
       */
      value: boolean;
    };
/**
 * The max stack size component determines how many of the item can be stacked together.
 */
export type MaxStackSize =
  | number
  | {
      /**
       * How many of the item that can be stacked.
       */
      value: number;
    };
/**
 * Specifies the base rarity and subsequently color of the item name when the player hovers the cursor over the item.
 */
export type Rarity =
  | ('common' | 'uncommon' | 'rare' | 'epic')
  | {
      /**
       * Sets the base rarity of the item. The rarity of an item automatically increases when enchanted, either to Rare when the base rarity is Common or Uncommon, or Epic when the base rarity is Rare.
       */
      value?: 'common' | 'uncommon' | 'rare' | 'epic';
      [k: string]: unknown;
    };
/**
 * Items that can be used to repeair it
 */
export type Items = string[];
/**
 * Amount that can be repaired
 */
export type RepairAmount = string | number;
/**
 * Repair item entries.
 */
export type RepairItems = ReparItem[];
/**
 * Ammunition.
 */
export type Ammunition = Ammunition1[];
/**
 * Should despawn component determines if the item should eventually despawn while floating in the world
 */
export type ShouldDespawn =
  | boolean
  | {
      /**
       * Whether the item should eventually despawn while floating in the world
       */
      value: boolean;
    };
/**
 * The stacked by data component determines if the same item with different aux values can stack.
 */
export type StackedByData =
  | boolean
  | {
      /**
       * Also defines whether the item actors can merge while floating in the world.
       */
      value: boolean;
    };
/**
 * List of items that are exclusively allowed in this Storage Item. If empty all items are allowed.
 */
export type AllowedItems = string[];
/**
 * List of items that are not allowed in this Storage Item.
 */
export type BannedItems = string[];
/**
 * An array that can contain multiple item tags.
 *
 * @minItems 1
 */
export type Tags1 = [
  (
    | (
        | 'minecraft:arrow'
        | 'minecraft:banner'
        | 'minecraft:boat'
        | 'minecraft:boats'
        | 'minecraft:bookshelf_books'
        | 'minecraft:chainmail_tier'
        | 'minecraft:coals'
        | 'minecraft:crimson_stems'
        | 'minecraft:decorated_pot_sherds'
        | 'minecraft:diamond_tier'
        | 'minecraft:digger'
        | 'minecraft:door'
        | 'minecraft:golden_tier'
        | 'minecraft:hanging_actor'
        | 'minecraft:hanging_sign'
        | 'minecraft:horse_armor'
        | 'minecraft:iron_tier'
        | 'minecraft:is_armor'
        | 'minecraft:is_axe'
        | 'minecraft:is_cooked'
        | 'minecraft:is_fish'
        | 'minecraft:is_food'
        | 'minecraft:is_hoe'
        | 'minecraft:is_meat'
        | 'minecraft:is_minecart'
        | 'minecraft:is_pickaxe'
        | 'minecraft:is_shovel'
        | 'minecraft:is_sword'
        | 'minecraft:is_tool'
        | 'minecraft:is_trident'
        | 'minecraft:leather_tier'
        | 'minecraft:lectern_books'
        | 'minecraft:logs'
        | 'minecraft:logs_that_burn'
        | 'minecraft:mangrove_logs'
        | 'minecraft:music_disc'
        | 'minecraft:netherite_tier'
        | 'minecraft:planks'
        | 'minecraft:sand'
        | 'minecraft:sign'
        | 'minecraft:soul_fire_base_blocks'
        | 'minecraft:spawn_egg'
        | 'minecraft:stone_bricks'
        | 'minecraft:stone_crafting_materials'
        | 'minecraft:stone_tier'
        | 'minecraft:stone_tool_materials'
        | 'minecraft:transform_materials'
        | 'minecraft:transform_templates'
        | 'minecraft:transformable_items'
        | 'minecraft:trim_templates'
        | 'minecraft:trimmable_armors'
        | 'minecraft:vibration_damper'
        | 'minecraft:warped_stems'
        | 'minecraft:wooden_slabs'
        | 'minecraft:wooden_tier'
        | 'minecraft:wool'
      )
    | string
  ),
  ...(
    | (
        | 'minecraft:arrow'
        | 'minecraft:banner'
        | 'minecraft:boat'
        | 'minecraft:boats'
        | 'minecraft:bookshelf_books'
        | 'minecraft:chainmail_tier'
        | 'minecraft:coals'
        | 'minecraft:crimson_stems'
        | 'minecraft:decorated_pot_sherds'
        | 'minecraft:diamond_tier'
        | 'minecraft:digger'
        | 'minecraft:door'
        | 'minecraft:golden_tier'
        | 'minecraft:hanging_actor'
        | 'minecraft:hanging_sign'
        | 'minecraft:horse_armor'
        | 'minecraft:iron_tier'
        | 'minecraft:is_armor'
        | 'minecraft:is_axe'
        | 'minecraft:is_cooked'
        | 'minecraft:is_fish'
        | 'minecraft:is_food'
        | 'minecraft:is_hoe'
        | 'minecraft:is_meat'
        | 'minecraft:is_minecart'
        | 'minecraft:is_pickaxe'
        | 'minecraft:is_shovel'
        | 'minecraft:is_sword'
        | 'minecraft:is_tool'
        | 'minecraft:is_trident'
        | 'minecraft:leather_tier'
        | 'minecraft:lectern_books'
        | 'minecraft:logs'
        | 'minecraft:logs_that_burn'
        | 'minecraft:mangrove_logs'
        | 'minecraft:music_disc'
        | 'minecraft:netherite_tier'
        | 'minecraft:planks'
        | 'minecraft:sand'
        | 'minecraft:sign'
        | 'minecraft:soul_fire_base_blocks'
        | 'minecraft:spawn_egg'
        | 'minecraft:stone_bricks'
        | 'minecraft:stone_crafting_materials'
        | 'minecraft:stone_tier'
        | 'minecraft:stone_tool_materials'
        | 'minecraft:transform_materials'
        | 'minecraft:transform_templates'
        | 'minecraft:transformable_items'
        | 'minecraft:trim_templates'
        | 'minecraft:trimmable_armors'
        | 'minecraft:vibration_damper'
        | 'minecraft:warped_stems'
        | 'minecraft:wooden_slabs'
        | 'minecraft:wooden_tier'
        | 'minecraft:wool'
      )
    | string
  )[],
];
/**
 * This component determines which animation plays when using the item.
 */
export type UseAnimation =
  | ('bow' | 'brush' | 'camera' | 'crossbow' | 'drink' | 'eat' | 'none' | 'spear' | 'spyglass')
  | {
      value: Value;
    };
/**
 * Which animation to play when using the item.
 */
export type Value =
  | 'bow'
  | 'brush'
  | 'camera'
  | 'crossbow'
  | 'drink'
  | 'eat'
  | 'none'
  | 'spear'
  | 'spyglass';
/**
 * Which equipment slot the item can fit in
 */
export type Slot1 =
  | 'none'
  | 'slot.weapon.mainhand'
  | 'slot.weapon.offhand'
  | 'slot.armor.head'
  | 'slot.armor.chest'
  | 'slot.armor.legs'
  | 'slot.armor.feet'
  | 'slot.hotbar'
  | 'slot.inventory'
  | 'slot.enderchest'
  | 'slot.saddle'
  | 'slot.armor'
  | 'slot.chest'
  | 'slot.equippable';

/**
 * Minecraft items
 */
export interface Item {
  format_version: FormatVersion;
  'minecraft:item': Item1;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface Item1 {
  description: Description;
  /**
   * The components of this item.
   */
  components?: {
    'minecraft:allow_off_hand'?: AllowOffHand;
    'minecraft:block_placer'?: BlockPlacer;
    'minecraft:bundle_interaction'?: BundleInteraction;
    'minecraft:can_destroy_in_creative'?: CanDestroyInCreative;
    'minecraft:compostable'?: Compostable;
    'minecraft:cooldown'?: Cooldown;
    'minecraft:custom_components'?: CustomComponents;
    'minecraft:damage'?: Damage;
    'minecraft:damage_absorption'?: DamageAbsorption;
    'minecraft:digger'?: Digger;
    'minecraft:display_name'?: DisplayName;
    'minecraft:durability_sensor'?: DurabilitySensor;
    'minecraft:durability'?: Durability;
    'minecraft:dyeable'?: Dyeable;
    'minecraft:enchantable'?: Enchantable;
    'minecraft:entity_placer'?: EntityPlacer;
    'minecraft:food'?: Food;
    'minecraft:fuel'?: Fuel;
    'minecraft:glint'?: Glint;
    'minecraft:hand_equipped'?: HandEquipped;
    'minecraft:icon'?: Icon;
    'minecraft:liquid_clipped'?: LiquidClipped;
    'minecraft:max_stack_size'?: MaxStackSize;
    'minecraft:projectile'?: Projectile;
    'minecraft:record'?: Record;
    'minecraft:rarity'?: Rarity;
    'minecraft:repairable'?: Repairable;
    'minecraft:shooter'?: Shooter;
    'minecraft:should_despawn'?: ShouldDespawn;
    'minecraft:stacked_by_data'?: StackedByData;
    'minecraft:storage_item'?: StorageItem;
    'minecraft:tags'?: Tags;
    'minecraft:throwable'?: Throwable;
    'minecraft:use_animation'?: UseAnimation;
    'minecraft:use_modifiers'?: UseModifiers;
    'minecraft:wearable'?: Wearable;
    [k: string]: unknown;
  };
}
/**
 * The description for this item
 */
export interface Description {
  identifier?: BlockceptionMinecraftItemIdentifier;
  /**
   * If this item is experimental, it will only be registered if the world is marked as experimental.
   */
  is_experimental?: boolean;
  menu_category?: MenuCategory;
}
/**
 * The Creative Category that includes the specified item.
 */
export interface MenuCategory {
  group?: ItemGroup;
  category?: Category;
  /**
   * Determines whether or not this item can be used with commands. Commands can use items by default
   */
  is_hidden_in_commands?: boolean;
}
/**
 * Planter item component. planter items are items that can be planted.
 */
export interface BlockPlacer {
  /**
   * Set the placement block name for the planter item.
   */
  block: string;
  use_on?: UseOn;
  /**
   * Allows you to specify that this item should replace the default item created for the data-driven block it places.
   */
  replace_block_item?: boolean;
}
/**
 * A block descriptor that allows to be placed.
 */
export interface AllowedBlock {
  tags?: MolangString180;
  [k: string]: unknown;
}
/**
 * Adds bundle-specific interactions and tooltip to the item.
 */
export interface BundleInteraction {
  /**
   * The maximum number of slots in the bundle viewable by the plater. Can be from 1 to 64. Default is 12.
   */
  num_viewable_slots?: number;
  [k: string]: unknown;
}
/**
 * Allows items to be compostable in the composter block.
 */
export interface Compostable {
  /**
   * The chance of this item generating a compost layer when supplied to the composter block.
   */
  composting_chance?: number;
}
/**
 * Cool down time for a component. After you use an item it becomes unusable for the duration specified by the `cool down time` setting in this component.
 */
export interface Cooldown {
  /**
   * The type of cool down for this item.
   */
  category: string;
  /**
   * The duration of time this item will spend cooling down before becoming usable again.
   */
  duration: number;
}
/**
 * It allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component.
 */
export interface DamageAbsorption {
  absorbable_causes: AbsorbableCauses;
  [k: string]: unknown;
}
/**
 * Digger item. Component put on items that dig.
 */
export interface Digger {
  /**
   * Toggles if the item will be used efficiently.
   */
  use_efficiency?: boolean;
  destroy_speeds: DestroySpeeds;
}
/**
 * Destroy speed per block.
 */
export interface DestroySpeed {
  speed?: number;
  block?: Block;
}
/**
 * Display Name item component. Display Names display the name of an item.
 */
export interface DisplayName {
  /**
   * Set the display name for an item.
   */
  value: string;
}
/**
 * Defines both the durability threshold, and the effects emitted when that threshold is met.
 */
export interface DurabilitySensor {
  /**
   * The effects are emitted when the item durability value is less than or equal to this value.
   */
  durability?: number;
  /**
   * Particle effect to emit when the threshold is met.
   */
  particle_type?: string;
  sound_event?: BlockceptionMinecraftGeneralSoundEvent;
  [k: string]: unknown;
}
/**
 * Durability item component: how much damage can this item take before breaking.
 */
export interface Durability {
  damage_chance?: DamageChance;
  /**
   * Maximum durability is the amount of damage that this item can take before breaking.
   */
  max_durability: number;
}
/**
 * Damage chance.
 */
export interface DamageChance {
  /**
   * The minimum.
   */
  min: number;
  /**
   * The maximum.
   */
  max: number;
}
/**
 * Enables custom items to be dyed in cauldrons.
 */
export interface Dyeable {
  default_color?: DefaultColor;
  [k: string]: unknown;
}
/**
 * The enchantable component determines what enchantments can be applied to the item.
 */
export interface Enchantable {
  slot: Slot;
  /**
   * The value of the enchantment.
   */
  value?: number;
}
/**
 * Entity placer item component. You can specifiy allowed blocks that the item is restricted to.
 */
export interface EntityPlacer {
  /**
   * The entity to be placed in the world.
   */
  entity: string;
  dispense_on?: DispenseOn;
  use_on?: UseOn1;
}
/**
 * Block that item can be dispensed on.
 */
export interface BlockDescriptor {
  [k: string]: unknown;
}
/**
 * Block that item can be used on
 */
export interface BlockDescriptor1 {
  [k: string]: unknown;
}
/**
 * When an item has a food component, it becomes edible to the player.
 */
export interface Food {
  /**
   * If true you can always eat this item (even when not hungry), defaults to false.
   */
  can_always_eat?: boolean;
  /**
   * How much nutrition does this food item give the player when eaten.
   */
  nutrition?: number;
  /**
   * Saturation Modifier is used in this formula: (nutrition * saturation_modifier * 2) when appling the saturation buff. Which happens when you eat the item.
   */
  saturation_modifier?: number;
  /**
   * When used, convert the *this* item to the one specified by `using_converts_to`.
   */
  using_converts_to?: string;
}
/**
 * Fuel component. Allows this item to be used as fuel in a furnace to `cook` other items.
 */
export interface Fuel {
  /**
   * How long in seconds will this fuel cook items for.
   */
  duration: number;
}
/**
 * Contains key-value pairs of textures used by the item
 */
export interface Textures {
  /**
   * The key from the resource_pack/textures/item_texture.json `texture_data` object associated with the texture file Example: blaze_powder.
   */
  default: string;
  /**
   * The key from the resource_pack/textures/item_texture.json `texture_data` object associated with the texture file Example: blaze_powder.
   */
  [k: string]: string;
}
/**
 * Compels the item shoot, like an arrow.  Pair with minecraft:shooter for dispensers or as ammunition.  Pair with minecraft:throwable to set the entity spawned.
 */
export interface Projectile {
  /**
   * How long you must charge a projectile for it to critically hit.
   */
  minimum_critical_power?: number;
  /**
   * The entity to be fired as a projectile.
   */
  projectile_entity: string;
}
/**
 * Used by record items to play music.
 */
export interface Record {
  /**
   * Signal strength for comparator blocks to use, from 1 - 13
   */
  comparator_signal?: number;
  /**
   * Duration of sound event in seconds, float value.
   */
  duration?: number;
  /**
   * Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5, relic.
   */
  sound_event: string;
}
/**
 * Repairable item component: how much damage can this item repair, what items can repair it.
 */
export interface Repairable {
  repair_items?: RepairItems;
}
/**
 * List of repair item entries.
 */
export interface ReparItem {
  items?: Items;
  repair_amount?: RepairAmount;
}
/**
 * Shooter Item Component.
 */
export interface Shooter {
  ammunition?: Ammunition;
  /**
   * Charge on draw? Default is set to false.
   */
  charge_on_draw?: boolean;
  /**
   * Draw Duration. Default is set to 0.
   */
  max_draw_duration?: number;
  /**
   * Scale power by draw duration? Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;
}
/**
 * Ammunition definition
 */
export interface Ammunition1 {
  /**
   * Item identifier
   */
  item?: string;
  /**
   * If ammo can be in offhand
   */
  use_offhand?: boolean;
  /**
   * If ammo can be stored in the inventory
   */
  search_inventory?: boolean;
  /**
   * If it needs ammo to be used in creative
   */
  use_in_creative?: boolean;
}
/**
 * Storage Items can be used by other components to store other items within this item.
 */
export interface StorageItem {
  /**
   * Determines whether another Storage Item is allowed inside of this item. Default is true.
   */
  allow_nested_storage_items?: boolean;
  allowed_items?: AllowedItems;
  banned_items?: BannedItems;
  /**
   * The maximum number of different item stacks. Maximum is 64. Default is 64.
   */
  max_slots?: number;
  /**
   * The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64.
   */
  max_weight_limit?: number;
  /**
   * The weight of this item when inside another Storage Item. Default is 4. 0 means item is not allowed in another Storage Item.
   */
  weight_in_storage_item?: number;
  [k: string]: unknown;
}
/**
 * The tags component determines which tags an item has on it.
 */
export interface Tags {
  tags: Tags1;
}
/**
 * Throwable item component. Throwable items, such as a snowball.
 */
export interface Throwable {
  /**
   * Whether the item should use the swing animation when thrown. Default is set to false.
   */
  do_swing_animation?: boolean;
  /**
   * The scale at which the power of the throw increases. Default is set to 1.0.
   */
  launch_power_scale?: number;
  /**
   * The maximum duration to draw a throwable item. Default is set to 0.0.
   */
  max_draw_duration?: number;
  /**
   * The minimum duration to draw a throwable item. Default is set to 0.0.
   */
  min_draw_duration?: number;
  /**
   * The maximum power to launch the throwable item. Default is set to 1.0.
   */
  max_launch_power?: number;
  /**
   * Whether or not the power of the throw increases with duration charged. Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;
}
/**
 * How long to use before item is done being used.
 */
export interface UseModifiers {
  /**
   * Modifier value to scale the players movement speed when item is in use.
   */
  movement_modifier?: number;
  /**
   * How long the item takes to use in seconds.
   */
  use_duration: number;
}
/**
 * Wearable item component.
 */
export interface Wearable {
  /**
   * How much protection does the armor item have.
   */
  protection?: number;
  /**
   * Sets if the item can be dropped by a dispenser block
   */
  dispensable?: boolean;
  slot?: Slot1;
}
