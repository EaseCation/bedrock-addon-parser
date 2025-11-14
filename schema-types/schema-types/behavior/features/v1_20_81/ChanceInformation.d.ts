/**
 * behavior/features/types/chance_information.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.587Z
 */

/**
 * Chance of something happening represented either as a fraction or a percentage.
 */
export type ChanceInformation =
  | {
      /**
       * UNDOCUMENTED.
       */
      numerator?: number;
      /**
       * UNDOCUMENTED.
       */
      denominator?: number;
      [k: string]: unknown;
    }
  | number;
