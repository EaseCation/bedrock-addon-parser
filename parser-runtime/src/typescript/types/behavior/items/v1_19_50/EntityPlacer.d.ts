/**
 * behavior/items/format/components/entity_placer.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:22.047Z
 */

/**
 * List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.
 */
export type DispenseOn = DispenseOn1[];
/**
 * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
 */
export type UseOn = UseOn1[];

/**
 * Entity placer item component. You can specifiy allowed blocks that the item is restricted to.
 */
export interface EntityPlacer {
  /**
   * The entity to be placed in the world.
   */
  entity: string;
  dispense_on?: DispenseOn;
  use_on?: UseOn;
}
/**
 * UNDOCUMENTED.
 */
export interface DispenseOn1 {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface UseOn1 {
  [k: string]: unknown;
}
