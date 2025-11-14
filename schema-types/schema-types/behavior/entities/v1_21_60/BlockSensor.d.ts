/**
 * behavior/entities/format/components/block_sensor.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.052Z
 */

/**
 * A minecraft block identifier.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * List of blocks that will trigger the sensor.
 */
export type BlockList = BlockceptionMinecraftBlockIdentifier[];
/**
 * Blocks that will trigger the component when broken and what event will trigger.
 */
export type OnBreak = OnBlockBroken[];
export type Filters =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec1;
/**
 * All tests in an `all_of` group must pass in order for the group to pass.
 */
export type AllOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * One or more tests in an `any_of` group must pass in order for the group to pass.
 */
export type AnyOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
/**
 * All tests in a `none_of` group must fail in order for the group to pass.
 */
export type NoneOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec1 =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * List of sources that break the block to listen for. If none are specified, all block breaks will be detected.
 */
export type Sources = Filters[];

/**
 * Fires off a specified event when a block in the block list is broken within the sensor range.
 */
export interface BlockSensor {
  /**
   * The maximum radial distance in which a specified block can be detected. The biggest radius is 32.0.
   */
  sensor_radius?: number;
  on_break?: OnBreak;
  sources?: Sources;
}
/**
 * Event to run when a block breaks.
 */
export interface OnBlockBroken {
  block_list?: BlockList;
  /**
   * Event to run when a block breaks.
   */
  on_block_broken?: string;
}
