/**
 * behavior/worldgen/structure_sets/format/minecraft.structure_set.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.319Z
 */

/**
 * Randomness algorithm used when placing structures.
 */
export type SpreadType = SpreadType1 & SpreadType2;
export type SpreadType1 = 'linear' | 'triangular';
export type SpreadType2 = string;
export type Type = 'minecraft:random_spread';
/**
 * A weighted list of Jigsaw Structure identifiers. Structures will be randomly chosen from this set during world generation.
 *
 * @minItems 1
 */
export type Structures = [
  {
    /**
     * Identifier of the Jigsaw Structure.
     */
    structure: string;
    /**
     * Weight of the Jigsaw Structure in the set. Higher weights are more likely to be selected.
     */
    weight: number;
    [k: string]: unknown;
  },
  ...{
    /**
     * Identifier of the Jigsaw Structure.
     */
    structure: string;
    /**
     * Weight of the Jigsaw Structure in the set. Higher weights are more likely to be selected.
     */
    weight: number;
    [k: string]: unknown;
  }[],
];

export interface StructureSet {
  description: Description;
  placement: Placement;
  structures: Structures;
}
/**
 * The description of this structure set.
 */
export interface Description {
  /**
   * The name of this structure set.
   */
  identifier: string;
}
/**
 * Describes where structures in the set spawn relative to one another. Currently, the only placement type supported is random_spread, which scatters structures randomly with a given separation and spacing.
 */
export interface Placement {
  /**
   * Seed used for the random generator to provide a unique scatter pattern. This is used to prevent overlap in the case where multiple structure sets use the same placement values.
   */
  salt: number;
  /**
   * Padding (in chunks) within each grid cell. Structures will not generate within the padded area.
   */
  separation: number;
  /**
   * Grid cell size (in chunks) to use when generating the structure. Structures will attempt to generate at a random position within each cell.
   */
  spacing: number;
  spread_type?: SpreadType;
  type: Type;
}
