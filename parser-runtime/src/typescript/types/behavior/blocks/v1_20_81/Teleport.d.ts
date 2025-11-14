/**
 * behavior/blocks/format/events/teleport.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.138Z
 */

/**
 * Origin destination of the teleport.
 */
export type Destination = [] | [number] | [number, number] | [number, number, number];
/**
 * Maximum range the target can teleport relative to the origin destination.
 */
export type MaximumRange = [] | [number] | [number, number] | [number, number, number];

/**
 * Teleport target randomly around destination point.
 */
export interface Teleport {
  /**
   * Determines if the teleport avoids putting the target in water.
   */
  avoid_water?: boolean;
  destination?: Destination;
  /**
   * Determines if the teleport places the target on a block.
   */
  land_on_block?: boolean;
  max_range?: MaximumRange;
  /**
   * The target context to execute against.
   */
  target?: string;
}
