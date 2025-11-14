/**
 * resource/biomes/biomes.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.820Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;

/**
 * Minecraft client_biome files define client-side settings for biomes in resource packs. This is the new preferred location for per-biome settings that used to be in biomes_client.json.
 */
export interface ClientBiome {
  format_version: FormatVersion;
  'minecraft:client_biome': ClientBiomeDefinitions;
}
/**
 * A client biome definition.
 */
export interface ClientBiomeDefinitions {
  description: ClientBiomeDescription;
  components: Components;
}
/**
 * Contains non-component settings for a Client Biome.
 */
export interface ClientBiomeDescription {
  /**
   * The name of the Client Biome, used by other features like the '/locate biome' command. Must match the name of a Biome defined by the game or a behavior pack.
   */
  identifier: string;
}
/**
 * Any components that this Client Biome uses.
 */
export interface Components {
  'minecraft:ambient_sounds'?: AmbientSounds;
  'minecraft:biome_music'?: BiomeMusic;
  'minecraft:fog_appearance'?: FogAppearance;
  'minecraft:sky_color'?: SkyColor;
  'minecraft:water_appearance'?: WaterAppearance;
}
/**
 * Sets the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file.
 */
export interface AmbientSounds {
  /**
   * Named sound that occasionally plays at the listener position.
   */
  addition?: string;
  /**
   * Named sound that loops while the listener position is inside the biome.
   */
  loop?: string;
  /**
   * Named sound that rarely plays at a nearby air block position when the light level is low.
   */
  mood?: string;
}
/**
 * Affects how music plays within the biome.
 */
export interface BiomeMusic {
  /**
   * Multiplier temporarily and gradually applied to music volume when within this biome.
   */
  volume_multiplier?: number;
}
/**
 * Set the fog settings used during rendering. Biomes without this component will have default fog settings.
 */
export interface FogAppearance {
  /**
   * Identifier of fog definition to use.
   */
  fog_identifier: string;
}
/**
 * Set the sky color used during rendering. Biomes without this component will have default sky color behavior.
 */
export interface SkyColor {
  /**
   * RGB color of the sky.
   */
  sky_color: string;
}
/**
 * Set the water surface color used during rendering. Biomes without this component will have default water surface color behavior.
 */
export interface WaterAppearance {
  /**
   * RGB color of the water surface.
   */
  surface_color: string;
}
