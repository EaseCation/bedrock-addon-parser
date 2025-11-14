/**
 * behavior/entities/entities.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:35.242Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * Sets the identifier for this entity's description.
 */
export type BlockceptionMinecraftEntityIdentifier = string;
/**
 * The default value of the property.
 */
export type Default = string | boolean;
/**
 * The default value of the property.
 */
export type Default1 = string | number;
/**
 * The range of the property.
 */
export type Range = [] | [number] | [number, number];
/**
 * The default value of the property.
 */
export type Default2 = string | number;
/**
 * The range of the property.
 */
export type Range1 = [] | [number] | [number, number];
/**
 * The values of the property.
 *
 * @minItems 1
 */
export type Values = [string, ...string[]];
/**
 * Tells minecraft to run which animation / animation controllers and under what conditions.
 */
export type Animate = (string | ConditionalAnimation)[];
/**
 * List of items that the entity drops when it grows up.
 */
export type DropItems =
  | BlockceptionMinecraftItemDescriptor[]
  | BlockceptionMinecraftItemDescriptor1;
export type BlockceptionMinecraftItemDescriptor =
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
export type BlockceptionMinecraftItemDescriptor1 = (
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    }
) &
  string;
/**
 * List of items that can be fed to the entity. Includes `item` for the item name and `growth` to define how much time it grows up by
 */
export type FeedItems =
  | (
      | BlockceptionMinecraftItemIdentifier
      | {
          growth?: number;
          item?: BlockceptionMinecraftItemDescriptor;
          [k: string]: unknown;
        }
    )[]
  | BlockceptionMinecraftItemIdentifier2;
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier2 = string;
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
 * The feed item used will transform to this item upon successful interaction. Format: itemName:auxValue
 */
export type TransformToItem =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * Level sound event to be played as the ambient sound.
 */
export type EventName =
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
 * Filter that is applied to determine if a mob can be a nuisance.
 */
export type NuisanceFilter =
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
export type OnIncreaseSounds =
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
 * Conditions that make this entry in the list valid.
 */
export type BroadcastFilters =
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
 * Filter out mob types that it should not attack while angry (other Piglins).
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
 * A list of entity families to broadcast anger to.
 */
export type BroadcastTargets = string[];
/**
 * The sound event to play when the mob is angry.
 */
export type AngrySound =
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
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval =
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum interval.
       */
      range_min?: number;
      /**
       * The maximum interval.
       */
      range_max?: number;
    };
/**
 * The type of damage that is applied to entities that enter the damage range.
 */
export type Cause =
  | 'all'
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire_tick'
  | 'fire'
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
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * The set of entities that are valid to apply the damage to when within range.
 */
export type EntityFilter =
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
 * Event to be run when the cooldown is complete.
 */
export type AttackCooldownCompleteEvent =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters1 =
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
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Amount of time in seconds for the cooldown. Can be specified as a number or a pair of numbers (Minimum and max).
 */
export type AttackCooldownTime = [] | [number] | [number, number] | number;
/**
 * Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it.
 */
export type Damage =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * A minecraft block identifier.
 */
export type BlockID = string;
/**
 * List of blocks that will trigger the sensor.
 */
export type BlockList = BlockID[];
/**
 * Blocks that will trigger the component when broken and what event will trigger.
 */
export type OnBreak = OnBlockBroken[];
export type Filters2 =
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
 * List of sources that break the block to listen for. If none are specified, all block breaks will be detected.
 */
export type Sources = Filters2[];
/**
 * Name of the item that can be used to boost.
 */
export type Item =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * The item used to boost will become this item once it is used up.
 */
export type ReplaceItem =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * List of items that can be used to boost while riding this entity.
 */
export type BoostItems = {
  /**
   * This is the damage that the item will take each time it is used.
   */
  damage?: number;
  item?: Item;
  replace_item?: ReplaceItem;
}[];
/**
 * UNDOCUMENTED.
 */
export type BlockceptionMinecraftGeneral180BlocksItem = string;
/**
 * A list of the blocks that can be broken as this entity moves around.
 */
export type BreakableBlocks = BlockceptionMinecraftGeneral180BlocksItem[];
/**
 * A minecraft block reference.
 */
export type BlockReference = BlockceptionMinecraftBlockIdentifier | BlockReference1;
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
/**
 * List of blocks this entity can breathe in, in addition to the above.
 */
export type BreatheBlocks = BlockReference[];
/**
 * List of blocks this entity can't breathe in, in addition to the above.
 */
export type NonBreathesBlocks = BlockReference[];
/**
 * The list of items that can be used to get the entity into the `love` state.
 */
export type BreedItems = BreedItem[] | BlockceptionMinecraftItemDescriptor2;
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
export type BreedItem2 = string;
export type BlockceptionMinecraftItemDescriptor2 = (
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
export type Target1 =
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
export type Blocks = BlockReference2[] | BlockReference5;
/**
 * A minecraft block reference.
 */
export type BlockReference2 = BlockReference3 & BlockReference4;
export type BlockReference3 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
export type BlockReference4 = string;
/**
 * A minecraft block reference.
 */
export type BlockReference5 = BlockReference6 & BlockReference7;
export type BlockReference6 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
export type BlockReference7 = string;
/**
 * The filters to run when attempting to fall in love.
 */
export type Filters3 =
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
 * An item that can be used to bribe the entity.
 */
export type BribeItems1 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * The list of items that can be used to bribe the entity.
 */
export type BribeItems = BribeItems1[];
/**
 * A minecraft block reference.
 */
export type BlockReference8 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * List of blocks this entity can float on. Must be a liquid block.
 */
export type LiquidBlocks = BlockReference8[];
/**
 * Specifies if/how a mob burns in daylight.
 */
export type BurnsInDaylight = BurnsInDaylight1 & BurnsInDaylight2;
export type BurnsInDaylight2 =
  | boolean
  | {
      [k: string]: unknown;
    };
/**
 * The list of conditions that target of hunt must satisfy to initiate celebration.
 */
export type Filters4 =
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
 * The sound event to play when the mob is celebrating.
 */
export type CelebrateSound =
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
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval1 =
  | []
  | [number]
  | [number, number]
  | number
  | {
      /**
       * Minimum.
       */
      range_min?: number;
      /**
       * Maximum.
       */
      range_max?: number;
    };
/**
 * Conditions that must be met for these optimization values to be used.
 */
export type ConditionalValues1 = Filters2[];
/**
 * The object containing the conditional bandwidth optimization values.
 */
export type ConditionalValues = ConditionalValue[];
/**
 * The offset from the entity's anchor where the hitbox will spawn.
 */
export type Pivot = [] | [number] | [number, number] | [number, number, number];
/**
 * Defines a hitbox size and pivot to test against.
 */
export type Hitboxes = Hitbox[];
/**
 * The list of triggers that fire when the environment conditions match the given filter criteria.
 */
export type Triggers = Triggers1[] | Triggers2;
/**
 * Type of damage that triggers the events.
 */
export type Cause1 =
  | 'all'
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire_tick'
  | 'fire'
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
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * Specifies filters for entity definitions and events.
 */
export type OnDamage =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Defines what sound to play, if any, when the on_damage filters are met.
 */
export type OnDamageSoundEvent =
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
 * The list of conditions that must be satisfied before the Actor is despawned. If a filter is defined then standard despawn rules are ignored.
 */
export type Filters5 =
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
 * The type of dwelling the mob wishes to join. Current Types: village
 */
export type DwellingType = 'village';
/**
 * The role of which the mob plays in the dwelling. Current Roles: inhabitant, defender, hostile, passive.
 */
export type DwellingRole = 'inhabitant' | 'defender' | 'hostile' | 'passive';
/**
 * How much should the discount be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount)
 */
export type CuredDiscount = [] | [number] | [number, number];
/**
 * The Maximum the discount can be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount)
 */
export type MaximumCuredDiscount = [] | [number] | [number, number];
/**
 * The list of triggers that fire when the environment conditions match the given filter criteria.
 */
export type Triggers3 = Trigger[] | Trigger1;
/**
 * Trigger to fire.
 */
export type Trigger =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Trigger to fire.
 */
export type Trigger1 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * A list of slots with the chance to drop an equipped item from that slot.
 */
export type SlotDropChance = SlotDropChance1[];
/**
 * The file path to the equipment table, relative to the behavior pack's root.
 */
export type BlockceptionMinecraftLootTableIdentifier = string;
/**
 * A item name.
 */
export type AcceptedItems1 = AcceptedItems2 & AcceptedItems3;
export type AcceptedItems2 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
export type AcceptedItems3 = string;
/**
 * The list of items that can go in this slot.
 */
export type AcceptedItems = AcceptedItems1[];
/**
 * Identifier of the item that can be equipped for this slot.
 */
export type Item1 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * List of slots and the item that can be equipped.
 */
export type Slots = Slots1[];
/**
 * A molang expression defining the amount of experience rewarded when this entity is successfully bred. An array of expressions adds each expression's result together for a final total.
 */
export type OnBred = string | number;
/**
 * A molang expression defining the amount of experience rewarded when this entity dies. An array of expressions adds each expression's result together for a final total.
 */
export type OnDeath = string | number;
/**
 * The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate.
 */
export type FuseLength = [] | [number] | [number, number] | number;
/**
 * The range of positive integer allele values for this gene. Spawned mobs will have a random number in this range assigned to them.
 */
export type AlleleRange =
  | number
  | {
      /**
       * Lower bound of the vaues.
       */
      range_min?: number;
      /**
       * Upper bound of the vaues.
       */
      range_max?: number;
      [k: string]: unknown;
    };
/**
 * If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with both. Can also be a range of integers.
 */
export type BothAllele =
  | number
  | {
      /**
       * Lower bound of the vaues.
       */
      range_min?: number;
      /**
       * Upper bound of the vaues.
       */
      range_max?: number;
      [k: string]: unknown;
    };
/**
 * If this value is non-negative, compare the mob's main allele with this value for a match. Can also be a range of integers.
 */
export type MainAllele =
  | number
  | {
      /**
       * Lower bound of the vaues.
       */
      range_min?: number;
      /**
       * Upper bound of the vaues.
       */
      range_max?: number;
      [k: string]: unknown;
    };
/**
 * The list of genetic variants for this gene. These check for particular allele combinations and fire events when all of them are satisfied.
 */
export type GeneticVariants = GeneticVariants1[];
/**
 * The list of genes that this entity has and will cross with a partner during breeding.
 */
export type Genes = Gene[];
/**
 * An items that can be given to the entity to place in their inventory.
 */
export type Properties1 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * The list of items that can be given to the entity to place in their inventory.
 */
export type Properties = Properties1[];
/**
 * The list of conditions that must be satisfied for other entities to be counted towards group size.
 */
export type Filters6 =
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
 * The filter group that defines the conditions for using this item to heal the entity.
 */
export type Filters7 =
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
 * Item that can be used to heal this entity.
 */
export type Item2 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * The array of items that can be used to heal this entity.
 */
export type Items = {
  filters?: Filters7;
  /**
   * The amount of health this entity gains when fed this item.
   */
  heal_amount?: number;
  item?: Item2;
  effects?: Effect | Effect[];
  [k: string]: unknown;
}[];
/**
 * The amount of health an entity to start with by default.
 */
export type Value =
  | number
  | {
      /**
       * The minimum amount of health this mob could have.
       */
      range_min: number;
      /**
       * The maximum amount of health this mob could have.
       */
      range_max: number;
    };
/**
 * A Molang expression defining the inter-beat interval in seconds. A value of zero or less means no heartbeat..
 */
export type Interval = string | number;
/**
 * A minecraft item identifier.
 */
export type HomeBlock = string;
/**
 * Optional block list that the home position will be associated with. If any of the blocks no longer exist at that position, the home restriction is removed. Example syntax: minecraft:sand. Not supported: minecraft:sand:1
 */
export type HomeBlockList = HomeBlock[];
/**
 * The multiplier to apply to the jumping height.
 */
export type Value1 =
  | {
      range_min?: number;
      range_max?: number;
    }
  | number;
/**
 * Damage cause.
 */
export type Cause2 =
  | 'all'
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire_tick'
  | 'fire'
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
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * An array of conditions used to compare the event to.
 */
export type DamageConditions = DamageCondition[];
/**
 * A single state of a block.
 */
export type State = string | boolean | number;
/**
 * List of blocks, with certain block states, that we are monitoring to see if the entity is inside.
 */
export type BlockList1 = Block[];
/**
 * The interactions.
 */
export type Interactions = InteractionSpec | InteractionSpec1[];
/**
 * File path, relative to the Behavior Pack's path, to the loot table file.
 */
export type Table = string;
/**
 * Trigger to fire.
 */
export type Trigger2 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
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
export type Table1 = string;
/**
 * Type of container this entity has. Can be horse, minecart_chest, chest_boat, minecart_hopper, inventory, container or hopper
 */
export type ContainerType =
  | 'horse'
  | 'minecart_chest'
  | 'chest_boat'
  | 'minecart_hopper'
  | 'inventory'
  | 'container'
  | 'hopper';
/**
 * List of items that can be used to control this entity.
 */
export type ControlItems = string[] | string;
/**
 * Defines the entities that can trigger this component.
 */
export type Filters8 =
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
 * The range for the random amount of time during which the entity is `cooling down` and won't get angered or look for a target.
 */
export type LookCooldown =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Filter to use for conditions.
 */
export type Filters9 =
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
 * Delay after landing when using the slime move control.
 */
export type JumpDelay = [] | [number] | [number, number];
/**
 * UNDOCUMENTED.
 */
export type Value2 = [] | [number] | [number, number] | number | Range2;
/**
 * Trigger to fire.
 */
export type Trigger3 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Describes the special names for this entity and the events to call when the entity acquires those names.
 */
export type NameActions = NameAction[] | NameAction1;
/**
 * A minecraft block reference.
 */
export type BlockReference9 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * Tells the pathfinder which blocks to avoid when creating a path.
 */
export type BlocksToAvoid = BlockReference9[];
/**
 * A minecraft block reference.
 */
export type BlockReference10 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * Tells the pathfinder which blocks to avoid when creating a path.
 */
export type BlocksToAvoid1 = BlockReference10[];
/**
 * A minecraft block reference.
 */
export type BlockReference11 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * Tells the pathfinder which blocks to avoid when creating a path.
 */
export type BlocksToAvoid2 = BlockReference11[];
/**
 * A minecraft block reference.
 */
export type BlockReference12 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * Tells the pathfinder which blocks to avoid when creating a path.
 */
export type BlocksToAvoid3 = BlockReference12[];
/**
 * A minecraft block reference.
 */
export type BlockReference13 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * Tells the pathfinder which blocks to avoid when creating a path.
 */
export type BlocksToAvoid4 = BlockReference13[];
/**
 * A minecraft block reference.
 */
export type BlockReference14 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * Tells the pathfinder which blocks to avoid when creating a path.
 */
export type BlocksToAvoid5 = BlockReference14[];
/**
 * A minecraft block reference.
 */
export type BlockReference15 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
/**
 * Tells the pathfinder which blocks to avoid when creating a path.
 */
export type BlocksToAvoid6 = BlockReference15[];
/**
 * UNDOCUMENTED.
 */
export type Translate = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Scale = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Translate1 = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Scale1 = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type SkinList = Skin[];
/**
 * Adds a trigger to call on this entity's death. minecraft:on_death can only be used by the `ender_dragon` entity.
 */
export type OnDeath1 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters10;
      target?: Subject1;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters10 =
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
 * The subject of this filter test.
 */
export type Subject1 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Adds a trigger that will run when a nearby entity of the same type as this entity becomes Angry.
 */
export type OnFriendlyAnger =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters11;
      target?: Subject2;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters11 =
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
 * The subject of this filter test.
 */
export type Subject2 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Adds a trigger to call when this entity is attacked by the player.
 */
export type OnHurtByPlayer =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters12;
      target?: Subject3;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters12 =
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
 * The subject of this filter test.
 */
export type Subject3 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Adds a trigger to call when this entity takes damage.
 */
export type OnHurt =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters13;
      target?: Subject4;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters13 =
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
 * The subject of this filter test.
 */
export type Subject4 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Adds a trigger to call when this entity is set on fire.
 */
export type OnIgnite =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters14;
      target?: Subject5;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters14 =
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
 * The subject of this filter test.
 */
export type Subject5 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Only usable by the Ender Dragon. Adds a trigger to call when this entity lands.
 */
export type OnStartLanding =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters15;
      target?: Subject6;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters15 =
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
 * The subject of this filter test.
 */
export type Subject6 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Only usable by the Ender Dragon. Adds a trigger to call when this entity starts flying.
 */
export type OnStartTakeoff =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters16;
      target?: Subject7;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters16 =
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
 * The subject of this filter test.
 */
export type Subject7 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Adds a trigger to call when this entity finds a target.
 */
export type OnTargetAcquired =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters17;
      target?: Subject8;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters17 =
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
 * The subject of this filter test.
 */
export type Subject8 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Adds a trigger to call when this entity loses the target it currently has.
 */
export type OnTargetEscape =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters18;
      target?: Subject9;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters18 =
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
 * The subject of this filter test.
 */
export type Subject9 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * Adds a trigger to call when this pet's owner awakes after sleeping with the pet.
 */
export type OnWakeWithOwner =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters19;
      target?: Subject10;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters19 =
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
 * The subject of this filter test.
 */
export type Subject10 = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * A list of blocks with their associated cost.
 */
export type PreferredPathBlocks = {
  cost?: number;
  blocks?: BlockReference[];
}[];
/**
 * The sound that plays when the projectile hits the ground.
 */
export type HitGroundSound =
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
 * The sound that plays when the projectile hits something.
 */
export type HitSound =
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
 * The offset from the entity's anchor where the projectile will spawn.
 */
export type Offset = [] | [number] | [number, number] | [number, number, number];
/**
 * The event triggered. Also has an option filters parameter to limit affected targets.
 */
export type EventTrigger =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * The target of the event.
 */
export type Target2 =
  | 'baby'
  | 'block'
  | 'damager'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';
/**
 * The shape of the area that is frozen.
 */
export type Shape = 'sphere' | 'cube';
/**
 * Potion spawns an area of effect cloud. See the table below for all spawn_aoe_cloud parameters.
 */
export type SpawnAOECloud = boolean;
/**
 * The sound that plays when the projectile is shot.
 */
export type ShootSound =
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
 * Event to run we attempt to trigger a raid on the village.
 */
export type TriggeredEvent =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * An event that runs when this reaction is picked.
 */
export type Value3 =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * A list of weighted responses to the melee attack being blocked.
 */
export type ReactionChoices = {
  /**
   * The chance of this reaction being picked.
   */
  weight?: number;
  value?: Value3;
}[];
/**
 * List of entities that can ride this entity.
 */
export type FamilyTypes = string[];
/**
 * The list of positions and number of riders for each position for entities riding this entity.
 */
export type Seats = SeatsSpec | SeatsSpec1[];
/**
 * Position of this seat relative to this entity's position.
 */
export type Offset1 = [] | [number] | [number, number] | [number, number, number];
/**
 * Offset to rotate riders by.
 */
export type Default3 = string | number;
/**
 * Minecraft behavior event.
 */
export type Event =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * The list of triggers that fire when the conditions match the given filter criteria. If any filter criteria overlap the first defined event will be picked.
 */
export type ScheduledEvents = ScheduledEvents1[];
/**
 * A minecraft item identifier.
 */
export type BlockceptionMinecraftItemIdentifier3 = string;
/**
 * List of projectiles that can be used by the shooter. Projectiles are evaluated in the order of the list; after a projectile is chosen, the rest of the list is ignored.
 */
export type Projectiles = string[];
/**
 * The entities to spawn.
 */
export type Entities = EntitySpawn | EntitySpawn1[];
/**
 * If present, the specified entity will only spawn if the filter evaluates to true.
 */
export type Filters20 =
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
 * Item identifier of the item to spawn.
 */
export type SpawnItem =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * Identifier of the sound effect to play when the entity is spawned.
 */
export type SpawnSound =
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
 * List of effects to add to this entity after adding this component.
 */
export type AddEffects = (
  | string
  | {
      /**
       * The level of the effect, same as used in the /effect command (0 for level I, 1 for level II, etc). Defaults to 0. NOTE: Values can be negative but its not an intentional feature
       */
      amplifier?: number;
      /**
       * Boolean value that should cause the particles emitted by the entity to be partially transparent. This does not work properly, resulting in this property having no effect. Defaults to false.
       */
      ambient?: boolean;
      /**
       * The amount of time in seconds the effect should last. This allows for fractional numbers. For example, instant effects should be set to 0.05 seconds (one tick).
       */
      duration?: number;
      /**
       * Boolean value. When set to true, applying this effect displays an animated graphic on-screen similar to the totem of undying effect. Obviously, this only works for players. Defaults to false.
       */
      display_on_screen_animation?: boolean;
      /**
       * The string identifier of the status effect to add. These are the same as used in the /effect command.
       */
      effect?: string;
      /**
       * Boolean value. When set to true, the effect will be visible to the player. Defaults to true.
       */
      visible?: boolean;
    }
)[];
/**
 * List of identifiers of effects to be removed from this entity after adding this component.
 */
export type RemoveEffects = SpellEffectID[] | string;
/**
 * identifier of the effect to be removed from this entity after adding this component.
 */
export type SpellEffectID = string;
/**
 * The list of items that can be used to tame this entity.
 */
export type TameItems = BlockceptionMinecraftItemIdentifier[] | BlockceptionMinecraftItemIdentifier;
/**
 * The list of items that, if carried while interacting with the entity, will anger it.
 */
export type AutoRejectItems = AutoRejectItems1 | AutoRejectItems2[];
/**
 * Name of the item this entity dislikes and will cause it to get angry if used while untamed.
 */
export type BlockceptionMinecraftItemDescriptor3 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export type FeedItems1 = FeedItems2 | FeedItems3[];
/**
 * Name of the item this entity likes and can be used to increase this entity's temper.
 */
export type Item4 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * Entity will teleport to a random position within the area defined by this cube.
 */
export type RandomTeleportCube = [] | [number] | [number, number] | [number, number, number];
/**
 * Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (Minimum and max). Incompatible with random_time_choices.
 */
export type Time = [] | [number] | [number, number] | number;
/**
 * This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time.
 */
export type RandomTimeChoices = RandomTimeChoices1[];
/**
 * One or more conditions that must be met in order to cause the chosen block type to spawn.
 */
export type Filters21 =
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
 * The distance from the entities current position to spawn the block. Capped at up to 16 blocks away. The X value is left/right(-/+), the Z value is backward/forward(-/+), the Y value is below/above(-/+).
 */
export type SpawnOffset = [] | [number] | [number, number] | [number, number, number];
/**
 * Sound to play when the transformation starts.
 */
export type BeginTransformSound =
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
 * Defines the properties of the delay for the transformation.
 */
export type Delay =
  | number
  | {
      /**
       * Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0
       */
      block_assist_chance?: number;
      /**
       * Chance that, once a block is found, will help speed up the transformation.
       */
      block_chance?: number;
      /**
       * Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius
       */
      block_max?: number;
      /**
       * Distance in Blocks that the entity will search for blocks that can help the transformation.
       */
      block_radius?: number;
      /**
       * List of blocks that can help the transformation of this entity.
       */
      block_types?: BlockceptionMinecraftBlockIdentifier2[];
      /**
       * Time in seconds before the entity transforms.
       */
      value?: number;
      [k: string]: unknown;
    };
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier2 = string;
/**
 * Sound to play when the entity is done transforming.
 */
export type TransformationSound =
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
 * A minecraft item identifier.
 */
export type TrustItem = string;
/**
 * The list of items that can be used to get the entity to trust players.
 */
export type TrustItems = TrustItem[];
/**
 * List of family names.
 */
export type Family = string[];
/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;
/**
 * The sound event to play when admiring the item.
 */
export type AdmireItemSound =
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
 * Minecraft behavior event.
 */
export type Event1 =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * Minecraft behavior event.
 */
export type Event2 =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval2 =
  | []
  | [number]
  | [number, number]
  | number
  | {
      range_min?: number;
      range_max?: number;
    };
/**
 * Block search method.
 */
export type TargetSelectionMethod = 'random' | 'nearest';
export type BlockID1 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * List of block types this mob avoids.
 */
export type TargetBlocks = BlockID1[];
/**
 * The sound event to play when the mob is avoiding a block.
 */
export type AvoidBlockSound =
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
 * Escape trigger.
 */
export type WalkSpeedModifier = Event[];
/**
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval3 =
  | []
  | [number]
  | [number, number]
  | number
  | {
      range_min?: number;
      range_max?: number;
    };
/**
 * The sound event to play when the mob is avoiding another mob.
 */
export type AvoidMobSound =
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
 * The list of conditions another entity must meet to be a valid target to avoid.
 */
export type EntityTypes = EntityType[] | EntityType;
/**
 * Minecraft behavior event.
 */
export type Event3 =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export type SoundInterval4 =
  | []
  | [number]
  | [number, number]
  | number
  | {
      range_min?: number;
      range_max?: number;
    };
/**
 * List of items that this mob likes.
 */
export type Properties3 = Properties4 & Properties5;
export type Properties4 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
export type Properties5 = string;
/**
 * List of items that this mob likes.
 */
export type Properties2 = Properties3[];
/**
 * The range of time in seconds this mob will stare at the player holding a food they like, begging for it.
 */
export type LookTime =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Movement speed multiplier of the mob when using this AI Goal.
 */
export type BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier = number;
/**
 * Minimum and maximum time between firework (positive, in seconds).
 */
export type FireworksInterval =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Minecraft behavior event.
 */
export type Event4 =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * The sound event to trigger during the celebration.
 */
export type CelebrationSound =
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
 * Minimum and maximum time between jumping (positive, in seconds).
 */
export type JumpInterval =
  | []
  | [number]
  | [number, number]
  | number
  | {
      range_min?: number;
      range_max?: number;
    };
/**
 * Trigger to fire.
 */
export type Trigger4 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Minimum and maximum time between sound events (positive, in seconds).
 */
export type SoundInterval5 =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Items names to be used.
 */
export type ItemID =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * The list of items that can be used to charge the held item. This list is required and must have at least one item in it.
 */
export type Items1 = ItemID[];
/**
 * Horizontal distance from the anchor point this entity must stay within upon a successful radius adjustment.
 */
export type RadiusRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * The number of blocks above the target that the next anchor point can be set. This value is used only when the entity is tracking a target.
 */
export type HeightAboveTargetRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * The range of height in blocks offset the mob can have from it's anchor point.
 */
export type HeightOffsetRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Random range in seconds after which the croaking stops. Can also be a constant.
 */
export type Duration = VectorOf2Items | number;
/**
 * An vector of 2 integers.
 */
export type VectorOf2Items = [] | [number] | [number, number];
/**
 * Conditions for the behavior to start and keep running. The interval between runs only starts after passing the filters.
 */
export type Filters22 =
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
 * Random range in seconds between runs of this behavior. Can also be a constant.
 */
export type Interval1 = VectorOf2Items | number;
/**
 * Sound to occasionally play while defending.
 */
export type AggroSound =
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
 * Minecraft behavior event.
 */
export type Event5 =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * List of entity types that this mob considers valid targets.
 */
export type EntityTypes1 = EntityType[] | EntityType;
/**
 * List of entity types this mob considers a threat to the village.
 */
export type EntityTypes2 = EntityType[] | EntityType;
/**
 * Trigger to fire.
 */
export type Trigger5 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Minimum and maximum distance, from the target, this entity can use this behavior.
 */
export type TargetZone =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Minimum and maximum distance, from the target, this entity can use this behavior.
 */
export type TargetZone1 =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Conditions that need to be met for the behavior to start.
 */
export type Filters23 =
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
 * Movement speed modifier of the mob when using this AI Goal.
 */
export type SpeedModifier = number;
/**
 * The filters to use when determining if this potion can be selected.
 */
export type Filters24 =
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
 * A list of potions that this entity can drink.
 */
export type Potions = Potions1[];
/**
 * The list of conditions another entity must meet to be a valid target to drop an item for.
 */
export type EntityTypes3 = EntityType[] | EntityType;
/**
 * Trigger to fire.
 */
export type Trigger6 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The range in blocks within which the entity searches to find a target to drop an item for.
 */
export type TargetRange = [] | [number] | [number, number] | [number, number, number];
/**
 * When the entity teleports, offset the teleport position by this many blocks in the X, Y, and Z coordinate.
 */
export type TeleportOffset = [] | [number] | [number, number] | [number, number, number];
/**
 * The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0.
 */
export type TimeOfDayRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Trigger to fire.
 */
export type Trigger7 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * A molang expression defining the success chance the entity has to consume a block.
 */
export type SuccesChance = string | number;
/**
 * The block to eat.
 */
export type Block2 = string;
/**
 * The block to replace the eaten block with.
 */
export type ReplaceBlock = string;
/**
 * A collection of pairs of blocks; the first ("eat_block")is the block the entity should eat, the second ("replace_block") is the block that should replace the eaten block.
 */
export type EatAndReplaceBlockPairs = EatAndReplaceBlockPair[];
/**
 * Sets the sound that should play when eating a mob.
 */
export type EatMobSound =
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
 * The distance from the boundary the villager must be within in to explore the outskirts.
 */
export type DistFromBoundary = [] | [number] | [number, number] | [number, number, number];
/**
 * Range of time in seconds the mob will float around before landing and choosing to do something else.
 */
export type FloatDuration =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * List of entity types that this mob can follow in a caravan.
 */
export type EntityTypes4 = EntityType[] | EntityType;
/**
 * Event(s) to run when this mob throws items.
 */
export type OnItemThrow = Trigger | Trigger[];
/**
 * Sound to play when this mob throws an item.
 */
export type ThrowSound =
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
 * Trigger to fire.
 */
export type Trigger8 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Sound to play when this mob throws an item.
 */
export type ThrowSound1 =
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
 * Event(s) to run when this mob gets home.
 */
export type OnHome = Trigger[];
/**
 * Event(s) to run when this goal fails.
 */
export type OnFailed = Event[];
/**
 * Minecraft behavior event.
 */
export type Event6 =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
/**
 * List of entity types that this mob can target if they hurt their owner.
 */
export type EntityTypes5 = EntityType[] | EntityType;
/**
 * Minimum and maximum cooldown time-range (positive, in seconds) between each attempted jump.
 */
export type CooldownRange = [] | [number] | [number, number];
/**
 * Blocks that the mob can't jump to.
 */
export type ForbiddenBlocks = BlockceptionMinecraftItemDescriptor[];
/**
 * Blocks that the mob prefers jumping to.
 */
export type PreferredBlocks = BlockceptionMinecraftItemDescriptor[];
/**
 * The list of conditions another entity must meet to be a valid target to apply damage to.
 */
export type Filters25 =
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
 * The list of conditions another entity must meet to be a valid target to apply knockback to.
 */
export type Filters26 =
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
 * Minecraft behavior event.
 */
export type Event7 =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target2;
      [k: string]: unknown;
    };
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
 * [EXPERIMENTAL] Sound event name for laying egg. Defaulted to lay_egg which is used for Turtles.
 */
