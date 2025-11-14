/**
 * behavior/entities/format/behaviors/lay_egg.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.737Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;
/**
 * [EXPERIMENTAL] Block type for the egg to lay. If this is a turtle egg, the number of eggs in the block is randomly set.
 */
export type EggType =
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
/**
 * [EXPERIMENTAL] Sound event name for laying egg. Defaulted to lay_egg which is used for Turtles.
 */
export type LayEggSound =
  | 'add.chest'
  | 'admire'
  | 'agitated'
  | 'ambient'
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
  | 'angry'
  | 'armor'
  | 'armor.equip_chain'
  | 'armor.equip_diamond'
  | 'armor.equip_elytra'
  | 'armor.equip_generic'
  | 'armor.equip_gold'
  | 'armor.equip_iron'
  | 'armor.equip_leather'
  | 'armor.equip_netherite'
  | 'attach'
  | 'attack'
  | 'attack.nodamage'
  | 'attack.strong'
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
  | 'block.click'
  | 'block.click.fail'
  | 'block.composter.empty'
  | 'block.composter.fill'
  | 'block.composter.fill_success'
  | 'block.composter.ready'
  | 'block.enchanting_table.use'
  | 'block.end_portal.spawn'
  | 'block.end_portal_frame.fill'
  | 'block.fletching_table.use'
  | 'block.frog_spawn.break'
  | 'block.frog_spawn.hatch'
  | 'block.furnace.lit'
  | 'block.grindstone.use'
  | 'block.loom.use'
  | 'block.scaffolding.climb'
  | 'block.sculk.spread'
  | 'block.sculk_catalyst.bloom'
  | 'block.sculk_sensor.place'
  | 'block.sculk_shrieker.place'
  | 'block.sculk_shrieker.shriek'
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
  | 'bow'
  | 'bow.hit'
  | 'break'
  | 'break.block'
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
  | 'charge'
  | 'charge.sculk'
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
  | 'death'
  | 'death.baby'
  | 'death.in.water'
  | 'death.mid.volume'
  | 'death.min.volume'
  | 'death.screamer'
  | 'death.to.zombie'
  | 'default'
  | 'deny'
  | 'detach'
  | 'disappeared'
  | 'drink'
  | 'drink.honey'
  | 'drink.milk'
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
  | 'fall'
  | 'fall.big'
  | 'fall.small'
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
  | 'haggle'
  | 'haggle.idle'
  | 'haggle.no'
  | 'haggle.yes'
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
  | 'hurt'
  | 'hurt.baby'
  | 'hurt.in.water'
  | 'hurt.screamer'
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
  | 'imitate.wither'
  | 'imitate.wither_skeleton'
  | 'imitate.wolf'
  | 'imitate.zombie'
  | 'imitate.zombie_pigman'
  | 'imitate.zombie_villager'
  | 'irongolem.crack'
  | 'irongolem.repair'
  | 'item.book.put'
  | 'item.fizz'
  | 'item.shield.block'
  | 'item.spyglass.stop_using'
  | 'item.spyglass.use'
  | 'item.trident.hit'
  | 'item.trident.hit_ground'
  | 'item.trident.return'
  | 'item.trident.riptide_1'
  | 'item.trident.riptide_2'
  | 'item.trident.riptide_3'
  | 'item.trident.throw'
  | 'item.trident.thunder'
  | 'item.use.on'
  | 'item_given'
  | 'item_taken'
  | 'item_thrown'
  | 'jump'
  | 'jump.prevent'
  | 'jump_to_block'
  | 'land'
  | 'large.blast'
  | 'launch'
  | 'lava'
  | 'lava.pop'
  | 'lay_egg'
  | 'lay_spawn'
  | 'leashknot.break'
  | 'leashknot.place'
  | 'levelup'
  | 'listening'
  | 'listening_angry'
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
  | 'milk'
  | 'milk.screamer'
  | 'milk_suspiciously'
  | 'mob.armor_stand.place'
  | 'mob.player.hurt_drown'
  | 'mob.player.hurt_freeze'
  | 'mob.player.hurt_on_fire'
  | 'mob.warning'
  | 'mob.warning.baby'
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
  | 'portal'
  | 'portal.travel'
  | 'potion.brewed'
  | 'power.off'
  | 'power.off.sculk_sensor'
  | 'power.on'
  | 'power.on.sculk_sensor'
  | 'pre_ram'
  | 'pre_ram.screamer'
  | 'prepare.attack'
  | 'prepare.summon'
  | 'prepare.wololo'
  | 'presneeze'
  | 'purr'
  | 'purreow'
  | 'raid.horn'
  | 'ram_impact'
  | 'ram_impact.screamer'
  | 'random.anvil_use'
  | 'reappeared'
  | 'record.5'
  | 'record.11'
  | 'record.13'
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
  | 'step'
  | 'step.baby'
  | 'step_lava'
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
 * Event to run when this mob lays the egg.
 */
export type OnLay =
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
 * [EXPERIMENTAL] Block type for the egg to lay. If this is a turtle egg, the number of eggs in the block is randomly set.
 */
export type BlockID =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * [EXPERIMENTAL] Blocks that the mob can lay its eggs on top of.
 */
export type TargetBlocks = BlockID[];
/**
 * [EXPERIMENTAL] Types of materials that can exist above the target block. Valid types are Air, Water, and Lava.
 */
export type TargetMaterialsAboveBlock = unknown[];

/**
 * Allows the mob to lay an egg block on a sand block if the mob is pregnant.
 */
export interface LayEgg {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * [EXPERIMENTAL] Allows the mob to lay its eggs from below the target if it can't get there. This is useful if the target block is water with air above, since mobs may not be able to get to the air block above water.
   */
  allow_laying_from_below?: boolean;
  egg_type?: EggType;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  lay_egg_sound?: LayEggSound;
  /**
   * [EXPERIMENTAL] Duration of the laying egg process in seconds.
   */
  lay_seconds?: number;
  on_lay?: OnLay;
  /**
   * Height in blocks the mob will look for a target block to move towards.
   */
  search_height?: number;
  /**
   * The distance in blocks it will look for a target block to move towards.
   */
  search_range?: number;
  target_blocks?: TargetBlocks;
  target_materials_above_block?: TargetMaterialsAboveBlock;
  /**
   * [EXPERIMENTAL] Specifies if the default lay-egg animation should be played when the egg is placed or not.
   */
  use_default_animation?: boolean;
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
