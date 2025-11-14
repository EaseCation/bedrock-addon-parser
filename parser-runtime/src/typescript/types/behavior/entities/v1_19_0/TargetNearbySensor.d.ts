/**
 * behavior/entities/format/components/target_nearby_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:10.159Z
 */

/**
 * Event to call when an entity gets in the inside range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export type OnInsideRange =
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
 * Event to call when an entity gets in the outside range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export type OnOutsideRange =
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
 * Event to call when an entity exits visual range. Can specify `event` for the name of the event and `target` for the target of the event
 */
export type OnVisionLostInsideRange =
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
 * Defines the entity's range within which it can see or sense other entities to target them.
 */
export interface TargetNearbySensor {
  /**
   * Whether the other entity needs to be visible to trigger `inside` events.
   */
  must_see?: boolean;
  /**
   * Maximum distance in blocks that another entity will be considered in the `inside` range.
   */
  inside_range?: number;
  on_inside_range?: OnInsideRange;
  on_outside_range?: OnOutsideRange;
  on_vision_lost_inside_range?: OnVisionLostInsideRange;
  /**
   * Maximum distance in blocks that another entity will be considered in the `outside` range.
   */
  outside_range?: number;
}
