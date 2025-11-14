/**
 * behavior/items/format/components/armor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.057Z
 */

/**
 * Texture Type to apply for the armor. Note that Horse armor is restricted to leather, iron, gold, or diamond.
 */
export type TextureType =
  | 'gold'
  | 'none'
  | 'leather'
  | 'chain'
  | 'iron'
  | 'diamond'
  | 'elytra'
  | 'turtle'
  | 'netherite';

/**
 * The armor item component determines the amount of protection you have in your armor item.
 */
export interface Armor {
  /**
   * How much protection does the armor item have.
   */
  protection: number;
  texture_type: TextureType;
}
