/**
 * behavior/entities/format/components/transformation.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:02.041Z
 */

/**
 * Sound to play when the transformation starts.
 */
export type BeginTransformSound = string;
/**
 * Defines the properties of the delay for the transformation.
 */
export type Delay =
  | number
  | {
      /**
       * Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0
       */
      block_assist_chance?: number;
      /**
       * Chance that, once a block is found, will help speed up the transformation.
       */
      block_chance?: number;
      /**
       * Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius
       */
      block_max?: number;
      /**
       * Distance in Blocks that the entity will search for blocks that can help the transformation.
       */
      block_radius?: number;
      /**
       * List of blocks that can help the transformation of this entity.
       */
      block_types?: BlockceptionMinecraftBlockIdentifier[];
      /**
       * Time in seconds before the entity transforms.
       */
      value?: number;
      [k: string]: unknown;
    };
/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * Sound to play when the entity is done transforming.
 */
export type BlockceptionMinecraftGeneralSoundEvent = string;

/**
 * Defines an entity's transformation from the current definition into another
 */
export interface Transformation {
  add?: Add;
  begin_transform_sound?: BeginTransformSound;
  delay?: Delay;
  /**
   * Cause the entity to drop all equipment upon transformation.
   */
  drop_equipment?: boolean;
  /**
   * Cause the entity to drop all items in inventory upon transformation.
   */
  drop_inventory?: boolean;
  /**
   * Entity Definition that this entity will transform into.
   */
  into?: string;
  /**
   * If this entity has trades and has leveled up, it should maintain that level after transformation.
   */
  keep_level?: boolean;
  /**
   * If this entity is owned by another entity, it should remain owned after transformation.
   */
  keep_owner?: boolean;
  /**
   * Cause the entity to keep equipment after going through transformation.
   */
  preserve_equipment?: boolean;
  transformation_sound?: BlockceptionMinecraftGeneralSoundEvent;
}
/**
 * List of components to add to the entity after the transformation.
 */
export interface Add {
  /**
   * Names of component groups to add.
   */
  component_groups?: string[];
}
