/**
 * behavior/entities/format/components/inventory.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.579Z
 */

/**
 * Type of container this entity has. Can be horse, minecart_chest, chest_boat, minecart_hopper, inventory, container or hopper
 */
export type ContainerType =
  | 'horse'
  | 'minecart_chest'
  | 'chest_boat'
  | 'minecart_hopper'
  | 'inventory'
  | 'container'
  | 'hopper';

/**
 * Defines this entity's inventory properties.
 */
export interface Inventory {
  /**
   * Number of slots that this entity can gain per extra strength.
   */
  additional_slots_per_strength?: number;
  /**
   * If true, the contents of this inventory can be removed by a hopper.
   */
  can_be_siphoned_from?: boolean;
  container_type?: ContainerType;
  /**
   * Number of slots the container has.
   */
  inventory_size?: number;
  /**
   * If true, only the entity can access the inventory.
   */
  private?: boolean;
  /**
   * If true, the entity's inventory can only be accessed by its owner or itself.
   */
  restrict_to_owner?: boolean;
}
