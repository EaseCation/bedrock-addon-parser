/**
 * behavior/entities/format/components/custom_hit_test.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.692Z
 */

/**
 * The offset from the entity's anchor where the hitbox will spawn.
 */
export type Pivot = [] | [number] | [number, number] | [number, number, number];
/**
 * Defines a hitbox size and pivot to test against.
 */
export type Hitboxes = Hitbox[];

/**
 * List of hitboxes for melee and ranged hits against the entity.
 */
export interface CustomHitTest {
  hitboxes?: Hitboxes;
}
/**
 * Defines a hitbox size and pivot to test against.
 */
export interface Hitbox {
  /**
   * Height of the hitbox in blocks. A negative value will be assumed to be 0.
   */
  width?: number;
  /**
   * Width and Depth of the hitbox in blocks. A negative value will be assumed to be 0.
   */
  height?: number;
  pivot?: Pivot;
}
