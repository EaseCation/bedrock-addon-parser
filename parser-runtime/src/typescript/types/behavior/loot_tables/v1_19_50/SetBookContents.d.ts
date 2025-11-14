/**
 * behavior/loot_tables/functions/set_book_contents.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:21.963Z
 */

/**
 * UNDOCUMENTED.
 */
export type Function = 'set_book_contents';
/**
 * UNDOCUMENTED.
 */
export type Pages = string[];

/**
 * The function set_book_contents.
 */
export interface SetBookContents {
  function: Function;
  /**
   * UNDOCUMENTED.
   */
  author: string;
  /**
   * UNDOCUMENTED.
   */
  title: string;
  pages: Pages;
}
