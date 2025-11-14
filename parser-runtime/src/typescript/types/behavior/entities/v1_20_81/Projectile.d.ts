/**
 * behavior/entities/format/components/projectile.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.294Z
 */

/**
 * The sound that plays when the projectile hits the ground.
 */
export type HitGroundSound = string;
/**
 * The sound that plays when the projectile hits something.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;
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
      target?: Target;
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
 * The shape of the area that is frozen.
 */
export type Shape = 'sphere' | 'cube';
/**
 * The damage dealt on impact.
 */
export type Damage = number | [] | [number] | [number, number];
/**
 * Potion spawns an area of effect cloud. See the table below for all spawn_aoe_cloud parameters.
 */
export type SpawnAOECloud = boolean;
/**
 * The sound that plays when the projectile is shot.
 */
export type ShootSound = string;

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
  hit_sound?: BlockceptionMinecraftGeneralSoundEvent;
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
  mob_effect?: MobEffect;
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
export interface MobEffect {
  [k: string]: unknown;
}
/**
 * Defines the behaviors that may execute on a projectile's hit, including impact damage, impact effect, and stuck in ground. See more on these parameters below.
 */
export interface OnHit {
  arrow_effect?: ArrowEffect;
  /**
   * Determines if the struck object is set on fire.
   */
  catch_fire?: boolean;
  definition_event?: DefinitionEvent;
  /**
   * If the target is on fire, then douse the fire.
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
  mob_effect?: MobEffect1;
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
 * The target receives a mob effect. See the table below for all arrow_effect parameters.
 */
export interface ArrowEffect {
  /**
   * If true, the effect will be applied to blocking targets.
   */
  apply_effect_to_blocking_targets?: boolean;
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
  damage?: Damage;
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
  /**
   * If true, the projectile will bounce
   */
  should_bounce?: boolean;
}
/**
 * The target receives a mob effect. See the table below for all mob_effect parameters.
 */
export interface MobEffect1 {
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
