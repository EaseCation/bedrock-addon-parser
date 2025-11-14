/**
 * behavior/blocks/format/components/liquid_detection.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.425Z
 */

/**
 * The type of liquid this detection rule is for.
 */
export type LiquidType = 'water';
/**
 * How the block reacts to flowing water. Must be one of the following options:
 * "blocking" - The default value for this field. The block stops the liquid from flowing.
 * "broken" - The block is destroyed completely.
 * "popped" - The block is destroyed and its item is spawned.
 * "no_reaction" - The block is unaffected; visually, the liquid will flow through the block.
 */
export type OnLiquidTouches = 'blocking' | 'broken' | 'popped' | 'no_reaction';
/**
 * When a block contains a liquid, controls the directions in which the liquid can't flow out from the block. Also controls the directions in which a block can stop liquid flowing into it if no_reaction is set for the on_liquid_touches field. The default is an empty list; this means that liquid can flow out of all directions by default.
 */
export type StopsLiquidFlowingFromDirection = (
  | 'up'
  | 'down'
  | 'north'
  | 'south'
  | 'east'
  | 'west'
  | 'side'
  | 'all'
)[];

/**
 * The definitions for how a block behaves when detecting liquid. Only one rule definition is allowed per liquid type - if multiple are specified, the first will be used and the rest will be ignored.
 * Experimental toggles required: Upcoming Creator Features
 */
export interface LiquidDetection {
  detection_rules?: DefinitionRule[];
}
/**
 * The definition rule that specifies the behavior for one liquid type.
 */
export interface DefinitionRule {
  /**
   * Whether this block can contain the liquid. For example, if the liquid type is water, this means the block can be waterlogged.
   */
  can_contain_liquid?: boolean;
  liquid_type?: LiquidType;
  on_liquid_touches?: OnLiquidTouches;
  stops_liquid_flowing_from_direction?: StopsLiquidFlowingFromDirection;
}
