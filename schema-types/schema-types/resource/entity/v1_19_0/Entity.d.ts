/**
 * resource/entity/1.10.0/entity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.354Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The entity indentifier.
 */
export type BlockceptionMinecraftEntityIdentifier = string;
/**
 * A collection of Render controller definitions.
 *
 * @minItems 1
 */
export type RenderControllers = [
  (
    | string
    | {
        /**
         * A render controller activate on conditional.
         */
        [k: string]: string;
      }
  ),
  ...(
    | string
    | {
        /**
         * A render controller activate on conditional.
         */
        [k: string]: string;
      }
  )[],
];
/**
 * The array of items to animate.
 *
 * @minItems 1
 */
export type Animate = [
  string | AnimationControllerCondition,
  ...(string | AnimationControllerCondition)[],
];
/**
 * Clientside molang variables that are to be evualated during the creation of the entity.
 *
 * @minItems 1
 */
export type Initialize = [MolangString180, ...MolangString180[]];
/**
 * Clientside molang variables that are to be evualated during the creation of the entity.
 */
export type MolangString180 = string;
/**
 * Clientside molang variables that are to be evualated during the animation.
 */
export type PreAnimation1 = string;
/**
 * Clientside molang variables that are to be evualated during the animation.
 */
export type PreAnimation = PreAnimation1[];
/**
 * UNDOCUMENTED: parent setup.
 */
export type ParentSetup = ParentSetup1 & ParentSetup2;
export type ParentSetup1 = string | number;
export type ParentSetup2 = string;
/**
 * Scale sets the scale of the mob's geometry.
 */
export type Scale = Scale1 & Scale2;
export type Scale1 = string | number;
export type Scale2 = string;
/**
 * Scale sets the scale of the mob's geometry.
 */
export type ScaleX = ScaleX1 & ScaleX2;
export type ScaleX1 = string | number;
export type ScaleX2 = string;
/**
 * Scale sets the scale of the mob's geometry.
 */
export type ScaleY = ScaleY1 & ScaleY2;
export type ScaleY1 = string | number;
export type ScaleY2 = string;
/**
 * Scale sets the scale of the mob's geometry.
 */
export type ScaleZ = ScaleZ1 & ScaleZ2;
export type ScaleZ1 = string | number;
export type ScaleZ2 = string;
/**
 * Bones and effects will still be updated if the entity is off screen if this expression returns anything other than 0.0.
 */
export type ShouldUpdateBonesAndEffectsOffscreen = boolean | MolangString1801;
/**
 * Clientside molang variables that are to be evualated during the creation of the entity.
 */
export type MolangString1801 = string;
/**
 * Effects will still be updated if the entity is off screen if this expression or `should_update_bones_and_effects_offscreen` returns anything other than 0.0.
 */
export type ShouldUpdateEffectsOffscreen = boolean | MolangString1802;
/**
 * Clientside molang variables that are to be evualated during the creation of the entity.
 */
export type MolangString1802 = string;
/**
 *  If a variable is public, it can be read by other mobs. See the molang `->` operator for details.
 */
export type Variable = 'public';

/**
 * A client side entity definition.
 */
export interface ActorEntity1100 {
  format_version: FormatVersion;
  'minecraft:client_entity': ClientEntity;
}
/**
 * The entity description for clientside rendering, animations and models.
 */
export interface ClientEntity {
  description: Description;
}
/**
 * The entity description for clientside rendering, animations and models.
 */
export interface Description {
  animations?: Animations;
  /**
   * Whether or not attachables are enaboled.
   */
  enable_attachables?: boolean;
  geometry?: Geometry;
  /**
   * UNDOCUMENTED.
   */
  queryable_geometry?: string;
  /**
   * Hides or shows the possible armor.
   */
  hide_armor?: boolean;
  /**
   * This determines if the item held by an entity should render fully lit up (if true), or depending on surrounding lighting.
   */
  held_item_ignores_lighting?: boolean;
  identifier: BlockceptionMinecraftEntityIdentifier;
  materials?: Materials;
  /**
   * The minimum engine version to be used.
   */
  min_engine_version?: string;
  particle_effects?: ParticleEffects;
  particle_emitters?: ParticleEmitters;
  render_controllers?: RenderControllers;
  scripts?: Scripts;
  sound_effects?: SoundEffects;
  spawn_egg?: SpawnEgg;
  textures?: Textures;
}
/**
 * These names are used by the animation controller JSON. Players can reference animations from the vanilla Minecraft Resource Pack or create their own. Custom animations should be in the animation folder at the root of the Resource Pack.
 */
export interface Animations {
  /**
   * These names are used by the animation controller JSON. Players can reference animations from the vanilla Minecraft Resource Pack or create their own. Custom animations should be in the animation folder at the root of the Resource Pack.
   */
  [k: string]: string;
}
/**
 * The reference to defined geometries in `<resource pack>/models/'.
 */
export interface Geometry {
  /**
   * The reference to the geometry.
   */
  [k: string]: string;
}
/**
 * A collection of material definitions.
 */
export interface Materials {
  /**
   * Material reference.
   */
  [k: string]: string;
}
/**
 * A collection of particle definitions.
 */
export interface ParticleEffects {
  /**
   * Particle reference.
   */
  [k: string]: string;
}
/**
 * A collection of particle emitters definitions.
 */
export interface ParticleEmitters {
  /**
   * Particle emitter reference.
   */
  [k: string]: string;
}
/**
 * The place where variables, and animations / controller to be run is specified.
 */
export interface Scripts {
  animate?: Animate;
  initialize?: Initialize;
  pre_animation?: PreAnimation;
  parent_setup?: ParentSetup;
  scale?: Scale;
  scalex?: ScaleX;
  scaley?: ScaleY;
  scalez?: ScaleZ;
  should_update_bones_and_effects_offscreen?: ShouldUpdateBonesAndEffectsOffscreen;
  should_update_effects_offscreen?: ShouldUpdateEffectsOffscreen;
  variables?: Variables;
}
/**
 * A single animation or animation controller to run on condition.
 */
export interface AnimationControllerCondition {
  [k: string]: string | number;
}
/**
 *  A list of variables that need certain settings applied to them. Currently, for the client, only `public` is supported.
 */
export interface Variables {
  [k: string]: Variable;
}
/**
 * A collection of sound effect definition.
 */
export interface SoundEffects {
  /**
   * A sound effect definition.
   */
  [k: string]: string;
}
/**
 * The definition of how the spawn_egg icon looks like.
 */
export interface SpawnEgg {
  /**
   * The basic color of the egg.
   */
  base_color?: string;
  /**
   * The colors of the dots on the egg.
   */
  overlay_color?: string;
  /**
   * The texture reference in item_texture.json
   */
  texture?: string;
  /**
   * The index of the texture.
   */
  texture_index?: number;
}
/**
 * A collection of references to textures in the resourcepack.
 */
export interface Textures {
  /**
   * A reference to a texture in the resourcepack.
   */
  [k: string]: string;
}
