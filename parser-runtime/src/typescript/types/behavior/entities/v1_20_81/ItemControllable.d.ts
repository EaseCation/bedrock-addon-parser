/**
 * behavior/entities/format/components/item_controllable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.568Z
 */

/**
 * List of items that can be used to control this entity.
 */
export type ControlItems = string[] | string;

/**
 * Efines what items can be used to control this entity while ridden.
 */
export interface ItemControllable {
  control_items?: ControlItems;
}
