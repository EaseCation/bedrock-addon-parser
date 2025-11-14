/**
 * behavior/blocks/format/components/crafting_table.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.808Z
 */

/**
 * Defines the tags recipes should define to be crafted on this table. Limited to 64 tags. Each tag is limited to 64 characters.
 *
 * @maxItems 64
 */
export type CraftingTags = string[];

/**
 * [Experimental] Makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes.
 */
export interface CraftingTable {
  crafting_tags?: CraftingTags;
  /**
   * Specifies the language file key that maps to what text will be displayed in the UI of this table. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this field is omitted, the name displayed will default to the name specified in the "display_name" component. If this block has no "display_name" component, the name displayed will default to the name of the block.
   */
  table_name?: string;
}