export type LayEggSound =
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
 * Trigger to fire.
 */
export type Trigger9 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
export type BlockID2 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * [EXPERIMENTAL] Blocks that the mob can lay its eggs on top of.
 */
export type TargetBlocks1 = BlockID2[];
/**
 * [EXPERIMENTAL] Types of materials that can exist above the target block. Valid types are Air, Water, and Lava.
 */
export type TargetMaterialsAboveBlock = unknown[];
/**
 * Time range to look at the entity.
 */
export type LookTime1 =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Filter to determine the conditions for this mob to look at the entity.
 */
export type Filters27 =
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
 * Time range to look at the entity.
 */
export type LookTime2 = [] | [number] | [number, number];
/**
 * Time range to look at the entity.
 */
export type LookTime3 =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Time range to look at the entity.
 */
export type LookTime4 =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Trigger to fire.
 */
export type Trigger10 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Trigger to fire.
 */
export type Trigger11 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The entity type that this entity is allowed to mingle with.
 */
export type MinglePartnerType = string[] | string;
/**
 * Event to run on completing a stay of stay_duration at the block.
 */
export type OnStayCompleted = Trigger[] | Trigger;
/**
 * Event to run on block reached.
 */
export type OnReach = Trigger[] | Trigger;
/**
 * Kind of block to find fitting the specification. Valid values are "random" and "nearest".
 */
export type TargetSelectionMethod1 = 'random' | 'nearest';
/**
 * Offset to add to the selected target position.
 */
export type TargetOffset = [] | [number] | [number, number] | [number, number, number];
/**
 * Block types to move to.
 */
export type TargetBlocks2 = BlockceptionMinecraftItemDescriptor[];
/**
 * Filters to apply on the target blocks. Target blocks are only valid if the filters are true.
 */
export type Filters28 =
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
 * The material type of the liquid block to find. Valid values are 'Any', 'Water', and 'Lava'.
 */
export type MaterialType = 'Air' | 'Any' | 'Lava' | 'Water';
/**
 * Tells the goal what POI type it should be looking for.
 */
export type PointOfInterestType = 'bed' | 'jobsite' | 'meeting_area';
/**
 * UNDOCUMENTED: control flags.
 */
export type ControlFlags1 = 'move' | 'look';
/**
 * UNDOCUMENTED: control flags.
 */
export type ControlFlags = ControlFlags1[];
/**
 * The filters that need to be met for the nap to take place.
 */
export type Filters29 =
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
 * Filters that can trigger the entity to wake up from it nap.
 */
export type Filters30 =
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
 * Filters which types of targets are valid for this entity
 */
export type EntityTypes6 = EntityType[] | EntityType;
/**
 * List of entity types that this mob considers valid targets
 */
export type EntityTypes7 = EntityType[] | EntityType;
/**
 * Conditions that need to be met for the behavior to start.
 */
export type Filters31 =
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
 * The dimensions of the AABB used to search for a potential mob to offer flower to.
 */
export type SearchArea = [] | [number] | [number, number] | [number, number, number];
/**
 * List of entity types that this mob can target if they hurt their owner.
 */
export type EntityTypes8 = EntityType[] | EntityType;
/**
 * List of entity types that this entity can target if the potential target is hurt by this mob's owner.
 */
export type EntityTYpes = EntityType[] | EntityType;
/**
 * The types of damage an entity can receive.
 */
export type EntityDamageSource =
  | 'all'
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire_tick'
  | 'fire'
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
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * The list of Entity Damage Sources that will cause this mob to panic.
 */
export type DamageSources = EntityDamageSource[];
/**
 * The sound event to play when this mob is in panic.
 */
export type PanicSound =
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
export type ExcludedItem =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * List of items this mob will not pick up.
 */
export type ExcludedItems = ExcludedItem[];
/**
 * The list of other triggers that are required for the mob to activate play dead.
 */
export type Filters32 =
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
 * The range of damage that may cause the goal to start depending on randomness. Damage taken below the min will never cause the goal to start. Damage taken above the max will always cause the goal to start.
 */
export type RandomDamageRange = [] | [number] | [number, number];
/**
 * The list of Entity Damage Sources that will cause this mob to play dead.
 */
export type DamageSources1 = EntityDamageSource1 | DamageSource[];
/**
 * The types of damage an entity can receive.
 */
export type EntityDamageSource1 =
  | 'all'
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire_tick'
  | 'fire'
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
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * The types of damage an entity can receive.
 */
export type DamageSource =
  | 'all'
  | 'anvil'
  | 'attack'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire_tick'
  | 'fire'
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
  | 'sonic_boom'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';
/**
 * The dimensions of the AABB used to search for a potential friend to play with.
 */
export type FriendSearchArea = [] | [number] | [number, number] | [number, number, number];
/**
 * The entity type(s) to consider when searching for a potential friend to play with.
 */
export type FriendTypes = {
  [k: string]: unknown;
}[];
/**
 * A minecraft block reference.
 */
export type BlockReference16 = BlockReference17 & BlockReference18;
export type BlockReference17 = BlockceptionMinecraftBlockIdentifier | BlockReference1;
export type BlockReference18 = string;
/**
 * Blocks that the mob is looking for to eat.
 */
export type Blocks1 = BlockReference16[];
/**
 * Minimum and maximum cooldown time-range (positive, in seconds) between each attempted ram attack.
 */
export type CooldownRange1 =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Trigger to fire.
 */
export type Trigger12 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The sound to play when an entity is about to perform a ram attack.
 */
export type PreRamSound =
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
 * The sound to play when an entity is impacting on a ram attack.
 */
export type RamImpactSound =
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
 * Trigger to fire.
 */
export type Trigger13 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The height above the surface which the mob will try to maintain.
 */
export type HoverHeight = [] | [number] | [number, number];
/**
 * The range of time in seconds the mob will stay looking in a random direction before looking elsewhere
 */
export type LookTime5 = [] | [number] | [number, number];
/**
 * The sound event to play when using this spell.
 */
export type StartSoundEvent =
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
 * The sound event to play when this step happens.
 */
export type AngrySound1 =
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
 * List of events to send.
 */
export type Sequence = {
  /**
   * Amount of time in seconds before starting this step.
   */
  base_delay?: number;
  /**
   * The event to send to the entity.
   */
  event?: string;
  sound_event?: AngrySound1;
}[];
/**
 * List of spells for the mob to use.
 */
export type EventChoices = EventChoice[];
/**
 * List of events to send.
 */
export type Sequence1 = {
  /**
   * Amount of time in seconds before starting this step.
   */
  base_delay?: number;
  /**
   * The event to send to the entity.
   */
  event?: string;
  sound_event?: AngrySound1;
}[];
/**
 * List of entities this mob will share items with.
 */
export type EntityTypes9 = EntityType[] | EntityType;
/**
 * Items that we are interested in snacking on.
 */
export type Items2 = Item5[] | BlockceptionMinecraftItemDescriptor;
export type Item5 =
  | BlockceptionMinecraftItemIdentifier
  | ItemDescriptor
  | {
      item?: BlockceptionMinecraftItemIdentifier1 | ItemDescriptor1;
      [k: string]: unknown;
    };
/**
 * List of entity types this mob will startle (cause to jump) when it sneezes.
 */
export type EntityTypes10 = EntityType[] | EntityType;
/**
 * Sound to play when the sneeze is about to happen.
 */
export type PrepareSound =
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
 * Sound to play when the sneeze occurs.
 */
export type Sound =
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
 * Sound event for the attack.
 */
export type AttackSound =
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
 * Sound event for the charge up.
 */
export type ChargeSound =
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
 * Filters to apply on the block the mob lands on to determine if it is valid for getting stuck.
 */
export type Filters33 =
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
 * Trigger to fire.
 */
export type Trigger14 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The color of the particles for this spell.
 */
export type ParticleColor = number | string;
/**
 * The base shape of this step. Valid values are circle and line
 */
export type Shape1 = 'line' | 'circle';
/**
 * The sound event to play for this step.
 */
export type SoundEvent =
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
 * List of steps for the spell.
 */
export type Sequence2 = Sequence3[];
/**
 * The sound event to play when using this spell.
 */
export type StartSoundEvent1 =
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
 * List of spells for the mob to use to summon entities.
 */
export type SummonChoices = {
  /**
   * Time in seconds the spell casting will take.
   */
  cast_duration?: number;
  /**
   * Time in seconds the mob has to wait before using the spell again.
   */
  cooldown_time?: number;
  /**
   * If true, the mob will do the casting animations and render spell particles.
   */
  do_casting?: boolean;
  filters?: Filters2;
  /**
   * Upper bound of the activation distance in blocks for this spell.
   */
  max_activation_range?: number;
  /**
   * Lower bound of the activation distance in blocks for this spell.
   */
  min_activation_range?: number;
  particle_color?: ParticleColor;
  sequence?: Sequence2;
  start_sound_event?: StartSoundEvent1;
  /**
   * The weight of this spell. Controls how likely the mob is to choose this spell when casting one
   */
  weight?: number;
}[];
/**
 * Filters which determine what entites are valid to follow.
 */
export type EntityTypes11 = EntityType[] | EntityType;
/**
 * Minimum and maximum cooldown time-range (in seconds) between each attempted swoop attack.
 */
export type DelayRange =
  | number
  | []
  | [number]
  | [number, number]
  | {
      /**
       * The minimum value of the range.
       */
      range_min?: number;
      /**
       * The maximum value of the range.
       */
      range_max?: number;
    };
/**
 * Conditions that need to be met for the behavior to start.
 */
export type Filters34 =
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
 * The dimensions of the AABB used to search for a potential mob to take a flower from.
 */
export type SearchArea1 = [] | [number] | [number, number] | [number, number, number];
/**
 * The list of conditions the other entity must meet to be a valid target.
 */
export type EntityTypes12 = EntityType[] | EntityType;
/**
 * List of items this mob is tempted by.
 */
export type Items3 = BlockceptionMinecraftItemDescriptor[];
/**
 * Range of random ticks to wait between tempt sounds.
 */
export type SoundInterval7 = number | [] | [number] | [number, number];
/**
 * Sound to play while the mob is being tempted.
 */
export type TemptSound =
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
 * List of entities this mob can copy the owner from.
 */
export type EntityTypes13 = EntityType[] | EntityType;
/**
 * List of entities this mob can copy the owner from.
 */
export type EntityTypes14 = EntityType[] | EntityType;
/**
 * List of entity types the wither takes into account to find who dealt the most damage to it.
 */
export type EntityTypes15 = EntityType[] | EntityType;
/**
 * Trigger to fire.
 */
export type Trigger15 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Trigger to fire.
 */
export type Trigger16 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Trigger to fire.
 */
export type Trigger17 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The components groups to add or remove.
 */
export type ComponentGroups1 = string[];
/**
 * Trigger to fire.
 */
export type Trigger18 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Randomly selects one of the following items based upon their weight and the total weights.
 */
export type Randomize = Randomize1[];
/**
 * Trigger to fire.
 */
export type Trigger19 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * A series of filters and components to be added.
 */
export type Sequences = Sequence4[];
/**
 * The value to set the property to.
 */
export type Property = string | number | boolean;

/**
 * The minecraft entity behavior specification.
 */
export interface EntityBehavior {
  format_version: FormatVersion;
  'minecraft:entity': Entity;
}
export interface Entity {
  description: Description;
  component_groups?: ComponentGroups;
  components?: Component1;
  events?: Events;
}
/**
 * The description of the this entity.
 */
export interface Description {
  animations?: Animations;
  identifier: BlockceptionMinecraftEntityIdentifier;
  /**
   * Sets whether or not this entity has a spawn egg in the creative ui.
   */
  is_spawnable?: boolean;
  /**
   * Sets whether or not we can summon this entity using commands such as /summon.
   */
  is_summonable?: boolean;
  /**
   * Sets whether or not this entity is experimental. Experimental entities are only enabled when the experimental toggle is enabled.
   */
  is_experimental?: boolean;
  properties?: Experimental;
  /**
   * Sets the name for the Vanilla Minecraft identifier this entity will use to build itself from.
   */
  runtime_identifier?: string;
  scripts?: Scripts;
  [k: string]: unknown;
}
/**
 * Sets the mapping of internal animation / animation controllers references to actual animations. This is a JSON Object of name/animation pairs
 */
export interface Animations {
  /**
   * The name of the animation controller / animation.
   */
  [k: string]: string;
}
/**
 * Experimental
 */
export interface Experimental {
  [k: string]:
    | {
        type?: 'bool';
        default?: Default;
        [k: string]: unknown;
      }
    | {
        type?: 'int';
        default?: Default1;
        range?: Range;
        [k: string]: unknown;
      }
    | {
        type?: 'float';
        default?: Default2;
        range?: Range1;
        [k: string]: unknown;
      }
    | {
        type?: 'enum';
        default?: string;
        /**
         * Sets whether or not the property is synced to the client.
         */
        client_sync?: boolean;
        values?: Values;
        [k: string]: unknown;
      };
}
/**
 * Sets the mapping of internal animation controller references to actual animation controller. This is a JSON Array of name/animation-controller pairs
 */
export interface Scripts {
  animate?: Animate;
  [k: string]: unknown;
}
/**
 * A conditional statement to run the animation under a specified condition.
 */
export interface ConditionalAnimation {
  [k: string]: string;
}
/**
 * Each group when add / remove the default components.
 */
export interface ComponentGroups {
  [k: string]: Component;
}
/**
 * The components that are added as the foundation of the entity.
 */
export interface Component {
  'minecraft:addrider'?: AddRider;
  'minecraft:admire_item'?: AdmireItem;
  'minecraft:ageable'?: Ageable;
  'minecraft:ambient_sound_interval'?: AmbientSoundInterval;
  'minecraft:anger_level'?: AngerLevel;
  'minecraft:angry'?: Angry;
  'minecraft:annotation.break_door'?: AnnotationBreakDoor;
  'minecraft:annotation.open_door'?: AnnotationOpenDoor;
  'minecraft:area_attack'?: AreaAttack;
  'minecraft:attack_cooldown'?: AttackCooldown;
  'minecraft:attack_damage'?: AttackDamage;
  'minecraft:attack'?: Attack;
  'minecraft:balloonable'?: Balloonable;
  'minecraft:barter'?: Barter;
  'minecraft:block_climber'?: BlockClimber;
  'minecraft:block_sensor'?: BlockSensor;
  'minecraft:boostable'?: Boostable;
  'minecraft:boss'?: Boss;
  'minecraft:break_blocks'?: BreakBlocks;
  'minecraft:breathable'?: Breathable;
  'minecraft:breedable'?: Breedable;
  'minecraft:bribeable'?: Bribeable;
  'minecraft:buoyant'?: Buoyant;
  'minecraft:burns_in_daylight'?: BurnsInDaylight;
  'minecraft:can_climb'?: CanClimb;
  'minecraft:can_fly'?: CanFly;
  'minecraft:can_power_jump'?: CanPowerJump;
  'minecraft:celebrate_hunt'?: CelebrateHunt;
  'minecraft:collision_box'?: CollisionBox;
  'minecraft:color'?: Color;
  'minecraft:color2'?: Color0;
  'minecraft:combat_regeneration'?: CombatRegeneration;
  'minecraft:conditional_bandwidth_optimization'?: ConditionalBandwidthOptimization;
  'minecraft:custom_hit_test'?: CustomHitTest;
  'minecraft:damage_over_time'?: DamageOverTime;
  'minecraft:damage_sensor'?: DamageSensor;
  'minecraft:dash'?: Dash;
  'minecraft:default_look_angle'?: DefaultLookAngle;
  'minecraft:despawn'?: Despawn;
  'minecraft:drying_out_timer'?: DryingOutTimer;
  'minecraft:dweller'?: Dweller;
  'minecraft:economy_trade_table'?: EconomyTradeTable;
  'minecraft:entity_sensor'?: EntitySensor;
  'minecraft:environment_sensor'?: EnvironmentSensor;
  'minecraft:equip_item'?: EquipItem;
  'minecraft:equipment'?: Equipment;
  'minecraft:equippable'?: Equippable;
  'minecraft:exhaustion_values'?: ExhaustionValues;
  'minecraft:experience_reward'?: ExperienceReward;
  'minecraft:explode'?: Explode;
  'minecraft:fall_damage'?: FallDamage;
  'minecraft:fire_immune'?: FireImmune;
  'minecraft:floats_in_liquid'?: FloatsInLiquid;
  'minecraft:flocking'?: Flocking;
  'minecraft:flying_speed'?: FlyingSpeed;
  'minecraft:follow_range'?: FollowRange;
  'minecraft:friction_modifier'?: FrictionModifier;
  'minecraft:game_event_movement_tracking'?: GameEventMovementTracking;
  'minecraft:genetics'?: Genetics;
  'minecraft:giveable'?: Giveable;
  'minecraft:ground_offset'?: GroundOffset;
  'minecraft:group_size'?: GroupSize;
  'minecraft:grows_crop'?: GrowsCrop;
  'minecraft:healable'?: Healable;
  'minecraft:health'?: Health;
  'minecraft:heartbeat'?: Heartbeat;
  'minecraft:hide'?: Hide;
  'minecraft:home'?: Home;
  'minecraft:horse.jump_strength'?: HorseJumpStrength;
  'minecraft:hurt_on_condition'?: HurtOnCondition;
  'minecraft:hurt_when_wet'?: HurtWhenWet;
  'minecraft:input_ground_controlled'?: InputGroundControlled;
  'minecraft:inside_block_notifier'?: InsideBlockNotifier;
  'minecraft:insomnia'?: Insomnia;
  'minecraft:instant_despawn'?: InstantDespawn;
  'minecraft:interact'?: Interact;
  'minecraft:inventory'?: Inventory;
  'minecraft:is_baby'?: IsBaby;
  'minecraft:is_charged'?: IsCharged;
  'minecraft:is_chested'?: IsChested;
  'minecraft:is_dyeable'?: IsDyeable;
  'minecraft:is_hidden_when_invisible'?: IsHiddenWhenInvisible;
  'minecraft:is_ignited'?: IsIgnited;
  'minecraft:is_illager_captain'?: IsIllagerCaptain;
  'minecraft:is_saddled'?: IsSaddled;
  'minecraft:is_shaking'?: IsShaking;
  'minecraft:is_sheared'?: IsSheared;
  'minecraft:is_stackable'?: IsStackable;
  'minecraft:is_stunned'?: IsStunned;
  'minecraft:is_tamed'?: IsTamed;
  'minecraft:item_controllable'?: ItemControllable;
  'minecraft:item_hopper'?: ItemHopper;
  'minecraft:jump.dynamic'?: JumpDynamic;
  'minecraft:jump.static'?: JumpStatic;
  'minecraft:knockback_resistance'?: KnockbackResistance;
  'minecraft:lava_movement'?: LavaMovement;
  'minecraft:leashable'?: Leashable;
  'minecraft:lookat'?: Lookat;
  'minecraft:loot'?: Loot;
  'minecraft:managed_wandering_trader'?: ManagedWanderingTrader;
  'minecraft:mark_variant'?: MarkVariant;
  'minecraft:mob_effect'?: MobEffect;
  'minecraft:movement_sound_distance_offset'?: MovementSoundDistanceOffset;
  'minecraft:movement.amphibious'?: MovementAmphibious;
  'minecraft:movement.basic'?: MovementBasic;
  'minecraft:movement.fly'?: MovementFly;
  'minecraft:movement.generic'?: MovementGeneric;
  'minecraft:movement.glide'?: MovementGlide;
  'minecraft:movement.hover'?: MovementHover;
  'minecraft:movement.jump'?: MovementJump;
  'minecraft:movement.skip'?: MovementSkip;
  'minecraft:movement.sway'?: MovementSway;
  'minecraft:movement'?: Movement;
  'minecraft:nameable'?: Nameable;
  'minecraft:navigation.climb'?: NavigationClimb;
  'minecraft:navigation.float'?: NavigationFloat;
  'minecraft:navigation.fly'?: NavigationFly;
  'minecraft:navigation.generic'?: NavigationGeneric;
  'minecraft:navigation.hover'?: NavigationHover;
  'minecraft:navigation.swim'?: NavigationSwim;
  'minecraft:navigation.walk'?: NavigationWalk;
  'minecraft:npc'?: Npc;
  'minecraft:on_death'?: OnDeath1;
  'minecraft:on_friendly_anger'?: OnFriendlyAnger;
  'minecraft:on_hurt_by_player'?: OnHurtByPlayer;
  'minecraft:on_hurt'?: OnHurt;
  'minecraft:on_ignite'?: OnIgnite;
  'minecraft:on_start_landing'?: OnStartLanding;
  'minecraft:on_start_takeoff'?: OnStartTakeoff;
  'minecraft:on_target_acquired'?: OnTargetAcquired;
  'minecraft:on_target_escape'?: OnTargetEscape;
  'minecraft:on_wake_with_owner'?: OnWakeWithOwner;
  'minecraft:out_of_control'?: OutOfControl;
  'minecraft:peek'?: Peek;
  'minecraft:persistent'?: Persistent;
  'minecraft:physics'?: Physics;
  'minecraft:player.exhaustion'?: PlayerExhaustion;
  'minecraft:player.experience'?: PlayerExperience;
  'minecraft:player.level'?: PlayerLevel;
  'minecraft:player.saturation'?: PlayerSaturation;
  'minecraft:preferred_path'?: PreferredPath;
  'minecraft:projectile'?: Projectile;
  'minecraft:push_through'?: PushThrough;
  'minecraft:pushable'?: Pushable;
  'minecraft:raid_trigger'?: RaidTrigger;
  'minecraft:rail_movement'?: RailMovement;
  'minecraft:rail_sensor'?: RailSensor;
  'minecraft:ravager_blocked'?: RavagerBlocked;
  'minecraft:rideable'?: Rideable;
  'minecraft:scale_by_age'?: ScaleByAge;
  'minecraft:scale'?: Scale2;
  'minecraft:scheduler'?: Scheduler;
  'minecraft:shareables'?: Shareables;
  'minecraft:shooter'?: Shooter;
  'minecraft:sittable'?: Sittable;
  'minecraft:skin_id'?: SkinId;
  'minecraft:sound_volume'?: SoundVolume;
  'minecraft:spawn_entity'?: SpawnEntity;
  'minecraft:spell_effects'?: SpellEffects;
  'minecraft:strength'?: Strength;
  'minecraft:suspect_tracking'?: SuspectTracking;
  'minecraft:tameable'?: Tameable;
  'minecraft:tamemount'?: Tamemount;
  'minecraft:target_nearby_sensor'?: TargetNearbySensor;
  'minecraft:teleport'?: Teleport;
  'minecraft:tick_world'?: TickWorld;
  'minecraft:timer'?: Timer;
  'minecraft:trade_resupply'?: TradeResupply;
  'minecraft:trade_table'?: TradeTable;
  'minecraft:trail'?: Trail;
  'minecraft:transformation'?: Transformation;
  'minecraft:trust'?: Trust;
  'minecraft:trusting'?: Trusting;
  'minecraft:type_family'?: TypeFamily;
  'minecraft:underwater_movement'?: UnderwaterMovement;
  'minecraft:variable_max_auto_step'?: VariableMaxAutoStep;
  'minecraft:variant'?: Variant;
  'minecraft:vibration_damper'?: VibrationDamper;
  'minecraft:vibration_listener'?: VibrationListener;
  'minecraft:walk_animation_speed'?: WalkAnimationSpeed;
  'minecraft:wants_jockey'?: WantsJockey;
  'minecraft:water_movement'?: WaterMovement;
  'minecraft:behavior.admire_item'?: AdmireItem1;
  'minecraft:behavior.avoid_block'?: AvoidBlock;
  'minecraft:behavior.avoid_mob_type'?: AvoidMobType;
  'minecraft:behavior.barter'?: Barter1;
  'minecraft:behavior.beg'?: Beg;
  'minecraft:behavior.break_door'?: BreakDoor;
  'minecraft:behavior.breed'?: Breed;
  'minecraft:behavior.celebrate_survive'?: CelebrateSurvive;
  'minecraft:behavior.celebrate'?: Celebrate;
  'minecraft:behavior.charge_attack'?: ChargeAttack;
  'minecraft:behavior.charge_held_item'?: ChargeHeldItem;
  'minecraft:behavior.circle_around_anchor'?: CircleAroundAnchor;
  'minecraft:behavior.controlled_by_player'?: ControlledByPlayer;
  'minecraft:behavior.croak'?: Croak;
  'minecraft:behavior.defend_trusted_target'?: DefendTrustedTarget;
  'minecraft:behavior.defend_village_target'?: DefendVillageTarget;
  'minecraft:behavior.delayed_attack'?: DelayedAttack;
  'minecraft:behavior.dig'?: Dig;
  'minecraft:behavior.door_interact'?: DoorInteract;
  'minecraft:behavior.dragonchargeplayer'?: Dragonchargeplayer;
  'minecraft:behavior.dragondeath'?: Dragondeath;
  'minecraft:behavior.dragonflaming'?: Dragonflaming;
  'minecraft:behavior.dragonholdingpattern'?: Dragonholdingpattern;
  'minecraft:behavior.dragonlanding'?: Dragonlanding;
  'minecraft:behavior.dragonscanning'?: Dragonscanning;
  'minecraft:behavior.dragonstrafeplayer'?: Dragonstrafeplayer;
  'minecraft:behavior.dragontakeoff'?: Dragontakeoff;
  'minecraft:behavior.drink_milk'?: DrinkMilk;
  'minecraft:behavior.drink_potion'?: DrinkPotion;
  'minecraft:behavior.drop_item_for'?: DropItemFor;
  'minecraft:behavior.eat_block'?: EatBlock;
  'minecraft:behavior.eat_carried_item'?: EatCarriedItem;
  'minecraft:behavior.eat_mob'?: EatMob;
  'minecraft:behavior.emerge'?: EatMob;
  'minecraft:behavior.enderman_leave_block'?: EndermanLeaveBlock;
  'minecraft:behavior.enderman_take_block'?: EndermanTakeBlock;
  'minecraft:behavior.equip_item'?: EquipItem1;
  'minecraft:behavior.explore_outskirts'?: ExploreOutskirts;
  'minecraft:behavior.fertilize_farm_block'?: FertilizeFarmBlock;
  'minecraft:behavior.find_cover'?: FindCover;
  'minecraft:behavior.find_mount'?: FindMount;
  'minecraft:behavior.find_underwater_treasure'?: FindUnderwaterTreasure;
  'minecraft:behavior.flee_sun'?: FleeSun;
  'minecraft:behavior.float_wander'?: FloatWander;
  'minecraft:behavior.float'?: Float;
  'minecraft:behavior.follow_caravan'?: FollowCaravan;
  'minecraft:behavior.follow_mob'?: FollowMob;
  'minecraft:behavior.follow_owner'?: FollowOwner;
  'minecraft:behavior.follow_parent'?: FollowParent;
  'minecraft:behavior.follow_target_captain'?: FollowTargetCaptain;
  'minecraft:behavior.go_and_give_items_to_noteblock'?: GoAndGiveItemsToNoteblock;
  'minecraft:behavior.go_and_give_items_to_owner'?: GoAndGiveItemsToOwner;
  'minecraft:behavior.go_home'?: GoHome;
  'minecraft:behavior.guardian_attack'?: GuardianAttack;
  'minecraft:behavior.harvest_farm_block'?: HarvestFarmBlock;
  'minecraft:behavior.hide'?: Hide1;
  'minecraft:behavior.hold_ground'?: HoldGround;
  'minecraft:behavior.hurt_by_target'?: HurtByTarget;
  'minecraft:behavior.inspect_bookshelf'?: InspectBookshelf;
  'minecraft:behavior.jump_to_block'?: JumpToBlock;
  'minecraft:behavior.knockback_roar'?: KnockbackRoar;
  'minecraft:behavior.lay_down'?: LayDown;
  'minecraft:behavior.lay_egg'?: LayEgg;
  'minecraft:behavior.leap_at_target'?: LeapAtTarget;
  'minecraft:behavior.look_at_entity'?: LookAtEntity;
  'minecraft:behavior.look_at_player'?: LookAtPlayer;
  'minecraft:behavior.look_at_target'?: LookAtTarget;
  'minecraft:behavior.look_at_trading_player'?: LookAtTradingPlayer;
  'minecraft:behavior.make_love'?: MakeLove;
  'minecraft:behavior.melee_attack'?: MeleeAttack;
  'minecraft:behavior.mingle'?: Mingle;
  'minecraft:behavior.mount_pathing'?: MountPathing;
  'minecraft:behavior.move_indoors'?: MoveIndoors;
  'minecraft:behavior.move_outdoors'?: MoveOutdoors;
  'minecraft:behavior.move_through_village'?: MoveThroughVillage;
  'minecraft:behavior.move_to_block'?: MoveToBlock;
  'minecraft:behavior.move_to_land'?: MoveToLand;
  'minecraft:behavior.move_to_lava'?: MoveToLava;
  'minecraft:behavior.move_to_liquid'?: MoveToLiquid;
  'minecraft:behavior.move_to_poi'?: MoveToPoi;
  'minecraft:behavior.move_to_random_block'?: MoveToRandomBlock;
  'minecraft:behavior.move_to_village'?: MoveToVillage;
  'minecraft:behavior.move_to_water'?: MoveToWater;
  'minecraft:behavior.move_towards_dwelling_restriction'?: MoveTowardsDwellingRestriction;
  'minecraft:behavior.move_towards_home_restriction'?: MoveTowardsHomeRestriction;
  'minecraft:behavior.move_towards_restriction'?: MoveTowardsRestriction;
  'minecraft:behavior.move_towards_target'?: MoveTowardsTarget;
  'minecraft:behavior.nap'?: Nap;
  'minecraft:behavior.nearest_attackable_target'?: NearestAttackableTarget;
  'minecraft:behavior.nearest_prioritized_attackable_target'?: NearestPrioritizedAttackableTarget;
  'minecraft:behavior.ocelot_sit_on_block'?: OcelotSitOnBlock;
  'minecraft:behavior.ocelotattack'?: Ocelotattack;
  'minecraft:behavior.offer_flower'?: OfferFlower;
  'minecraft:behavior.open_door'?: OpenDoor;
  'minecraft:behavior.owner_hurt_by_target'?: OwnerHurtByTarget;
  'minecraft:behavior.owner_hurt_target'?: OwnerHurtTarget;
  'minecraft:behavior.panic'?: Panic;
  'minecraft:behavior.peek'?: Peek1;
  'minecraft:behavior.pet_sleep_with_owner'?: PetSleepWithOwner;
  'minecraft:behavior.pickup_items'?: PickupItems;
  'minecraft:behavior.play_dead'?: PlayDead;
  'minecraft:behavior.play'?: Play;
  'minecraft:behavior.player_ride_tamed'?: PlayerRideTamed;
  'minecraft:behavior.raid_garden'?: RaidGarden;
  'minecraft:behavior.ram_attack'?: RamAttack;
  'minecraft:behavior.random_breach'?: RandomBreach;
  'minecraft:behavior.random_fly'?: RandomFly;
  'minecraft:behavior.random_hover'?: RandomHover;
  'minecraft:behavior.random_look_around_and_sit'?: RandomLookAroundAndSit;
  'minecraft:behavior.random_look_around'?: RandomLookAround;
  'minecraft:behavior.random_sitting'?: RandomSitting;
  'minecraft:behavior.random_stroll'?: RandomStroll;
  'minecraft:behavior.random_swim'?: RandomSwim;
  'minecraft:behavior.ranged_attack'?: RangedAttack;
  'minecraft:behavior.receive_love'?: ReceiveLove;
  'minecraft:behavior.restrict_open_door'?: RestrictOpenDoor;
  'minecraft:behavior.restrict_sun'?: RestrictSun;
  'minecraft:behavior.rise_to_liquid_level'?: RiseToLiquidLevel;
  'minecraft:behavior.roar'?: Roar;
  'minecraft:behavior.roll'?: Roll;
  'minecraft:behavior.run_around_like_crazy'?: RunAroundLikeCrazy;
  'minecraft:behavior.scared'?: Scared;
  'minecraft:behavior.send_event'?: SendEvent;
  'minecraft:behavior.share_items'?: ShareItems;
  'minecraft:behavior.silverfish_merge_with_stone'?: SilverfishMergeWithStone;
  'minecraft:behavior.silverfish_wake_up_friends'?: SilverfishWakeUpFriends;
  'minecraft:behavior.skeleton_horse_trap'?: SkeletonHorseTrap;
  'minecraft:behavior.sleep'?: Sleep;
  'minecraft:behavior.slime_attack'?: SlimeAttack;
  'minecraft:behavior.slime_float'?: SlimeFloat;
  'minecraft:behavior.slime_keep_on_jumping'?: SlimeKeepOnJumping;
  'minecraft:behavior.slime_random_direction'?: SlimeRandomDirection;
  'minecraft:behavior.snacking'?: Snacking;
  'minecraft:behavior.sneeze'?: Sneeze;
  'minecraft:behavior.sonic_boom'?: SonicBoom;
  'minecraft:behavior.squid_dive'?: SquidDive;
  'minecraft:behavior.squid_flee'?: SquidFlee;
  'minecraft:behavior.squid_idle'?: SquidIdle;
  'minecraft:behavior.squid_move_away_from_ground'?: SquidMoveAwayFromGround;
  'minecraft:behavior.squid_out_of_water'?: SquidOutOfWater;
  'minecraft:behavior.stalk_and_pounce_on_target'?: StalkAndPounceOnTarget;
  'minecraft:behavior.stay_near_noteblock'?: StayNearNoteblock;
  'minecraft:behavior.stay_while_sitting'?: StayWhileSitting;
  'minecraft:behavior.stomp_attack'?: StompAttack;
  'minecraft:behavior.stomp_turtle_egg'?: StompTurtleEgg;
  'minecraft:behavior.stroll_towards_village'?: StrollTowardsVillage;
  'minecraft:behavior.summon_entity'?: SummonEntity;
  'minecraft:behavior.swell'?: Swell;
  'minecraft:behavior.swim_idle'?: SwimIdle;
  'minecraft:behavior.swim_wander'?: SwimWander;
  'minecraft:behavior.swim_with_entity'?: SwimWithEntity;
  'minecraft:behavior.swoop_attack'?: SwoopAttack;
  'minecraft:behavior.take_flower'?: TakeFlower;
  'minecraft:behavior.target_when_pushed'?: TargetWhenPushed;
  'minecraft:behavior.tempt'?: Tempt;
  'minecraft:behavior.trade_interest'?: TradeInterest;
  'minecraft:behavior.trade_with_player'?: TradeWithPlayer;
  'minecraft:behavior.vex_copy_owner_target'?: VexCopyOwnerTarget;
  'minecraft:behavior.vex_random_move'?: VexRandomMove;
  'minecraft:behavior.wither_random_attack_pos_goal'?: WitherRandomAttackPosGoal;
  'minecraft:behavior.wither_target_highest_damage'?: WitherTargetHighestDamage;
  'minecraft:behavior.work'?: Work;
  'minecraft:behavior.work_composter'?: WorkComposter;
}
/**
 * Adds a rider to the entity. Requires `minecraft:rideable.`
 */
