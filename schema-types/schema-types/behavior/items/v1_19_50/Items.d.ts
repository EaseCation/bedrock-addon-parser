/**
 * behavior/items/items.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:21.979Z
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
 * Texture Type to apply for the armor. Note that Horse armor is restricted to leather, iron, gold, or diamond.
 */
export type TextureType =
  | 'gold'
  | 'none'
  | 'leather'
  | 'chain'
  | 'iron'
  | 'diamond'
  | 'elytra'
  | 'turtle'
  | 'netherite';
/**
 * Tags.
 */
export type MolangString180 = string;
/**
 * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
 */
export type UseOn = AllowedBlock[];
export type Block =
  | string
  | {
      any_tag?: AnyBlockTag;
    };
/**
 * The block tag.
 */
export type AnyBlockTag = string[];
/**
 * Destroy speed per block.
 */
export type DestroySpeeds = DestroySpeed[];
/**
 * Defines what color the dye is.
 */
export type Color =
  | 'black'
  | 'red'
  | 'green'
  | 'brown'
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'silver'
  | 'gray'
  | 'pink'
  | 'lime'
  | 'yellow'
  | 'lightblue'
  | 'magenta'
  | 'orange'
  | 'white';
/**
 * List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.
 */
export type DispenseOn = DispenseOn1[];
/**
 * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
 */
export type UseOn1 = UseOn2[];
/**
 * Foil or glint.
 */
export type BlockceptionMinecraftBehaviorItemsMinecraftFoil = boolean;
/**
 * UNDOCUMENTED.
 */
export type Target = 'self';
/**
 * Is this a hand equipped item.
 */
export type BlockceptionMinecraftBehaviorItemsMinecraftHandEquiped = boolean;
/**
 * Maximum Damage.
 */
export type BlockceptionMinecraftBehaviorItemsMinecraftMaxDamage = number;
/**
 * Maximum stack size.
 */
export type BlockceptionMinecraftBehaviorItemsMinecraftMaxStackSize = number;
/**
 * UNDOCUMENTED.
 */
export type Target1 = 'block';
/**
 * UNDOCUMENTED.
 */
export type Target2 = 'self';
/**
 * UNDOCUMENTED.
 */
export type Items = string[];
/**
 * UNDOCUMENTED.
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
 * How long to use before item is done being used.
 */
export type BlockceptionMinecraftBehaviorItemsMinecraftUseDuration = number;
/**
 * equipment_slot: slot.weapon.mainhand, slot.weapon.offhand, slot.armor.head, slot.armor.chest, slot.armor.legs, slot.armor.feet, slot.hotbar, slot.inventory, slot.enderchest, slot.saddle, slot.armor, slot.chest
 */
export type Slot =
  | 'slot.weapon.mainhand'
  | 'none'
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
 * UNDOCUMENTED.
 */
export type Target3 = 'holder';
/**
 * UNDOCUMENTED.
 */
export type Type = 'magic';
/**
 * UNDOCUMENTED.
 */
export type Target4 = 'holder';
/**
 * UNDOCUMENTED.
 */
export type Target5 = 'holder';
/**
 * UNDOCUMENTED.
 */
export type MaximumRange = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Sequence = Sequence1[];
/**
 * UNDOCUMENTED.
 */
export type Randomize = Randomize1[];
/**
 * UNDOCUMENTED.
 */
export type Command = string[];
/**
 * UNDOCUMENTED.
 */
export type Target6 = 'other';

