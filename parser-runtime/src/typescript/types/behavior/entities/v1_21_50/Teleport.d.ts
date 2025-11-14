/**
 * behavior/entities/format/components/teleport.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.463Z
 */

/**
 * Entity will teleport to a random position within the area defined by this cube.
 */
export type RandomTeleportCube = [] | [number] | [number, number] | [number, number, number];

/**
 * Defines an entity's teleporting behavior.
 */
export interface Teleport {
  /**
   * Modifies the chance that the entity will teleport if the entity is in darkness.
   */
  dark_teleport_chance?: number;
  /**
   * Modifies the chance that the entity will teleport if the entity is in daylight.
   */
  light_teleport_chance?: number;
  /**
   * Maximum amount of time in seconds between random teleports.
   */
  max_random_teleport_time?: number;
  /**
   * Minimum amount of time in seconds between random teleports.
   */
  min_random_teleport_time?: number;
  random_teleport_cube?: RandomTeleportCube;
  /**
   * If true, the entity will teleport randomly.
   */
  random_teleports?: boolean;
  /**
   * Maximum distance the entity will teleport when chasing a target.
   */
  target_distance?: number;
  /**
   * The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%
   */
  target_teleport_chance?: number;
}
