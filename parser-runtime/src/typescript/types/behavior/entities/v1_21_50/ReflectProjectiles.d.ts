/**
 * behavior/entities/format/components/reflect_projectiles.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:53.583Z
 */

/**
 * A Molang expression defining the angle in degrees to add to the projectile's y axis rotation.
 */
export type AzimuthAngle = string | number;
/**
 * A Molang expression defining the angle in degrees to add to the projectile's x axis rotation.
 */
export type ElevationAngle = string | number;
/**
 * An array of strings defining the types of projectiles that are reflected when they hit the entity.
 */
export type ReflectedProjectiles = string[];
/**
 * A Molang expression defining the velocity scaling of the reflected projectile. Values below 1 decrease the projectile's velocity, and values above 1 increase it.
 */
export type RefelctionScale = string | number;

/**
 * [EXPERIMENTAL] Allows an entity to reflect projectiles.
 */
export interface ReflectProjectiles {
  azimuth_angle?: AzimuthAngle;
  elevation_angle?: ElevationAngle;
  reflected_projectiles?: ReflectedProjectiles;
  reflection_scale?: RefelctionScale;
  /**
   * A string defining the name of the sound event to be played when a projectile is reflected. "reflect" unless specified.
   */
  reflection_sound?: string;
}
