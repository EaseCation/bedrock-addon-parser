/**
 * behavior/entities/format/components/npc.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.460Z
 */

/**
 * UNDOCUMENTED.
 */
export type Translate = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Scale = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Translate1 = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type Scale1 = [] | [number] | [number, number] | [number, number, number];
/**
 * UNDOCUMENTED.
 */
export type SkinList = Skin[];

/**
 * Sets this entity as an NPC
 */
export interface Npc {
  npc_data?: NpcData;
}
/**
 * The data belonging to this npc.
 */
export interface NpcData {
  portrait_offsets?: PortraitOffsets;
  picker_offsets?: PickerOffsets;
  skin_list?: SkinList;
}
/**
 * UNDOCUMENTED.
 */
export interface PortraitOffsets {
  translate?: Translate;
  scale?: Scale;
}
/**
 * UNDOCUMENTED.
 */
export interface PickerOffsets {
  translate?: Translate1;
  scale?: Scale1;
}
/**
 * UNDOCUMENTED.
 */
export interface Skin {
  /**
   * UNDOCUMENTED.
   */
  variant?: number;
  /**
   * UNDOCUMENTED.
   */
  mark_variant?: number;
}
