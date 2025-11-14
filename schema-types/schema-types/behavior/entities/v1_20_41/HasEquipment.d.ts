/**
 * behavior/entities/filters/filters/has_equipment.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:36.620Z
 */

/**
 * Tests for the presence of a named item in the designated slot of the subject entity.
 */
export type Test = 'has_equipment';
/**
 * The equipment location to test.
 */
export type Domain = 'any' | 'inventory' | 'armor' | 'feet' | 'hand' | 'head' | 'leg' | 'torso';
/**
 * The comparison to apply with `value`.
 */
export type Operator = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';
/**
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * The item name to look for.
 */
export type BlockceptionMinecraftItemIdentifier = string;

/**
 * Tests for the presence of a named item in the designated slot of the subject entity.
 */
export interface HasEquipment {
  test?: Test;
  domain?: Domain;
  operator?: Operator;
  subject?: Subject;
  value: BlockceptionMinecraftItemIdentifier;
  [k: string]: unknown;
}