/**
 * Minecraft items 1.16.200
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
    'minecraft:armor'?: Armor;
    'minecraft:block_placer'?: BlockPlacer;
    'minecraft:cooldown'?: Cooldown;
    'minecraft:digger'?: Digger;
    'minecraft:display_name'?: DisplayName;
    'minecraft:durability'?: Durability;
    'minecraft:dye_powder'?: DyePowder;
    'minecraft:entity_placer'?: EntityPlacer;
    'minecraft:foil'?: BlockceptionMinecraftBehaviorItemsMinecraftFoil;
    'minecraft:food'?: Food;
    'minecraft:fuel'?: Fuel;
    'minecraft:hand_equipped'?: BlockceptionMinecraftBehaviorItemsMinecraftHandEquiped;
    'minecraft:icon'?: Icon;
    'minecraft:knockback_resistance'?: KnockbackResistance;
    'minecraft:max_damage'?: BlockceptionMinecraftBehaviorItemsMinecraftMaxDamage;
    'minecraft:max_stack_size'?: BlockceptionMinecraftBehaviorItemsMinecraftMaxStackSize;
    'minecraft:on_use_on'?: OnUseOn;
    'minecraft:on_use'?: OnUse1;
    'minecraft:projectile'?: Projectile;
    'minecraft:render_offsets'?: RenderOffsets;
    'minecraft:repairable'?: Repairable;
    'minecraft:shooter'?: Shooter;
    'minecraft:stacked_by_data'?: KnockbackResistance;
    'minecraft:throwable'?: Throwable;
    'minecraft:use_duration'?: BlockceptionMinecraftBehaviorItemsMinecraftUseDuration;
    'minecraft:weapon'?: Weapon;
    'minecraft:wearable'?: Wearable;
    [k: string]: {
      [k: string]: unknown;
    };
  };
  events?: Events;
}
/**
 * UNDOCUMENTED.
 */
export interface Description {
  identifier?: BlockceptionMinecraftItemIdentifier;
  /**
   * The category for this item. Categories are used to control high level properties of how the item is integrated into the bedrock engine, such as whether it can be used in slash commands.
   */
  category?: string;
  /**
   * If this item is experimental, it will only be registered if the world is marked as experimental.
   */
  is_experimental?: boolean;
}
/**
 * The armor item component determines the amount of protection you have in your armor item.
 */
export interface Armor {
  /**
   * How much protection does the armor item have.
   */
  protection: number;
  texture_type: TextureType;
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
}
/**
 * A block descriptor that allows to be placed.
 */
