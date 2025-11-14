/**
 * resource/particles/components/emitter_initialization.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.807Z
 */

/**
 * This is run once at emitter startup.
 */
export type MolangString180 = string;
/**
 * This is run once per emitter update.
 */
export type PerUpdateExpression = string;

/**
 * This component allows the emitter to run some Molang at creation, primarily to populate any Molang variables that get used later.
 */
export interface EmitterInitializationComponentFor1100 {
  creation_expression?: MolangString180;
  per_update_expression?: PerUpdateExpression;
}
