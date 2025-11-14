/**
 * behavior/entities/format/components/interact.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:30.360Z
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
export type OnInteract =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters;
      target?: Subject;
    };
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
export type PlaySounds =
  | 'add.chest'
  | 'admire'
  | 'agitated'
  | 'ambient.aggressive'
  | 'ambient.baby'
  | 'ambient.basalt_deltas.additions'
  | 'ambient.basalt_deltas.loop'
  | 'ambient.candle'
  | 'ambient.cave'
  | 'ambient.crimson_forest.additions'
  | 'ambient.crimson_forest.loop'
  | 'ambient.crimson_forest.mood'
  | 'ambient.in.raid'
  | 'ambient.in.water'
  | 'ambient.nether_wastes.additions'
  | 'ambient.nether_wastes.loop'
  | 'ambient.nether_wastes.mood'
  | 'ambient.pollinate'
  | 'ambient.screamer'
  | 'ambient.soulsand_valley.additions'
  | 'ambient.soulsand_valley.loop'
  | 'ambient.soulsand_valley.mood'
  | 'ambient.tame'
  | 'ambient.warped_forest.additions'
  | 'ambient.warped_forest.loop'
  | 'ambient.warped_forest.mood'
  | 'ambient.worried'
  | 'ambient'
  | 'angry'
  | 'armor.equip_chain'
  | 'armor.equip_diamond'
  | 'armor.equip_elytra'
  | 'armor.equip_generic'
  | 'armor.equip_gold'
  | 'armor.equip_iron'
  | 'armor.equip_leather'
  | 'armor.equip_netherite'
  | 'armor'
  | 'attach'
  | 'attack.nodamage'
  | 'attack.strong'
  | 'attack'
  | 'balloonpop'
  | 'beacon.activate'
  | 'beacon.ambient'
  | 'beacon.deactivate'
  | 'beacon.power'
  | 'blast'
  | 'block.bamboo_sapling.place'
  | 'block.barrel.close'
  | 'block.barrel.open'
  | 'block.beehive.drip'
  | 'block.beehive.enter'
  | 'block.beehive.exit'
  | 'block.beehive.shear'
  | 'block.beehive.work'
  | 'block.bell.hit'
  | 'block.blastfurnace.fire_crackle'
  | 'block.campfire.crackle'
  | 'block.cartography_table.use'
  | 'block.click.fail'
  | 'block.click'
  | 'block.composter.empty'
  | 'block.composter.fill_success'
  | 'block.composter.fill'
  | 'block.composter.ready'
  | 'block.enchanting_table.use'
  | 'block.end_portal_frame.fill'
  | 'block.end_portal.spawn'
  | 'block.fletching_table.use'
  | 'block.frog_spawn.break'
  | 'block.frog_spawn.hatch'
  | 'block.furnace.lit'
  | 'block.grindstone.use'
  | 'block.loom.use'
  | 'block.scaffolding.climb'
  | 'block.sculk_catalyst.bloom'
  | 'block.sculk_sensor.place'
  | 'block.sculk_shrieker.place'
  | 'block.sculk_shrieker.shriek'
  | 'block.sculk.spread'
  | 'block.smithing_table.use'
  | 'block.smoker.smoke'
  | 'block.stonecutter.use'
  | 'block.sweet_berry_bush.hurt'
  | 'block.sweet_berry_bush.pick'
  | 'block.turtle_egg.attack'
  | 'block.turtle_egg.break'
  | 'block.turtle_egg.crack'
  | 'block.turtle_egg.hatch'
  | 'boost'
  | 'born'
  | 'bottle.dragonbreath'
  | 'bow.hit'
  | 'bow'
  | 'break.block'
  | 'break'
  | 'breathe'
  | 'bubble.down'
  | 'bubble.downinside'
  | 'bubble.pop'
  | 'bubble.up'
  | 'bubble.upinside'
  | 'bucket.empty.fish'
  | 'bucket.empty.lava'
  | 'bucket.empty.powder_snow'
  | 'bucket.empty.water'
  | 'bucket.fill.fish'
  | 'bucket.fill.lava'
  | 'bucket.fill.powder_snow'
  | 'bucket.fill.water'
  | 'bullet.hit'
  | 'burp'
  | 'cake.add_candle'
  | 'camera.take_picture'
  | 'cant_breed'
  | 'cast.spell'
  | 'cauldron_drip.lava.pointed_dripstone'
  | 'cauldron_drip.water.pointed_dripstone'
  | 'celebrate'
  | 'charge.sculk'
  | 'charge'
  | 'chest.closed'
  | 'chest.open'
  | 'chime.amethyst_block'
  | 'chorusdeath'
  | 'chorusgrow'
  | 'conduit.activate'
  | 'conduit.ambient'
  | 'conduit.attack'
  | 'conduit.deactivate'
  | 'conduit.short'
  | 'convert_mooshroom'
  | 'convert_to_drowned'
  | 'convert_to_frog'
  | 'convert_to_stray'
  | 'converted_to_zombified'
  | 'copper.wax.off'
  | 'copper.wax.on'
  | 'crossbow.loading.end'
  | 'crossbow.loading.middle'
  | 'crossbow.loading.start'
  | 'crossbow.quick_charge.end'
  | 'crossbow.quick_charge.middle'
  | 'crossbow.quick_charge.start'
  | 'crossbow.shoot'
  | 'death.baby'
  | 'death.in.water'
  | 'death.mid.volume'
  | 'death.min.volume'
  | 'death.screamer'
  | 'death.to.zombie'
  | 'death'
  | 'default'
  | 'deny'
  | 'detach'
  | 'disappeared'
  | 'drink.honey'
  | 'drink.milk'
  | 'drink'
  | 'drip.lava.pointed_dripstone'
  | 'drip.water.pointed_dripstone'
  | 'drop.slot'
  | 'eat'
  | 'elderguardian.curse'
  | 'elemconstruct.open'
  | 'enderchest.closed'
  | 'enderchest.open'
  | 'explode'
  | 'extinguish.candle'
  | 'extinguish.fire'
  | 'fall.big'
  | 'fall.small'
  | 'fall'
  | 'fang'
  | 'fire'
  | 'fizz'
  | 'flap'
  | 'flop'
  | 'fly'
  | 'fuse'
  | 'gallop'
  | 'glass'
  | 'glow_squid.ink_squirt'
  | 'glowstick.use'
  | 'growl'
  | 'haggle.idle'
  | 'haggle.no'
  | 'haggle.yes'
  | 'haggle'
  | 'heartbeat'
  | 'heavy.step'
  | 'hit'
  | 'horn_break'
  | 'horn_call0'
  | 'horn_call1'
  | 'horn_call2'
  | 'horn_call3'
  | 'horn_call4'
  | 'horn_call5'
  | 'horn_call6'
  | 'horn_call7'
  | 'hurt.baby'
  | 'hurt.in.water'
  | 'hurt.screamer'
  | 'hurt'
  | 'icebomb.hit'
  | 'ignite'
  | 'imitate.blaze'
  | 'imitate.cave_spider'
  | 'imitate.creeper'
  | 'imitate.elder_guardian'
  | 'imitate.ender_dragon'
  | 'imitate.enderman'
  | 'imitate.evocation_illager'
  | 'imitate.ghast'
  | 'imitate.husk'
  | 'imitate.illusion_illager'
  | 'imitate.magma_cube'
  | 'imitate.polar_bear'
  | 'imitate.shulker'
  | 'imitate.silverfish'
  | 'imitate.skeleton'
  | 'imitate.slime'
  | 'imitate.spider'
  | 'imitate.stray'
  | 'imitate.vex'
  | 'imitate.vindication_illager'
  | 'imitate.warden'
  | 'imitate.witch'
  | 'imitate.wither_skeleton'
  | 'imitate.wither'
  | 'imitate.wolf'
  | 'imitate.zombie_pigman'
  | 'imitate.zombie_villager'
  | 'imitate.zombie'
  | 'insert_enchanted'
  | 'insert'
  | 'irongolem.crack'
  | 'irongolem.repair'
  | 'item_given'
  | 'item_taken'
  | 'item_thrown'
  | 'item.book.put'
  | 'item.fizz'
  | 'item.shield.block'
  | 'item.spyglass.stop_using'
  | 'item.spyglass.use'
  | 'item.trident.hit_ground'
  | 'item.trident.hit'
  | 'item.trident.return'
  | 'item.trident.riptide_1'
  | 'item.trident.riptide_2'
  | 'item.trident.riptide_3'
  | 'item.trident.throw'
  | 'item.trident.thunder'
  | 'item.use.on'
  | 'jump_to_block'
  | 'jump.prevent'
  | 'jump'
  | 'land'
  | 'large.blast'
  | 'launch'
  | 'lava.pop'
  | 'lava'
  | 'lay_egg'
  | 'lay_spawn'
  | 'leashknot.break'
  | 'leashknot.place'
  | 'levelup'
  | 'listening_angry'
  | 'listening'
  | 'lodestone_compass.link_compass_to_lodestone'
  | 'lt.reaction.bleach'
  | 'lt.reaction.epaste'
  | 'lt.reaction.epaste2'
  | 'lt.reaction.fertilizer'
  | 'lt.reaction.fire'
  | 'lt.reaction.fireball'
  | 'lt.reaction.icebomb'
  | 'lt.reaction.mgsalt'
  | 'lt.reaction.miscexplosion'
  | 'lt.reaction.miscfire'
  | 'lt.reaction.miscmystical'
  | 'lt.reaction.miscmystical2'
  | 'lt.reaction.product'
  | 'mad'
  | 'milk_suspiciously'
  | 'milk.screamer'
  | 'milk'
  | 'mob.armor_stand.place'
  | 'mob.player.hurt_drown'
  | 'mob.player.hurt_freeze'
  | 'mob.player.hurt_on_fire'
  | 'mob.warning.baby'
  | 'mob.warning'
  | 'nearby_close'
  | 'nearby_closer'
  | 'nearby_closest'
  | 'note'
  | 'panic'
  | 'pant'
  | 'particle.soul_escape.loud'
  | 'particle.soul_escape.quiet'
  | 'pick_berries.cave_vines'
  | 'piston.in'
  | 'piston.out'
  | 'place'
  | 'plop'
  | 'pop'
  | 'portal.travel'
  | 'portal'
  | 'potion.brewed'
  | 'power.off.sculk_sensor'
  | 'power.off'
  | 'power.on.sculk_sensor'
  | 'power.on'
  | 'pre_ram.screamer'
  | 'pre_ram'
  | 'prepare.attack'
  | 'prepare.summon'
  | 'prepare.wololo'
  | 'presneeze'
  | 'purr'
  | 'purreow'
  | 'raid.horn'
  | 'ram_impact.screamer'
  | 'ram_impact'
  | 'random.anvil_use'
  | 'reappeared'
  | 'record.11'
  | 'record.13'
  | 'record.5'
  | 'record.blocks'
  | 'record.cat'
  | 'record.chirp'
  | 'record.far'
  | 'record.mall'
  | 'record.mellohi'
  | 'record.otherside'
  | 'record.pigstep'
  | 'record.stal'
  | 'record.strad'
  | 'record.wait'
  | 'record.ward'
  | 'remedy'
  | 'respawn_anchor.ambient'
  | 'respawn_anchor.basalt_deltas.mood'
  | 'respawn_anchor.charge'
  | 'respawn_anchor.deplete'
  | 'respawn_anchor.set_spawn'
  | 'retreat'
  | 'roar'
  | 'saddle'
  | 'scared'
  | 'scrape'
  | 'screech'
  | 'shake'
  | 'shear'
  | 'shoot'
  | 'shulker.close'
  | 'shulker.open'
  | 'shulkerbox.closed'
  | 'shulkerbox.open'
  | 'sleep'
  | 'smithing_table.use'
  | 'sneeze'
  | 'sonic_boom'
  | 'sonic_charge'
  | 'sparkler.active'
  | 'sparkler.use'
  | 'spawn'
  | 'splash'
  | 'squid.ink_squirt'
  | 'squish.big'
  | 'squish.small'
  | 'stare'
  | 'step_lava'
  | 'step.baby'
  | 'step'
  | 'stun'
  | 'swim'
  | 'swoop'
  | 'takeoff'
  | 'teleport'
  | 'tempt'
  | 'thorns'
  | 'throw'
  | 'thunder'
  | 'tilt_down.big_dripleaf'
  | 'tilt_up.big_dripleaf'
  | 'tongue'
  | 'tripod'
  | 'twinkle'
  | 'ui.cartography_table.take_result'
  | 'ui.loom.take_result'
  | 'ui.stonecutter.take_result'
  | 'unfect'
  | 'warn'
  | 'water'
  | 'whine';
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
  play_sounds?: PlaySounds;
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
}
/**
 * Loot table with items to add to the player's inventory upon successful interaction.
 */
export interface AddItems {
  table?: BlockceptionMinecraftLootTableIdentifier;
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
  play_sounds?: PlaySounds;
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
}