export interface AddRider {
  /**
   * The entity type that will be riding this entity.
   */
  entity_type: string;
  /**
   * The spawn event that will be used when the riding entity is created.
   */
  spawn_event?: string;
}
/**
 * Causes the mob to ignore attackable targets for a given duration.
 */
export interface AdmireItem {
  /**
   * Duration, in seconds, for which mob won't admire items if it was hurt.
   */
  cooldown_after_being_attacked?: number;
  /**
   * Duration, in seconds, that the mob is pacified.
   */
  duration?: number;
}
/**
 * Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.
 */
export interface Ageable {
  drop_items?: DropItems;
  /**
   * Amount of time before the entity grows up, -1 for always a baby.
   */
  duration?: number;
  feed_items?: FeedItems;
  grow_up?: GrowUp;
  transform_to_item?: TransformToItem;
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
 * Event to run when this entity grows up.
 */
export interface GrowUp {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Sets the entity's delay between playing its ambient sound.
 */
export interface AmbientSoundInterval {
  /**
   * Level sound event to be played as the ambient sound.
   */
  event_name?: string;
  /**
   * List of dynamic level sound events, with conditions for choosing between them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence.
   */
  event_names?: {
    /**
     * The condition that must be satisfied to select the given ambient sound.
     */
    condition?: string;
    event_name?: EventName;
    [k: string]: unknown;
  }[];
  /**
   * Maximum time in seconds to randomly add to the ambient sound delay time.
   */
  range?: number;
  /**
   * Minimum time in seconds before the entity plays its ambient sound again.
   */
  value?: number;
}
/**
 * Allows this entity to track anger towards a set of nuisances
 */
export interface AngerLevel {
  /**
   * Anger level will decay over time. Defines how often anger towards all nuisances will be decreased by one
   */
  anger_decrement_interval?: number;
  /**
   * Anger boost applied to angry threshold when mob gets angry.
   */
  angry_boost?: number;
  /**
   * Threshold that define when the mob is considered angry at a nuisance.
   */
  angry_threshold?: number;
  /**
   * The default amount of annoyingness for any given nuisance. Specifies how much to raise anger level on each provocation
   */
  default_annoyingness?: number;
  /**
   * The default amount of annoyingness for projectile nuisance. Specifies how much to raise anger level on each provocation
   */
  default_projectile_annoyingness?: number;
  /**
   * The maximum anger level that can be reached. Applies to any nuisance
   */
  max_anger?: number;
  nuisance_filter?: NuisanceFilter;
  on_increase_sounds?: OnIncreaseSounds;
  /**
   * Defines if the mob should remove target if it falls below 'angry' threshold.
   */
  remove_targets_below_angry_threshold?: boolean;
}
/**
 * Defines the entity's 'angry' state using a timer.
 */
export interface Angry {
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry.
   */
  broadcast_anger?: boolean;
  broadcast_filters?: BroadcastFilters;
  filters?: Filters;
  /**
   * Distance in blocks within which other entities of the same entity definition will become angry.
   */
  broadcast_range?: number;
  broadcast_targets?: BroadcastTargets;
  calm_event?: CalmEvent;
  angry_sound?: AngrySound;
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks.
   */
  broadcast_anger_on_attack?: boolean;
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked.
   */
  broadcast_anger_on_being_attacked?: boolean;
  /**
   * The amount of time in seconds that the entity will be angry.
   */
  duration?: number;
  /**
   * Variance in seconds added to the duration [-delta, delta].
   */
  duration_delta?: number;
  sound_interval?: SoundInterval;
}
/**
 * Event to run after the number of seconds specified in duration expires (when the entity stops being "angry")
 */
export interface CalmEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Allows the actor to break doors assuming that that flags set up for the component to use in navigation.
 */
export interface AnnotationBreakDoor {
  /**
   * The time in seconds required to break through doors.
   */
  break_time?: number;
  /**
   * The minimum difficulty that the world must be on for this entity to break doors.
   */
  min_difficulty?: string;
}
/**
 * Allows the actor to open doors assuming that that flags set up for the component to use in navigation.
 */
export interface AnnotationOpenDoor {}
/**
 * A component that does damage to entities that get within range.
 */
export interface AreaAttack {
  cause?: Cause;
  /**
   * Attack cooldown (in seconds) for how often this entity can attack a target.
   */
  damage_cooldown?: number;
  /**
   * How much damage per tick is applied to entities that enter the damage range.
   */
  damage_per_tick?: number;
  /**
   * How close a hostile entity must be to have the damage applied.
   */
  damage_range?: number;
  entity_filter?: EntityFilter;
  /**
   * If the entity should play their attack sound when attacking a target.
   */
  play_attack_sound?: boolean & number;
}
/**
 * Adds a cooldown to a mob. The intention of this cooldown is to be used to prevent the mob from attempting to aquire new attack targets.
 */
export interface AttackCooldown {
  attack_cooldown_complete_event?: AttackCooldownCompleteEvent;
  attack_cooldown_time?: AttackCooldownTime;
}
/**
 * Specifies how much damage is dealt by the entity when it attacks.
 */
export interface AttackDamage {
  /**
   * How much an attack should damage a target.
   */
  value: number;
}
/**
 * Defines an entity's melee attack and any additional effects on it.
 */
export interface Attack {
  damage: Damage;
  /**
   * Identifier of the status ailment to apply to an entity attacked by this entity's melee attack.
   */
  effect_name?: string;
  /**
   * Duration in seconds of the status ailment applied to the damaged entity.
   */
  effect_duration?: number;
}
/**
 * allows the entity to have a balloon attached and defines the conditions and events for the entity when is ballooned.
 */
export interface Balloonable {
  /**
   * Distance in blocks where the 'spring' effect lifts the entity.
   */
  soft_distance?: number;
  /**
   * Distance in blocks where the balloon breaks.
   */
  max_distance?: number;
  /**
   * Event to call when the entity is ballooned.
   */
  on_balloon?: string;
  /**
   * Event to call when the entity is unballooned.
   */
  on_unballoon?: string;
  /**
   * Mass that the entity has when computing balloon pull forces.
   */
  mass?: number;
}
/**
 * Enables the component to drop an item as a barter exchange.
 */
export interface Barter {
  /**
   * Loot table that's used to drop a random item.
   */
  barter_table?: string;
  /**
   * Duration, in seconds, for which mob won't barter items if it was hurt.
   */
  cooldown_after_being_attacked?: number;
}
/**
 * Allows the player to detect and manuever on the scaffolding block.
 */
export interface BlockClimber {}
/**
 * Fires off a specified event when a block in the block list is broken within the sensor range.
 */
export interface BlockSensor {
  /**
   * The maximum radial distance in which a specified block can be detected. The biggest radius is 32.0.
   */
  sensor_radius?: number;
  on_break?: OnBreak;
  sources?: Sources;
}
/**
 * Event to run when a block breaks.
 */
export interface OnBlockBroken {
  block_list?: BlockList;
  /**
   * Event to run when a block breaks.
   */
  on_block_broken?: string;
}
/**
 * Defines the conditions and behavior of a rideable entity's boost.
 */
export interface Boostable {
  /**
   * Time in seconds for the boost.
   */
  duration?: number;
  /**
   * Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast.
   */
  speed_multiplier?: number;
  boost_items?: BoostItems;
}
/**
 * The current state of the boss for updating the boss HUD.
 */
export interface Boss {
  /**
   * The Maximum distance from the boss at which the boss's health bar is present on the players screen.
   */
  hud_range?: number;
  /**
   * The name that will be displayed above the boss's health bar.
   */
  name?: string;
  /**
   * Whether the sky should darken in the presence of the boss.
   */
  should_darken_sky?: boolean;
}
/**
 * Specifies the blocks that this entity can break as it moves around.
 */
export interface BreakBlocks {
  breakable_blocks?: BreakableBlocks;
}
/**
 * Defines what blocks this entity can breathe in and gives them the ability to suffocate.
 */
export interface Breathable {
  /**
   * Time in seconds the entity can hold its breath.
   */
  total_supply?: number;
  /**
   * Time in seconds between suffocation damage.
   */
  suffocate_time?: number;
  /**
   * Time in seconds to recover breath to maximum.
   */
  inhale_time?: number;
  /**
   * If true, this entity can breathe in air.
   */
  breathes_air?: boolean;
  /**
   * If true, this entity can breathe in water.
   */
  breathes_water?: boolean;
  /**
   * If true, this entity can breathe in lava.
   */
  breathes_lava?: boolean;
  /**
   * If true, this entity can breathe in solid blocks.
   */
  breathes_solids?: boolean;
  /**
   * If true, this entity will have visible bubbles while in water.
   */
  generates_bubbles?: boolean;
  breathe_blocks?: BreatheBlocks;
  non_breathe_blocks?: NonBreathesBlocks;
}
export interface BlockReference1 {
  name?: BlockceptionMinecraftBlockIdentifier1;
  states?: States;
  tags?: MolangString1801;
}
export interface States {
  [k: string]: StateValue;
}
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
  love_filters?: Filters3;
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
  target?: Target1;
  filters?: Filters2;
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
/**
 * Defines the way an entity can get into the 'bribed' state.
 */
export interface Bribeable {
  /**
   * Time in seconds before the Entity can be bribed again.
   */
  bribe_cooldown?: number;
  bribe_items?: BribeItems;
}
/**
 * Enables an entity to float on the specified liquid blocks.
 */
export interface Buoyant {
  /**
   * Base buoyancy used to calculate how much will a mob float.
   */
  base_buoyancy?: number;
  /**
   * Applies gravity each tick. Causes more of a wave simulation, but will cause more gravity to be applied outside liquids.
   */
  apply_gravity?: boolean;
  /**
   * Base buoyancy used to calculate how much will a mob float.
   */
  buoyancy?: number;
  /**
   * Probability for a big wave hitting the entity. Only used if `simulate_waves` is true.
   */
  big_wave_probability?: number;
  /**
   * Multiplier for the speed to make a big wave. Triggered depending on `big_wave_probability`.
   */
  big_wave_speed?: number;
  /**
   * How much an actor will be dragged down when the Buoyancy Component is removed.
   */
  drag_down_on_buoyancy_removed?: number;
  liquid_blocks?: LiquidBlocks;
  /**
   * Should the movement simulate waves going through.
   */
  simulate_waves?: boolean;
}
export interface BurnsInDaylight1 {}
/**
 * Allows this entity to climb up ladders.
 */
export interface CanClimb {}
/**
 * Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it.
 */
export interface CanFly {
  /**
   * Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it.
   */
  value?: boolean;
}
/**
 * Allows the entity to power jump like the horse does in vanilla.
 */
export interface CanPowerJump {}
/**
 * Specifies hunt celebration behavior.
 */
export interface CelebrateHunt {
  /**
   * If true, celebration will be broadcasted to other entities in the radius.
   */
  broadcast?: boolean;
  celebration_targets?: Filters4;
  celebrate_sound?: CelebrateSound;
  /**
   * Duration, in seconds, of celebration.
   */
  duration?: number;
  /**
   * If broadcast is enabled, specifies the radius in which it will notify other entities for celebration.
   */
  radius?: number;
  sound_interval?: SoundInterval1;
}
/**
 * Sets the width and height of the Entity's collision box.
 */
export interface CollisionBox {
  /**
   * Height of the collision box in blocks. A negative value will be assumed to be 0
   */
  height?: number;
  /**
   * Width and Depth of the collision box in blocks. A negative value will be assumed to be 0
   */
  width?: number;
}
/**
 * Defines the entity's color. Only works on vanilla entities that have predefined color values (sheep, llama, shulker).
 */
export interface Color {
  /**
   * The Palette Color value of the entity.
   */
  value?: number;
}
/**
 * Defines the entity's second texture color. Only works on vanilla entities that have a second predefined color values (tropical fish).
 */
export interface Color0 {
  /**
   * The second Palette Color value of the entity.
   */
  value?: number;
}
/**
 * Gives Regeneration I and removes Mining Fatigue from the mob that kills the Actor`s attack target.
 */
export interface CombatRegeneration {
  /**
   * Determines if the mob will grant mobs of the same type combat buffs if they kill the target.
   */
  apply_to_family?: boolean;
  /**
   * Determines if the mob will grant itself the combat buffs if it kills the target.
   */
  apply_to_self?: boolean;
  /**
   * The duration in seconds of Regeneration I added to the mob.
   */
  regeneration_duration?: number;
}
/**
 * Defines the Conditional Spatial Update Bandwidth Optimizations of this entity.
 */
export interface ConditionalBandwidthOptimization {
  conditional_values?: ConditionalValues;
  default_values?: DefaultValues;
}
/**
 * The object containing the conditional bandwidth optimization values.
 */
export interface ConditionalValue {
  /**
   * In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.
   */
  max_dropped_ticks?: number;
  /**
   * The maximum distance considered during bandwidth optimizations. Any value below the Maximum is interpolated to find optimization, and any value greater than or equal to this Maximum results in Maximum optimization.
   */
  max_optimized_distance?: number;
  /**
   * When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.
   */
  use_motion_prediction_hints?: boolean;
  conditional_values?: ConditionalValues1;
}
/**
 * The object containing the default bandwidth optimization values.
 */
export interface DefaultValues {
  /**
   * In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.
   */
  max_dropped_ticks?: number;
  /**
   * The maximum distance considered during bandwidth optimizations. Any value below the Maximum is interpolated to find optimization, and any value greater than or equal to this Maximum results in Maximum optimization.
   */
  max_optimized_distance?: number;
  /**
   * When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.
   */
  use_motion_prediction_hints?: boolean;
}
/**
 * List of hitboxes for melee and ranged hits against the entity.
 */
export interface CustomHitTest {
  hitboxes?: Hitboxes;
}
/**
 * Defines a hitbox size and pivot to test against.
 */
export interface Hitbox {
  /**
   * Height of the hitbox in blocks. A negative value will be assumed to be 0.
   */
  width?: number;
  /**
   * Width and Depth of the hitbox in blocks. A negative value will be assumed to be 0.
   */
  height?: number;
  pivot?: Pivot;
}
/**
 * Applies defined amount of damage to the entity at specified intervals.
 */
export interface DamageOverTime {
  /**
   * Amount of damage caused each hurt.
   */
  damage_per_hurt?: number;
  /**
   * Time in seconds between damage.
   */
  time_between_hurt?: number;
}
/**
 * Defines what events to call when this entity is damaged by specific entities or items.
 */
export interface DamageSensor {
  triggers?: Triggers;
}
/**
 * List of triggers with the events to call when taking specific kinds of damage.
 */
export interface Triggers1 {
  cause?: Cause1;
  /**
   * A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0.
   */
  damage_modifier?: number;
  /**
   * A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1.
   */
  damage_multiplier?: number;
  /**
   * If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage.
   */
  deals_damage?: boolean;
  on_damage?: OnDamage;
  on_damage_sound_event?: OnDamageSoundEvent;
}
/**
 * List of triggers with the events to call when taking specific kinds of damage.
 */
export interface Triggers2 {
  cause?: Cause1;
  /**
   * A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0.
   */
  damage_modifier?: number;
  /**
   * A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1.
   */
  damage_multiplier?: number;
  /**
   * If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage.
   */
  deals_damage?: boolean;
  on_damage?: OnDamage;
  on_damage_sound_event?: OnDamageSoundEvent;
}
/**
 * Ability for a ridable entity to dash.
 */
export interface Dash {
  /**
   * The dash cooldown in seconds.
   */
  cooldown_time?: number;
  /**
   * Horizontal momentum of the dash.
   */
  horizontal_momentum?: number;
  /**
   * Vertical momentum of the dash.
   */
  vertical_momentum?: number;
}
/**
 * Sets this entity's default head rotation angle.
 */
export interface DefaultLookAngle {
  /**
   * Angle in degrees.
   */
  value?: number;
}
/**
 * Despawns the Actor when the despawn rules or optional filters evaluate to true.
 */
export interface Despawn {
  /**
   * Determines if `min_range_random_chance` is used in the standard despawn rules.
   */
  despawn_from_chance?: boolean;
  despawn_from_distance?: DespawnFromDistance;
  /**
   * Determines if the `min_range_inactivity_timer` is used in the standard despawn rules.
   */
  despawn_from_inactivity?: boolean;
  /**
   * Determines if the mob is instantly despawned at the edge of simulation distance in the standard despawn rules.
   */
  despawn_from_simulation_edge?: boolean;
  filters?: Filters5;
  /**
   * The amount of time in seconds that the mob must be inactive.
   */
  min_range_inactivity_timer?: number;
  /**
   * A random chance between 1 and the given value.
   */
  min_range_random_chance?: number;
  /**
   * If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.
   */
  remove_child_entities?: boolean;
}
/**
 * Defines the minimum and maximum distance for despawn to occur.
 */
export interface DespawnFromDistance {
  /**
   * Maximum distance for standard despawn rules to instantly despawn the mob.
   */
  max_distance?: number;
  /**
   * Minimum distance for standard despawn rules to try to despawn the mob.
   */
  min_distance?: number;
}
/**
 * Adds a timer for drying out that will count down and fire `dried_out_event` or will stop as soon as the entity will get under rain or water and fire `stopped_drying_out_event`.
 */
export interface DryingOutTimer {
  dried_out_event?: DriedOutEvent;
  recover_after_dried_out_event?: RecoverAfterDriedOutEvent;
  stopped_drying_out_event?: StoppedDryingOutEvent;
  /**
   * Amount of time in seconds to dry out fully.
   */
  total_time?: number;
  /**
   * Optional amount of additional time in seconds given by using splash water bottle on entity.
   */
  water_bottle_refill_time?: number;
}
/**
 * Event to fire when the drying out time runs out.
 */
export interface DriedOutEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to fire when entity was already dried out but received increase in water supply.
 */
export interface RecoverAfterDriedOutEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to fire when entity stopped drying out, for example got into water or under rain.
 */
export interface StoppedDryingOutEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Allows a mob to join and migrate between villages and other dwellings.
 */
export interface Dweller {
  dwelling_type?: DwellingType;
  dweller_role?: DwellingRole;
  /**
   * How often the mob checks on their dwelling status in ticks. Positive values only.
   */
  update_interval_base?: number;
  /**
   * The variant value in ticks that will be added to the update_interval_base.
   */
  update_interval_variant?: number;
  /**
   * Whether or not the mob can find and add POI's to the dwelling.
   */
  can_find_poi?: boolean;
  /**
   * How much reputation should the players be rewarded on first founding?.
   */
  first_founding_reward?: number;
  /**
   * Can this mob migrate between dwellings? Or does it only have its initial dwelling?.
   */
  can_migrate?: boolean;
  /**
   * A padding distance for checking if the mob is within the dwelling.
   */
  dwelling_bounds_tolerance?: number;
  /**
   * Allows the user to define a starting profession for this particular Dweller, instead of letting them choose organically. (They still need to gain experience from trading before this takes effect.)
   */
  preferred_profession?: string;
}
/**
 * Defines this entity's ability to trade with players.
 */
export interface EconomyTradeTable {
  /**
   * Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1.
   */
  convert_trades_economy?: boolean;
  cured_discount?: CuredDiscount;
  /**
   * Name to be displayed while trading with this entity.
   */
  display_name?: string;
  /**
   * Used in legacy prices to determine how much should Demand be modified by when the player has the Hero of the Village mob effect.
   */
  hero_demand_discount?: number;
  max_cured_discount?: MaximumCuredDiscount;
  /**
   * The Maximum the discount can be modified by when the player has cured a nearby Zombie Villager.
   */
  max_nearby_cured_discount?: number;
  /**
   * How much should the discount be modified by when the player has cured a nearby Zombie Villager.
   */
  nearby_cured_discount?: number;
  /**
   * Used to determine if trading with entity opens the new trade screen.
   */
  new_screen?: boolean;
  /**
   * Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades.
   */
  persist_trades?: boolean;
  /**
   * Show an in game trade screen when interacting with the mob.
   */
  show_trade_screen?: boolean;
  /**
   * File path relative to the resource pack root for this entity's trades.
   */
  table?: string;
  /**
   * Determines whether the legacy formula is used to determines the trade prices.
   */
  use_legacy_price_formula?: boolean;
}
/**
 * A component that fires an event when a set of conditions are met by other entities within the defined range.
 */
export interface EntitySensor {
  /**
   * The maximum number of entities that must pass the filter conditions for the event to send.
   */
  maximum_count?: number;
  /**
   * The minimum number of entities that must pass the filter conditions for the event to send.
   */
  minimum_count?: number;
  /**
   * If true the sensor range is additive on top of the entity's size.
   */
  relative_range?: boolean;
  /**
   * If true requires all nearby entities to pass the filter conditions for the event to send.
   */
  require_all?: boolean;
  /**
   * The maximum distance another entity can be from this and have the filters checked against it.
   */
  sensor_range?: number;
  event_filters?: Filters2;
  /**
   * event.
   */
  event?: string;
}
/**
 * Creates a trigger based on environment conditions.
 */
export interface EnvironmentSensor {
  triggers?: Triggers3;
}
/**
 * The entity puts on the desired equipment.
 */
export interface EquipItem {}
/**
 * Sets the equipment table to use for the entity.
 */
export interface Equipment {
  slot_drop_chance?: SlotDropChance;
  table?: BlockceptionMinecraftLootTableIdentifier;
}
/**
 * A slots with the chance to drop an equipped item from that slot.
 */
export interface SlotDropChance1 {
  /**
   * The chance that the item in this slot will drop.
   */
  drop_chance?: number;
  /**
   * The slot in which the item will drop from.
   */
  slot?: string;
}
/**
 * Defines an entity's behavior for having items equipped to it.
 */
export interface Equippable {
  slots?: Slots;
}
/**
 * A slot and the item that can be equipped.
 */
export interface Slots1 {
  /**
   * The slot number of this slot.
   */
  slot?: number;
  accepted_items?: AcceptedItems;
  item?: Item1;
  /**
   * Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls.
   */
  interact_text?: string;
  on_equip?: OnEquip;
  on_unequip?: OnUnequip;
  [k: string]: unknown;
}
/**
 * Event to trigger when this entity is equipped with this item.
 */
export interface OnEquip {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to trigger when this item is removed from this entity.
 */
export interface OnUnequip {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines how much exhaustion each player action should take.
 */
export interface ExhaustionValues {
  /**
   * Amount of exhaustion applied when attacking.
   */
  attack?: number;
  /**
   * Amount of exhaustion applied when taking damage.
   */
  damage?: number;
  /**
   * Amount of exhaustion applied when healed through food regeneration.
   */
  heal?: number;
  /**
   * Amount of exhaustion applied when jumping.
   */
  jump?: number;
  /**
   * Amount of exhaustion applied when mining.
   */
  mine?: number;
  /**
   * Amount of exhaustion applied when sprinting.
   */
  sprint?: number;
  /**
   * Amount of exhaustion applied when sprint jumping.
   */
  sprint_jump?: number;
  /**
   * Amount of exhaustion applied when swimming.
   */
  swim?: number;
  /**
   * Amount of exhaustion applied when walking.
   */
  walk?: number;
}
/**
 * Defines the amount of experience rewarded when the entity dies or is successfully bred.
 */
export interface ExperienceReward {
  on_bred?: OnBred;
  on_death?: OnDeath;
}
/**
 * Defines how the entity explodes.
 */
export interface Explode {
  /**
   * If true, the explosion will destroy blocks in the explosion radius.
   */
  breaks_blocks?: boolean;
  /**
   * If true, blocks in the explosion radius will be set on fire.
   */
  causes_fire?: boolean;
  /**
   * If true, whether the explosion breaks blocks is affected by the mob griefing game rule.
   */
  destroy_affected_by_griefing?: boolean;
  /**
   * If true, whether the explosion causes fire is affected by the mob griefing game rule.
   */
  fire_affected_by_griefing?: boolean;
  fuse_length?: FuseLength;
  /**
   * If true, the fuse is already lit when this component is added to the entity.
   */
  fuse_lit?: boolean;
  /**
   * A blocks explosion resistance will be capped at this value when an explosion occurs.
   */
  max_resistance?: number;
  /**
   * The radius of the explosion in blocks and the amount of damage the explosion deals.
   */
  power?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface FallDamage {
  /**
   * UNDOCUMENTED: value.
   */
  value?: number;
}
/**
 * Sets that this entity doesn't take damage from fire.
 */
export interface FireImmune {}
/**
 * Sets that this entity can float in liquid blocks.
 */
export interface FloatsInLiquid {}
/**
 * Allows entities to flock in groups in water or not.
 */
export interface Flocking {
  /**
   * The amount of blocks away the entity will look at to push away from.
   */
  block_distance?: number;
  /**
   * The weight of the push back away from blocks.
   */
  block_weight?: number;
  /**
   * The amount of push back given to a flocker that breaches out of the water.
   */
  breach_influence?: number;
  /**
   * The threshold in which to start applying cohesion.
   */
  cohesion_threshold?: number;
  /**
   * The weight applied for the cohesion steering of the flock.
   */
  cohesion_weight?: number;
  /**
   * The weight on which to apply on the goal output.
   */
  goal_weight?: number;
  /**
   * Determines the high bound amount of entities that can be allowed in the flock.
   */
  high_flock_limit?: number;
  /**
   * Tells the Flocking Component if the entity exists in water.
   */
  in_water?: boolean;
  /**
   * The area around the entity that allows others to be added to the flock.
   */
  influence_radius?: number;
  /**
   * The distance in which the flocker will stop applying cohesion.
   */
  innner_cohesion_threshold?: number;
  /**
   * The percentage chance between 0-1 that a fish will spawn and not want to join flocks. Invalid values will be capped at the end points.
   */
  loner_chance?: number;
  /**
   * Determines the low bound amount of entities that can be allowed in the flock.
   */
  low_flock_limit?: number;
  /**
   * Tells the flockers that they can only match similar entities that also match the variant, mark variants, and color data of the other potential flockers.
   */
  match_variants?: boolean;
  /**
   * The Maximum height allowable in the air or water.
   */
  max_height?: number;
  /**
   * The Minimum height allowable in the air or water.
   */
  min_height?: number;
  /**
   * The distance that is determined to be to close to another flocking and to start applying separation.
   */
  separation_threshold?: number;
  /**
   * The weight applied to the separation of the flock.
   */
  separation_weight?: number;
  /**
   * Tells the flockers that they will follow flocks based on the center of mass.
   */
  use_center_of_mass?: boolean;
}
/**
 * Speed in Blocks that this entity flies at.
 */
export interface FlyingSpeed {
  /**
   * Flying speed in blocks per tick.
   */
  value?: number;
}
/**
 * Defines the range of blocks that a mob will pursue a target.
 */
export interface FollowRange {
  /**
   * Range of the amount of damage the melee follow_range deals. A negative value can heal the entity instead of hurting it.
   */
  value?: number;
  /**
   * Duration, in seconds, of the status ailment applied to the damaged entity.
   */
  max?: number;
}
/**
 * Defines how much does friction affect this entity.
 */
export interface FrictionModifier {
  /**
   * The higher the number, the more the friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much
   */
  value?: number;
}
/**
 * Allows an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through. It is added by default to every mob. Add it again to override its behavior.
 */
export interface GameEventMovementTracking {
  /**
   * If true, the `flap` game event will be emitted when the entity moves through air.
   */
  emit_flap?: boolean;
  /**
   * If true, the `entityMove` game event will be emitted when the entity moves on ground or through a solid.
   */
  emit_move?: boolean;
  /**
   * If true, the `swim` game event will be emitted when the entity moves through a liquid.
   */
  emit_swim?: boolean;
}
/**
 * Defines the way a mob's genes and alleles are passed on to it's offspring, and how those traits manifest in the child. Compatible parent genes are crossed together, the alleles are handed down from the parents to the child, and any matching genetic variants fire off JSON events to modify the child and express the traits.
 */
export interface Genetics {
  /**
   * Chance that an allele will be replaced with a random one instead of the parent's allele during birth.
   */
  mutation_rate?: number;
  genes?: Genes;
}
/**
 * The list of genes that this entity has and will cross with a partner during breeding.
 */
export interface Gene {
  allele_range?: AlleleRange;
  genetic_variants?: GeneticVariants;
  /**
   * The name of the gene.
   */
  name?: string;
  [k: string]: unknown;
}
/**
 * The genetic variant for this gene. These check for particular allele combinations and fire events when all of them are satisfied.
 */
export interface GeneticVariants1 {
  birth_event?: BrithEvent;
  both_allele?: BothAllele;
  /**
   * If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with either. Can also be a range of integers.
   */
  either_allele?: number;
  /**
   * If this value is non-negative, compare the mob's hidden allele with this value for a match. Can also be a range of integers.
   */
  hidden_allele?: number;
  main_allele?: MainAllele;
  /**
   * If this value is non-negative, overrides the chance for this gene that an allele will be replaced with a random one instead of the parent's allele during birth. Non-negative values greater than 1 will be the same as the value 1.
   */
  mutation_rate?: number;
  [k: string]: unknown;
}
/**
 * Event to run when this mob is created and matches the above allele conditions.
 */
export interface BrithEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.
 */
export interface Giveable {
  triggers?: Triggers4;
}
/**
 * Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.
 */
export interface Triggers4 {
  /**
   * An optional cool down in seconds to prevent spamming interactions.
   */
  cooldown?: number;
  items?: Properties;
  on_give?: OnGive;
}
/**
 * Event to fire when the correct item is given.
 */
export interface OnGive {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Sets the offset from the ground that the entity is actually at.
 */
export interface GroundOffset {
  /**
   * The value of the entity's offset from the terrain, in blocks.
   */
  value?: number;
}
/**
 * Keeps track of entity group size in the given radius.
 */
export interface GroupSize {
  filters?: Filters6;
  /**
   * Radius from center of entity.
   */
  radius?: number;
}
/**
 * Could increase crop growth when entity walks over crop.
 */
export interface GrowsCrop {
  /**
   * Value between 0-1. Chance of success per tick.
   */
  chance?: number;
  /**
   * Number of charges.
   */
  charges?: number;
}
/**
 * Defines the interactions with this entity for healing it.
 */
export interface Healable {
  filters?: Filters2;
  /**
   * Determines if item can be used regardless of entity being at full health.
   */
  force_use?: boolean;
  items?: Items;
}
export interface Effect {
  /**
   * UNDOCUMENTED.
   */
  name?: string;
  /**
   * The duration of the effect.
   */
  duration?: number;
  /**
   * The amplifier of the effect.
   */
  amplifier?: number;
  [k: string]: unknown;
}
/**
 * Specifies how much life an entity has when spawned.
 */
export interface Health {
  /**
   * The maximum starting health an entity has.
   */
  max?: number;
  value?: Value;
}
/**
 * defines the entity's heartbeat..
 */
export interface Heartbeat {
  interval?: Interval;
  /**
   * Level sound event to be played as the heartbeat sound.
   */
  sound_event?: string;
}
/**
 * Compels an entity to move to and hide at their owned POI or the closest nearby.
 */
export interface Hide {}
/**
 * Saves a home pos for when the the entity is spawned.
 */
export interface Home {
  /**
   * The radius that the entity will be restricted to in relation to its home.
   */
  restriction_radius?: number;
  home_block_list?: HomeBlockList;
}
/**
 * Allows this mob to jump higher when being ridden by a player.
 */
export interface HorseJumpStrength {
  value?: Value1;
}
/**
 * Defines a set of conditions under which an entity should take damage.
 */
export interface HurtOnCondition {
  damage_conditions?: DamageConditions;
}
/**
 * A condition used to compare the event to.
 */
export interface DamageCondition {
  filters?: Filters2;
  cause?: Cause2;
  /**
   * Amount of damage done each tick that the conditions are met.
   */
  damage_per_tick?: number;
}
/**
 * Specifies if an actor is hurt when wet.
 */
export interface HurtWhenWet {}
/**
 * When configured as a rideable entity, the entity will be controlled using WASD controls.
 */
export interface InputGroundControlled {}
/**
 * Verifies whether the entity is inside any of the listed blocks.
 */
export interface InsideBlockNotifier {
  block_list?: BlockList1;
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
  states?: States1;
}
/**
 * The block states.
 */
export interface States1 {
  [k: string]: State;
}
/**
 * Event to run when this mob enters a valid block.
 */
export interface EnteredBlockEvent {
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
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Adds a timer since last rested to see if phantoms should spawn.
 */
export interface Insomnia {
  /**
   * Number of days the mob has to stay up until the insomnia effect begins.
   */
  days_until_insomnia?: number;
}
/**
 * Despawns the Actor immediately.
 */
export interface InstantDespawn {
  /**
   * If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.
   */
  remove_child_entities?: boolean;
}
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
  on_interact?: Trigger2;
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
  table?: Table;
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
  table?: Table1;
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
  on_interact?: Trigger2;
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
 * Defines this entity's inventory properties.
 */
export interface Inventory {
  /**
   * Number of slots that this entity can gain per extra strength.
   */
  additional_slots_per_strength?: number;
  /**
   * If true, the contents of this inventory can be removed by a hopper.
   */
  can_be_siphoned_from?: boolean;
  container_type?: ContainerType;
  /**
   * Number of slots the container has.
   */
  inventory_size?: number;
  /**
   * If true, only the entity can access the inventory.
   */
  private?: boolean;
  /**
   * If true, the entity's inventory can only be accessed by its owner or itself.
   */
  restrict_to_owner?: boolean;
}
/**
 * Sets that this entity is a baby.
 */
export interface IsBaby {}
/**
 * Sets that this entity is charged.
 */
export interface IsCharged {}
/**
 * Sets that this entity is currently carrying a chest.
 */
export interface IsChested {}
/**
 * Allows dyes to be used on this entity to change its color.
 */
export interface IsDyeable {
  /**
   * The text that will display when interacting with this entity with a dye when playing with Touch-screen controls.
   */
  interact_text?: string;
}
/**
 * Sets that this entity can hide from hostile mobs while invisible.
 */
export interface IsHiddenWhenInvisible {}
/**
 * Sets that this entity is currently on fire.
 */
export interface IsIgnited {}
/**
 * Sets that this entity is an illager captain.
 */
export interface IsIllagerCaptain {}
/**
 * Sets that this entity is currently saddled.
 */
export interface IsSaddled {}
/**
 * Sets that this entity is currently shaking.
 */
export interface IsShaking {}
/**
 * Sets that this entity is currently sheared.
 */
export interface IsSheared {}
/**
 * Sets that this entity can be stacked.
 */
export interface IsStackable {
  /**
   * UNDOCUMENTED.
   */
  value?: boolean;
}
/**
 * Sets that this entity is currently stunned.
 */
export interface IsStunned {}
/**
 * Sets that this entity is currently tamed.
 */
export interface IsTamed {}
/**
 * Efines what items can be used to control this entity while ridden.
 */
export interface ItemControllable {
  control_items?: ControlItems;
}
/**
 * Determines that this entity is an item hopper.
 */
export interface ItemHopper {}
/**
 * Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob.
 */
export interface JumpDynamic {}
/**
 * Gives the entity the ability to jump.
 */
export interface JumpStatic {
  /**
   * The initial vertical velocity for the jump.
   */
  jump_power?: number;
}
/**
 * Allows an entity to resist being knocked backwards by a melee attack.
 */
export interface KnockbackResistance {
  /**
   * Percentage of knockback to reduce with 1.0 being 100% reduction.
   */
  value?: number;
  /**
   * The maximum amount of knockback resistance that can be applied to the entity.
   */
  maximum?: number;
}
/**
 * Allows a custom movement speed across lava blocks.
 */
export interface LavaMovement {
  /**
   * The speed a strider moves over a lava block.
   */
  value?: number;
}
/**
 * Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
 */
export interface Leashable {
  /**
   * If true, players can leash this entity even if it is already leashed to another mob.
   */
  can_be_stolen?: boolean;
  /**
   * Distance in blocks at which the leash stiffens, restricting movement.
   */
  hard_distance?: number;
  /**
   * Distance in blocks at which the leash breaks.
   */
  max_distance?: number;
  on_leash?: OnLeash;
  on_unleash?: OnUnleash;
  /**
   * Distance in blocks at which the `spring` effect starts acting to keep this entity close to the entity that leashed it.
   */
  soft_distance?: number;
}
/**
 * Event to call when this entity is leashed.
 */
export interface OnLeash {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when this entity is unleashed.
 */
export interface OnUnleash {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines the behavior when another entity looks at this entity.
 */
export interface Lookat {
  /**
   * If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets.
   */
  allow_invulnerable?: boolean;
  filters?: Filters8;
  look_cooldown?: LookCooldown;
  look_event?: LookEvent;
  /**
   * Maximum distance this entity will look for another entity looking at it.
   */
  search_radius?: number;
  /**
   * If true, this entity will set the attack target as the entity that looked at it.
   */
  set_target?: boolean;
}
/**
 * The event identifier to run when the entities specified in filters look at this entity.
 */
export interface LookEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * sets the loot table for what items this entity drops upon death.
 */
export interface Loot {
  /**
   * The path to the loot table, relative to the Behavior Pack's root.
   */
  table: string;
}
/**
 * This component is used to implement part of the Wandering Trader behavior.
 */
export interface ManagedWanderingTrader {}
/**
 * Additional variant value. Can be used to further differentiate variants.
 */
export interface MarkVariant {
  /**
   * The ID of the variant. By convention, 0 is the ID of the base entity
   */
  value: number;
}
/**
 * A component that applies a mob effect to entities that get within range.
 */
export interface MobEffect {
  /**
   * Time in seconds to wait between each application of the effect.
   */
  cooldown_time?: number;
  /**
   * How close a hostile entity must be to have the mob effect applied.
   */
  effect_range?: number;
  /**
   * How long the applied mob effect lasts in seconds.
   */
  effect_time?: number;
  entity_filter?: Filters9;
  /**
   * The mob effect that is applied to entities that enter this entities effect range.
   */
  mob_effect?: string;
}
/**
 * Sets the offset used to determine the next step distance for playing a movement sound.
 */
export interface MovementSoundDistanceOffset {
  /**
   * The higher the number, the less often the movement sound will be played.
   */
  value: number;
}
/**
 * This move control allows the mob to swim in water and walk on land.
 */
export interface MovementAmphibious {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
}
/**
 * defines the movement of an entity.
 */
export interface MovementBasic {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
}
/**
 * This move control causes the mob to fly.
 */
export interface MovementFly {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
}
/**
 * This move control allows a mob to fly, swim, climb, etc.
 */
export interface MovementGeneric {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
}
/**
 * This is the move control for a flying mob that has a gliding movement.
 */
export interface MovementGlide {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
  /**
   * UNDOCUMENTED.
   */
  start_speed?: number;
  /**
   * UNDOCUMENTED.
   */
  speed_when_turning?: number;
}
/**
 * This move control causes the mob to hover.
 */
export interface MovementHover {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
}
/**
 * Move control that causes the mob to jump as it moves with a specified delay between jumps.
 */
export interface MovementJump {
  jump_delay?: JumpDelay;
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
}
/**
 * This move control causes the mob to hop as it moves.
 */
export interface MovementSkip {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
}
/**
 * This move control causes the mob to sway side to side giving the impression it is swimming.
 */
export interface MovementSway {
  /**
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;
  /**
   * Strength of the sway movement.
   */
  sway_amplitude?: number;
  /**
   * Multiplier for the frequency of the sway movement.
   */
  sway_frequency?: number;
}
/**
 * UNDOCUMENTED.
 */
export interface Movement {
  value?: Value2;
  /**
   * UNDOCUMENTED.
   */
  max?: number;
}
export interface Range2 {
  range_min?: number;
  range_max?: number;
}
/**
 * Allows this entity to be named (e.g. using a name tag).
 */
export interface Nameable {
  /**
   * If true, this entity can be renamed with name tags.
   */
  allow_name_tag_renaming?: boolean;
  /**
   * If true, the name will always be shown.
   */
  always_show?: boolean;
  default_trigger?: Trigger3;
  name_actions?: NameActions;
}
/**
 * Describes the special names for this entity and the events to call when the entity acquires those names.
 */
export interface NameAction {
  /**
   * List of special names that will cause the events defined in `on_named` to fire.
   */
  name_filter?: string;
  on_named?: OnNamed;
}
/**
 * Event to be called when this entity acquires the name specified in `name_filter'.
 */
export interface OnNamed {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Describes the special names for this entity and the events to call when the entity acquires those names.
 */
export interface NameAction1 {
  /**
   * List of special names that will cause the events defined in `on_named` to fire.
   */
  name_filter?: string;
  on_named?: OnNamed;
}
/**
 * Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.
 */
export interface NavigationClimb {
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  blocks_to_avoid?: BlocksToAvoid;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   */
  can_walk?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater.
   */
  is_amphibious?: boolean;
}
/**
 * Allows this entity to generate paths by flying around the air like the regular Ghast.
 */
export interface NavigationFloat {
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  blocks_to_avoid?: BlocksToAvoid1;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   */
  can_walk?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater.
   */
  is_amphibious?: boolean;
}
/**
 * Allows this entity to generate paths in the air like the vanilla Parrots do.
 */
export interface NavigationFly {
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  blocks_to_avoid?: BlocksToAvoid2;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   */
  can_walk?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater.
   */
  is_amphibious?: boolean;
}
/**
 * Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block.
 */
export interface NavigationGeneric {
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  blocks_to_avoid?: BlocksToAvoid3;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   */
  can_walk?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater.
   */
  is_amphibious?: boolean;
}
/**
 * Allows this entity to generate paths in the air like the vanilla Bees do. Keeps them from falling out of the skies and doing predictive movement.
 */
export interface NavigationHover {
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  blocks_to_avoid?: BlocksToAvoid4;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   */
  can_walk?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater.
   */
  is_amphibious?: boolean;
}
/**
 * Allows this entity to generate paths that include water.
 */
export interface NavigationSwim {
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  blocks_to_avoid?: BlocksToAvoid5;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   */
  can_walk?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater.
   */
  is_amphibious?: boolean;
}
/**
 * Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.
 */
export interface NavigationWalk {
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  blocks_to_avoid?: BlocksToAvoid6;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder whether or not it float.
   */
  can_float?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   */
  can_walk?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater.
   */
  is_amphibious?: boolean;
}
/**
 * Sets this entity as an NPC
 */
export interface Npc {
  npc_data?: NpcData;
}
/**
 * The data belonging to this npc.
 */
export interface NpcData {
  portrait_offsets?: PortraitOffsets;
  picker_offsets?: PickerOffsets;
  skin_list?: SkinList;
}
/**
 * UNDOCUMENTED.
 */
export interface PortraitOffsets {
  translate?: Translate;
  scale?: Scale;
}
/**
 * UNDOCUMENTED.
 */
export interface PickerOffsets {
  translate?: Translate1;
  scale?: Scale1;
}
/**
 * UNDOCUMENTED.
 */
export interface Skin {
  /**
   * UNDOCUMENTED.
   */
  variant?: number;
  /**
   * UNDOCUMENTED.
   */
  mark_variant?: number;
}
/**
 * defines the entity's `out of control` state.
 */
export interface OutOfControl {}
/**
 * Defines the entity's `peek` behavior, defining the events that should be called during it.
 */
export interface Peek {
  on_close?: OnClose;
  on_open?: OnOpen;
  on_target_open?: OnTargetOpen;
}
/**
 * Event to call when the entity is done peeking.
 */
export interface OnClose {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when the entity starts peeking.
 */
export interface OnOpen {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when the entity's target entity starts peeking.
 */
export interface OnTargetOpen {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines whether an entity should be persistent in the game world.
 */
export interface Persistent {}
/**
 * Defines the physical properties of an actor, including whether it is affected by gravity, whether it collides with objects, or whether it is pushed to the closest space.
 */
export interface Physics {
  /**
   * Whether or not the entity collides with things.
   */
  has_collision?: boolean;
  /**
   * Whether or not the entity is affected by gravity.
   */
  has_gravity?: boolean;
  /**
   * Whether or not the entity is pushed to the closest space.
   */
  push_towards_closest_space?: boolean;
}
/**
 * Defines the player's exhaustion level.
 */
export interface PlayerExhaustion {
  /**
   * The initial value of the player exhaustion.
   */
  value?: number;
  /**
   * The maximum player exhaustion of this entity.
   */
  max?: number;
}
/**
 * Defines how much experience each player action should take.
 */
export interface PlayerExperience {
  /**
   * The initial value of the player experience.
   */
  value?: number;
  /**
   * The maximum player experience of this entity.
   */
  max?: number;
}
/**
 * Defines the player's level.
 */
export interface PlayerLevel {
  /**
   * The initial value of the player level.
   */
  value?: number;
  /**
   * The maximum player level value of the entity.
   */
  max?: number;
}
/**
 * Defines the player's need for food.
 */
export interface PlayerSaturation {
  /**
   * The initial value of player saturation.
   */
  value?: number;
  /**
   * The maximum player saturation value.
   */
  max?: number;
}
/**
 * Specifies costing information for mobs that prefer to walk on preferred paths.
 */
export interface PreferredPath {
  /**
   * Cost for non-preferred blocks.
   */
  default_block_cost?: number;
  /**
   * Added cost for jumping up a node.
   */
  jump_cost?: number;
  /**
   * Distance mob can fall without taking damage.
   */
  max_fall_blocks?: number;
  preferred_path_blocks?: PreferredPathBlocks;
}
/**
 * Allows the entity to be a thrown entity.
 */
export interface Projectile {
  /**
   * Allows you to choose an anchor point for where the projectile is fired from. 0 = Original point, 1 = EyeHeight, and 2 = Middle or body height.
   */
  anchor?: number;
  /**
   * Alters the angle at which a projectile is vertically shot. Many splash potions in the game use this to offset their angles by -20 degrees.
   */
  angle_offset?: number;
  /**
   * If true, the entity hit will be set on fire.
   */
  catch_fire?: boolean;
  /**
   * If true, when a projectile deals damage, whether or not to spawn in the critical damage particles.
   */
  crit_particle_on_hurt?: boolean;
  /**
   * When this projectile deals damage, whether or not to immediately destroy this projectile.
   */
  destroy_on_hurt?: boolean;
  /**
   * Entity Definitions defined here can't be hurt by the projectile.
   */
  filter?: string;
  /**
   * If true, whether the projectile causes fire is affected by the mob griefing game rule.
   */
  fire_affected_by_griefing?: boolean;
  /**
   * The gravity applied to this entity when thrown. When this actor is not on the ground, subtracts this amount from the actors change in vertical position every tick. The higher the value, the faster the entity falls.
   */
  gravity?: number;
  hit_ground_sound?: HitGroundSound;
  hit_sound?: HitSound;
  /**
   * If true, the projectile homes in to the nearest entity.
   */
  homing?: boolean;
  /**
   * The fraction of the projectile's speed maintained every frame while traveling in air.
   */
  inertia?: number;
  /**
   * If true, the projectile will be treated as dangerous to the players.
   */
  is_dangerous?: boolean;
  /**
   * If true, the projectile will knock back the entity it hits.
   */
  knockback?: boolean;
  /**
   * If true, the entity hit will be struck by lightning.
   */
  lightning?: boolean;
  /**
   * The fraction of the projectile's speed maintained every frame while traveling in water.
   */
  liquid_inertia?: number;
  /**
   * If true, the projectile can hit multiple entities per flight.
   */
  multiple_targets?: boolean;
  mob_effect?: MobEffect1;
  offset?: Offset;
  /**
   * Time in seconds that the entity hit will be on fire for.
   */
  on_fire_time?: number;
  on_hit?: OnHit;
  /**
   * Particle to use upon collision.
   */
  particle?: string;
  /**
   * Defines the effect the arrow will apply to the entity it hits.
   */
  potion_effect?: number;
  /**
   * Determines the velocity of the projectile.
   */
  power?: number;
  /**
   * If true, this entity will be reflected back when hit.
   */
  reflect_on_hurt?: boolean;
  /**
   * If true, damage will be randomized based on damage and speed.
   */
  semi_random_diff_damage?: boolean;
  shoot_sound?: ShootSound;
  /**
   * If true, the projectile will be shot towards the target of the entity firing it.
   */
  shoot_target?: boolean;
  /**
   * If true, the projectile will bounce upon hit.
   */
  should_bounce?: boolean;
  /**
   * If true, the projectile will be treated like a splash potion.
   */
  splash_potion?: boolean;
  /**
   * Radius in blocks of the 'splash' effect.
   */
  splash_range?: number;
  /**
   * Determines if the projectile stops when the target is hurt.
   */
  stop_on_hurt?: boolean;
  /**
   * The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier.
   */
  uncertainty_base?: number;
  /**
   * Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier.
   */
  uncertainty_multiplier?: number;
}
/**
 * SEE on_hit/mob_effect.
 */
export interface MobEffect1 {
  [k: string]: unknown;
}
/**
 * Defines the behaviors that may execute on a projectile's hit, including impact damage, impact effect, and stuck in ground. See more on these parameters below.
 */
export interface OnHit {
  /**
   * Determines if the struck object is set on fire.
   */
  catch_fire?: boolean;
  definition_event?: DefinitionEvent;
  /**
   * If the target is on fire, then douse hte fire.
   */
  douse_fire?: boolean;
  freeze_on_hit?: FreezeOnHit;
  grant_xp?: GrantXP;
  hurt_owner?: HurtOwner;
  /**
   * Determines if a fire may be started on a flammable target.
   */
  ignite?: boolean;
  impact_damage?: ImpactDamage;
  mob_effect?: MobEffect2;
  /**
   * The amount of time a target will remain on fire.
   */
  on_fire_time?: number;
  particle_on_hit?: ParticleOnHit;
  /**
   * Defines the effect the arrow will apply to the entity it hits.
   */
  potion_effect?: number;
  remove_on_hit?: RemoveOnHit;
  spawn_aoe_cloud?: SpawnAOECloud;
  spawn_chance?: SpawnChance;
  stick_in_ground?: StickInGround;
  /**
   * Determines if the owner is transported on hit.
   */
  teleport_owner?: boolean;
  thrown_potion_effect?: ThrownPotionEffect;
}
/**
 * The event that is triggered on a hit. See the table below for all definition event parameters.
 */
export interface DefinitionEvent {
  /**
   * The projectile that will be affected by this event.
   */
  affect_projectile?: boolean;
  /**
   * The shooter that will be affected by this event.
   */
  affect_shooter?: boolean;
  /**
   * All entities in the splash area will be affected by this event.
   */
  affect_splash_area?: boolean;
  /**
   * The target will be affected by this event.
   */
  affect_target?: boolean;
  event_trigger?: EventTrigger;
  /**
   * The splash area that will be affected.
   */
  splash_area?: number;
}
/**
 * An area of entities that is frozen to block on hits. Has shape of either sphere or cube, snap_to_block boolean ,and size decimal properties.
 */
export interface FreezeOnHit {
  shape?: Shape;
  /**
   * If true, the area will snap to the nearest block.
   */
  snap_to_block?: boolean;
  /**
   * The size of the area that is frozen.
   */
  size?: number;
}
/**
 * Grants XP on hit. Has minXP for minimum XP granted, maxXp for maximum, or simply flat xp properties.
 */
export interface GrantXP {
  /**
   * The minimum XP granted.
   */
  minXP?: number;
  /**
   * The maximum XP granted.
   */
  maxXP?: number;
}
/**
 * Determines if the owner of the entity is hurt on hit. Contains decimal owner_damage, knockback boolean, and ignite boolean.
 */
export interface HurtOwner {
  /**
   * The amount of damage the owner will take.
   */
  owner_damage?: number;
  /**
   * If true, the owner will be knocked back.
   */
  knockback?: boolean;
  /**
   * If true, the owner will be set on fire.
   */
  ignite?: boolean;
}
/**
 * Defines the damage that an entity may receive on being hit by this projectile. See the table below for all impact_damage parameters.
 */
export interface ImpactDamage {
  /**
   * Determines if the struck object is set on fire.
   */
  catch_fire?: boolean;
  /**
   * Whether lightning can be channeled through hte weapon.
   */
  channeling?: boolean;
  /**
   * The damage dealt on impact.
   */
  damage?: number;
  /**
   * Projectile is removed on hit.
   */
  destroy_on_hit?: boolean;
  /**
   * If true, then the hit must cause damage to destroy the projectile.
   */
  destroy_on_hit_requires_damage?: boolean;
  /**
   * The identifier of an entity that can be hit.
   */
  filter?: string;
  /**
   * If true, the projectile will knock back the entity it hits.
   */
  knockback?: boolean;
  /**
   * Maximum critical damage.
   */
  max_critical_damage?: number;
  /**
   * Minimum critical damage.
   */
  min_critical_damage?: number;
  /**
   * How much the base damage is multiplied.
   */
  power_multiplier?: number;
  /**
   * If true, damage will be randomized based on damage and speed.
   */
  semi_random_diff_damage?: boolean;
  /**
   * If true, then the hit must cause damage to update the last hurt property.
   */
  set_last_hurt_requires_damage?: boolean;
}
/**
 * The target receives a mob effect. See the table below for all mob_effect parameters.
 */
export interface MobEffect2 {
  /**
   * If true, a mob will spawn that is not hostile, like the bat entity in Minecraft.
   */
  ambient?: boolean;
  /**
   * The multiplier of the amplification of this effect.
   */
  amplifier?: number;
  /**
   * The effect's duration.
   */
  duration?: number;
  /**
   * The effect's duration on easy mode.
   */
  durationeasy?: number;
  /**
   * The effect's duration on hard mode.
   */
  durationhard?: number;
  /**
   * The effect's duration on normal mode.
   */
  durationnormal?: number;
  /**
   * The identifier of the mob entity to affect.
   */
  effect?: string;
  /**
   * Does the entity's look change.
   */
  visible?: boolean;
}
/**
 * The particles that spawn on hit. See the table below for all particle_on_hit parameters.
 */
export interface ParticleOnHit {
  /**
   * The number of particles to spawn.
   */
  num_particles?: number;
  /**
   * If true, spawns particles on an entity hit.
   */
  on_entity_hit?: boolean;
  /**
   * If true, spawns particles on any other hit.
   */
  on_other_hit?: boolean;
  /**
   * The id of the particle to spawn on hit.
   */
  particle_type?: string;
}
/**
 * Removes the projectile.
 */
export interface RemoveOnHit {
  [k: string]: unknown;
}
/**
 * Contains information on the chance of spawning an entity on hit. See parameters below.
 */
export interface SpawnChance {
  /**
   * The amount of new entities spawned.
   */
  first_spawn_count?: number;
  /**
   * The chance that a spawn occurs when a projectile hits the entity.
   */
  first_spawn_percent_chance?: number;
  /**
   * The chance that a first spawn occurs when a projectile hits the entity.
   */
  first_spawn_chance?: number;
  /**
   * The chance that a second spawn occurs when a projectile hits the entity.
   */
  second_spawn_chance?: number;
  /**
   * The amount of new entities spawned in teh second spawn.
   */
  second_spawn_count?: number;
  /**
   * Determines if a baby spawns.
   */
  spawn_baby?: boolean;
  /**
   * The entity that will spawn.
   */
  spawn_definition?: string;
}
/**
 * Decides if the object sticks in ground and contains shake_time integer parameter to determine how long it will shake.
 */
export interface StickInGround {
  [k: string]: unknown;
}
/**
 * Creates a splash area for effects caused by a thrown potion.
 */
export interface ThrownPotionEffect {
  [k: string]: unknown;
}
/**
 * Sets the distance through which the entity can push through.
 */
export interface PushThrough {
  /**
   * The value of the entity's push-through, in blocks.
   */
  value?: number;
}
/**
 * Defines what can push an entity between other entities and pistons.
 */
export interface Pushable {
  /**
   * Whether the entity can be pushed by other entities.
   */
  is_pushable?: boolean;
  /**
   * Whether the entity can be pushed by pistons safely.
   */
  is_pushable_by_piston?: boolean;
}
/**
 * Attempts to trigger a raid at the entity's location.
 */
export interface RaidTrigger {
  triggered_event?: TriggeredEvent;
}
/**
 * Defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail.
 */
export interface RailMovement {
  /**
   * Maximum speed that this entity will move at when on the rail.
   */
  max_speed?: number;
}
/**
 * Defines the behavior of the entity when the rail gets activated or deactivated.
 */
export interface RailSensor {
  /**
   * If true, on tick this entity will trigger its on_deactivate behavior.
   */
  check_block_types?: boolean;
  /**
   * If true, this entity will eject all of its riders when it passes over an activated rail.
   */
  eject_on_activate?: boolean;
  /**
   * If true, this entity will eject all of its riders when it passes over a deactivated rail.
   */
  eject_on_deactivate?: boolean;
  on_activate?: OnActivate;
  on_deactivate?: OnDeactivate;
  /**
   * If true, command blocks will start ticking when passing over an activated rail.
   */
  tick_command_block_on_activate?: boolean;
  /**
   * If false, command blocks will stop ticking when passing over a deactivated rail.
   */
  tick_command_block_on_deactivate?: boolean;
}
/**
 * Event to call when the rail is activated.
 */
export interface OnActivate {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when the rail is deactivated.
 */
export interface OnDeactivate {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines the ravager's response to their melee attack being blocked.
 */
export interface RavagerBlocked {
  /**
   * The strength with which blocking entities should be knocked back.
   */
  knockback_strength?: number;
  reaction_choices?: ReactionChoices;
}
/**
 * Determines whether this entity can be ridden. Allows specifying the different seat positions and quantity.
 */
export interface Rideable {
  /**
   * The seat that designates the driver of the entity.
   */
  controlling_seat?: number;
  /**
   * If true, this entity can't be interacted with if the entity interacting with it is crouching.
   */
  crouching_skip_interact?: boolean;
  family_types?: FamilyTypes;
  /**
   * The text to display when the player can interact with the entity when playing with Touch-screen controls.
   */
  interact_text?: string;
  /**
   * If true, this entity will pull in entities that are in the correct family_types into any available seats.
   */
  pull_in_entities?: boolean;
  /**
   * If true, this entity will be picked when looked at by the rider.
   */
  rider_can_interact?: boolean;
  /**
   * The number of entities that can ride this entity at the same time.
   */
  seat_count?: number;
  seats?: Seats;
}
export interface SeatsSpec {
  /**
   * Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit
   */
  lock_rider_rotation?: number;
  /**
   * Defines the maximum number of riders that can be riding this entity for this seat to be valid.
   */
  max_rider_count?: number;
  /**
   * Defines the minimum number of riders that need to be riding this entity before this seat can be used.
   */
  min_rider_count?: number;
  position?: Offset1;
  rotate_rider_by?: Default3;
}
export interface SeatsSpec1 {
  /**
   * Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit
   */
  lock_rider_rotation?: number;
  /**
   * Defines the maximum number of riders that can be riding this entity for this seat to be valid.
   */
  max_rider_count?: number;
  /**
   * Defines the minimum number of riders that need to be riding this entity before this seat can be used.
   */
  min_rider_count?: number;
  position?: Offset1;
  rotate_rider_by?: Default3;
}
/**
 * Defines the entity's size interpolation based on the entity's age.
 */
export interface ScaleByAge {
  /**
   * Ending scale of the entity when it's fully grown.
   */
  end_scale?: number;
  /**
   * Initial scale of the newborn entity.
   */
  start_scale?: number;
}
/**
 * Sets the entity's visual size.
 */
export interface Scale2 {
  /**
   * The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger
   */
  value?: number;
}
/**
 * fires off scheduled mob events at time of day events.
 */
export interface Scheduler {
  /**
   * The minimum the scheduler will be delayed.
   */
  min_delay_secs?: number;
  /**
   * The maximum the scheduler will be delayed.
   */
  max_delay_secs?: number;
  scheduled_events?: ScheduledEvents;
}
/**
 * A filter and event pair. The event runs when the filter criteria succeeds
 */
export interface ScheduledEvents1 {
  filters?: Filters2;
  event?: Event;
}
/**
 * Defines a list of items the mob wants to share or pick up. Each item must have the following parameters:
 */
export interface Shareables {
  /**
   * A bucket for all other items in the game. Note this category is always least priority items.
   */
  all_items?: boolean;
  /**
   * Maximum number of this item the mob will hold.
   */
  all_items_max_amount?: number;
  /**
   * Number of this item considered extra that the entity wants to share.
   */
  all_items_surplus_amount?: number;
  /**
   * Number of this item this entity wants to share.
   */
  all_items_want_amount?: number;
  /**
   * List of items that the entity wants to share.
   */
  items?: Item3[];
}
/**
 * An Item that the entity wants to share.
 */
export interface Item3 {
  /**
   * Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an Admire component and an Admire goal.
   */
  admire?: boolean;
  /**
   * Mob will barter for the item after picking it up. For this to work the mob needs to have a Barter component and a Barter goal.
   */
  barter?: boolean;
  /**
   * Determines whether the mob will consume the item or not.
   */
  consume_item?: boolean;
  /**
   * Defines the item this entity wants to craft with the item defined above. Should be an item name.
   */
  craft_into?: string;
  item?: BlockceptionMinecraftItemIdentifier3;
  /**
   * Aux value for the item.
   */
  item_aux?: number;
  /**
   * Maximum number of this item the mob will hold.
   */
  max_amount?: number;
  /**
   * Maximum number of this item the mob will pick up during a single goal tick.
   */
  pickup_limit?: number;
  /**
   * Prioritizes which items the entity prefers. 0 is the highest priority.
   */
  priority?: number;
  /**
   * Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped.
   */
  stored_in_inventory?: boolean;
  /**
   * Number of this item considered extra that the entity wants to share.
   */
  surplus_amount?: number;
  /**
   * Number of this item this entity wants to have.
   */
  want_amount?: number;
  /**
   * Determines whether the mob can only pickup the item and not drop it.
   */
  pickup_only?: boolean;
}
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
 * Defines the entity's `sit` state.
 */
export interface Sittable {
  sit_event?: SitEvent;
  stand_event?: StandEvent;
}
/**
 * Event to run when the entity enters the `sit` state.
 */
export interface SitEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to run when the entity exits the `sit` state.
 */
export interface StandEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Skin ID value. Can be used to differentiate skins, such as base skins for villagers.
 */
export interface SkinId {
  /**
   * The ID of the skin. By convention, 0 is the ID of the base skin
   */
  value?: number;
}
/**
 * Sets the entity's base volume for sound effects.
 */
export interface SoundVolume {
  /**
   * The value of the volume the entity uses for sound effects.
   */
  value?: number;
}
/**
 * Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).
 */
export interface SpawnEntity {
  entities?: Entities;
}
export interface EntitySpawn {
  filters?: Filters20;
  /**
   * Maximum amount of time to randomly wait in seconds before another entity is spawned.
   */
  max_wait_time?: number;
  /**
   * Minimum amount of time to randomly wait in seconds before another entity is spawned.
   */
  min_wait_time?: number;
  /**
   * The number of entities of this type to spawn each time that this triggers.
   */
  num_to_spawn?: number;
  /**
   * If true, this the spawned entity will be leashed to the parent.
   */
  should_leash?: boolean;
  /**
   * If true, this component will only ever spawn the specified entity once.
   */
  single_use?: boolean;
  /**
   * Identifier of the entity to spawn, leave empty to spawn the item defined above instead.
   */
  spawn_entity?: string;
  /**
   * Event to call when the entity is spawned.
   */
  spawn_event?: string;
  spawn_item?: SpawnItem;
  /**
   * Method to use to spawn the entity.
   */
  spawn_method?: string;
  spawn_sound?: SpawnSound;
}
export interface EntitySpawn1 {
  filters?: Filters20;
  /**
   * Maximum amount of time to randomly wait in seconds before another entity is spawned.
   */
  max_wait_time?: number;
  /**
   * Minimum amount of time to randomly wait in seconds before another entity is spawned.
   */
  min_wait_time?: number;
  /**
   * The number of entities of this type to spawn each time that this triggers.
   */
  num_to_spawn?: number;
  /**
   * If true, this the spawned entity will be leashed to the parent.
   */
  should_leash?: boolean;
  /**
   * If true, this component will only ever spawn the specified entity once.
   */
  single_use?: boolean;
  /**
   * Identifier of the entity to spawn, leave empty to spawn the item defined above instead.
   */
  spawn_entity?: string;
  /**
   * Event to call when the entity is spawned.
   */
  spawn_event?: string;
  spawn_item?: SpawnItem;
  /**
   * Method to use to spawn the entity.
   */
  spawn_method?: string;
  spawn_sound?: SpawnSound;
}
/**
 * Defines what mob effects to add and remove to the entity when adding this component.
 */
export interface SpellEffects {
  add_effects?: AddEffects;
  remove_effects?: RemoveEffects;
}
/**
 * Defines the entity's strength to carry items.
 */
export interface Strength {
  /**
   * The maximum strength of this entity.
   */
  max?: number;
  /**
   * The initial value of the strength.
   */
  value?: number;
}
/**
 * Allows this entity to remember suspicious locations.
 */
export interface SuspectTracking {}
/**
 * Defines the rules for a mob to be tamed by the player.
 */
export interface Tameable {
  /**
   * The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%
   */
  probability?: number;
  tame_event?: TameEvent;
  tame_items?: TameItems;
}
/**
 * Event to run when this entity becomes tamed.
 */
export interface TameEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
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
  feed_items?: FeedItems1;
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
  tame_event?: TameEvent1;
}
/**
 * The list of items that this entity dislikes and will cause it to get angry if used while untamed.
 */
export interface AutoRejectItems1 {
  item?: BlockceptionMinecraftItemDescriptor3;
  [k: string]: unknown;
}
/**
 * The list of items that this entity dislikes and will cause it to get angry if used while untamed.
 */
export interface AutoRejectItems2 {
  item?: BlockceptionMinecraftItemDescriptor3;
  [k: string]: unknown;
}
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export interface FeedItems2 {
  item?: Item4;
  /**
   * The amount of temper this entity gains when fed this item.
   */
  temper_mod?: number;
  [k: string]: unknown;
}
/**
 * The list of items that can be used to increase the entity's temper and speed up the taming process.
 */
export interface FeedItems3 {
  item?: Item4;
  /**
   * The amount of temper this entity gains when fed this item.
   */
  temper_mod?: number;
  [k: string]: unknown;
}
/**
 * Event that triggers when the entity becomes tamed.
 */
export interface TameEvent1 {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines the entity's range within which it can see or sense other entities to target them.
 */
export interface TargetNearbySensor {
  /**
   * Whether the other entity needs to be visible to trigger `inside` events.
   */
  must_see?: boolean;
  /**
   * Maximum distance in blocks that another entity will be considered in the `inside` range.
   */
  inside_range?: number;
  on_inside_range?: OnInsideRange;
  on_outside_range?: OnOutsideRange;
  on_vision_lost_inside_range?: OnVisionLostInsideRange;
  /**
   * Maximum distance in blocks that another entity will be considered in the `outside` range.
   */
  outside_range?: number;
}
/**
 * Event to call when an entity gets in the inside range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export interface OnInsideRange {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when an entity gets in the outside range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export interface OnOutsideRange {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Event to call when an entity exits visual range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export interface OnVisionLostInsideRange {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines an entity's teleporting behavior.
 */
export interface Teleport {
  /**
   * Modifies the chance that the entity will teleport if the entity is in darkness.
   */
  dark_teleport_chance?: number;
  /**
   * Modifies the chance that the entity will teleport if the entity is in daylight.
   */
  light_teleport_chance?: number;
  /**
   * Maximum amount of time in seconds between random teleports.
   */
  max_random_teleport_time?: number;
  /**
   * Minimum amount of time in seconds between random teleports.
   */
  min_random_teleport_time?: number;
  random_teleport_cube?: RandomTeleportCube;
  /**
   * If true, the entity will teleport randomly.
   */
  random_teleports?: boolean;
  /**
   * Maximum distance the entity will teleport when chasing a target.
   */
  target_distance?: number;
  /**
   * The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%
   */
  target_teleport_chance?: number;
}
/**
 * Defines if the entity ticks the world and the radius around it to tick.
 */
export interface TickWorld {
  /**
   * The distance at which the closest player has to be before this entity despawns. This option will be ignored if never_despawn is true. Min: 128 blocks.
   */
  distance_to_players?: number;
  /**
   * If true, this entity will not despawn even if players are far away. If false, distance_to_players will be used to determine when to despawn.
   */
  never_despawn?: boolean;
  /**
   * The area around the entity to tick. Default: 2. Allowed range: 2-6.
   */
  radius?: number;
}
/**
 * Adds a timer after which an event will fire.
 */
export interface Timer {
  /**
   * If true, the timer will restart every time after it fires.
   */
  looping?: boolean;
  /**
   * If true, the amount of time on the timer will be random between the Minimum and Maximum values specified in time.
   */
  randomInterval?: boolean;
  time?: Time;
  time_down_event?: TimeDownEvent;
  random_time_choices?: RandomTimeChoices;
}
/**
 * Event to fire when the time on the timer runs out.
 */
export interface TimeDownEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time.
 */
export interface RandomTimeChoices1 {
  /**
   * The weight on how likely this section is to trigger.
   */
  weight?: number;
  /**
   * The value in seconds that would be used if this section was picked.
   */
  value?: number;
}
/**
 * Resupplies an entity's trade.
 */
export interface TradeResupply {}
/**
 * Defines this entity's ability to trade with players.
 */
export interface TradeTable {
  /**
   * Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1.
   */
  convert_trades_economy?: boolean;
  /**
   * Name to be displayed while trading with this entity.
   */
  display_name?: string;
  /**
   * Used to determine if trading with entity opens the new trade screen.
   */
  new_screen?: boolean;
  /**
   * Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades.
   */
  persist_trades?: boolean;
  /**
   * File path relative to the resource pack root for this entity's trades.
   */
  table?: string;
}
/**
 * Defines the entity's trail to carry items.
 */
export interface Trail {
  /**
   * The type of block you wish to be spawned by the entity as it move about the world. Solid blocks may not be spawned at an offset of ().
   */
  block_type?: string;
  spawn_filter?: Filters21;
  spawn_offset?: SpawnOffset;
}
/**
 * Defines an entity's transformation from the current definition into another
 */
export interface Transformation {
  add?: Add;
  begin_transform_sound?: BeginTransformSound;
  delay?: Delay;
  /**
   * Cause the entity to drop all equipment upon transformation.
   */
  drop_equipment?: boolean;
  /**
   * Cause the entity to drop all items in inventory upon transformation.
   */
  drop_inventory?: boolean;
  /**
   * Entity Definition that this entity will transform into.
   */
  into?: string;
  /**
   * If this entity has trades and has leveled up, it should maintain that level after transformation.
   */
  keep_level?: boolean;
  /**
   * If this entity is owned by another entity, it should remain owned after transformation.
   */
  keep_owner?: boolean;
  /**
   * Cause the entity to keep equipment after going through transformation.
   */
  preserve_equipment?: boolean;
  transformation_sound?: TransformationSound;
}
/**
 * List of components to add to the entity after the transformation.
 */
export interface Add {
  /**
   * Names of component groups to add.
   */
  component_groups?: string[];
}
/**
 * Allows this entity to trust multiple players.
 */
export interface Trust {}
/**
 * Defines the rules for a mob to trust players.
 */
export interface Trusting {
  /**
   * The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%
   */
  probability?: number;
  trust_event?: TrustEvent;
  trust_items?: TrustItems;
}
/**
 * Event to run when this entity becomes trusting.
 */
export interface TrustEvent {
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
/**
 * Defines the families this entity belongs to.
 */
export interface TypeFamily {
  family: Family;
}
/**
 * Defines the speed with which an entity can move through water.
 */
export interface UnderwaterMovement {
  /**
   * Movement speed of the entity under water.
   */
  value?: number;
}
/**
 * Entities with this component will have a maximum auto step height that is different depending on wether they are on a block that prevents jumping. Incompatible with "runtime_identifier": "minecraft:horse".
 */
export interface VariableMaxAutoStep {
  /**
   * The maximum auto step height when on any other block.
   */
  base_value?: number;
  /**
   * The maximum auto step height when on a block that prevents jumping.
   */
  jump_prevented_value?: number;
}
/**
 * Used to differentiate the component group of a variant of an entity from others (e.g. ocelot, villager) Parameters
 */
export interface Variant {
  /**
   * The ID of the variant. By convention, 0 is the ID of the base entity
   */
  value: number;
}
/**
 * Vibrations emitted by this entity will be ignored.
 */
export interface VibrationDamper {}
/**
 * This entity will respond to vibrations.
 */
export interface VibrationListener {}
/**
 * Sets the speed multiplier for this entity's walk animation speed.
 */
export interface WalkAnimationSpeed {
  /**
   * The higher the number, the faster the animation for walking plays. A value of 1.0 means normal speed, while 2.0 means twice as fast
   */
  value?: number;
}
/**
 * Sets that this entity wants to become a jockey.
 */
export interface WantsJockey {}
/**
 * Defines the speed with which an entity can move through water.
 */
export interface WaterMovement {
  /**
   * Drag factor to determine movement speed when in water.
   */
  drag_factor?: number;
}
/**
 * Enables the mob to admire items that have been configured as admirable. Must be used in combination with the admire_item component.
 */
export interface AdmireItem1 {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  admire_item_sound?: AdmireItemSound;
  on_admire_item_start?: Event1;
  on_admire_item_stop?: Event2;
  sound_interval?: SoundInterval2;
}
/**
 * Allows this entity to avoid certain blocks.
 */
export interface AvoidBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Should start tick interval.
   */
  tick_interval?: number;
  /**
   * Maximum distance to look for a block in xz.
   */
  search_range?: number;
  /**
   * Maximum distance to look for a block in y.
   */
  search_height?: number;
  /**
   * Modifier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster.
   */
  sprint_speed_modifier?: number;
  target_selection_method?: TargetSelectionMethod;
  target_blocks?: TargetBlocks;
  avoid_block_sound?: AvoidBlockSound;
  /**
   * Modifier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.
   */
  walk_speed_modifier?: number;
  on_escape?: WalkSpeedModifier;
  sound_interval?: SoundInterval3;
}
/**
 * Allows the entity to run away from other entities that meet the criteria specified.
 */
export interface AvoidMobType {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  avoid_mob_sound?: AvoidMobSound;
  /**
   * The next target position the entity chooses to avoid another entity will be chosen within this XZ Distance.
   */
  avoid_target_xz?: number;
  /**
   * The next target position the entity chooses to avoid another entity will be chosen within this Y Distance.
   */
  avoid_target_y?: number;
  /**
   * Whether or not to ignore direct line of sight while this entity is running away from other specified entities.
   */
  ignore_visibilty?: boolean;
  /**
   * Maximum distance to look for an avoid target for the entity.
   */
  max_dist?: number;
  /**
   * How many blocks away from its avoid target the entity must be for it to stop fleeing from the avoid target.
   */
  max_flee?: number;
  /**
   * Percent chance this entity will stop avoiding another entity based on that entity's strength, where 1.0 = 100%.
   */
  probability_per_strength?: number;
  /**
   * Determine if we should remove target when fleeing or not.
   */
  remove_target?: boolean;
  /**
   * How many blocks within range of its avoid target the entity must be for it to begin sprinting away from the avoid target.
   */
  sprint_distance?: number;
  /**
   * Multiplier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster.
   */
  sprint_speed_multiplier?: number;
  /**
   * Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.
   */
  walk_speed_multiplier?: number;
  /**
   * If true, visbility between this entity and the mob type will not be checked.
   */
  ignore_visibility?: boolean;
  entity_types?: EntityTypes;
  on_escape_event?: Event3;
  sound_interval?: SoundInterval4;
}
/**
 * The entity type.
 */
export interface EntityType {
  filters?: Filters2;
  /**
   * Maximum distance this mob can be away to be a valid choice.
   */
  max_dist?: number;
  /**
   * UNDOCUMENTED.
   */
  max_height?: number;
  /**
   * UNDOCUMENTED.
   */
  max_flee?: number;
  /**
   * UNDOCUMENTED.
   */
  priority?: number;
  /**
   * UNDOCUMENTED.
   */
  check_if_outnumbered?: number;
  /**
   * If true, the mob has to be visible to be a valid choice.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   */
  must_see_forget_duration?: number;
  /**
   * If true, the mob will stop being targeted if it stops meeting any conditions.
   */
  reevaluate_description?: boolean;
  /**
   * Multiplier for the running speed. A value of 1.0 means the speed is unchanged
   */
  sprint_speed_multiplier?: number;
  /**
   * Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
   */
  walk_speed_multiplier?: number;
}
/**
 * Enables the mob to barter for items that have been configured as barter currency. Must be used in combination with the barter component
 */
export interface Barter1 {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows this mob to look at and follow the player that holds food they like.
 */
export interface Beg {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  items?: Properties2;
  /**
   * Distance in blocks the mob will beg from.
   */
  look_distance?: number;
  look_time?: LookTime;
}
/**
 * Allows this mob to break doors.
 */
export interface BreakDoor {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Allows this mob to breed with other mobs.
 */
export interface Breed {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Allows this entity to celebrate surviving a raid by shooting fireworks.
 */
export interface CelebrateSurvive {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  fireworks_interval?: FireworksInterval;
  /**
   * The duration in seconds that the celebration lasts for.
   */
  duration?: number;
  on_celebration_end_event?: Event4;
}
/**
 * Allows this entity to celebrate surviving a raid by making celebration sounds and jumping.
 */
export interface Celebrate {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  celebration_sound?: CelebrationSound;
  /**
   * The duration in seconds that the celebration lasts for.
   */
  duration?: number;
  jump_interval?: JumpInterval;
  on_celebration_end_event?: Trigger4;
  sound_interval?: SoundInterval5;
}
/**
 * Allows this entity to damage a target by using a running attack.
 */
export interface ChargeAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * A charge attack cannot start if the entity is farther than this distance to the target.
   */
  max_distance?: number;
  /**
   * A charge attack cannot start if the entity is closer than this distance to the target.
   */
  min_distance?: number;
  /**
   * Percent chance this entity will start a charge attack, if not already attacking (1.0 = 100%)
   */
  success_rate?: number;
}
/**
 * Allows an entity to charge and use their held item.
 */
export interface ChargeHeldItem {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  items?: Items1;
}
/**
 * Causes an entity to circle around an anchor point placed near a point or target.
 */
export interface CircleAroundAnchor {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  radius_range?: RadiusRange;
  /**
   * A random value to determine when to increase the size of the radius up to the maximum. This has a 1/value chance every tick to do so.
   */
  radius_change_chance?: number;
  height_above_target_range?: HeightAboveTargetRange;
  height_offset_range?: HeightOffsetRange;
  /**
   * A random value to determine when to change the height of the mob from the anchor point. This has a 1/value chance every tick to do so.
   */
  height_change_chance?: number;
  /**
   * Maximum distance from the anchor-point in which this entity considers itself to have reached the anchor point. This is to prevent the entity from bouncing back and forth trying to reach a specific spot.
   */
  goal_radius?: number;
  /**
   * The number of blocks to increase the current movement radius by, upon successful `radius_adjustment_chance`. If the current radius increases over the range maximum, the current radius will be set back to the range minimum and the entity will change between clockwise and counter-clockwise movement.
   */
  radius_change?: number;
  /**
   * Percent chance to determine how often to increase the size of the current movement radius around the anchor point. 1 = 100%. `radius_change_chance` is deprecated and has been replaced with `radius_adjustment_chance`.
   */
  radius_adjustment_chance?: number;
  /**
   * Percent chance to determine how often to increase or decrease the current height around the anchor point. 1 = 100%. `height_change_chance` is deprecated and has been replaced with `height_adjustment_chance`.
   */
  height_adjustment_chance?: number;
  /**
   * Number of degrees to change this entity's facing by, when the entity selects its next anchor point.
   */
  angle_change?: number;
}
/**
 * Allows the entity to be controlled by the player using an item in the item_controllable property (required). Also requires the minecraft:movement property, and the minecraft:rideable property. On every tick, the entity will attempt to rotate towards where the player is facing with the control item whilst simultaneously moving forward.
 */
export interface ControlledByPlayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The entity will attempt to rotate to face where the player is facing each tick. The entity will target this percentage of their difference in their current facing angles each tick (from 0.0 to 1.0 where 1.0 = 100%). This is limited by FractionalRotationLimit. A value of 0.0 will result in the entity no longer turning to where the player is facing.
   */
  fractional_rotation?: number;
  /**
   * Limits the total degrees the entity can rotate to face where the player is facing on each tick.
   */
  fractional_rotation_limit?: number;
  /**
   * Speed multiplier of mount when controlled by player.
   */
  mount_speed_multiplier?: number;
}
/**
 * [EXPERIMENTAL BEHAVIOR] Allows the entity to croak at a random time interval with configurable conditions.
 */
export interface Croak {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  duration?: Duration;
  filters?: Filters22;
  interval?: Interval1;
}
/**
 * Allows the mob to target another mob that hurts an entity it trusts.
 */
export interface DefendTrustedTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  aggro_sound?: AggroSound;
  /**
   * Time in seconds between attacks.
   */
  attack_interval?: number;
  /**
   * If true, only entities in this mob's viewing range can be selected as targets.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   */
  must_see_forget_duration?: number;
  on_defend_start?: Event5;
  /**
   * Distance in blocks that the target can be within to launch an attack.
   */
  within_radius?: number;
  entity_types?: EntityTypes1;
  /**
   * Probability that a sound will play.
   */
  sound_chance?: number;
}
/**
 * Allows the entity to stay in a village and defend the village from aggressors. If a player is in bad standing with the village this goal will cause the entity to attack the player regardless of filter conditions.
 */
export interface DefendVillageTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes2;
  /**
   * The entity must be able to reach attacker.
   */
  must_reach?: boolean;
  /**
   * The percentage chance that the entity has to attack aggressors of its village, where 1.0 = 100%.
   */
  attack_chance?: number;
}
/**
 * Allows an entity to attack, while also delaying the damage-dealt until a specific time in the attack animation.
 */
export interface DelayedAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The entity's attack animation will play out over this duration (in seconds). Also controls attack cooldown.
   */
  attack_duration?: number;
  /**
   * Allows the entity to use this attack behavior, only once EVER.
   */
  attack_once?: boolean;
  /**
   * Defines the entity types this entity will attack.
   */
  attack_types?: string;
  /**
   * Cooldown time (in seconds) between attacks.
   */
  cooldown_time?: number;
  /**
   * The percentage into the attack animation to apply the damage of the attack (1.0 = 100%).
   */
  hit_delay_pct?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary".
   */
  inner_boundary_time_increase?: number;
  /**
   * Unused. No effect on "minecraft:behavior.melee_attack".
   */
  max_dist?: number;
  /**
   * Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
   */
  max_path_time?: number;
  /**
   * Field of view (in degrees) when using the sensing component to detect an attack target.
   */
  melee_fov?: number;
  /**
   * Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
   */
  min_path_time?: number;
  on_attack?: Trigger5;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary".
   */
  outer_boundary_time_increase?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
   */
  path_fail_time_increase?: number;
  /**
   * Distance at which to increase attack path recalculation by "inner_boundary_tick_increase".
   */
  path_inner_boundary?: number;
  /**
   * Distance at which to increase attack path recalculation by "outer_boundary_tick_increase".
   */
  path_outer_boundary?: number;
  /**
   * This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval".
   */
  random_stop_interval?: number;
  /**
   * Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
   */
  reach_multiplier?: number;
  /**
   * Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
   */
  require_complete_path?: boolean;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Unused. No effect on "minecraft:behavior.melee_attack".
   */
  target_dist?: number;
  /**
   * Allows the entity to track the attack target, even if the entity has no sensing.
   */
  track_target?: boolean;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
}
/**
 * [EXPERIMENTAL BEHAVIOR] Activates the `DIGGING` actor flag during the specified duration. Currently only Warden can use the Dig goal
 */
export interface Dig {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, this behavior can run when this entity is named. Otherwise not.
   */
  allow_dig_when_named?: boolean;
  /**
   * Indicates that the actor should start digging when it sees daylight.
   */
  digs_in_daylight?: boolean;
  /**
   * Goal duration in seconds.
   */
  duration?: number;
  /**
   * The minimum idle time in seconds between the last detected disturbance to the start of digging.
   */
  idle_time?: number;
  /**
   * If true, finding new suspicious locations count as disturbances that may delay the start of this goal.
   */
  suspicion_is_disturbance?: boolean;
  /**
   * If true, vibrations count as disturbances that may delay the start of this goal.
   */
  vibration_is_disturbance?: boolean;
}
/**
 * Allows the mob to open and close doors.
 */
export interface DoorInteract {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows this entity to attack a player by charging at them. The player is chosen by the "minecraft:behavior.dragonscanning". Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonchargeplayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The speed this entity moves when this behavior has started or while it's active.
   */
  active_speed?: number;
  /**
   * If the dragon is outside the "target_zone" for longer than "continue_charge_threshold_time" seconds, the charge is canceled.
   */
  continue_charge_threshold_time?: number;
  /**
   * The speed this entity moves while this behavior is not active.
   */
  flight_speed?: number;
  target_zone?: TargetZone;
  /**
   * The speed at which this entity turns while using this behavior.
   */
  turn_speed?: number;
}
/**
 * Controls the entity's death state and animation. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragondeath {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows this entity to use a flame-breath attack. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonflaming {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time (in seconds), after roar, to breath flame.
   */
  cooldown_time?: number;
  /**
   * Time (in seconds), after roar, to breath flame.
   */
  flame_time?: number;
  /**
   * Number of ground flame-breath attacks to use before flight-takeoff.
   */
  ground_flame_count?: number;
  /**
   * Time (in seconds) to roar, before breathing flame.
   */
  roar_time?: number;
}
/**
 * Allows the Dragon to fly around in a circle around the center podium. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonholdingpattern {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the Dragon to stop flying and transition into perching mode. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonlanding {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows an entity to look around for a player to attack while in perch mode. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonscanning {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows this entity to fly around looking for a player to shoot fireballs at. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragonstrafeplayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The speed this entity moves when this behavior has started or while it's active.
   */
  active_speed?: number;
  /**
   * Maximum distance of this entity's fireball attack while strafing.
   */
  fireball_range?: number;
  /**
   * The speed this entity moves while this behavior is not active.
   */
  flight_speed?: number;
  /**
   * Percent chance to to switch this entity's strafe direction between clockwise and counterclockwise. Switch direction chance occurs each time a new target is chosen (1.0 = 100%).
   */
  switch_direction_probability?: number;
  /**
   * Time (in seconds) the target must be in fireball range, and in view [ie, no solid terrain in-between the target and this entity], before a fireball can be shot.
   */
  target_in_range_and_in_view_time?: number;
  target_zone?: TargetZone1;
  /**
   * The speed at which this entity turns while using this behavior.
   */
  turn_speed?: number;
  /**
   * The target must be within "view_angle" degrees of the dragon's current rotation before a fireball can be shot.
   */
  view_angle?: number;
}
/**
 * Allows an entity to leave perch mode and go back to flying around. Note: This behavior can only be used by the ender_dragon entity type.
 */
export interface Dragontakeoff {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to drink milk based on specified environment conditions.
 */
export interface DrinkMilk {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time (in seconds) that the goal is on cooldown before it can be used again.
   */
  cooldown_seconds?: number;
  filters?: Filters23;
}
/**
 * Allows the mob to drink potions based on specified environment conditions.
 */
export interface DrinkPotion {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  speed_modifier?: SpeedModifier;
  potions?: Potions;
}
/**
 * A potions that this entity can drink.
 */
export interface Potions1 {
  /**
   * The registry ID of the potion to use.
   */
  id: number;
  /**
   * The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use.
   */
  chance: number;
  filters: Filters24;
}
/**
 * Allows the entity to move toward a target, and drop an item near the target. This goal requires a "minecraft:navigation" to execute.
 */
export interface DropItemFor {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  entity_types?: EntityTypes3;
  /**
   * Total time that the goal is on cooldown before it can be used again.
   */
  cooldown?: number;
  /**
   * The percent chance the entity will drop an item when using this goal.
   */
  drop_item_chance?: number;
  /**
   * Distance in blocks within the entity considers it has reached it's target position.
   */
  goal_radius?: number;
  /**
   * The loot table that contains the possible loot the entity can drop with this goal.
   */
  loot_table?: string;
  /**
   * The maximum height the entities head will look at when dropping the item. The entity will always be looking at its target.
   */
  max_head_look_at_height?: number;
  /**
   * If the target position is farther away than this distance on any tick, the entity will teleport to the target position.
   */
  minimum_teleport_distance?: number;
  /**
   * The preferred distance the entity tries to be from the target it is dropping an item for.
   */
  offering_distance?: number;
  on_drop_attempt?: Trigger6;
  /**
   * The number of blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * The Height in blocks the entity will search within to find a valid target position.
   */
  search_height?: number;
  /**
   * The distance in blocks the entity will search within to find a valid target position.
   */
  search_range?: number;
  /**
   * The numbers of seconds that will pass before the dropped entity can be picked up from the ground.
   */
  seconds_before_pickup?: number;
  target_range?: TargetRange;
  teleport_offset?: TeleportOffset;
  time_of_day_range?: TimeOfDayRange;
}
/**
 * Allows the entity to consume a block, replace the eaten block with another block, and trigger an event as a result.
 */
export interface EatBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  on_eat?: Trigger7;
  success_chance?: SuccesChance;
  /**
   * The amount of time (in seconds) it takes for the block to be eaten upon a successful eat attempt.
   */
  time_until_eat?: number;
  eat_and_replace_block_pairs?: EatAndReplaceBlockPairs;
}
/**
 * The block to eat and the block to replace it with.
 */
export interface EatAndReplaceBlockPair {
  eat_block?: Block2;
  replace_block?: ReplaceBlock;
  [k: string]: unknown;
}
/**
 * If the mob is carrying a food item, the mob will eat it and the effects will be applied to the mob.
 */
export interface EatCarriedItem {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time in seconds the mob should wait before eating the item.
   */
  delay_before_eating?: number;
}
/**
 * [EXPERIMENTAL BEHAVIOR] Allows the entity to eat a specified Mob.
 */
export interface EatMob {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Sets the time in seconds the eat animation should play for.
   */
  eat_animation_time?: number;
  eat_mob_sound?: EatMobSound;
  /**
   * The loot table for loot to be dropped when eating a mob.
   */
  loot_table?: string;
  /**
   * Sets the force which the mob-to-be-eaten is pulled towards the eating mob.
   */
  pull_in_force?: number;
  /**
   * Sets the desired distance to be reached before eating the mob.
   */
  reach_mob_distance?: number;
  /**
   * Sets the entity's speed when running toward the target.
   */
  run_speed?: number;
}
/**
 * Allows the enderman to drop a block they are carrying. Can only be used by Endermen.
 */
export interface EndermanLeaveBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the enderman to take a block and carry it around. Can only be used by Endermen.
 */
export interface EndermanTakeBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * The entity puts on the desired equipment.
 */
export interface EquipItem1 {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the entity to first travel to a random point on the outskirts of the village, and then explore random points within a small distance. This goal requires "minecraft:dweller" and "minecraft:navigation" to execute.
 */
export interface ExploreOutskirts {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  dist_from_boundary?: DistFromBoundary;
  /**
   * Total distance in blocks the the entity will explore beyond the village bounds when choosing its travel point.
   */
  explore_dist?: number;
  /**
   * This is the maximum amount of time an entity will attempt to reach it's travel point on the outskirts of the village before the goal exits.
   */
  max_travel_time?: number;
  /**
   * The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the minimum wait time. This value is also the total amount of time the entity will explore random points before the goal stops.
   */
  max_wait_time?: number;
  /**
   * The entity must be within this distance for it to consider it has successfully reached its target.
   */
  min_dist_from_target?: number;
  /**
   * The minimum perimeter of the village required to run this goal.
   */
  min_perimeter?: number;
  /**
   * The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the maximum wait time.
   */
  min_wait_time?: number;
  /**
   * A new explore point will randomly be chosen within this XZ distance of the current target position when navigation has finished and the wait timer has elapsed.
   */
  next_xz?: number;
  /**
   * A new explore point will randomly be chosen within this Y distance of the current target position when navigation has finished and the wait timer has elapsed.
   */
  next_y?: number;
  /**
   * Each new explore point will be chosen on a random interval between the minimum and the maximum wait time, divided by this value. This does not apply to the first explore point chosen when the goal runs.
   */
  timer_ratio?: number;
}
/**
 * Allows the mob to search within an area for a growable crop block. If found, the mob will use any available fertilizer in their inventory on the crop. This goal will not execute if the mob does not have a fertilizer item in its inventory.
 */
export interface FertilizeFarmBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached it's target position.
   */
  goal_radius?: number;
  /**
   * The maximum number of times the mob will use fertilzer on the target block.
   */
  max_fertilizer_usage?: number;
  /**
   * The maximum amount of time in seconds that the goal can take before searching again. The time is chosen between 0 and this number.
   */
  search_cooldown_max_seconds?: number;
  /**
   * The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * The Height in blocks the mob will search within to find a valid target position.
   */
  search_height?: number;
  /**
   * The distance in blocks the mob will search within to find a valid target position.
   */
  search_range?: number;
}
/**
 * Allows the mob to seek shade.
 */
export interface FindCover {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
}
/**
 * Allows the mob to look around for another mob to ride atop it.
 */
export interface FindMount {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, the mob will not go into water blocks when going towards a mount.
   */
  avoid_water?: boolean;
  /**
   * This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance
   */
  mount_distance?: number;
  /**
   * Time the mob will wait before starting to move towards the mount.
   */
  start_delay?: number;
  /**
   * If true, the mob will only look for a mount if it has a target.
   */
  target_needed?: boolean;
  /**
   * Distance in blocks within which the mob will look for a mount.
   */
  within_radius?: number;
  /**
   * The number of failed attempts to make before this goal is no longer used.
   */
  max_failed_attempts?: number;
}
/**
 * Allows the mob to move towards the nearest underwater ruin or shipwreck.
 */
export interface FindUnderwaterTreasure {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards.
   */
  search_range?: number;
  /**
   * The distance the mob will move before stopping.
   */
  stop_distance?: number;
}
/**
 * Allows the mob to run away from direct sunlight and seek shade.
 */
export interface FleeSun {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Allows the mob to float around like the Ghast.
 */
export interface FloatWander {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
  /**
   * Height in blocks to add to the selected target position.
   */
  y_offset?: number;
  /**
   * If true, the point has to be reachable to be a valid target.
   */
  must_reach?: boolean;
  /**
   * If true, the mob will randomly pick a new point while moving to the previously selected one.
   */
  random_reselect?: boolean;
  float_duration?: FloatDuration;
}
/**
 * Allows the mob to stay afloat while swimming.
 */
export interface Float {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to follow mobs that are in a caravan.
 */
export interface FollowCaravan {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  entity_types?: EntityTypes4;
  /**
   * Number of entities that can be in the caravan.
   */
  entity_count?: number;
}
/**
 * Allows the mob to follow other mobs.
 */
export interface FollowMob {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The distance in blocks it will look for a mob to follow.
   */
  search_range?: number;
  /**
   * The distance in blocks this mob stops from the mob it is following.
   */
  stop_distance?: number;
}
/**
 * Allows the mob to follow the player that owns them.
 */
export interface FollowOwner {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Specify if the mob can teleport to the player if it is too far away.
   */
  can_teleport?: boolean;
  /**
   * Specify if the mob will follow the owner if it has heard a vibration lately.
   */
  ignore_vibration?: boolean;
  /**
   * The maximum distance in blocks this mob can be from its owner to start following, only used when canTeleport is false.
   */
  max_distance?: number;
  /**
   * The distance in blocks that the owner can be away from this mob before it starts following it.
   */
  start_distance?: number;
  /**
   * The distance in blocks this mob will stop from its owner while following it.
   */
  stop_distance?: number;
}
/**
 * Allows the mob to follow their parent around.
 */
export interface FollowParent {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Allows mob to move towards its current target captain.
 */
export interface FollowTargetCaptain {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Defines the distance in blocks the mob will stay from its target while following.
   */
  follow_distance?: number;
  /**
   * Defines the maximum distance in blocks a mob can get from its target captain before giving up trying to follow it.
   */
  within_radius?: number;
}
/**
 * [EXPERIMENTAL BEHAVIOR] The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.
 */
export interface GoAndGiveItemsToNoteblock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Sets the time an entity should continue delivering items to a noteblock after hearing it.
   */
  listen_time?: number;
  on_item_throw?: OnItemThrow;
  /**
   * Sets the desired distance to be reached before throwing the items towards the block.
   */
  reach_block_distance?: number;
  /**
   * Sets the entity's speed when running toward the block.
   */
  run_speed?: number;
  /**
   * Sets the throw force.
   */
  throw_force?: number;
  throw_sound?: ThrowSound;
  /**
   * Sets the vertical throw multiplier that is applied on top of the throw force in the vertical direction.
   */
  vertical_throw_mul?: number;
}
/**
 * [EXPERIMENTAL BEHAVIOR] The entity will attempt to toss the items from its inventory to its owner.
 */
export interface GoAndGiveItemsToOwner {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  on_item_throw?: Trigger8;
  /**
   * Sets the desired distance to be reached before giving items to owner.
   */
  reach_mob_distance?: number;
  /**
   * Sets the entity's speed when running toward the owner.
   */
  run_speed?: number;
  /**
   * Sets the throw force.
   */
  throw_force?: number;
  throw_sound?: ThrowSound1;
  /**
   * Sets the vertical throw multiplier that is applied on top of the throw force in the vertical direction.
   */
  vertical_throw_mul?: number;
}
/**
 * Allows the mob to move back to the position they were spawned.
 */
export interface GoHome {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  on_home?: OnHome;
  on_failed?: OnFailed;
  /**
   * Distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home.
   */
  calculate_new_path_radius?: number;
}
/**
 * Allows this entity to use a laser beam attack. Can only be used by Guardians and Elder Guardians.
 */
export interface GuardianAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Amount of additional damage dealt from an elder guardian's magic attack.
   */
  elder_extra_magic_damage?: number;
  /**
   * In hard difficulty, amount of additional damage dealt from a guardian's magic attack.
   */
  hard_mode_extra_magic_damage?: number;
  /**
   * Amount of damage dealt from a guardian's magic attack. Magic attack damage is added to the guardian's base attack damage.
   */
  magic_damage?: number;
  /**
   * Guardian attack behavior stops if the target is closer than this distance (doesn't apply to elders).
   */
  min_distance?: number;
  /**
   * Time (in seconds) to wait after starting an attack before playing the guardian attack sound.
   */
  sound_delay_time?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
}
/**
 * Allows the entity to search within an area for farmland with air above it. If found, the entity will replace the air block by planting a seed item from its inventory on the farmland block. This goal requires "minecraft:inventory" and "minecraft:navigation" to execute. This goal will not execute if the entity does not have an item in its inventory.
 */
export interface HarvestFarmBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The maximum amount of time in seconds that the goal can take before searching for the first harvest block. The time is chosen between 0 and this number.
   */
  max_seconds_before_search?: number;
  /**
   * The maximum amount of time in seconds that the goal can take before searching again, after failing to find a a harvest block already. The time is chosen between 0 and this number.
   */
  search_cooldown_max_seconds?: number;
  /**
   * The number of randomly selected blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * The height in blocks the entity will search within to find a valid target position.
   */
  search_height?: number;
  /**
   * The distance in blocks the entity will search within to find a valid target position.
   */
  search_range?: number;
  /**
   * The amount of time in seconds that the goal will cooldown after a successful reap/sow, before it can start again.
   */
  seconds_until_new_task?: number;
}
/**
 * Allows a mob with the hide component to attempt to move to - and hide at - an owned or nearby POI.
 */
export interface Hide1 {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Amount of time in seconds that the mob reacts.
   */
  duration?: number;
  /**
   * Defines what POI type to hide at.
   */
  poi_type?: string;
  /**
   * The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition.
   */
  timeout_cooldown?: number;
}
/**
 * The mob freezes and looks at the mob they are targeting.
 */
export interface HoldGround {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Whether to broadcast out the mob's target to other mobs of the same type.
   */
  broadcast?: boolean;
  /**
   * Range in blocks for how far to broadcast.
   */
  broadcast_range?: number;
  /**
   * Minimum distance the target must be for the mob to run this goal.
   */
  min_radius?: number;
  within_radius_event?: Event6;
}
/**
 * Allows the mob to target another mob that hurts them.
 */
export interface HurtByTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes5;
  /**
   * If true, nearby mobs of the same type will be alerted about the damage.
   */
  alert_same_type?: boolean;
  /**
   * If true, the mob will hurt its owner and other mobs with the same owner as itself.
   */
  hurt_owner?: boolean;
}
/**
 * Allows the mob to inspect bookshelves.
 */
export interface InspectBookshelf {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
   */
  search_count?: number;
  /**
   * The height that the mob will search for bookshelves.
   */
  search_height?: number;
  /**
   * Distance in blocks the mob will look for books to inspect.
   */
  search_range?: number;
}
/**
 * Allows an entity to jump to another random block.
 */
export interface JumpToBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  cooldown_range?: CooldownRange;
  forbidden_blocks?: ForbiddenBlocks;
  /**
   * The maximum velocity with which the mob can jump.
   */
  max_velocity?: number;
  /**
   * The minimum distance (in blocks) from the mob to a block, in order to consider jumping to it.
   */
  minimum_distance?: number;
  /**
   * The minimum length (in blocks) of the mobs path to a block, in order to consider jumping to it.
   */
  minimum_path_length?: number;
  preferred_blocks?: PreferredBlocks;
  /**
   * Chance (between 0.0 and 1.0) that the mob will jump to a preferred block, if in range. Only matters if preferred blocks are defined.
   */
  preferred_blocks_chance?: number;
  /**
   * The scalefactor of the bounding box of the mob while it is jumping.
   */
  scale_factor?: number;
  /**
   * The height (in blocks, in range [2, 15]) of the search box, centered around the mob.
   */
  search_height?: number;
  /**
   * The width (in blocks, in range [2, 15]) of the search box, centered around the mob.
   */
  search_width?: number;
}
/**
 * Allows the mob to perform a damaging knockback that affects all nearby entities.
 */
export interface KnockbackRoar {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The delay after which the knockback occurs (in seconds).
   */
  attack_time?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  damage_filters?: Filters25;
  /**
   * The duration of the roar (in seconds).
   */
  duration?: number;
  /**
   * The damage dealt by the knockback roar.
   */
  knockback_damage?: number;
  /**
   * The strength of the knockback.
   */
  knockback_strength?: number;
  knockback_filters?: Filters26;
  /**
   * The strength of the horizontal knockback.
   */
  knockback_horizontal_strength?: number;
  /**
   * The radius (in blocks) of the knockback effect.
   */
  knockback_range?: number;
  /**
   * The strength of the vertical knockback.
   */
  knockback_vertical_strength?: number;
  /**
   * The maximum height for vertical knockback.
   */
  knockback_height_cap?: number;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
  on_roar_end?: Event7;
}
/**
 * Allows mobs to lay down at times.
 */
export interface LayDown {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * A random value in which the goal can use to pull out of the behavior. This is a 1/interval chance to play the sound
   */
  random_stop_interval?: number;
}
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
  on_lay?: Trigger9;
  /**
   * Height in blocks the mob will look for a target block to move towards.
   */
  search_height?: number;
  /**
   * The distance in blocks it will look for a target block to move towards.
   */
  search_range?: number;
  target_blocks?: TargetBlocks1;
  target_materials_above_block?: TargetMaterialsAboveBlock;
  /**
   * [EXPERIMENTAL] Specifies if the default lay-egg animation should be played when the egg is placed or not.
   */
  use_default_animation?: boolean;
}
/**
 * Allows monsters to jump at and attack their target. Can only be used by hostile mobs.
 */
export interface LeapAtTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air
   */
  must_be_on_ground?: boolean;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * The height in blocks the mob jumps when leaping at its target.
   */
  yd?: number;
  /**
   * Distance in blocks the mob jumps when leaping at its target.
   */
  target_dist?: number;
}
/**
 * Allows the mob to look at nearby entities.
 */
export interface LookAtEntity {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The distance in blocks from which the entity will look at.
   */
  look_distance?: number;
  /**
   * The probability of looking at the target. A value of 1.00 is 100%
   */
  probability?: number;
  look_time?: LookTime1;
  /**
   * The angle in degrees that the mob can see in the X-axis (left-right).
   */
  angle_of_view_vertical?: number;
  /**
   * The angle in degrees that the mob can see in the Y-axis (up-down).
   */
  angle_of_view_horizontal?: number;
  filters?: Filters27;
}
/**
 * Allows the mob to look at the player when the player is nearby.
 */
export interface LookAtPlayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The angle in degrees that the mob can see in the X-axis (left-right).
   */
  angle_of_view_vertical?: number;
  /**
   * The angle in degrees that the mob can see in the Y-axis (up-down).
   */
  angle_of_view_horizontal?: number;
  /**
   * The distance in blocks from which the entity will look at.
   */
  look_distance?: number;
  /**
   * The probability of looking at the target. A value of 1.00 is 100%
   */
  probability?: number;
  look_time?: LookTime2;
  /**
   * The distance in blocks from which the entity will choose a target.
   */
  target_distance?: number;
}
/**
 * Allows the mob to look at the entity they are targetting.
 */
export interface LookAtTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The distance in blocks from which the entity will look at.
   */
  look_distance?: number;
  /**
   * The probability of looking at the target. A value of 1.00 is 100%
   */
  probability?: number;
  look_time?: LookTime3;
  /**
   * The angle in degrees that the mob can see in the X-axis (left-right).
   */
  angle_of_view_vertical?: number;
  /**
   * The angle in degrees that the mob can see in the Y-axis (up-down).
   */
  angle_of_view_horizontal?: number;
}
/**
 * Allows the mob to look at the player they are trading with.
 */
export interface LookAtTradingPlayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The distance in blocks from which the entity will look at.
   */
  look_distance?: number;
  /**
   * The probability of looking at the target. A value of 1.00 is 100%
   */
  probability?: number;
  look_time?: LookTime4;
  /**
   * The angle in degrees that the mob can see in the X-axis (left-right).
   */
  angle_of_view_vertical?: number;
  /**
   * The angle in degrees that the mob can see in the Y-axis (up-down).
   */
  angle_of_view_horizontal?: number;
}
/**
 * Allows the villager to look for a mate to spawn other villagers with. Can only be used by Villagers.
 */
export interface MakeLove {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to use close combat melee attacks.
 */
export interface MeleeAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Allows the entity to use this attack behavior, only once EVER.
   */
  attack_once?: boolean;
  /**
   * Defines the entity types this entity will attack.
   */
  attack_types?: string;
  /**
   * Cooldown time (in seconds) between attacks.
   */
  cooldown_time?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary".
   */
  inner_boundary_time_increase?: number;
  /**
   * Unused. No effect on "minecraft:behavior.melee_attack".
   */
  max_dist?: number;
  /**
   * Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
   */
  max_path_time?: number;
  /**
   * Field of view (in degrees) when using the sensing component to detect an attack target.
   */
  melee_fov?: number;
  /**
   * Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
   */
  min_path_time?: number;
  on_attack?: Trigger10;
  on_kill?: Trigger11;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary".
   */
  outer_boundary_time_increase?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
   */
  path_fail_time_increase?: number;
  /**
   * Distance at which to increase attack path recalculation by "inner_boundary_tick_increase".
   */
  path_inner_boundary?: number;
  /**
   * Distance at which to increase attack path recalculation by "outer_boundary_tick_increase".
   */
  path_outer_boundary?: number;
  /**
   * This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval".
   */
  random_stop_interval?: number;
  /**
   * Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
   */
  reach_multiplier?: number;
  /**
   * Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
   */
  require_complete_path?: boolean;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Unused. No effect on "minecraft:behavior.melee_attack".
   */
  target_dist?: number;
  /**
   * Allows the entity to track the attack target, even if the entity has no sensing.
   */
  track_target?: boolean;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
}
/**
 * Allows an entity to go to the village bell and mingle with other entities.
 */
export interface Mingle {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * Amount of time in seconds that the entity will chat with another entity.
   */
  duration?: number;
  /**
   * The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities.
   */
  mingle_distance?: number;
  mingle_partner_type?: MinglePartnerType;
}
/**
 * Allows the mob to move around on its own while mounted seeking a target to attack.
 */
export interface MountPathing {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The distance at which this mob wants to be away from its target.
   */
  target_dist?: number;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
}
/**
 * Can only be used by Villagers. Allows them to seek shelter indoors.
 */
export interface MoveIndoors {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The cooldown time in seconds before the goal can be reused after pathfinding fails.
   */
  timeout_cooldown?: number;
}
/**
 * Forces the entity to move `outside`, whatever that means.
 */
export interface MoveOutdoors {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The radius away from the target block to count as reaching the goal.
   */
  goal_radius?: number;
  /**
   * The amount of times to try finding a random outdoors position before failing.
   */
  search_count?: number;
  /**
   * The y range to search for an outdoors position for.
   */
  search_height?: number;
  /**
   * The x and z range to search for an outdoors position for.
   */
  search_range?: number;
  /**
   * The cooldown time in seconds before the goal can be reused after pathfinding fails.
   */
  timeout_cooldown?: number;
}
/**
 * Can only be used by Villagers. Allows the villagers to create paths around the village.
 */
export interface MoveThroughVillage {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob will only move through the village during night time.
   */
  only_at_night?: boolean;
}
/**
 * Allows mob to move towards a block.
 */
export interface MoveToBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  on_stay_completed?: OnStayCompleted;
  on_reach?: OnReach;
  /**
   * Chance to start the behavior (applied after each random tick_interval).
   */
  start_chance?: number;
  /**
   * The distance in blocks that the mob will look for the block.
   */
  search_range?: number;
  /**
   * The height in blocks that the mob will look for the block.
   */
  search_height?: number;
  /**
   * Number of ticks needed to complete a stay at the block.
   */
  stay_duration?: number;
  target_selection_method?: TargetSelectionMethod1;
  target_offset?: TargetOffset;
  target_blocks?: TargetBlocks2;
  target_block_filters?: Filters28;
  /**
   * Average interval in ticks to try to run this behavior.
   */
  tick_interval?: number;
}
/**
 * Allows the mob to move back onto land when in water.
 */
export interface MoveToLand {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
   */
  search_count?: number;
  /**
   * Height in blocks the mob will look for land to move towards.
   */
  search_height?: number;
  /**
   * The distance in blocks it will look for land to move towards.
   */
  search_range?: number;
}
/**
 * Allows the mob to move back into lava when on land.
 */
export interface MoveToLava {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
   */
  search_count?: number;
  /**
   * Height in blocks the mob will look for lava to move towards.
   */
  search_height?: number;
  /**
   * The distance in blocks it will look for lava to move towards.
   */
  search_range?: number;
}
/**
 * Allows the mob to move into a liquid when on land.
 */
export interface MoveToLiquid {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
   */
  search_count?: number;
  /**
   * Height in blocks the mob will look for lava to move towards.
   */
  search_height?: number;
  /**
   * The distance in blocks it will look for lava to move towards.
   */
  search_range?: number;
  material_type?: MaterialType;
}
/**
 * Allows the mob to move to a POI if able to.
 */
export interface MoveToPoi {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  poi_type?: PointOfInterestType;
}
/**
 * Allows mob to move towards a random block.
 */
export interface MoveToRandomBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Defines the distance from the mob, in blocks, that the block to move to will be chosen.
   */
  block_distance?: number;
  /**
   * Defines the distance in blocks the mob has to be from the block for the movement to be finished.
   */
  within_radius?: number;
}
/**
 * Allows the mob to move into a random location within a village.
 */
export interface MoveToVillage {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance.
   */
  search_range?: number;
}
/**
 * Allows the mob to move back into water when on land.
 */
export interface MoveToWater {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The distance in blocks it will look for water to move towards.
   */
  search_range?: number;
  /**
   * Height in blocks the mob will look for water to move towards.
   */
  search_height?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
   */
  search_count?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
}
/**
 * Allows mobs with the dweller component to move toward their Village area that the mob should be restricted to.
 */
export interface MoveTowardsDwellingRestriction {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Allows mobs with the home component to move toward their pre-defined area that the mob should be restricted to.
 */
export interface MoveTowardsHomeRestriction {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Allows Guardians, Iron Golems and Villagers to move within their pre-defined area that the mob should be restricted to. Other mobs don't have a restriction defined.
 */
export interface MoveTowardsRestriction {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  control_flags?: ControlFlags;
}
/**
 * Allows mob to move towards its current target.
 */
export interface MoveTowardsTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target
   */
  within_radius?: number;
}
/**
 * Allows mobs to occassionally stop and take a nap under certain conditions.
 */
export interface Nap {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Maximum time in seconds the mob has to wait before using the goal again.
   */
  cooldown_max?: number;
  /**
   * Minimum time in seconds the mob has to wait before using the goal again.
   */
  cooldown_min?: number;
  /**
   * The block distance in x and z that will be checked for mobs that this mob detects.
   */
  mob_detect_dist?: number;
  /**
   * The block distance in y that will be checked for mobs that this mob detects.
   */
  mob_detect_height?: number;
  can_nap_filters?: Filters29;
  wake_mob_exceptions?: Filters30;
}
/**
 * Allows an entity to attack the closest target within a given subset of specific target types.
 */
export interface NearestAttackableTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes6;
  /**
   * Time range (in seconds) between searching for an attack target, range is in (0, `attack_interval`]. Only used if `attack_interval` is greater than 0, otherwise `scan_interval` is used.
   */
  attack_interval?: number;
  /**
   * Alias for `attack_interval`; provides the same functionality as `attack_interval`.
   */
  attack_interval_min?: number;
  /**
   * If true, this entity can attack its owner.
   */
  attack_owner?: boolean;
  /**
   * If true, this entity requires a path to the target.
   */
  must_reach?: boolean;
  /**
   * Determines if target-validity requires this entity to be in range only, or both in range and in sight.
   */
  must_see?: boolean;
  /**
   * Time (in seconds) the target must not be seen by this entity to become invalid. Used only if `must_see` is true.
   */
  must_see_forget_duration?: number;
  /**
   * Time (in seconds) this entity can continue attacking the target after the target is no longer valid.
   */
  persist_time?: number;
  /**
   * Allows the attacking entity to update the nearest target, otherwise a target is only reselected after each `scan_interval` or `attack_interval`.
   */
  reselect_targets?: boolean;
  /**
   * If `attack_interval` is 0 or isn't declared, then between attacks: scanning for a new target occurs every amount of ticks equal to `scan_interval`, minimum value is 1. Values under 10 can affect performance.
   */
  scan_interval?: number;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Multiplied with the target's armor coverage percentage to modify `max_dist` when detecting an invisible target.
   */
  target_invisible_multiplier?: number;
  /**
   * Maximum vertical target-search distance, if it's greater than the target type's `max_dist`. A negative value defaults to `entity_types` greatest `max_dist`.
   */
  target_search_height?: number;
  /**
   * Multiplied with the target type's `max_dist` when trying to detect a sneaking target.
   */
  target_sneak_visibility_multiplier?: number;
  /**
   * Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare `minecraft:follow_range`.
   */
  within_radius?: number;
}
/**
 * Allows the mob to check for and pursue the nearest valid target.
 */
export interface NearestPrioritizedAttackableTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes7;
  /**
   * Time in seconds before selecting a target.
   */
  attack_interval?: number;
  /**
   * If true, only entities that this mob can path to can be selected as targets.
   */
  must_reach?: boolean;
  /**
   * If true, only entities in this mob's viewing range can be selected as targets.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   */
  must_see_forget_duration?: number;
  /**
   * Time in seconds for a valid target to stay targeted when it becomes and invalid target.
   */
  persist_time?: number;
  /**
   * If true, the target will change to the current closest entity whenever a different entity is closer.
   */
  reselect_targets?: boolean;
  /**
   * If true, the mob will stop being targeted if it stops meeting any conditions.
   */
  reevaluate_description?: boolean;
  /**
   * How many ticks to wait between scanning for a target.
   */
  scan_interval?: number;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Height in blocks to search for a target mob. -1.0f means the height does not matter.
   */
  target_search_height?: number;
  /**
   * Distance in blocks that the target can be within to launch an attack.
   */
  within_radius?: number;
}
/**
 * Allows an entity to sit in place, similar to the ocelot entity animation pose.
 */
export interface OcelotSitOnBlock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Can only be used by the Ocelot. Allows it to perform the sneak and pounce attack.
 */
export interface Ocelotattack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time (in seconds) between attacks.
   */
  cooldown_time?: number;
  /**
   * Max distance from the target, this entity will use this attack behavior.
   */
  max_distance?: number;
  /**
   * Max distance from the target, this entity starts sneaking.
   */
  max_sneak_range?: number;
  /**
   * Max distance from the target, this entity starts sprinting (sprinting takes priority over sneaking).
   */
  max_sprint_range?: number;
  /**
   * Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
   */
  reach_multiplier?: number;
  /**
   * Modifies the attacking entity's movement speed while sneaking.
   */
  sneak_speed_multiplier?: number;
  /**
   * Modifies the attacking entity's movement speed while sprinting.
   */
  sprint_speed_multiplier?: number;
  /**
   * Modifies the attacking entity's movement speed when not sneaking or sprinting, but still within attack range.
   */
  walk_speed_multiplier?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
}
/**
 * Allows the mob to offer the player a flower like the Iron Golem does.
 */
