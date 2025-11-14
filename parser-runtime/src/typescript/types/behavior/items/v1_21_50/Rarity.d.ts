/**
 * behavior/items/format/components/rarity.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:50.832Z
 */

/**
 * Specifies the base rarity and subsequently color of the item name when the player hovers the cursor over the item.
 */
export type Rarity =
  | ('common' | 'uncommon' | 'rare' | 'epic')
  | {
      /**
       * Sets the base rarity of the item. The rarity of an item automatically increases when enchanted, either to Rare when the base rarity is Common or Uncommon, or Epic when the base rarity is Rare.
       */
      value?: 'common' | 'uncommon' | 'rare' | 'epic';
      [k: string]: unknown;
    };
