/**
 * resource/attachables/1.8.0/attachables.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.324Z
 */

/**
 * UNDOCUMENTED: animation controllers.
 *
 * @minItems 1
 */
export type AnimationControllers = [AnimationControllers1, ...AnimationControllers1[]];
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
 * UNDOCUMENTED: sound effects.
 *
 * @minItems 1
 */
export type SoundEffects = [string, ...string[]];
/**
 * UNDOCUMENTED: pre aninamtion.
 */
export type PreAnimation1 = string | number;
/**
 * UNDOCUMENTED: pre aninamtion.
 */
export type PreAnimation = PreAnimation1[];
/**
 * UNDOCUMENTED: animate.
 */
export type Animate1 = string | Animate2;
/**
 * UNDOCUMENTED: animate.
 */
export type Animate = Animate1[];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber = string | number;

/**
 * UNDOCUMENTED.
 */
export interface ActorAnimation180 {
  /**
   * A version that tells minecraft what type of data format can be expected when reading this file.
   */
  format_version: string;
  'minecraft:attachable': Attachables;
}
/**
 * The attachables definition for 1.8.0
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
  geometry: Geometry;
  identifier: BlockceptionMinecraftItemIdentifier;
  item?: Item;
  materials?: Materials;
  /**
   * UNDOCUMENTED: Minimum engine version.
   */
  min_engine_version?: string;
  particle_effects?: ParticleEffects;
  particle_emitters?: ParticleEmitters;
  render_controllers?: RenderControllers;
  sound_effects?: SoundEffects;
  spawn_egg?: SpawnEgg;
  scripts?: Scripts;
  textures?: Textures;
}
/**
 * The connecting of animations in animations controllers with the actuall animations, names should corosponds.
 */
export interface Animations {
  /**
   * UNDOCUMENTED: additionalProperties.
   */
  [k: string]: string;
}
/**
 * UNDOCUMENTED: animation controllers.
 */
export interface AnimationControllers1 {
  /**
   * UNDOCUMENTED: additionalProperties.
   */
  [k: string]: string;
}
/**
 * UNDOCUMENTED: geometry.
 */
export interface Geometry {
  /**
   * UNDOCUMENTED: additionalProperties.
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
 * UNDOCUMENTED: materials.
 */
export interface Materials {
  /**
   * UNDOCUMENTED: additionalProperties.
   */
  [k: string]: string;
}
/**
 * UNDOCUMENTED: particle effects.
 */
export interface ParticleEffects {
  /**
   * UNDOCUMENTED: additionalProperties.
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
 * UNDOCUMENTED: scripts.
 */
export interface Scripts {
  pre_animation?: PreAnimation;
  /**
   * UNDOCUMENTED: scale.
   */
  scale?: string;
  animate?: Animate;
  parent_setup?: MolangNumber;
  [k: string]: unknown;
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
 * UNDOCUMENTED: textures.
 */
export interface Textures {
  /**
   * UNDOCUMENTED: additionalProperties.
   */
  [k: string]: string;
}
