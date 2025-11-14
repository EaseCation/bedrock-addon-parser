/**
 * behavior/worldgen/processors/format/processors/minecraft.capped.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.343Z
 */

export type ProcessorType = 'minecraft:rule';
export type Type = 'minecraft:passthrough';
export type Type1 = 'minecraft:append_loot';
export type PredicateType = 'minecraft:always_true';
export type PredicateType1 = 'minecraft:block_match';
export type PredicateType2 = 'minecraft:random_block_match';
export type PredicateType3 = 'minecraft:tag_match';
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
export type Axis = 'x' | 'y' | 'z';
export type PredicateType4 = 'minecraft:axis_aligned_linear_pos';
export type Rules = Rule1[];
export type Blocks = string[];
export type ProcessorType1 = 'minecraft:block_ignore';
export type ProcessorType2 = 'minecraft:protected_blocks';
export type Type2 = 'constant';
export type Type3 = 'uniform';
export type ProcessorType3 = 'minecraft:capped';

export interface Capped {
  delegate: Rule | BlockIgnore | ProtectedBlocks;
  limit: number | ConstantInteger | UniformInteger;
  processor_type: ProcessorType3;
  [k: string]: unknown;
}
export interface Rule {
  processor_type: ProcessorType;
  rules: Rules;
}
export interface Rule1 {
  block_entity_modifier?: Passthrough | AppendLoot;
  input_predicate?: AlwaysTrue | BlockMatch | RandomBlockMatch | TagMatch;
  location_predicate?: AlwaysTrue | BlockMatch | RandomBlockMatch | TagMatch;
  output_state:
    | BlockceptionMinecraftBlockIdentifier
    | {
        name?: BlockceptionMinecraftBlockIdentifier;
        states?: {
          [k: string]: boolean | number | string;
        };
      };
  position_predicate?: AlwaysTrue | AxisAlignedLinear;
  [k: string]: unknown;
}
export interface Passthrough {
  type: Type;
}
export interface AppendLoot {
  loot_table: string;
  type: Type1;
}
export interface AlwaysTrue {
  predicate_type: PredicateType;
}
export interface BlockMatch {
  block: string;
  predicate_type: PredicateType1;
  [k: string]: unknown;
}
export interface RandomBlockMatch {
  block: string;
  predicate_type: PredicateType2;
  probability: number;
  [k: string]: unknown;
}
export interface TagMatch {
  predicate_type: PredicateType3;
  tag: string;
  [k: string]: unknown;
}
export interface AxisAlignedLinear {
  axis?: Axis;
  max_chance?: number;
  max_dist?: number;
  min_chance?: number;
  min_dist?: number;
  predicate_type: PredicateType4;
  [k: string]: unknown;
}
export interface BlockIgnore {
  blocks: Blocks;
  processor_type: ProcessorType1;
  [k: string]: unknown;
}
export interface ProtectedBlocks {
  processor_type: ProcessorType2;
  value: string;
  [k: string]: unknown;
}
export interface ConstantInteger {
  type: Type2;
  value: number;
}
export interface UniformInteger {
  max_inclusive: number;
  min_inclusive: number;
  type: Type3;
  [k: string]: unknown;
}
