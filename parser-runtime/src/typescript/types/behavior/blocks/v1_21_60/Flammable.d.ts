/**
 * behavior/blocks/format/components/flammable.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.271Z
 */

/**
 * Describes the flammable properties for this block. If set to true, default values are used. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.
 */
export type Flammable =
  | boolean
  | {
      /**
       * A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire
       */
      catch_chance_modifier?: number;
      /**
       * A modifier affecting the chance that this block will be destroyed by flames when on fire.
       */
      destroy_chance_modifier?: number;
    };
