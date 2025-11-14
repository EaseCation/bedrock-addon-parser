/**
 * behavior/entities/format/components/rail_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.213Z
 */

/**
 * Event to call when the rail is activated.
 */
export type OnActivate =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target;
      [k: string]: unknown;
    };
/**
 * The target of the event.
 */
export type Target =
  | 'baby'
  | 'block'
  | 'damager'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';
/**
 * Event to call when the rail is deactivated.
 */
export type OnDeactivate =
  | string
  | {
      /**
       * The event to fire.
       */
      event?: string;
      target?: Target;
      [k: string]: unknown;
    };

/**
 * Defines the behavior of the entity when the rail gets activated or deactivated.
 */
export interface RailSensor {
  /**
   * If true, on tick this entity will trigger its on_deactivate behavior.
   */
  check_block_types?: boolean;
  /**
   * If true, this entity will eject all of its riders when it passes over an activated rail.
   */
  eject_on_activate?: boolean;
  /**
   * If true, this entity will eject all of its riders when it passes over a deactivated rail.
   */
  eject_on_deactivate?: boolean;
  on_activate?: OnActivate;
  on_deactivate?: OnDeactivate;
  /**
   * If true, command blocks will start ticking when passing over an activated rail.
   */
  tick_command_block_on_activate?: boolean;
  /**
   * If false, command blocks will stop ticking when passing over a deactivated rail.
   */
  tick_command_block_on_deactivate?: boolean;
}
