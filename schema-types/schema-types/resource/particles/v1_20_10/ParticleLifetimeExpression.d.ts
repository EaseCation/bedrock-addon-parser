/**
 * resource/particles/components/particle_lifetime_expression.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:31.911Z
 */

/**
 * This expression makes the particle expire when true (non-zero), The float/expr is evaluated once per particle, evaluated every frame.
 */
export type ExpirationExpression = string | number;
/**
 * Alternate way to express lifetime, particle will expire after this much time, evaluated once.
 */
export type MaximumLifetime = string | number;

/**
 * UNDOCUMENTED:.
 */
export interface ParticleLifetimeExpressionComponentFor1100 {
  expiration_expression?: ExpirationExpression;
  max_lifetime?: MaximumLifetime;
}
