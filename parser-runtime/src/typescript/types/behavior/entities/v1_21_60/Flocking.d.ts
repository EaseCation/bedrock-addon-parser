/**
 * behavior/entities/format/components/flocking.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.698Z
 */

/**
 * Allows entities to flock in groups in water or not.
 */
export interface Flocking {
  /**
   * The amount of blocks away the entity will look at to push away from.
   */
  block_distance?: number;
  /**
   * The weight of the push back away from blocks.
   */
  block_weight?: number;
  /**
   * The amount of push back given to a flocker that breaches out of the water.
   */
  breach_influence?: number;
  /**
   * The threshold in which to start applying cohesion.
   */
  cohesion_threshold?: number;
  /**
   * The weight applied for the cohesion steering of the flock.
   */
  cohesion_weight?: number;
  /**
   * The weight on which to apply on the goal output.
   */
  goal_weight?: number;
  /**
   * Determines the high bound amount of entities that can be allowed in the flock.
   */
  high_flock_limit?: number;
  /**
   * Tells the Flocking Component if the entity exists in water.
   */
  in_water?: boolean;
  /**
   * The area around the entity that allows others to be added to the flock.
   */
  influence_radius?: number;
  /**
   * The distance in which the flocker will stop applying cohesion.
   */
  innner_cohesion_threshold?: number;
  /**
   * The percentage chance between 0-1 that a fish will spawn and not want to join flocks. Invalid values will be capped at the end points.
   */
  loner_chance?: number;
  /**
   * Determines the low bound amount of entities that can be allowed in the flock.
   */
  low_flock_limit?: number;
  /**
   * Tells the flockers that they can only match similar entities that also match the variant, mark variants, and color data of the other potential flockers.
   */
  match_variants?: boolean;
  /**
   * The Maximum height allowable in the air or water.
   */
  max_height?: number;
  /**
   * The Minimum height allowable in the air or water.
   */
  min_height?: number;
  /**
   * The distance that is determined to be to close to another flocking and to start applying separation.
   */
  separation_threshold?: number;
  /**
   * The weight applied to the separation of the flock.
   */
  separation_weight?: number;
  /**
   * Tells the flockers that they will follow flocks based on the center of mass.
   */
  use_center_of_mass?: boolean;
}