export interface OfferFlower {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Percent chance that the mob will start this goal from 0.0 to 1.0 (where 1.0 = 100%).
   */
  chance_to_start?: number;
  filters?: Filters31;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  max_head_rotation_y?: number;
  /**
   * The max amount of time (in seconds) that the mob will offer the flower for before exiting the Goal.
   */
  max_offer_flower_duration?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  max_rotation_x?: number;
  search_area?: SearchArea;
}
/**
 * Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them.
 */
export interface OpenDoor {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If true, the mob will close the door after opening it and going through it.
   */
  close_door_after?: boolean;
}
/**
 * Allows the mob to target another mob that hurts their owner.
 */
export interface OwnerHurtByTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes8;
}
/**
 * Allows the mob to target a mob that is hurt by their owner.
 */
export interface OwnerHurtTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTYpes;
}
/**
 * Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.
 */
export interface Panic {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  damage_sources?: DamageSources;
  /**
   * If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it.
   */
  force?: boolean;
  /**
   * If true, the mob will not panic in response to damage from other mobs. This overrides the damage types in `damage_sources`
   */
  ignore_mob_damage?: boolean;
  /**
   * If true, the mob will prefer water over land.
   */
  prefer_water?: boolean;
  panic_sound?: PanicSound;
  sound_interval?: SoundInterval6;
}
/**
 * The range of time in seconds to randomly wait before playing the sound again.
 */
