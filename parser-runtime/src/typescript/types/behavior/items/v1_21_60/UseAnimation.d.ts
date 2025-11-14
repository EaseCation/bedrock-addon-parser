/**
 * behavior/items/format/components/use_animation.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:59.230Z
 */

/**
 * This component determines which animation plays when using the item.
 */
export type UseAnimation =
  | Animation
  | {
      value: Value;
    };
export type Animation =
  | 'bow'
  | 'brush'
  | 'camera'
  | 'crossbow'
  | 'drink'
  | 'eat'
  | 'none'
  | 'spear'
  | 'spyglass';
/**
 * Which animation to play when using the item.
 */
export type Value =
  | 'bow'
  | 'brush'
  | 'camera'
  | 'crossbow'
  | 'drink'
  | 'eat'
  | 'none'
  | 'spear'
  | 'spyglass';
