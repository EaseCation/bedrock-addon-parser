/**
 * behavior/items/format/components/cooldown.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.055Z
 */

/**
 * Cool down time for a component. After you use an item it becomes unusable for the duration specified by the `cool down time` setting in this component.
 */
export interface Cooldown {
  /**
   * The type of cool down for this item.
   */
  category: string;
  /**
   * The duration of time this item will spend cooling down before becoming usable again.
   */
  duration: number;
}