export interface SoundInterval6 {
  /**
   * The minimum time in seconds before the `panic_sound` plays.
   */
  range_min?: number;
  /**
   * The maximum time in seconds before the `panic_sound` plays.
   */
  range_max?: number;
}
/**
 * Allows the mob to peek out. This is what the shulker uses to look out of its shell.
 */
export interface Peek1 {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to be tempted by food they like.
 */
export interface PetSleepWithOwner {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * Height in blocks from the owner the pet can be to sleep with owner.
   */
  search_height?: number;
  /**
   * The radius that the mob will search for an owner to curl up with.
   */
  search_radius?: number;
  /**
   * The range that the mob will search for an owner to curl up with.
   */
  search_range?: number;
}
/**
 * Allows the mob to pick up items on the ground.
 */
export interface PickupItems {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob can pickup any item.
   */
  can_pickup_any_item?: boolean;
  /**
   * If true, the mob can pickup items to its hand or armor slots.
   */
  can_pickup_to_hand_or_equipment?: boolean;
  /**
   * Amount of time an offended entity needs before being willing to pick up items.
   */
  cooldown_after_being_attacked?: number;
  excluded_items?: ExcludedItems;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot.
   */
  goal_radius?: number;
  /**
   * Maximum distance this mob will look for items to pick up.
   */
  max_dist?: number;
  /**
   * Height in blocks the mob will look for items to pick up.
   */
  search_height?: number;
  /**
   * If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items.
   */
  pickup_based_on_chance?: boolean;
  /**
   * If true, the mob will pickup the same item as the item in its hand.
   */
  pickup_same_items_as_in_hand?: boolean;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
}
/**
 * Allows the mob to play dead when attacked by other entities. When playing dead, other entities will not target this mob.
 */
export interface PlayDead {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Whether the mob will receive the regeneration effect while playing dead.
   */
  apply_regeneration?: boolean;
  /**
   * The amount of time the mob will remain playing dead (in seconds).
   */
  duration?: number;
  filters?: Filters32;
  /**
   * The amount of health at which damage will cause the mob to play dead.
   */
  force_below_health?: number;
  /**
   * The likelihood of this goal starting upon taking damage.
   */
  random_start_chance?: number;
  random_damage_range?: RandomDamageRange;
  damage_sources?: DamageSources1;
}
/**
 * Allows the mob to play with other baby villagers. This can only be used by Villagers.
 */
export interface Play {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Percent chance that the mob will start this goal, from 0 to 1.
   */
  chance_to_start?: number;
  /**
   * The distance (in blocks) that the mob tries to be in range of the friend it's following.
   */
  follow_distance?: number;
  friend_search_area?: FriendSearchArea;
  friend_types?: FriendTypes;
  /**
   * The max amount of seconds that the mob will play for before exiting the Goal.
   */
  max_play_duration_seconds?: number;
  /**
   * The height (in blocks) that the mob will search within to find a random position position to move to. Must be at least 1.
   */
  random_pos_search_height?: number;
  /**
   * The distance (in blocks) on ground that the mob will search within to find a random position to move to. Must be at least 1.
   */
  random_pos_search_range?: number;
}
/**
 * Allows the mob to be ridden by the player after being tamed.
 */
export interface PlayerRideTamed {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to eat/raid crops out of farms until they are full.
 */
export interface RaidGarden {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  blocks?: Blocks1;
  /**
   * Time in seconds between each time it eats.
   */
  eat_delay?: number;
  /**
   * Amount of time in seconds before this mob wants to eat again.
   */
  full_delay?: number;
  /**
   * Time in seconds before starting to eat/raid once it arrives at it.
   */
  initial_eat_delay?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * Maximum number of things this entity wants to eat.
   */
  max_to_eat?: number;
  /**
   * Distance in blocks the mob will look for crops to eat.
   */
  search_range?: number;
  /**
   * Height in blocks the mob will look for crops to eat.
   */
  search_height?: number;
}
/**
 * Allows the mob to search for a random target and, if a direct path exists between the mob and the target, it will perform a charge. If the attack hits, the target will be knocked back based on the mob's speed.
 */
export interface RamAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The modifier to knockback that babies have.
   */
  baby_knockback_modifier?: number;
  cooldown_range?: CooldownRange1;
  /**
   * The force of the knockback of the ram attack.
   */
  knockback_force?: number;
  /**
   * The height of the knockback of the ram attack.
   */
  knockback_height?: number;
  /**
   * The minimum distance at which the mob can start a ram attack.
   */
  min_ram_distance?: number;
  on_start?: Trigger12;
  pre_ram_sound?: PreRamSound;
  /**
   * The distance at which the mob start to run with ram speed.
   */
  ram_distance?: number;
  ram_impact_sound?: RamImpactSound;
  /**
   * Sets the entity's speed when charging toward the target.
   */
  ram_speed?: number;
  /**
   * Sets the entity's speed when running toward the target.
   */
  run_speed?: number;
  trigger?: Trigger13;
}
/**
 * Allows the mob to randomly break surface of the water.
 */
export interface RandomBreach {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
}
/**
 * Allows a mob to randomly fly around.
 */
export interface RandomFly {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob will avoid blocks that cause damage.
   */
  avoid_damage_blocks?: boolean;
  /**
   * If true, the mob can stop flying and land on a tree instead of the ground.
   */
  can_land_on_trees?: boolean;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
  /**
   * Height in blocks to add to the selected target position.
   */
  y_offset?: number;
}
/**
 * Allows the mob to hover around randomly, close to the surface.
 */
export interface RandomHover {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  hover_height?: HoverHeight;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
  /**
   * Height in blocks to add to the selected target position.
   */
  y_offset?: number;
}
/**
 * Allows the mob to randomly sit and look around for a duration. Note: Must have a sitting animation set up to use this.
 */
export interface RandomLookAroundAndSit {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * If the goal should continue to be used as long as the mob is leashed.
   */
  continue_if_leashed?: boolean;
  /**
   * The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   */
  max_angle_of_view_horizontal?: number;
  /**
   * The max amount of unique looks a mob will have while looking around.
   */
  max_look_count?: number;
  /**
   * The max amount of time (in ticks) a mob will stay looking at a direction while looking around.
   */
  max_look_time?: number;
  /**
   * The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   */
  min_angle_of_view_horizontal?: number;
  /**
   * The min amount of unique looks a mob will have while looking around.
   */
  min_look_count?: number;
  /**
   * The min amount of time (in ticks) a mob will stay looking at a direction while looking around.
   */
  min_look_time?: number;
  /**
   * The probability of randomly looking around/sitting.
   */
  probability?: number;
  /**
   * The cooldown in seconds before the goal can be used again.
   */
  random_look_around_cooldown?: number;
}
/**
 * Allows the mob to randomly look around.
 */
export interface RandomLookAround {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  look_time?: LookTime5;
  /**
   * The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   */
  max_angle_of_view_horizontal?: number;
  /**
   * The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   */
  min_angle_of_view_horizontal?: number;
}
/**
 * Allows the mob to randomly sit for a duration.
 */
export interface RandomSitting {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * The minimum amount of time in seconds before the mob can stand back up.
   */
  min_sit_time?: number;
  /**
   * This is the chance that the mob will start this goal, from 0 to 1.
   */
  start_chance?: number;
  /**
   * This is the chance that the mob will stop this goal, from 0 to 1.
   */
  stop_chance?: number;
}
/**
 * Allows a mob to randomly stroll around.
 */
export interface RandomStroll {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
}
/**
 * Allows an entity to randomly move through water.
 */
export interface RandomSwim {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob will avoid surface water blocks by swimming below them.
   */
  avoid_surface?: boolean;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
   */
  y_dist?: number;
}
/**
 * Allows the mob to use ranged attacks like shooting arrows.
 */
export interface RangedAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Alternative to "attack_interval_min" & "attack_interval_max". Consistent reload-time (in seconds), when not using a charged shot. Does not scale with target-distance.
   */
  attack_interval?: number;
  /**
   * Maximum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance.
   */
  attack_interval_max?: number;
  /**
   * Minimum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance.
   */
  attack_interval_min?: number;
  /**
   * Minimum distance to target before this entity will attempt to shoot.
   */
  attack_radius?: number;
  /**
   * Minimum distance the target can be for this mob to fire. If the target is closer, this mob will move first before firing
   */
  attack_radius_min?: number;
  /**
   * Time (in seconds) between each individual shot when firing a burst of shots from a charged up attack.
   */
  burst_interval?: number;
  /**
   * Number of shots fired every time the attacking entity uses a charged up attack.
   */
  burst_shots?: number;
  /**
   * Time (in seconds, then add "charge_shoot_trigger"), before a charged up attack is done charging. Charge-time decays while target is not in sight.
   */
  charge_charged_trigger?: number;
  /**
   * Amount of time (in seconds, then doubled) a charged shot must be charging before reloading burst shots. Charge-time decays while target is not in sight.
   */
  charge_shoot_trigger?: number;
  /**
   * Field of view (in degrees) when using sensing to detect a target for attack.
   */
  ranged_fov?: number;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * If a swing animation (using variable.attack_time) exists, this causes the actor to swing their arm(s) upon firing the ranged attack.
   */
  swing?: boolean;
  /**
   * Minimum amount of time (in seconds) the attacking entity needs to see the target before moving toward it.
   */
  target_in_sight_time?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
}
/**
 * Allows the villager to stop so another villager can breed with it. Can only be used by a Villager.
 */