export interface AllowedBlock {
  tags?: MolangString180;
  [k: string]: unknown;
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
 * Digger item. Component put on items that dig.
 */
export interface Digger {
  /**
   * Toggles if the item will be used efficiently.
   */
  use_efficiency?: boolean;
  destroy_speeds: DestroySpeeds;
  /**
   * Trigger for when you dig a block that isn't listed in destroy_speeds.
   */
  on_dig?: string;
}
/**
 * Destroy speed per block.
 */
export interface DestroySpeed {
  /**
   * Speed.
   */
  speed?: number;
  /**
   * Trigger for when you dig a block that isn't listed in destroy_speeds.
   */
  on_dig?: string;
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
 * Durability item component: how much damage can this item take before breaking.
 */
export interface Durability {
  damage_chance: DamangeChance;
  /**
   * Maximum durability is the amount of damage that this item can take before breaking.
   */
  max_durability?: number;
}
/**
 * Damange chance.
 */
export interface DamangeChance {
  /**
   * The minimum.
   */
  min: number;
  /**
   * The minimum.
   */
  max: number;
}
/**
 * Dye powder, there are 16 kinds of dye.
 */
export interface DyePowder {
  color: Color;
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
 * UNDOCUMENTED.
 */
export interface DispenseOn1 {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface UseOn2 {
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
  on_consume?: OnConsume;
  /**
   * If true, this food item is considered meat.
   */
  is_meat?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface OnConsume {
  /**
   * UNDOCUMENTED.
   */
  event?: string;
  target?: Target;
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
 * The icon item componenent determines the icon to represent the item in the UI and elsewhere.
 */
export interface Icon {
  /**
   * An index or expression for which frame of the icon to display. Default resolves to 0.
   */
  frame?: number & string;
  /**
   * Legacy texture id for older item icons.
   */
  legacy_id?: string;
  /**
   * The key from the resource_pack/textures/item_texture.json `texture_data` object associated with the texture file Example: blaze_powder.
   */
  texture: string;
}
/**
 * Knockback Resistance Item. Component put on items that provide knockback resistance.
 */
export interface KnockbackResistance {
  /**
   * Amount of knockback resistance provided with the total maximum protection being 1.0
   */
  protection: number;
}
/**
 * The on_use_on item component allows you to receive an event when the item is used on a block in the world.
 */
export interface OnUseOn {
  on_use?: OnUse;
}
/**
 * Event trigger for when the item is used.
 */
export interface OnUse {
  /**
   * UNDOCUMENTED.
   */
  event?: string;
  target?: Target1;
}
/**
 * The on_use item component allows you to receive an event when the item is used.
 */
export interface OnUse1 {
  on_use: OnUse2;
}
/**
 * Event trigger for when the item is used.
 */
export interface OnUse2 {
  /**
   * UNDOCUMENTED.
   */
  event?: string;
  target?: Target2;
}
/**
 * Projectile item component. projectile items shoot out, like an arrow.
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
 * Render offsets component: optional values can be given to offset the way the item is rendered.
 */
export interface RenderOffsets {
  /**
   * Right hand transform data.
   */
  main_hand?: string;
  /**
   * Left hand transform data.
   */
  off_hand?: string;
}
/**
 * Repairable item component: how much damage can this item repair, what items can repair it.
 */
export interface Repairable {
  on_repaired?: OnRepaired;
  repair_items?: RepairItems;
}
/**
 * Event that is called when this item has been repaired.
 */
export interface OnRepaired {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
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
   * Launch power scale. Default is set to 1.0.
   */
  launch_power_scale?: number;
  /**
   * Draw Duration. Default is set to 0.
   */
  max_draw_duration?: number;
  /**
   * Launch power. Default is set to 1.0.
   */
  max_launch_power?: number;
  /**
   * Scale power by draw duration? Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface Ammunition1 {
  /**
   * UNDOCUMENTED.
   */
  item?: string;
  /**
   * UNDOCUMENTED.
   */
  use_offhand?: boolean;
  /**
   * UNDOCUMENTED.
   */
  search_inventory?: boolean;
  /**
   * UNDOCUMENTED.
   */
  use_in_creative?: boolean;
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
 * Weapon Item Component. Added to every weapon item such as axe, sword, trident, bow, crossbow.
 */
export interface Weapon {
  on_hit_block?: OnHitBlock;
  on_hurt_entity?: OnHurtEntity;
  on_not_hurt_entity?: OnNotHurtEntity;
}
/**
 * Trigger for letting you know when this item is used to hit a block.
 */
export interface OnHitBlock {}
/**
 * Trigger for letting you know when this item is used to hurt another mob.
 */
export interface OnHurtEntity {}
/**
 * Trigger for letting you know when this item hit another actor, but didn't do damage.
 */
export interface OnNotHurtEntity {}
/**
 * Wearable item component.
 */
export interface Wearable {
  /**
   * UNDOCUMENTED.
   */
  dispensable?: boolean;
  slot?: Slot;
}
/**
 * UNDOCUMENTED.
 */
export interface Events {
  on_consume?: Event;
  [k: string]: Event;
}
/**
 * UNDOCUMENTED.
 */
export interface Event {
  sequence?: Sequence;
  randomize?: Randomize;
  run_command?: RunCommand;
}
/**
 * UNDOCUMENTED.
 */
export interface Sequence1 {
  add_mob_effect?: AddMobEffect;
  damage?: Shoot;
  decrement_stack?: DecrementStack;
  remove_mob_effect?: RemoveMobEffect;
  shoot?: Shoot1;
  swing?: Swing;
  teleport?: Teleport;
  transform_item?: TransformItem;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface AddMobEffect {
  /**
   * UNDOCUMENTED.
   */
  effect?: string;
  target?: Target3;
  /**
   * UNDOCUMENTED.
   */
  duration?: number;
  /**
   * UNDOCUMENTED.
   */
  amplifier?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Shoot {
  type?: Type;
  /**
   * UNDOCUMENTED.
   */
  amount?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface DecrementStack {}
/**
 * UNDOCUMENTED.
 */
export interface RemoveMobEffect {
  /**
   * UNDOCUMENTED.
   */
  effect?: string;
  target?: Target4;
}
/**
 * UNDOCUMENTED.
 */
export interface Shoot1 {
  /**
   * UNDOCUMENTED.
   */
  angle_offset?: number;
  /**
   * UNDOCUMENTED.
   */
  launch_power?: number;
  /**
   * UNDOCUMENTED.
   */
  projectile?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface Swing {}
/**
 * UNDOCUMENTED.
 */
export interface Teleport {
  target?: Target5;
  max_range?: MaximumRange;
}
/**
 * UNDOCUMENTED.
 */
export interface TransformItem {
  /**
   * UNDOCUMENTED.
   */
  transform?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface Randomize1 {
  /**
   * UNDOCUMENTED.
   */
  weight: number;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface RunCommand {
  command?: Command;
  target?: Target6;
}
