/**
 * resource/blocks.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.565Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * A version that tells Minecraft what type of data format can be expected when reading this file.
 *
 * @minItems 3
 * @maxItems 3
 */
export type FormatVersion1 = [number, number, number];
/**
 * Carried Textures.
 */
export type CarriedTextures =
  | string
  | {
      down?: string;
      up?: string;
      side?: string;
      south?: string;
      north?: string;
      west?: string;
      east?: string;
    };
/**
 * Marks if this block is isotropic or not, or which side are.
 */
export type Isotropic =
  | boolean
  | {
      down?: boolean;
      up?: boolean;
      side?: boolean;
      south?: boolean;
      north?: boolean;
      west?: boolean;
      east?: boolean;
    };
/**
 * The sound definition of this block.
 */
export type Sound =
  | 'amethyst_block'
  | 'amethyst_cluster'
  | 'ancient_debris'
  | 'anvil'
  | 'azalea'
  | 'azalea_leaves'
  | 'bamboo'
  | 'bamboo_sapling'
  | 'bamboo_wood'
  | 'bamboo_wood_hanging_sign'
  | 'basalt'
  | 'big_dripleaf'
  | 'bone_block'
  | 'calcite'
  | 'candle'
  | 'cave_vines'
  | 'chain'
  | 'cherry_leaves'
  | 'cherry_wood'
  | 'cherry_wood_hanging_sign'
  | 'chiseled_bookshelf'
  | 'cloth'
  | 'comparator'
  | 'copper'
  | 'copper_bulb'
  | 'copper_grate'
  | 'coral'
  | 'decorated_pot'
  | 'deepslate'
  | 'deepslate_bricks'
  | 'dirt_with_roots'
  | 'dripstone_block'
  | 'frog_spawn'
  | 'froglight'
  | 'fungus'
  | 'glass'
  | 'grass'
  | 'gravel'
  | 'hanging_roots'
  | 'hanging_sign'
  | 'heavy_core'
  | 'honey_block'
  | 'itemframe'
  | 'ladder'
  | 'lantern'
  | 'large_amethyst_bud'
  | 'lever'
  | 'lodestone'
  | 'mangrove_roots'
  | 'medium_amethyst_bud'
  | 'metal'
  | 'moss_block'
  | 'moss_carpet'
  | 'mud'
  | 'mud_bricks'
  | 'muddy_mangrove_roots'
  | 'nether_brick'
  | 'nether_gold_ore'
  | 'nether_sprouts'
  | 'nether_wart'
  | 'nether_wood'
  | 'nether_wood_hanging_sign'
  | 'netherite'
  | 'netherrack'
  | 'nylium'
  | 'packed_mud'
  | 'pink_petals'
  | 'pointed_dripstone'
  | 'polished_tuff'
  | 'powder_snow'
  | 'roots'
  | 'sand'
  | 'scaffolding'
  | 'sculk'
  | 'sculk_catalyst'
  | 'sculk_sensor'
  | 'sculk_shrieker'
  | 'sculk_vein'
  | 'shroomlight'
  | 'slime'
  | 'small_amethyst_bud'
  | 'snow'
  | 'soul_sand'
  | 'soul_soil'
  | 'spore_blossom'
  | 'stem'
  | 'stone'
  | 'suspicious_gravel'
  | 'suspicious_sand'
  | 'sweet_berry_bush'
  | 'trial_spawner'
  | 'tuff'
  | 'tuff_bricks'
  | 'vault'
  | 'vines'
  | 'web'
  | 'wood';
/**
 * Textures.
 */
export type Textures =
  | string
  | {
      down?: string;
      up?: string;
      side?: string;
      south?: string;
      north?: string;
      west?: string;
      east?: string;
    };

/**
 * The minecraft block definition file.
 */
export interface Blocks {
  format_version?: FormatVersion | FormatVersion1;
  [k: string]: Block;
}
/**
 * Block texture definition.
 */
export interface Block {
  /**
   * Specifies the gamma brightness level to apply to the block texture.
   */
  brightness_gamma?: number;
  carried_textures?: CarriedTextures;
  isotropic?: Isotropic;
  sound?: Sound;
  textures?: Textures;
}