export interface ReceiveLove {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to stay indoors during night time.
 */
export interface RestrictOpenDoor {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to automatically start avoiding the sun when its a clear day out.
 */
export interface RestrictSun {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to stay at a certain level when in liquid.
 */
export interface RiseToLiquidLevel {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Vertical offset from the liquid.
   */
  liquid_y_offset?: number;
  /**
   * Displacement for how much the entity will move up in the vertical axis.
   */
  rise_delta?: number;
  /**
   * Displacement for how much the entity will move down in the vertical axis.
   */
  sink_delta?: number;
}
/**
 * [EXPERIMENTAL BEHAVIOR] Plays the provided sound and activates the `ROARING` actor flag during the specified duration
 */
export interface Roar {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Goal duration in seconds.
   */
  duration?: number;
}
/**
 * This allows the mob to roll forward.
 */
export interface Roll {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The probability that the mob will use the goal.
   */
  probability?: number;
}
/**
 * Allows the mob to run around aimlessly.
 */
export interface RunAroundLikeCrazy {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Allows the a mob to become scared when the weather outside is thundering.
 */
export interface Scared {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The interval in which a sound will play when active in a 1/delay chance to kick off.
   */
  sound_interval?: number;
}
/**
 * Allows the mob to send an event to another mob.
 */
export interface SendEvent {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time in seconds for the entire event sending process.
   */
  cast_duration?: number;
  /**
   * If true, the mob will face the entity it sends an event to.
   */
  look_at_target?: boolean;
  event_choices?: EventChoices;
  sequence?: Sequence1;
}
/**
 * A spell that the mob can cast.
 */
export interface EventChoice {
  /**
   * The minimum distance in blocks the target must be for this spell to be cast.
   */
  min_activation_range?: number;
  /**
   * The maxmimum distance in blocks the target must be for this spell to be cast.
   */
  max_activation_range?: number;
  /**
   * Time in seconds before the mob can use this spell again.
   */
  cooldown_time?: number;
  /**
   * Time in seconds the spell casting will take.
   */
  cast_duration?: number;
  filters?: Filters2;
  /**
   * The color of the particles for this spell.
   */
  particle_color?: string;
  /**
   * The weight of this spell. Controls how likely this spell will be picked
   */
  weight?: number;
  start_sound_event?: StartSoundEvent;
  sequence?: Sequence;
}
/**
 * Allows the mob to give items it has to others.
 */
export interface ShareItems {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  entity_types?: EntityTypes9;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * Maximum distance in blocks this mob will look for entities to share items with.
   */
  max_dist?: number;
}
/**
 * Allows the mob to go into stone blocks like Silverfish do. Currently it can only be used by Silverfish.
 */
export interface SilverfishMergeWithStone {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to alert mobs in nearby blocks to come out. Currently it can only be used by Silverfish.
 */
export interface SilverfishWakeUpFriends {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows Equine mobs to be Horse Traps and be triggered like them, spawning a lightning bolt and a bunch of horses when a player is nearby. Can only be used by Horses, Mules, Donkeys and Skeleton Horses.
 */
export interface SkeletonHorseTrap {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Amount of time in seconds the trap exists. After this amount of time is elapsed, the trap is removed from the world if it hasn't been activated
   */
  duration?: number;
  /**
   * Distance in blocks that the player has to be within to trigger the horse trap.
   */
  within_radius?: number;
}
/**
 * Allows mobs that own a bed to in a village to move to and sleep in it.
 */
export interface Sleep {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob will be able to use the sleep goal if riding something.
   */
  can_sleep_while_riding?: boolean;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * The height of the mob's collider while sleeping.
   */
  sleep_collider_height?: number;
  /**
   * The width of the mob's collider while sleeping.
   */
  sleep_collider_width?: number;
  /**
   * The y offset of the mob's collider while sleeping.
   */
  sleep_y_offset?: number;
  /**
   * The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition.
   */
  timeout_cooldown?: number;
}
/**
 * Can only be used by Slimes and Magma Cubes. Allows the mob to use a melee attack like the slime's.
 */
export interface SlimeAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate while trying to look at the target.
   */
  y_max_rotation?: number;
}
/**
 * Allow slimes to float in water / lava. Can only be used by Slime and Magma Cubes.
 */
export interface SlimeFloat {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Percent chance a slime or magma cube has to jump while in water / lava.
   */
  jump_chance_percentage?: number;
}
/**
 * Can only be used by Slimes and Magma Cubes. Allows the mob to continuously jump around like a slime.
 */
export interface SlimeKeepOnJumping {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
}
/**
 * Can only be used by Slimes and Magma Cubes. Allows the mob to move in random directions like a slime.
 */
export interface SlimeRandomDirection {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Additional time (in whole seconds), chosen randomly in the range of [0, "add_random_time_range"], to add to "min_change_direction_time".
   */
  add_random_time_range?: number;
  /**
   * Constant minimum time (in seconds) to wait before choosing a new direction.
   */
  min_change_direction_time?: number;
  /**
   * Maximum rotation angle range (in degrees) when randomly choosing a new direction.
   */
  turn_range?: number;
}
/**
 * Allows the mob to take a load off and snack on food that it found nearby.
 */
export interface Snacking {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  items?: Items2;
  /**
   * The cooldown time in seconds before the mob is able to snack again.
   */
  snacking_cooldown?: number;
  /**
   * The minimum time in seconds before the mob is able to snack again.
   */
  snacking_cooldown_min?: number;
  /**
   * This is the chance that the mob will stop snacking, from 0 to 1.
   */
  snacking_stop_chance?: number;
}
/**
 * Allows the mob to stop and sneeze possibly startling nearby mobs and dropping an item.
 */
export interface Sneeze {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * The probability that the mob will drop an item when it sneezes.
   */
  drop_item_chance?: number;
  entity_types?: EntityTypes10;
  /**
   * Loot table to select dropped items from.
   */
  loot_table?: string;
  prepare_sound?: PrepareSound;
  /**
   * The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing).
   */
  prepare_time?: number;
  /**
   * The probability of sneezing. A value of 1.00 is 100%
   */
  probability?: number;
  sound?: Sound;
  /**
   * Distance in blocks that mobs will be startled.
   */
  within_radius?: number;
}
/**
 * [EXPERIMENTAL BEHAVIOR] Plays the provided sounds and activates the `SONIC BOOM` actor flag during the specified duration
 */
export interface SonicBoom {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Cooldown in seconds required after using this attack until the entity can use sonic boom again.
   */
  attack_cooldown?: number;
  /**
   * Attack damage of the sonic boom.
   */
  attack_damage?: number;
  /**
   * Horizontal range (in blocks) at which the sonic boom can damage the target.
   */
  attack_range_horizontal?: number;
  /**
   * Vertical range (in blocks) at which the sonic boom can damage the target.
   */
  attack_range_vertical?: number;
  attack_sound?: AttackSound;
  charge_sound?: ChargeSound;
  /**
   * Goal duration in seconds.
   */
  duration?: number;
  /**
   * Duration in seconds until the attack sound is played.
   */
  duration_until_attack_sound?: number;
  /**
   * Height cap of the attack knockback's vertical delta.
   */
  knockback_height_cap?: number;
  /**
   * Horizontal strength of the attack's knockback applied to the attack target.
   */
  knockback_horizontal_strength?: number;
  /**
   * Vertical strength of the attack's knockback applied to the attack target.
   */
  knockback_vertical_strength?: number;
}
/**
 * Allows an entity to dive underwater.
 */
export interface SquidDive {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the squid to swim away. Can only be used by the Squid.
 */
export interface SquidFlee {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the squid to swim in place idly. Can only be used by the Squid.
 */
export interface SquidIdle {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the squid to move away from ground blocks and back to water. Can only be used by the Squid.
 */
export interface SquidMoveAwayFromGround {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the squid to stick to the ground when outside water. Can only be used by the Squid.
 */
export interface SquidOutOfWater {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows an entity to stalk a specific target. Once within range of the target, the entity will then leap at the target and deal damage based upon its attack attribute.
 */
export interface StalkAndPounceOnTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing
   */
  interest_time?: number;
  /**
   * The distance in blocks the mob jumps in the direction of its target.
   */
  leap_distance?: number;
  /**
   * The height in blocks the mob jumps when leaping at its target.
   */
  leap_height?: number;
  /**
   * The maximum distance away a target can be before the mob gives up on stalking.
   */
  max_stalk_dist?: number;
  /**
   * The maximum distance away from the target in blocks to begin pouncing at the target.
   */
  pounce_max_dist?: number;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * The movement speed in which you stalk your target.
   */
  stalk_speed?: number;
  /**
   * The Maximum distance away from the target when landing from the pounce that will still result in damaging the target.
   */
  strike_dist?: number;
  /**
   * The amount of time the mob will be stuck if they fail and land on a block they can be stuck on.
   */
  stuck_time?: number;
  /**
   * The distance in blocks the mob jumps in the direction of their target.
   */
  leap_dist?: number;
  stuck_blocks?: Filters33;
}
/**
 * [EXPERIMENTAL BEHAVIOR] The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.
 */
export interface StayNearNoteblock {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Sets the time an entity should stay near a noteblock after hearing it.
   */
  listen_time?: number;
  /**
   * Sets the entity's speed when moving toward the block.
   */
  speed?: number;
  /**
   * Sets the distance the entity needs to be away from the block to attempt to start the goal.
   */
  start_distance?: number;
  /**
   * Sets the distance from the block the entity will attempt to reach.
   */
  stop_distance?: number;
}
/**
 * Allows the mob to stay put while it is in a sitting state instead of doing something else.
 */
export interface StayWhileSitting {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to use the polar bear's melee attack.
 */
export interface StompAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Allows the entity to use this attack behavior, only once EVER.
   */
  attack_once?: boolean;
  /**
   * Defines the entity types this entity will attack.
   */
  attack_types?: string;
  /**
   * Cooldown time (in seconds) between attacks.
   */
  cooldown_time?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary".
   */
  inner_boundary_time_increase?: number;
  /**
   * Unused. No effect on "minecraft:behavior.melee_attack".
   */
  max_dist?: number;
  /**
   * Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
   */
  max_path_time?: number;
  /**
   * Field of view (in degrees) when using the sensing component to detect an attack target.
   */
  melee_fov?: number;
  /**
   * Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
   */
  min_path_time?: number;
  /**
   * Multiplied with the final AoE damage range to determine a no damage range. The stomp attack will go on cooldown if target is in this no damage range.
   */
  no_damage_range_multiplier?: number;
  on_attack?: Trigger14;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary".
   */
  outer_boundary_time_increase?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
   */
  path_fail_time_increase?: number;
  /**
   * Distance at which to increase attack path recalculation by "inner_boundary_tick_increase".
   */
  path_inner_boundary?: number;
  /**
   * Distance at which to increase attack path recalculation by "outer_boundary_tick_increase".
   */
  path_outer_boundary?: number;
  /**
   * This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval".
   */
  random_stop_interval?: number;
  /**
   * Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
   */
  reach_multiplier?: number;
  /**
   * Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
   */
  require_complete_path?: boolean;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Multiplied with the base size of the entity to determine stomp AoE damage range.
   */
  stomp_range_multiplier?: number;
  /**
   * Unused. No effect on "minecraft:behavior.melee_attack".
   */
  target_dist?: number;
  /**
   * Allows the entity to track the attack target, even if the entity has no sensing.
   */
  track_target?: boolean;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;
}
/**
 * Allows this mob to stomp turtle eggs.
 */
export interface StompTurtleEgg {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
   */
  interval?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
   */
  search_count?: number;
  /**
   * Height in blocks the mob will look for turtle eggs to move towards.
   */
  search_height?: number;
  /**
   * The distance in blocks it will look for turtle eggs to move towards.
   */
  search_range?: number;
}
/**
 * Allows the mob to move into a random location within a village within the search range.
 */
export interface StrollTowardsVillage {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the `wiggle room` to stop the AI from bouncing back and forth trying to reach a specific spot
   */
  goal_radius?: number;
  /**
   * The distance in blocks to search for points inside villages. If <= 0, find the closest village regardless of distance.
   */
  search_range?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   */
  speed_multiplier?: number;
  /**
   * This is the chance that the mob will start this goal, from 0 to 1.
   */
  start_chance?: number;
}
/**
 * Allows the mob to attack the player by summoning other entities.
 */
export interface SummonEntity {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  summon_choices?: SummonChoices;
}
export interface Sequence3 {
  /**
   * Amount of time in seconds to wait before this step starts.
   */
  delay?: number;
  /**
   * Amount of time in seconds before each entity is summoned in this step.
   */
  delay_per_summon?: number;
  /**
   * Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can
   */
  entity_lifespan?: number;
  /**
   * Amount of time in seconds to wait before this step starts.
   */
  base_delay?: number;
  /**
   * The entity type of the entities we will spawn in this step.
   */
  entity_type?: string;
  /**
   * Number of entities that will be spawned in this step.
   */
  num_entities_spawned?: number;
  shape?: Shape1;
  /**
   * The base size of the entity.
   */
  size?: number;
  sound_event?: SoundEvent;
  /**
   * Maximum number of summoned entities at any given time.
   */
  summon_cap?: number;
  /**
   * Maximum radius where the summon entities can spawn.
   */
  summon_cap_radius?: number;
  /**
   * The target of the spell. This is where the spell will start (line will start here, circle will be centered here)
   */
  target?: string;
}
/**
 * Allows the creeper to swell up when a player is nearby. It can only be used by Creepers.
 */
export interface Swell {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * This mob starts swelling when a target is at least this many blocks away.
   */
  start_distance?: number;
  /**
   * This mob stops swelling when a target has moved away at least this many blocks.
   */
  stop_distance?: number;
}
/**
 * Allows the entity go idle, if swimming. Entity must be in water.
 */
export interface SwimIdle {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Amount of time (in seconds) to stay idle.
   */
  idle_time?: number;
  /**
   * Percent chance this entity will go idle, 1.0 = 100%.
   */
  success_rate?: number;
}
/**
 * Has the fish swim around when they can't pathfind.
 */
export interface SwimWander {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Percent chance to start wandering, when not path-finding. 1 = 100%
   */
  interval?: number;
  /**
   * Distance to look ahead for obstacle avoidance, while wandering.
   */
  look_ahead?: number;
  /**
   * Amount of time (in seconds) to wander after wandering behavior was successfully started.
   */
  wander_time?: number;
}
/**
 * Allows the entity follow another entity. Both entities must be swimming and in water.
 */
export interface SwimWithEntity {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Percent chance to start following another entity, if not already doing so. 1.0 = 100%
   */
  success_rate?: number;
  /**
   * Percent chance to stop following the current entity, if they're riding another entity or they're not swimming. 1.0 = 100%
   */
  chance_to_stop?: number;
  /**
   * Time (in seconds) between checks to determine if this entity should catch up to the entity being followed or match the direction of the entity being followed.
   */
  state_check_interval?: number;
  /**
   * Distance, from the entity being followed, at which this entity will speed up to reach that entity.
   */
  catch_up_threshold?: number;
  /**
   * Distance, from the entity being followed, at which this entity will try to match that entity's direction.
   */
  match_direction_threshold?: number;
  /**
   * The multiplier this entity's speed is modified by when matching another entity's direction.
   */
  catch_up_multiplier?: number;
  /**
   * Radius around this entity to search for another entity to follow.
   */
  search_range?: number;
  /**
   * Distance, from the entity being followed, at which this entity will stop following that entity.
   */
  stop_distance?: number;
  entity_types?: EntityTypes11;
}
/**
 * Allows the mob to move to attack a target. The goal ends if it has a horizontal collision or gets hit. Built to be used with flying mobs.
 */
export interface SwoopAttack {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * Added to the base size of the entity, to determine the target's maximum allowable distance, when trying to deal attack damage.
   */
  damage_reach?: number;
  delay_range?: DelayRange;
}
/**
 * Can only be used by Villagers. Allows the mob to accept flowers from Iron Golems.
 */
export interface TakeFlower {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  filters?: Filters34;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   */
  max_head_rotation_y?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   */
  max_rotation_x?: number;
  /**
   * The maximum amount of time (in seconds) for the mob to randomly wait for before taking the flower.
   */
  max_wait_time?: number;
  /**
   * Minimum distance (in blocks) for the entity to be considered having reached its target.
   */
  min_distance_to_target?: number;
  /**
   * The minimum amount of time (in seconds) for the mob to randomly wait for before taking the flower.
   */
  min_wait_time?: number;
  search_area?: SearchArea1;
}
/**
 * Allows an entity to select a valid target entity that pushed it.
 */
export interface TargetWhenPushed {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes12;
  /**
   * Probability that the entity will target the entity that pushed it.
   */
  percent_chance?: number;
}
/**
 * Allows an entity to be tempted by a set item.
 */
export interface Tempt {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * If true, the mob can stop being tempted if the player moves too fast while close to this mob.
   */
  can_get_scared?: boolean;
  /**
   * If true, the mob can be tempted even if it has a passenger (i.e. if being ridden).
   */
  can_tempt_while_ridden?: boolean;
  /**
   * If true, vertical distance to the player will be considered when tempting.
   */
  can_tempt_vertically?: boolean;
  items?: Items3;
  sound_interval?: SoundInterval7;
  tempt_sound?: TemptSound;
  /**
   * Distance in blocks this mob can get tempted by a player holding an item they like.
   */
  within_radius?: number;
}
/**
 * Allows the mob to look at a player that is holding a tradable item.
 */
export interface TradeInterest {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * The Maximum time in seconds that the trader will hold an item before attempting to switch for a different item that takes the same trade.
   */
  carried_item_switch_time?: number;
  /**
   * The time in seconds before the trader can use this goal again.
   */
  cooldown?: number;
  /**
   * The Maximum time in seconds that the trader will be interested with showing it's trade items.
   */
  interest_time?: number;
  /**
   * The Maximum time in seconds that the trader will wait when you no longer have items to trade.
   */
  remove_item_time?: number;
  /**
   * Distance in blocks this mob can be interested by a player holding an item they like.
   */
  within_radius?: number;
}
/**
 * Allows the player to trade with this mob.
 */
export interface TradeWithPlayer {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the mob to target the same entity its owner is targeting.
 */
export interface VexCopyOwnerTarget {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes13;
}
/**
 * Allows the mob to move around randomly like the Vex.
 */
export interface VexRandomMove {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes14;
}
/**
 * Allows the wither to launch random attacks. Can only be used by the Wither Boss.
 */
export interface WitherRandomAttackPosGoal {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
}
/**
 * Allows the wither to focus its attacks on whichever mob has dealt the most damage to it. Can only be used by the Wither Boss.
 */
export interface WitherTargetHighestDamage {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  entity_types?: EntityTypes15;
}
/**
 * Allows the NPC to use the POI.
 */
export interface Work {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The amount of ticks the NPC will stay in their the work location.
   */
  active_time?: number;
  /**
   * If true, this entity can work when their jobsite POI is being rained on.
   */
  can_work_in_rain?: boolean;
  /**
   * The amount of ticks the goal will be on cooldown before it can be used again.
   */
  goal_cooldown?: number;
  on_arrival?: Trigger15;
  /**
   * The max interval in which a sound will play.
   */
  sound_delay_max?: number;
  /**
   * The min interval in which a sound will play.
   */
  sound_delay_min?: number;
  /**
   * If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal
   */
  work_in_rain_tolerance?: number;
}
/**
 * Allows the NPC to use the composter POI to convert excess seeds into bone meal.
 */
export interface WorkComposter {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  speed_multiplier?: BlockceptionMinecraftBehaviorEntitiesSpeedMultiplier;
  /**
   * The amount of ticks the NPC will stay in their the work location.
   */
  active_time?: number;
  /**
   * The maximum number of times the mob will interact with the composter.
   */
  block_interaction_max?: number;
  /**
   * Determines whether the mob can empty a full composter.
   */
  can_empty_composter?: boolean;
  /**
   * Determines whether the mob can add items to a composter given that it is not full.
   */
  can_fill_composter?: boolean;
  /**
   * If true, this entity can work when their jobsite POI is being rained on.
   */
  can_work_in_rain?: boolean;
  /**
   * The amount of ticks the goal will be on cooldown before it can be used again.
   */
  goal_cooldown?: number;
  /**
   * The maximum number of items which can be added to the composter per block interaction.
   */
  items_per_use_max?: number;
  /**
   * Limits the amount of each compostable item the mob can use. Any amount held over this number will be composted if possible
   */
  min_item_count?: number;
  on_arrival?: Trigger16;
  /**
   * Unused.
   */
  sound_delay_max?: number;
  /**
   * Unused.
   */
  sound_delay_min?: number;
  /**
   * The maximum interval in which the mob will interact with the composter.
   */
  use_block_max?: number;
  /**
   * The minimum interval in which the mob will interact with the composter.
   */
  use_block_min?: number;
  /**
   * If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal
   */
  work_in_rain_tolerance?: number;
}
/**
 * The components that are added as the foundation of the entity.
 */
export interface Component1 {
  'minecraft:addrider'?: AddRider;
  'minecraft:admire_item'?: AdmireItem;
  'minecraft:ageable'?: Ageable;
  'minecraft:ambient_sound_interval'?: AmbientSoundInterval;
  'minecraft:anger_level'?: AngerLevel;
  'minecraft:angry'?: Angry;
  'minecraft:annotation.break_door'?: AnnotationBreakDoor;
  'minecraft:annotation.open_door'?: AnnotationOpenDoor;
  'minecraft:area_attack'?: AreaAttack;
  'minecraft:attack_cooldown'?: AttackCooldown;
  'minecraft:attack_damage'?: AttackDamage;
  'minecraft:attack'?: Attack;
  'minecraft:balloonable'?: Balloonable;
  'minecraft:barter'?: Barter;
  'minecraft:block_climber'?: BlockClimber;
  'minecraft:block_sensor'?: BlockSensor;
  'minecraft:boostable'?: Boostable;
  'minecraft:boss'?: Boss;
  'minecraft:break_blocks'?: BreakBlocks;
  'minecraft:breathable'?: Breathable;
  'minecraft:breedable'?: Breedable;
  'minecraft:bribeable'?: Bribeable;
  'minecraft:buoyant'?: Buoyant;
  'minecraft:burns_in_daylight'?: BurnsInDaylight2;
  'minecraft:can_climb'?: CanClimb;
  'minecraft:can_fly'?: CanFly;
  'minecraft:can_power_jump'?: CanPowerJump;
  'minecraft:celebrate_hunt'?: CelebrateHunt;
  'minecraft:collision_box'?: CollisionBox;
  'minecraft:color'?: Color;
  'minecraft:color2'?: Color0;
  'minecraft:combat_regeneration'?: CombatRegeneration;
  'minecraft:conditional_bandwidth_optimization'?: ConditionalBandwidthOptimization;
  'minecraft:custom_hit_test'?: CustomHitTest;
  'minecraft:damage_over_time'?: DamageOverTime;
  'minecraft:damage_sensor'?: DamageSensor;
  'minecraft:dash'?: Dash;
  'minecraft:default_look_angle'?: DefaultLookAngle;
  'minecraft:despawn'?: Despawn;
  'minecraft:drying_out_timer'?: DryingOutTimer;
  'minecraft:dweller'?: Dweller;
  'minecraft:economy_trade_table'?: EconomyTradeTable;
  'minecraft:entity_sensor'?: EntitySensor;
  'minecraft:environment_sensor'?: EnvironmentSensor;
  'minecraft:equip_item'?: EquipItem;
  'minecraft:equipment'?: Equipment;
  'minecraft:equippable'?: Equippable;
  'minecraft:exhaustion_values'?: ExhaustionValues;
  'minecraft:experience_reward'?: ExperienceReward;
  'minecraft:explode'?: Explode;
  'minecraft:fall_damage'?: FallDamage;
  'minecraft:fire_immune'?: FireImmune;
  'minecraft:floats_in_liquid'?: FloatsInLiquid;
  'minecraft:flocking'?: Flocking;
  'minecraft:flying_speed'?: FlyingSpeed;
  'minecraft:follow_range'?: FollowRange;
  'minecraft:friction_modifier'?: FrictionModifier;
  'minecraft:game_event_movement_tracking'?: GameEventMovementTracking;
  'minecraft:genetics'?: Genetics;
  'minecraft:giveable'?: Giveable;
  'minecraft:ground_offset'?: GroundOffset;
  'minecraft:group_size'?: GroupSize;
  'minecraft:grows_crop'?: GrowsCrop;
  'minecraft:healable'?: Healable;
  'minecraft:health'?: Health;
  'minecraft:heartbeat'?: Heartbeat;
  'minecraft:hide'?: Hide;
  'minecraft:home'?: Home;
  'minecraft:horse.jump_strength'?: HorseJumpStrength;
  'minecraft:hurt_on_condition'?: HurtOnCondition;
  'minecraft:hurt_when_wet'?: HurtWhenWet;
  'minecraft:input_ground_controlled'?: InputGroundControlled;
  'minecraft:inside_block_notifier'?: InsideBlockNotifier;
  'minecraft:insomnia'?: Insomnia;
  'minecraft:instant_despawn'?: InstantDespawn;
  'minecraft:interact'?: Interact;
  'minecraft:inventory'?: Inventory;
  'minecraft:is_baby'?: IsBaby;
  'minecraft:is_charged'?: IsCharged;
  'minecraft:is_chested'?: IsChested;
  'minecraft:is_dyeable'?: IsDyeable;
  'minecraft:is_hidden_when_invisible'?: IsHiddenWhenInvisible;
  'minecraft:is_ignited'?: IsIgnited;
  'minecraft:is_illager_captain'?: IsIllagerCaptain;
  'minecraft:is_saddled'?: IsSaddled;
  'minecraft:is_shaking'?: IsShaking;
  'minecraft:is_sheared'?: IsSheared;
  'minecraft:is_stackable'?: IsStackable;
  'minecraft:is_stunned'?: IsStunned;
  'minecraft:is_tamed'?: IsTamed;
  'minecraft:item_controllable'?: ItemControllable;
  'minecraft:item_hopper'?: ItemHopper;
  'minecraft:jump.dynamic'?: JumpDynamic;
  'minecraft:jump.static'?: JumpStatic;
  'minecraft:knockback_resistance'?: KnockbackResistance;
  'minecraft:lava_movement'?: LavaMovement;
  'minecraft:leashable'?: Leashable;
  'minecraft:lookat'?: Lookat;
  'minecraft:loot'?: Loot;
  'minecraft:managed_wandering_trader'?: ManagedWanderingTrader;
  'minecraft:mark_variant'?: MarkVariant;
  'minecraft:mob_effect'?: MobEffect;
  'minecraft:movement_sound_distance_offset'?: MovementSoundDistanceOffset;
  'minecraft:movement.amphibious'?: MovementAmphibious;
  'minecraft:movement.basic'?: MovementBasic;
  'minecraft:movement.fly'?: MovementFly;
  'minecraft:movement.generic'?: MovementGeneric;
  'minecraft:movement.glide'?: MovementGlide;
  'minecraft:movement.hover'?: MovementHover;
  'minecraft:movement.jump'?: MovementJump;
  'minecraft:movement.skip'?: MovementSkip;
  'minecraft:movement.sway'?: MovementSway;
  'minecraft:movement'?: Movement;
  'minecraft:nameable'?: Nameable;
  'minecraft:navigation.climb'?: NavigationClimb;
  'minecraft:navigation.float'?: NavigationFloat;
  'minecraft:navigation.fly'?: NavigationFly;
  'minecraft:navigation.generic'?: NavigationGeneric;
  'minecraft:navigation.hover'?: NavigationHover;
  'minecraft:navigation.swim'?: NavigationSwim;
  'minecraft:navigation.walk'?: NavigationWalk;
  'minecraft:npc'?: Npc;
  'minecraft:on_death'?: OnDeath1;
  'minecraft:on_friendly_anger'?: OnFriendlyAnger;
  'minecraft:on_hurt_by_player'?: OnHurtByPlayer;
  'minecraft:on_hurt'?: OnHurt;
  'minecraft:on_ignite'?: OnIgnite;
  'minecraft:on_start_landing'?: OnStartLanding;
  'minecraft:on_start_takeoff'?: OnStartTakeoff;
  'minecraft:on_target_acquired'?: OnTargetAcquired;
  'minecraft:on_target_escape'?: OnTargetEscape;
  'minecraft:on_wake_with_owner'?: OnWakeWithOwner;
  'minecraft:out_of_control'?: OutOfControl;
  'minecraft:peek'?: Peek;
  'minecraft:persistent'?: Persistent;
  'minecraft:physics'?: Physics;
  'minecraft:player.exhaustion'?: PlayerExhaustion;
  'minecraft:player.experience'?: PlayerExperience;
  'minecraft:player.level'?: PlayerLevel;
  'minecraft:player.saturation'?: PlayerSaturation;
  'minecraft:preferred_path'?: PreferredPath;
  'minecraft:projectile'?: Projectile;
  'minecraft:push_through'?: PushThrough;
  'minecraft:pushable'?: Pushable;
  'minecraft:raid_trigger'?: RaidTrigger;
  'minecraft:rail_movement'?: RailMovement;
  'minecraft:rail_sensor'?: RailSensor;
  'minecraft:ravager_blocked'?: RavagerBlocked;
  'minecraft:rideable'?: Rideable;
  'minecraft:scale_by_age'?: ScaleByAge;
  'minecraft:scale'?: Scale2;
  'minecraft:scheduler'?: Scheduler;
  'minecraft:shareables'?: Shareables;
  'minecraft:shooter'?: Shooter;
  'minecraft:sittable'?: Sittable;
  'minecraft:skin_id'?: SkinId;
  'minecraft:sound_volume'?: SoundVolume;
  'minecraft:spawn_entity'?: SpawnEntity;
  'minecraft:spell_effects'?: SpellEffects;
  'minecraft:strength'?: Strength;
  'minecraft:suspect_tracking'?: SuspectTracking;
  'minecraft:tameable'?: Tameable;
  'minecraft:tamemount'?: Tamemount;
  'minecraft:target_nearby_sensor'?: TargetNearbySensor;
  'minecraft:teleport'?: Teleport;
  'minecraft:tick_world'?: TickWorld;
  'minecraft:timer'?: Timer;
  'minecraft:trade_resupply'?: TradeResupply;
  'minecraft:trade_table'?: TradeTable;
  'minecraft:trail'?: Trail;
  'minecraft:transformation'?: Transformation;
  'minecraft:trust'?: Trust;
  'minecraft:trusting'?: Trusting;
  'minecraft:type_family'?: TypeFamily;
  'minecraft:underwater_movement'?: UnderwaterMovement;
  'minecraft:variable_max_auto_step'?: VariableMaxAutoStep;
  'minecraft:variant'?: Variant;
  'minecraft:vibration_damper'?: VibrationDamper;
  'minecraft:vibration_listener'?: VibrationListener;
  'minecraft:walk_animation_speed'?: WalkAnimationSpeed;
  'minecraft:wants_jockey'?: WantsJockey;
  'minecraft:water_movement'?: WaterMovement;
  'minecraft:behavior.admire_item'?: AdmireItem1;
  'minecraft:behavior.avoid_block'?: AvoidBlock;
  'minecraft:behavior.avoid_mob_type'?: AvoidMobType;
  'minecraft:behavior.barter'?: Barter1;
  'minecraft:behavior.beg'?: Beg;
  'minecraft:behavior.break_door'?: BreakDoor;
  'minecraft:behavior.breed'?: Breed;
  'minecraft:behavior.celebrate_survive'?: CelebrateSurvive;
  'minecraft:behavior.celebrate'?: Celebrate;
  'minecraft:behavior.charge_attack'?: ChargeAttack;
  'minecraft:behavior.charge_held_item'?: ChargeHeldItem;
  'minecraft:behavior.circle_around_anchor'?: CircleAroundAnchor;
  'minecraft:behavior.controlled_by_player'?: ControlledByPlayer;
  'minecraft:behavior.croak'?: Croak;
  'minecraft:behavior.defend_trusted_target'?: DefendTrustedTarget;
  'minecraft:behavior.defend_village_target'?: DefendVillageTarget;
  'minecraft:behavior.delayed_attack'?: DelayedAttack;
  'minecraft:behavior.dig'?: Dig;
  'minecraft:behavior.door_interact'?: DoorInteract;
  'minecraft:behavior.dragonchargeplayer'?: Dragonchargeplayer;
  'minecraft:behavior.dragondeath'?: Dragondeath;
  'minecraft:behavior.dragonflaming'?: Dragonflaming;
  'minecraft:behavior.dragonholdingpattern'?: Dragonholdingpattern;
  'minecraft:behavior.dragonlanding'?: Dragonlanding;
  'minecraft:behavior.dragonscanning'?: Dragonscanning;
  'minecraft:behavior.dragonstrafeplayer'?: Dragonstrafeplayer;
  'minecraft:behavior.dragontakeoff'?: Dragontakeoff;
  'minecraft:behavior.drink_milk'?: DrinkMilk;
  'minecraft:behavior.drink_potion'?: DrinkPotion;
  'minecraft:behavior.drop_item_for'?: DropItemFor;
  'minecraft:behavior.eat_block'?: EatBlock;
  'minecraft:behavior.eat_carried_item'?: EatCarriedItem;
  'minecraft:behavior.eat_mob'?: EatMob;
  'minecraft:behavior.emerge'?: EatMob;
  'minecraft:behavior.enderman_leave_block'?: EndermanLeaveBlock;
  'minecraft:behavior.enderman_take_block'?: EndermanTakeBlock;
  'minecraft:behavior.equip_item'?: EquipItem1;
  'minecraft:behavior.explore_outskirts'?: ExploreOutskirts;
  'minecraft:behavior.fertilize_farm_block'?: FertilizeFarmBlock;
  'minecraft:behavior.find_cover'?: FindCover;
  'minecraft:behavior.find_mount'?: FindMount;
  'minecraft:behavior.find_underwater_treasure'?: FindUnderwaterTreasure;
  'minecraft:behavior.flee_sun'?: FleeSun;
  'minecraft:behavior.float_wander'?: FloatWander;
  'minecraft:behavior.float'?: Float;
  'minecraft:behavior.follow_caravan'?: FollowCaravan;
  'minecraft:behavior.follow_mob'?: FollowMob;
  'minecraft:behavior.follow_owner'?: FollowOwner;
  'minecraft:behavior.follow_parent'?: FollowParent;
  'minecraft:behavior.follow_target_captain'?: FollowTargetCaptain;
  'minecraft:behavior.go_and_give_items_to_noteblock'?: GoAndGiveItemsToNoteblock;
  'minecraft:behavior.go_and_give_items_to_owner'?: GoAndGiveItemsToOwner;
  'minecraft:behavior.go_home'?: GoHome;
  'minecraft:behavior.guardian_attack'?: GuardianAttack;
  'minecraft:behavior.harvest_farm_block'?: HarvestFarmBlock;
  'minecraft:behavior.hide'?: Hide1;
  'minecraft:behavior.hold_ground'?: HoldGround;
  'minecraft:behavior.hurt_by_target'?: HurtByTarget;
  'minecraft:behavior.inspect_bookshelf'?: InspectBookshelf;
  'minecraft:behavior.jump_to_block'?: JumpToBlock;
  'minecraft:behavior.knockback_roar'?: KnockbackRoar;
  'minecraft:behavior.lay_down'?: LayDown;
  'minecraft:behavior.lay_egg'?: LayEgg;
  'minecraft:behavior.leap_at_target'?: LeapAtTarget;
  'minecraft:behavior.look_at_entity'?: LookAtEntity;
  'minecraft:behavior.look_at_player'?: LookAtPlayer;
  'minecraft:behavior.look_at_target'?: LookAtTarget;
  'minecraft:behavior.look_at_trading_player'?: LookAtTradingPlayer;
  'minecraft:behavior.make_love'?: MakeLove;
  'minecraft:behavior.melee_attack'?: MeleeAttack;
  'minecraft:behavior.mingle'?: Mingle;
  'minecraft:behavior.mount_pathing'?: MountPathing;
  'minecraft:behavior.move_indoors'?: MoveIndoors;
  'minecraft:behavior.move_outdoors'?: MoveOutdoors;
  'minecraft:behavior.move_through_village'?: MoveThroughVillage;
  'minecraft:behavior.move_to_block'?: MoveToBlock;
  'minecraft:behavior.move_to_land'?: MoveToLand;
  'minecraft:behavior.move_to_lava'?: MoveToLava;
  'minecraft:behavior.move_to_liquid'?: MoveToLiquid;
  'minecraft:behavior.move_to_poi'?: MoveToPoi;
  'minecraft:behavior.move_to_random_block'?: MoveToRandomBlock;
  'minecraft:behavior.move_to_village'?: MoveToVillage;
  'minecraft:behavior.move_to_water'?: MoveToWater;
  'minecraft:behavior.move_towards_dwelling_restriction'?: MoveTowardsDwellingRestriction;
  'minecraft:behavior.move_towards_home_restriction'?: MoveTowardsHomeRestriction;
  'minecraft:behavior.move_towards_restriction'?: MoveTowardsRestriction;
  'minecraft:behavior.move_towards_target'?: MoveTowardsTarget;
  'minecraft:behavior.nap'?: Nap;
  'minecraft:behavior.nearest_attackable_target'?: NearestAttackableTarget;
  'minecraft:behavior.nearest_prioritized_attackable_target'?: NearestPrioritizedAttackableTarget;
  'minecraft:behavior.ocelot_sit_on_block'?: OcelotSitOnBlock;
  'minecraft:behavior.ocelotattack'?: Ocelotattack;
  'minecraft:behavior.offer_flower'?: OfferFlower;
  'minecraft:behavior.open_door'?: OpenDoor;
  'minecraft:behavior.owner_hurt_by_target'?: OwnerHurtByTarget;
  'minecraft:behavior.owner_hurt_target'?: OwnerHurtTarget;
  'minecraft:behavior.panic'?: Panic;
  'minecraft:behavior.peek'?: Peek1;
  'minecraft:behavior.pet_sleep_with_owner'?: PetSleepWithOwner;
  'minecraft:behavior.pickup_items'?: PickupItems;
  'minecraft:behavior.play_dead'?: PlayDead;
  'minecraft:behavior.play'?: Play;
  'minecraft:behavior.player_ride_tamed'?: PlayerRideTamed;
  'minecraft:behavior.raid_garden'?: RaidGarden;
  'minecraft:behavior.ram_attack'?: RamAttack;
  'minecraft:behavior.random_breach'?: RandomBreach;
  'minecraft:behavior.random_fly'?: RandomFly;
  'minecraft:behavior.random_hover'?: RandomHover;
  'minecraft:behavior.random_look_around_and_sit'?: RandomLookAroundAndSit;
  'minecraft:behavior.random_look_around'?: RandomLookAround;
  'minecraft:behavior.random_sitting'?: RandomSitting;
  'minecraft:behavior.random_stroll'?: RandomStroll;
  'minecraft:behavior.random_swim'?: RandomSwim;
  'minecraft:behavior.ranged_attack'?: RangedAttack;
  'minecraft:behavior.receive_love'?: ReceiveLove;
  'minecraft:behavior.restrict_open_door'?: RestrictOpenDoor;
  'minecraft:behavior.restrict_sun'?: RestrictSun;
  'minecraft:behavior.rise_to_liquid_level'?: RiseToLiquidLevel;
  'minecraft:behavior.roar'?: Roar;
  'minecraft:behavior.roll'?: Roll;
  'minecraft:behavior.run_around_like_crazy'?: RunAroundLikeCrazy;
  'minecraft:behavior.scared'?: Scared;
  'minecraft:behavior.send_event'?: SendEvent;
  'minecraft:behavior.share_items'?: ShareItems;
  'minecraft:behavior.silverfish_merge_with_stone'?: SilverfishMergeWithStone;
  'minecraft:behavior.silverfish_wake_up_friends'?: SilverfishWakeUpFriends;
  'minecraft:behavior.skeleton_horse_trap'?: SkeletonHorseTrap;
  'minecraft:behavior.sleep'?: Sleep;
  'minecraft:behavior.slime_attack'?: SlimeAttack;
  'minecraft:behavior.slime_float'?: SlimeFloat;
  'minecraft:behavior.slime_keep_on_jumping'?: SlimeKeepOnJumping;
  'minecraft:behavior.slime_random_direction'?: SlimeRandomDirection;
  'minecraft:behavior.snacking'?: Snacking;
  'minecraft:behavior.sneeze'?: Sneeze;
  'minecraft:behavior.sonic_boom'?: SonicBoom;
  'minecraft:behavior.squid_dive'?: SquidDive;
  'minecraft:behavior.squid_flee'?: SquidFlee;
  'minecraft:behavior.squid_idle'?: SquidIdle;
  'minecraft:behavior.squid_move_away_from_ground'?: SquidMoveAwayFromGround;
  'minecraft:behavior.squid_out_of_water'?: SquidOutOfWater;
  'minecraft:behavior.stalk_and_pounce_on_target'?: StalkAndPounceOnTarget;
  'minecraft:behavior.stay_near_noteblock'?: StayNearNoteblock;
  'minecraft:behavior.stay_while_sitting'?: StayWhileSitting;
  'minecraft:behavior.stomp_attack'?: StompAttack;
  'minecraft:behavior.stomp_turtle_egg'?: StompTurtleEgg;
  'minecraft:behavior.stroll_towards_village'?: StrollTowardsVillage;
  'minecraft:behavior.summon_entity'?: SummonEntity;
  'minecraft:behavior.swell'?: Swell;
  'minecraft:behavior.swim_idle'?: SwimIdle;
  'minecraft:behavior.swim_wander'?: SwimWander;
  'minecraft:behavior.swim_with_entity'?: SwimWithEntity;
  'minecraft:behavior.swoop_attack'?: SwoopAttack;
  'minecraft:behavior.take_flower'?: TakeFlower;
  'minecraft:behavior.target_when_pushed'?: TargetWhenPushed;
  'minecraft:behavior.tempt'?: Tempt;
  'minecraft:behavior.trade_interest'?: TradeInterest;
  'minecraft:behavior.trade_with_player'?: TradeWithPlayer;
  'minecraft:behavior.vex_copy_owner_target'?: VexCopyOwnerTarget;
  'minecraft:behavior.vex_random_move'?: VexRandomMove;
  'minecraft:behavior.wither_random_attack_pos_goal'?: WitherRandomAttackPosGoal;
  'minecraft:behavior.wither_target_highest_damage'?: WitherTargetHighestDamage;
  'minecraft:behavior.work'?: Work;
  'minecraft:behavior.work_composter'?: WorkComposter;
}
/**
 * The events that the entity can run, these add or remove components_groups.
 */
export interface Events {
  'minecraft:entity_transformed'?: EntityTransformed;
  'minecraft:entity_born'?: EntityBorn;
  'minecraft:entity_spawned'?: EntitySpawned;
  'minecraft:on_prime'?: OnPrime;
  [k: string]: EventBase;
}
/**
 * Event called on an entity that transforms into another entity.
 */
export interface EntityTransformed {
  filters?: Filters2;
  trigger?: Trigger17;
  add?: Add1;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
  set_property?: SetProperty;
}
/**
 * What gets added when the event gets triggered.
 */
export interface Add1 {
  component_groups?: ComponentGroups1;
}
/**
 * What gets removed when the event gets triggered.
 */
export interface Remove {
  component_groups?: ComponentGroups1;
}
/**
 * Randomly selects one of the following items based upon their weight and the total weights.
 */
export interface Randomize1 {
  add?: Add2;
  remove?: Remove1;
  trigger?: Trigger18;
  /**
   * The weight on how likely this section is to trigger.
   */
  weight?: number;
  [k: string]: unknown;
}
/**
 * What gets added when the event gets triggered.
 */
export interface Add2 {
  component_groups?: ComponentGroups1;
}
/**
 * What gets removed when the event gets triggered.
 */
export interface Remove1 {
  component_groups?: ComponentGroups1;
}
/**
 * Filters and components to be added.
 */
export interface Sequence4 {
  add?: Add3;
  remove?: Remove2;
  trigger?: Trigger19;
  filters?: Filters2;
  [k: string]: unknown;
}
/**
 * What gets added when the event gets triggered.
 */
export interface Add3 {
  component_groups?: ComponentGroups1;
}
/**
 * What gets removed when the event gets triggered.
 */
export interface Remove2 {
  component_groups?: ComponentGroups1;
}
/**
 * Sets a property on the entity.
 */
export interface SetProperty {
  [k: string]: Property;
}
/**
 * Event called on an entity that is spawned through two entities breeding.
 */
export interface EntityBorn {
  filters?: Filters2;
  trigger?: Trigger17;
  add?: Add1;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
  set_property?: SetProperty;
}
/**
 * Event called on an entity that is placed in the level.
 */
export interface EntitySpawned {
  filters?: Filters2;
  trigger?: Trigger17;
  add?: Add1;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
  set_property?: SetProperty;
}
/**
 * Event called on an entity whose fuse is lit and is ready to explode.
 */
export interface OnPrime {
  filters?: Filters2;
  trigger?: Trigger17;
  add?: Add1;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
  set_property?: SetProperty;
}
export interface EventBase {
  filters?: Filters2;
  trigger?: Trigger17;
  add?: Add1;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
  set_property?: SetProperty;
}
