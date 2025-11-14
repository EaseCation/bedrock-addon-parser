/**
 * behavior/entities/format/behaviors/eat_carried_item.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:24.867Z
 */

/**
 * How important this behavior is. Lower priority behaviors will be executed first.
 */
export type BlockceptionMinecraftBehaviorEntitiesPriority = number;

/**
 * If the mob is carrying a food item, the mob will eat it and the effects will be applied to the mob.
 */
export interface EatCarriedItem {
  priority?: BlockceptionMinecraftBehaviorEntitiesPriority;
  /**
   * Time in seconds the mob should wait before eating the item.
   */
  delay_before_eating?: number;
}
