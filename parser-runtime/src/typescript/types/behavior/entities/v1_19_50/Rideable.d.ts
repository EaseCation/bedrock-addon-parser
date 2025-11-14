/**
 * behavior/entities/format/components/rideable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:23.754Z
 */

/**
 * List of entities that can ride this entity.
 */
export type FamilyTypes = string[];
/**
 * The list of positions and number of riders for each position for entities riding this entity.
 */
export type Seats = SeatsSpec | SeatsSpec1[];
/**
 * Position of this seat relative to this entity's position.
 */
export type VectorOf3Items = [] | [number] | [number, number] | [number, number, number];
/**
 * Offset to rotate riders by.
 */
export type MolangNumber = string | number;

/**
 * Determines whether this entity can be ridden. Allows specifying the different seat positions and quantity.
 */
export interface Rideable {
  /**
   * The seat that designates the driver of the entity.
   */
  controlling_seat?: number;
  /**
   * If true, this entity can't be interacted with if the entity interacting with it is crouching.
   */
  crouching_skip_interact?: boolean;
  family_types?: FamilyTypes;
  /**
   * The text to display when the player can interact with the entity when playing with Touch-screen controls.
   */
  interact_text?: string;
  /**
   * If true, this entity will pull in entities that are in the correct family_types into any available seats.
   */
  pull_in_entities?: boolean;
  /**
   * If true, this entity will be picked when looked at by the rider.
   */
  rider_can_interact?: boolean;
  /**
   * The number of entities that can ride this entity at the same time.
   */
  seat_count?: number;
  seats?: Seats;
}
export interface SeatsSpec {
  /**
   * Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit
   */
  lock_rider_rotation?: number;
  /**
   * Defines the maximum number of riders that can be riding this entity for this seat to be valid.
   */
  max_rider_count?: number;
  /**
   * Defines the minimum number of riders that need to be riding this entity before this seat can be used.
   */
  min_rider_count?: number;
  position?: VectorOf3Items;
  rotate_rider_by?: MolangNumber;
}
export interface SeatsSpec1 {
  /**
   * Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit
   */
  lock_rider_rotation?: number;
  /**
   * Defines the maximum number of riders that can be riding this entity for this seat to be valid.
   */
  max_rider_count?: number;
  /**
   * Defines the minimum number of riders that need to be riding this entity before this seat can be used.
   */
  min_rider_count?: number;
  position?: VectorOf3Items;
  rotate_rider_by?: MolangNumber;
}
