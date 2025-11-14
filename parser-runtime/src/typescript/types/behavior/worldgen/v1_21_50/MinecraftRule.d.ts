/**
 * behavior/worldgen/processors/format/processors/minecraft.rule.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.543Z
 */

export type ProcessorType = 'minecraft:rule';
export type Type = 'minecraft:passthrough';
export type Type1 = 'minecraft:append_loot';
export type PredicateType = 'minecraft:always_true';
export type PredicateType1 = 'minecraft:block_match';
export type PredicateType2 = 'minecraft:random_block_match';
export type PredicateType3 = 'minecraft:tag_match';
export type BlockSpecifier =
  | BlockceptionMinecraftBlockIdentifier
  | {
      name?: BlockceptionMinecraftBlockIdentifier;
      states?: {
        [k: string]: boolean | number | string;
      };
    };
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
export type Axis = 'x' | 'y' | 'z';
export type PredicateType4 = 'minecraft:axis_aligned_linear_pos';
export type Rules = Rule1[];

export interface Rule {
  processor_type: ProcessorType;
  rules: Rules;
}
export interface Rule1 {
  block_entity_modifier?: Passthrough | AppendLoot;
  input_predicate?: AlwaysTrue | BlockMatch | RandomBlockMatch | TagMatch;
  location_predicate?: AlwaysTrue | BlockMatch | RandomBlockMatch | TagMatch;
  output_state: BlockSpecifier;
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
