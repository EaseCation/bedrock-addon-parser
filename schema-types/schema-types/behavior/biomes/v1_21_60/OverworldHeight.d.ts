/**
 * behavior/biomes/components/overworld_height.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.619Z
 */

/**
 * UNDOCUMENTED.
 */
export type NoiseParams = [] | [number] | [number, number];
/**
 * UNDOCUMENTED.
 */
export type NoiseType =
  | 'stone_beach'
  | 'deep_ocean'
  | 'default'
  | 'default_mutated'
  | 'lowlands'
  | 'river'
  | 'ocean'
  | 'taiga'
  | 'mountains'
  | 'highlands'
  | 'mushroom'
  | 'less_extreme'
  | 'extreme'
  | 'beach'
  | 'swamp';

/**
 * Noise parameters used to drive terrain height in the Overworld.
 */
export interface OverworldHeight {
  noise_params?: NoiseParams;
  noise_type?: NoiseType;
}
