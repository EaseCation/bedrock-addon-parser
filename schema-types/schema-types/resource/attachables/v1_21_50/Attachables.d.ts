/**
 * resource/attachables/1.10.0/attachables.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:55.033Z
 */

/**
 * The specification of animation controllers.
 */
export type AnimationControllers = unknown[];
/**
 * UNDOCUMENTED: identifier.
 */
export type BlockceptionMinecraftItemIdentifier = string;
/**
 * UNDOCUMENTED: render controllers.
 *
 * @minItems 1
 */
export type RenderControllers = [string, ...string[]];
/**
 * UNDOCUMENTED: animate.
 *
 * @minItems 1
 */
export type Animate = [Animate1, ...Animate1[]];
/**
 * UNDOCUMENTED: animate.
 */
export type Animate1 = string | Animate2;
/**
 * UNDOCUMENTED: initialize.
 */
export type Initialize1 = Initialize2 & Initialize3;
export type Initialize2 = string | number;
export type Initialize3 = string;
/**
 * UNDOCUMENTED: initialize.
 */
export type Initialize = Initialize1[];
/**
 * UNDOCUMENTED: pre aninamtion.
 */
export type PreAnimation1 = PreAnimation2 & PreAnimation3;
export type PreAnimation2 = string | number;
export type PreAnimation3 = string;
/**
 * UNDOCUMENTED: pre aninamtion.
 */
export type PreAnimation = PreAnimation1[];
/**
 * UNDOCUMENTED: parent setup.
 */
export type ParentSetup = ParentSetup1 & ParentSetup2;
export type ParentSetup1 = string | number;
export type ParentSetup2 = string;
/**
 * UNDOCUMENTED: scale.
 */
export type Scale = Scale1 & Scale2;
export type Scale1 = string | number;
export type Scale2 = string;
/**
 * UNDOCUMENTED: sound effects.
 *
 * @minItems 1
 */
export type SoundEffects = [string, ...string[]];

/**
 * UNDOCUMENTED.
 */
export interface ActorAnimation1100 {
  /**
   * A version that tells minecraft what type of data format can be expected when reading this file.
   */
  format_version: string;
  'minecraft:attachable': Attachables;
}
/**
 * The attachables definition.
 */
export interface Attachables {
  description: Description;
}
/**
 * UNDOCUMENTED: description.
 */
export interface Description {
  animations?: Animations;
  animation_controllers?: AnimationControllers;
  /**
   * UNDOCUMENTED: enable attachables.
   */
  enable_attachables?: boolean;
  geometry?: Geometry;
  identifier: BlockceptionMinecraftItemIdentifier;
  item?: Item;
  materials?: Materials;
  /**
   * The minimum engine needed to use this.
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
 * The collection of animations references.
 */
export interface Animations {
  /**
   * A single animation reference.
   */
  [k: string]: string;
}
/**
 * The geometry specification.
 */
export interface Geometry {
  /**
   * A single geometry reference.
   */
  [k: string]: string;
}
/**
 * UNDOCUMENTED.
 */
export interface Item {
  /**
   * UNDOCUMENTED.
   */
  [k: string]: string;
}
/**
 * A collection of material references.
 */
export interface Materials {
  /**
   * A single material reference.
   */
  [k: string]: string;
}
/**
 * A collection of particle effect references.
 */
export interface ParticleEffects {
  /**
   * A single particle effect reference.
   */
  [k: string]: string;
}
/**
 * UNDOCUMENTED: particle emitters.
 */
export interface ParticleEmitters {
  /**
   * UNDOCUMENTED: additionalProperties.
   */
  [k: string]: string;
}
/**
 * UNDOCUMENTED: scripts.
 */
export interface Scripts {
  animate?: Animate;
  initialize?: Initialize;
  pre_animation?: PreAnimation;
  parent_setup?: ParentSetup;
  scale?: Scale;
}
/**
 * UNDOCUMENTED: oneOf[1].
 */
export interface Animate2 {
  /**
   * UNDOCUMENTED: additionalProperties.
   */
  [k: string]: string;
}
/**
 * UNDOCUMENTED: spawn egg.
 */
export interface SpawnEgg {
  /**
   * UNDOCUMENTED: base colour.
   */
  base_colour?: string;
  /**
   * UNDOCUMENTED: overlay color.
   */
  overlay_color?: string;
  /**
   * UNDOCUMENTED: texture.
   */
  texture?: string;
  /**
   * UNDOCUMENTED: texture index.
   */
  texture_index?: number;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED: textures.
 */
export interface Textures {
  /**
   * UNDOCUMENTED: additionalProperties.
   */
  [k: string]: string;
}
