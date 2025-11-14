/**
 * resource/sounds/sound_definitions.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.882Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The category this sound belongs to, for the user to control the volume on.
 */
export type SoundCategory =
  | 'ambient'
  | 'block'
  | 'music'
  | 'weather'
  | 'ui'
  | 'bucket'
  | 'neutral'
  | 'player'
  | 'hostile'
  | 'record'
  | 'bottle';
/**
 * UNDOCUMENTED: sounds.
 */
export type Sounds1 = SoundFilepath | Sounds2;
/**
 * The filepath to the sound, starts with `sounds/'.
 */
export type SoundFilepath = string;
/**
 * UNDOCUMENTED: name.
 */
export type Name = string;
/**
 * The collection of sounds minecraft can choice from.
 */
export type Sounds = Sounds1[];
/**
 * UNDOCUMENTED.
 */
export type MaxDistance = number | null;
/**
 * UNDOCUMENTED.
 */
export type MinDistance = number | null;
/**
 * UNDOCUMENTED: use legacy Maximum distance.
 */
export type UseLegacyMaximumDistance = 'true' | 'false';

/**
 * The collection of sound definitions this resourcepack has defined.
 */
export interface SoundDefinitions {
  format_version?: FormatVersion;
  sound_definitions?: SoundDefinitions1;
  __use_legacy_max_distance?: UseLegacyMaximumDistance;
}
/**
 * UNDOCUMENTED: sound definitions.
 */
export interface SoundDefinitions1 {
  [k: string]: Sound;
}
export interface Sound {
  /**
   * Whenever or not use legacy distance checking.
   */
  __use_legacy_max_distance?: boolean;
  category?: SoundCategory;
  sounds: Sounds;
  max_distance?: MaxDistance;
  min_distance?: MinDistance;
}
/**
 * A collection of sounds to choice from.
 */
export interface Sounds2 {
  /**
   * UNDOCUMENTED.
   */
  is3D?: boolean;
  /**
   * The pitch of the audio, 1 is nomial.
   */
  pitch?: number;
  /**
   * The volume of the audio, 1 is nomial.
   */
  volume?: number;
  /**
   * If marked true then minecraft will stream the audio.
   */
  stream?: boolean;
  name: Name;
  /**
   * UNDOCUMENTED.
   */
  weight?: number;
}
