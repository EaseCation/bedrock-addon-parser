/**
 * resource/particles/components/emitter_lifetime_expression.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.953Z
 */

/**
 * When the expression is non-zero, the emitter will emit particles. Evaluated every frame
 */
export type ActivationExpression = string | number;
/**
 * Emitter will expire if the expression is non-zero. Evaluated every frame
 */
export type ExpirationExpression = string | number;

/**
 * UNDOCUMENTED.
 */
export interface EmitterRateManualComponent1100 {
  activation_expression?: ActivationExpression;
  expiration_expression?: ExpirationExpression;
}
